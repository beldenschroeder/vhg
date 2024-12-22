FROM docker.io/node:20-slim AS base
RUN corepack enable pnpm

# Install dependencies only when needed.
FROM base AS deps
WORKDIR /app
COPY .npmrc package.json pnpm-lock.yaml ./
COPY ./prisma ./prisma
RUN pnpm install --frozen-lockfile --prod

# Rebuild the source code only when needed.
FROM base AS builder
ARG NODE_ENV="production"
ENV NODE_ENV=$NODE_ENV
ARG NEXT_PUBLIC_VERCEL_ENV="development"
ENV NEXT_PUBLIC_VERCEL_ENV=$NEXT_PUBLIC_VERCEL_ENV
ARG NEXT_PUBLIC_VERCEL_URL=localhost:3000
ENV NEXT_PUBLIC_VERCEL_URL=$NEXT_PUBLIC_VERCEL_URL
ENV NEXT_TELEMETRY_DISABLED=1
# TODO: Remove this once the Prisma URL is no longer needed.
ENV POSTGRES_PRISMA_URL="postgres://default:4PIVAioZE2sL@ep-misty-mouse-77177859-pooler.us-east-1.postgres.vercel-storage.com/verceldb?pgbouncer=true&connect_timeout=15"
ARG DB_NAME="vonherffgallery"
ENV DB_NAME=$DB_NAME
ARG DB_CONN_STRING="mongodb://host.docker.internal:27017/${DB_NAME}"
ENV DB_CONN_STRING=$DB_CONN_STRING
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN apt-get update -y && apt-get install -y openssl
RUN pnpm exec prisma generate
RUN pnpm exec nx build vhg

# Production image, copy all the files and run next.
FROM base AS runner
# TODO: ARG is only a build-time variable, so it might not be needed for some of these.
# ARG NODE_ENV="production"
# ENV NODE_ENV=$NODE_ENV
# ARG NEXT_PUBLIC_VERCEL_ENV="development"
# ENV NEXT_PUBLIC_VERCEL_ENV=$NEXT_PUBLIC_VERCEL_ENV
# ARG NEXT_PUBLIC_VERCEL_URL=localhost:3000
# ENV NEXT_PUBLIC_VERCEL_URL=$NEXT_PUBLIC_VERCEL_URL
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist/apps/vhg/package.json ./package.json
COPY --from=builder /app/dist/apps/vhg/public ./public
COPY --from=builder /app/dist/apps/vhg/.next ./.next

# Run the application under "node" user by default.
RUN chown -R node:node .
USER node
EXPOSE 3000
CMD ["npm", "start"]
