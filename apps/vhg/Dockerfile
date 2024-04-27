# Install dependencies only when needed
FROM docker.io/node:lts-alpine as dependencies

# ARG CONTAINER_CONTEXT=dist/apps/vhg
# ARG CONTAINER_CONTEXT=./


# RUN echo "Container context for dependencies: $CONTAINER_CONTEXT"

RUN apk add --no-cache libc6-compat
RUN apk add g++ make py3-pip
WORKDIR /usr/src/app
COPY ./dist/apps/vhg/package.json ./
COPY ./prisma ./prisma
RUN npm install --omit=dev --legacy-peer-deps
# Keep the prisma version in sync the @prisma/client dependency's version
RUN npm install -g prisma@5.3.1
RUN prisma generate

# Production image, copy all the files and run next
FROM docker.io/node:lts-alpine as runner

ARG CONTAINER_CONTEXT=dist/apps/vhg

RUN echo "Container context for runner: $CONTAINER_CONTEXT"

RUN apk add --no-cache dumb-init

ENV VERCEL_URL localhost:3000
# TODO: Check if this is being used
ENV NODE_ENV production
# TODO: Check if this is being used
ENV PORT 3000
# TODO: Check if this is being used
ENV HOST 0.0.0.0
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /usr/src/app

# Copy installed dependencies from dependencies stage
COPY --from=dependencies /usr/src/app/node_modules ./node_modules

# Copy built application files
COPY --from=dependencies /usr/src/app/package.json ./package.json
COPY $CONTAINER_CONTEXT/public ./public
COPY $CONTAINER_CONTEXT/.next ./.next

# Run the application under "node" user by default
RUN chown -R node:node .
USER node
EXPOSE 3000

# If you are using the custom server implementation:
#CMD ["dumb-init", "node", "server/main.js"]

# If you are using the NextJS built-int server:
CMD ["dumb-init", "npm", "start"]
