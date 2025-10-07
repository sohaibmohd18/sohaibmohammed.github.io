# ---------------------------
# 1) Build the React client
# ---------------------------
FROM node:20-alpine AS client-build
WORKDIR /app/client
COPY client/package.json client/package-lock.json* ./ 
RUN npm ci
COPY client/ .
RUN npm run build

# ---------------------------
# 2) Install server deps only
# ---------------------------
FROM node:20-alpine AS server-deps
WORKDIR /app/server
COPY server/package.json server/package-lock.json* ./
RUN npm ci --omit=dev

# ---------------------------
# 3) Final runtime image
# ---------------------------
FROM node:20-alpine
WORKDIR /app

# Copy server (runtime deps already pruned)
COPY --from=server-deps /app/server/node_modules /app/server/node_modules
COPY server /app/server

# Copy built client into server to be served statically
# Make sure server/server.js serves ../client/dist
COPY --from=client-build /app/client/dist /app/client/dist

ENV NODE_ENV=production
# Port must match process.env.PORT in your .env (default 5001 in our examples)
EXPOSE 5001

# Optional: healthcheck (hitting the health endpoint)
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://localhost:5001/api/health || exit 1

# Start the server
CMD ["node", "server/server.js"]