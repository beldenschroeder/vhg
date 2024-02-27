# Install dependencies only when needed
FROM docker.io/node:lts-alpine as dependencies

ARG CONTAINER_CONTEXT=dist/apps/vhg

RUN echo "Container context for dependencies: $CONTAINER_CONTEXT"

RUN apk add --no-cache libc6-compat
RUN apk add g++ make py3-pip
WORKDIR /usr/src/app
COPY $CONTAINER_CONTEXT/package.json ./
RUN npm install --omit=dev --legacy-peer-deps

# Production image, copy all the files and run next
FROM docker.io/node:lts-alpine as runner

ARG CONTAINER_CONTEXT=dist/apps/vhg

RUN echo "Container context for runner: $CONTAINER_CONTEXT"

RUN apk add --no-cache dumb-init

ENV NODE_ENV production
ENV PORT 3000
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
