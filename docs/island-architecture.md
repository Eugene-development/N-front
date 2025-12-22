# Островная архитектура (Island Architecture)

## Что это?

Островная архитектура — подход, при котором страница состоит из статического HTML с изолированными интерактивными "островами". Каждый остров гидратируется независимо, что даёт:

- Быструю начальную загрузку (минимум JS)
- Изолированные компоненты (легче тестировать и поддерживать)
- Лучший SEO (контент рендерится на сервере)

## Структура папок

```
src/lib/
├── islands/      # Интерактивные компоненты (*Island.svelte)
├── components/   # Статические компоненты (без JS)
├── stores/       # Svelte stores для коммуникации между островами
└── utils/        # Утилиты
```

## Когда создавать остров?

**Остров нужен если компонент:**
- Реагирует на действия пользователя (клики, ввод)
- Загружает данные динамически
- Имеет внутреннее состояние
- Использует браузерные API

**Статический компонент если:**
- Только отображает данные
- Не требует интерактивности
- Контент известен на этапе SSR

## Примеры

### Остров (интерактивный)

```svelte
<!-- src/lib/islands/SearchIsland.svelte -->
<script>
  let query = '';
  let results = [];
  
  async function search() {
    const res = await fetch(`/api/search?q=${query}`);
    results = await res.json();
  }
</script>

<input bind:value={query} on:input={search} placeholder="Поиск..." />
{#each results as item}
  <div>{item.title}</div>
{/each}
```

### Статический компонент

```svelte
<!-- src/lib/components/Card.svelte -->
<script>
  export let title;
  export let image;
  export let price;
</script>

<article>
  <img src={image} alt={title} />
  <h3>{title}</h3>
  <span>{price} ₽</span>
</article>
```

### Использование на странице

```svelte
<!-- src/routes/catalog/+page.svelte -->
<script>
  import SearchIsland from '$lib/islands/SearchIsland.svelte';
  import Card from '$lib/components/Card.svelte';
  
  export let data; // из +page.server.js
</script>

<h1>Каталог</h1>

<!-- Остров с интерактивностью -->
<SearchIsland />

<!-- Статический контент -->
<div class="grid">
  {#each data.items as item}
    <Card {...item} />
  {/each}
</div>
```

## Коммуникация между островами

Острова изолированы. Для обмена данными используй:

1. **URL параметры** — для состояния, которое должно сохраняться при обновлении
2. **Руны Svelte 5** — для реактивного состояния
3. **Custom Events** — для событийной коммуникации
4. **runed PersistedState** — для персистентных данных (localStorage)

```js
// src/lib/stores/filters.svelte.js
// Используем руны Svelte 5 для глобального состояния

// Экспортируем объект с $state — свойства объекта реактивны
export const filters = $state({
  active: {},
  sortBy: null
});

export function setFilter(key, value) {
  filters.active[key] = value;
}

export function clearFilters() {
  filters.active = {};
  filters.sortBy = null;
}
```

```svelte
<!-- Использование в острове -->
<script>
  import { filters, setFilter } from '$lib/stores/filters.svelte.js';
</script>

<button onclick={() => setFilter('price', 'asc')}>
  По цене
</button>

<p>Активные фильтры: {JSON.stringify(filters.active)}</p>
```

### Персистентное состояние (runed)

Для данных, которые должны сохраняться между сессиями, используй `PersistedState` из библиотеки `runed`:

```js
// src/lib/stores/favorites.svelte.js
import { PersistedState } from 'runed';

// Автоматически сохраняется в localStorage
// Синхронизируется между вкладками
export const favorites = new PersistedState('favorites', []);

export function addFavorite(id) {
  favorites.current = [...favorites.current, id];
}

export function removeFavorite(id) {
  favorites.current = favorites.current.filter(item => item !== id);
}

export function isFavorite(id) {
  return favorites.current.includes(id);
}
```

```svelte
<!-- Использование в острове -->
<script>
  import { favorites, addFavorite, removeFavorite, isFavorite } from '$lib/stores/favorites.svelte.js';
  
  let { itemId } = $props();
</script>

<button onclick={() => isFavorite(itemId) ? removeFavorite(itemId) : addFavorite(itemId)}>
  {isFavorite(itemId) ? '❤️' : '🤍'}
</button>

<p>Всего в избранном: {favorites.current.length}</p>
```

Опции `PersistedState`:
- `storage: 'local' | 'session'` — тип хранилища (по умолчанию `'local'`)
- `syncTabs: boolean` — синхронизация между вкладками (по умолчанию `true`)

### Snapshots (состояние при навигации)

SvelteKit Snapshots сохраняют состояние страницы при навигации назад/вперёд. Полезно для форм, скролла, открытых аккордеонов и т.д.

```svelte
<!-- src/routes/catalog/+page.svelte -->
<script>
  let searchQuery = $state('');
  let scrollPosition = $state(0);

  /** @type {import('./$types').Snapshot<{ query: string, scroll: number }>} */
  export const snapshot = {
    capture: () => ({
      query: searchQuery,
      scroll: scrollPosition
    }),
    restore: (value) => {
      searchQuery = value.query;
      scrollPosition = value.scroll;
    }
  };
</script>

<input bind:value={searchQuery} placeholder="Поиск..." />
```

Когда использовать Snapshots:
- Введённый текст в поля поиска/фильтров
- Позиция скролла в списках
- Состояние раскрытых/свёрнутых элементов
- Выбранные табы

Важно: данные должны быть JSON-сериализуемыми.

## Работа с GraphQL

Используем библиотеку `graphql-request` для запросов к API.

### Настройка клиента

```js
// src/lib/api/client.js
import { GraphQLClient } from 'graphql-request';
import { PUBLIC_API_URL } from '$env/static/public';

export const client = new GraphQLClient(`${PUBLIC_API_URL}/graphql`, {
  headers: {
    // Заголовки по умолчанию
  }
});

// Клиент с авторизацией
export function getAuthClient(token) {
  return new GraphQLClient(`${PUBLIC_API_URL}/graphql`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
```

### Запросы в островах

```svelte
<!-- src/lib/islands/CatalogIsland.svelte -->
<script>
  import { client } from '$lib/api/client.js';
  import { gql } from 'graphql-request';
  
  let items = $state([]);
  let loading = $state(false);
  
  const GET_ITEMS = gql`
    query GetItems($limit: Int, $offset: Int) {
      items(limit: $limit, offset: $offset) {
        id
        title
        price
        image
      }
    }
  `;
  
  async function loadItems() {
    loading = true;
    try {
      const data = await client.request(GET_ITEMS, { limit: 20, offset: 0 });
      items = data.items;
    } finally {
      loading = false;
    }
  }
  
  $effect(() => {
    loadItems();
  });
</script>
```

### Запросы на сервере (SSR)

```js
// src/routes/catalog/+page.server.js
import { client } from '$lib/api/client.js';
import { gql } from 'graphql-request';

const GET_CATALOG = gql`
  query GetCatalog {
    catalog {
      id
      title
      price
    }
  }
`;

export async function load() {
  const data = await client.request(GET_CATALOG);
  return { items: data.catalog };
}
```

### Структура GraphQL файлов

```
src/lib/
├── api/
│   ├── client.js         # GraphQL клиент
│   └── queries/          # GraphQL запросы
│       ├── catalog.js
│       ├── auth.js
│       └── user.js
```

### Мутации

```js
// src/lib/api/queries/auth.js
import { gql } from 'graphql-request';

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;
```

```svelte
<!-- Использование в острове -->
<script>
  import { client } from '$lib/api/client.js';
  import { LOGIN } from '$lib/api/queries/auth.js';
  
  let email = $state('');
  let password = $state('');
  
  async function handleLogin() {
    const data = await client.request(LOGIN, { email, password });
    // Сохранить токен...
  }
</script>
```

## Чеклист

- [ ] Имя файла заканчивается на `Island.svelte`
- [ ] Компонент в папке `src/lib/islands/`
- [ ] Не импортирует другие острова напрямую
- [ ] Размер бандла < 50KB gzip
- [ ] Есть fallback для SSR (если нужен)
