#!/bin/sh

# SvelteKit Novostroy Frontend Entrypoint Script
# Reads Docker secrets and sets runtime configuration for the browser

echo "🚀 SvelteKit Novostroy Frontend starting with domain secrets resolution..."

# Read secret values for configuration
FRONTEND_URL_VALUE=""
API_BASE_URL_VALUE=""
AUTH_API_URL_VALUE=""

if [ -f "/run/secrets/frontend_url" ]; then
    FRONTEND_URL_VALUE=$(cat /run/secrets/frontend_url | tr -d '[:space:]')
    echo "✅ FRONTEND_URL set from secret: $FRONTEND_URL_VALUE"
fi

if [ -f "/run/secrets/api_base_url" ]; then
    API_BASE_URL_VALUE=$(cat /run/secrets/api_base_url | tr -d '[:space:]')
    echo "✅ API_BASE_URL set from secret: $API_BASE_URL_VALUE"
fi

if [ -f "/run/secrets/auth_api_url" ]; then
    AUTH_API_URL_VALUE=$(cat /run/secrets/auth_api_url | tr -d '[:space:]')
    echo "✅ AUTH_API_URL set from secret: $AUTH_API_URL_VALUE"
fi

# Set production defaults if no secrets provided
FINAL_API_BASE_URL="${API_BASE_URL_VALUE:-https://crud.novostroy.org/api}"
FINAL_AUTH_API_URL="${AUTH_API_URL_VALUE:-https://auth.novostroy.org/api}"
FINAL_FRONTEND_URL="${FRONTEND_URL_VALUE:-https://novostroy.org}"

# Derive GraphQL URL from API base URL (replace /api suffix with /graphql)
FINAL_GRAPHQL_URL=$(echo "$FINAL_API_BASE_URL" | sed 's|/api$|/graphql|')

# Create runtime configuration file for the browser
# This overrides build-time VITE_* variables when running in Docker
mkdir -p /app/build/client
cat > /app/build/client/config.js << EOF
window.__APP_CONFIG__ = {
    API_BASE_URL: '${FINAL_API_BASE_URL}',
    AUTH_API_URL: '${FINAL_AUTH_API_URL}',
    GRAPHQL_API_URL: '${FINAL_GRAPHQL_URL}',
    FRONTEND_URL: '${FINAL_FRONTEND_URL}'
};
EOF

# Debug: Show resolved environment variables
echo "🔍 Configuration resolved:"
echo "  API_BASE_URL:     ${FINAL_API_BASE_URL}"
echo "  AUTH_API_URL:     ${FINAL_AUTH_API_URL}"
echo "  GRAPHQL_API_URL:  ${FINAL_GRAPHQL_URL}"
echo "  FRONTEND_URL:     ${FINAL_FRONTEND_URL}"
echo "  NODE_ENV:         $NODE_ENV"

# Start SvelteKit Novostroy Frontend application
echo "🌐 Starting SvelteKit Novostroy Frontend application..."
echo "📋 Command to execute: $@"

# Execute the command with proper signal handling
exec "$@"
