import { PersistedState } from 'runed';

/**
 * Favorites store using runed PersistedState
 * Data is automatically synced to localStorage and persists across page reloads
 */

// Persisted state for favorite product IDs
// We store full product objects to have all data available on favorites page
const favoritesState = new PersistedState('favorites', []);

/**
 * Get list of favorite products
 * @returns {Array} Array of favorite product objects
 */
export function getFavorites() {
    return favoritesState.current;
}

/**
 * Check if a product is in favorites
 * @param {string|number} productId - Product ID to check
 * @returns {boolean} True if product is in favorites
 */
export function isFavorite(productId) {
    return favoritesState.current.some((item) => item.id === productId);
}

/**
 * Add product to favorites
 * @param {Object} product - Product object with id, name, image, price, etc.
 */
export function addToFavorites(product) {
    if (!isFavorite(product.id)) {
        favoritesState.current = [...favoritesState.current, product];
    }
}

/**
 * Remove product from favorites
 * @param {string|number} productId - Product ID to remove
 */
export function removeFromFavorites(productId) {
    favoritesState.current = favoritesState.current.filter((item) => item.id !== productId);
}

/**
 * Toggle product in favorites (add if not present, remove if present)
 * @param {Object} product - Product object with id, name, image, price, etc.
 */
export function toggleFavorite(product) {
    if (isFavorite(product.id)) {
        removeFromFavorites(product.id);
    } else {
        addToFavorites(product);
    }
}

/**
 * Clear all favorites
 */
export function clearFavorites() {
    favoritesState.current = [];
}

/**
 * Get count of favorites
 * @returns {number} Number of items in favorites
 */
export function getFavoritesCount() {
    return favoritesState.current.length;
}

// Export the reactive state for components that need to subscribe to changes
export { favoritesState };
