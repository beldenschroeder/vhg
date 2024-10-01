# `--platform=linux/amd64` needed to resolve this issue: https://stackoverflow.com/questions/74705475/aws-ecs-exec-usr-local-bin-docker-entrypoint-sh-exec-format-error
# FROM --platform=linux/amd64 docker.io/node:lts-alpine as base
# FROM --platform=linux/amd64 docker.io/node:20-slim as base
FROM --platform=linux/amd64 docker.io/node:20-slim as base
# ENV PNPM_HOME="/usr/local/pnpm"
# ENV PNPM_HOME="/pnpm"
# ENV PATH="$PNPM_HOME:$PATH"
# RUN corepack enable
RUN corepack enable pnpm && corepack install -g pnpm@latest-9

# Install dependencies only when needed
FROM base AS deps
# RUN apk add --no-cache libc6-compat
# RUN apk add g++ make py3-pip
# WORKDIR /usr/src/app
WORKDIR /app
# TODO: Check if this should be using the root package.json instead
# COPY ./dist/apps/vhg/package.json ./
# COPY ./package.json pnpm-lock.yaml* ./
# COPY ./pnpm-lock.yaml ./
COPY .npmrc package.json pnpm-lock.yaml ./
# COPY ./package.json ./
COPY ./prisma ./prisma
# RUN npm install --omit=dev --legacy-peer-deps
# RUN npm install --omit=dev
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile
# RUN \
  # if [ -f pnpm-lock.yaml ]; then pnpm i --prod --frozen-lockfile; \
  # else echo "Lockfile not found." && exit 1; \
  # fi
# RUN pnpm fetch --prod

RUN apt-get update -y && apt-get install -y openssl
RUN pnpm install --frozen-lockfile --prod
# Keep the prisma version in sync the @prisma/client dependency's version
# RUN npm install -g prisma@5.3.1
# RUN pnpm add -g prisma@5.3.1
RUN npx prisma generate
# CMD ["npx", "prisma", "generate"]

# Rebuild the source code only when needed
FROM base AS builder
# WORKDIR /usr/src/app
WORKDIR /app
# COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

# RUN pnpm add -g nx@18.2.4
# RUN npm install -g nx@18.2.4

# RUN \
#   if [ -f pnpm-lock.yaml ]; then pnpm exec nx build vhg; \
#   else echo "Lockfile not found." && exit 1; \
#   fi
# TODO: Remove the --verbose flag
# RUN npx nx build vhg
CMD ["npx", "nx", "build", "vhg"]

# Production image, copy all the files and run next
FROM base as runner

# ARG CONTAINER_CONTEXT=dist/apps/vhg

# RUN echo "Container context for runner: $CONTAINER_CONTEXT"

# RUN apk add --no-cache dumb-init

# TODO: See if I need this
ENV NODE_ENV=production
ENV VERCEL_ENV development
ENV VERCEL_URL localhost:3000
ENV NEXT_TELEMETRY_DISABLED 1

# WORKDIR /usr/src/app
WORKDIR /app

# Copy installed dependencies from dependencies stage
# COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /app/node_modules ./node_modules

# Copy built application files
# COPY $CONTAINER_CONTEXT/package.json ./package.json
# COPY --from=builder /usr/src/app/dist/apps/vhg/package.json ./package.json
COPY --from=builder /app/dist/apps/vhg/package.json ./package.json
# COPY $CONTAINER_CONTEXT/public ./public
# COPY --from=builder /usr/src/app/dist/apps/vhg/public ./public
COPY --from=builder /app/dist/apps/vhg/public ./public
# COPY $CONTAINER_CONTEXT/.next ./.next
# COPY --from=builder /usr/src/app/dist/apps/vhg/.next ./.next
COPY --from=builder /app/dist/apps/vhg/.next ./.next

# Run the application under "node" user by default
RUN chown -R node:node .
USER node
EXPOSE 3000

# If you are using the custom server implementation:
#CMD ["dumb-init", "node", "server/main.js"]

# If you are using the NextJS built-int server:
CMD ["dumb-init", "npm", "start", "--verbose"]
