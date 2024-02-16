# # Install dependencies only when needed
# FROM docker.io/node:lts-alpine as deps
# # Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat
# WORKDIR /usr/src/app
# COPY dist/apps/vhg/package*.json ./
# RUN apk add g++ make py3-pip
# RUN npm install --omit=dev

# # Production image, copy all the files and run next
# FROM docker.io/node:lts-alpine as runner
# RUN apk add --no-cache dumb-init
# ENV NODE_ENV production
# ENV PORT 3000
# WORKDIR /usr/src/app
# COPY --from=deps /usr/src/app/node_modules ./node_modules
# COPY --from=deps /usr/src/app/package.json ./package.json
# COPY dist/apps/vhg/public ./public
# COPY dist/apps/vhg/.next ./.next
# RUN chown -R node:node .
# USER node
# EXPOSE 3000
# # COPY --chown=node:node ./tools/scripts/entrypoints/api.sh /usr/local/bin/docker-entrypoint.sh
# # ENTRYPOINT [ "docker-entrypoint.sh" ]
# # Next.js collects completely anonymous telemetry data about general usage.
# # Learn more here: https://nextjs.org/telemetry
# # Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1
# CMD ["dumb-init", "node_modules/.bin/next", "start"]

# Install dependencies only when needed
FROM docker.io/node:lts-alpine as dependencies

RUN apk add --no-cache libc6-compat
RUN apk add g++ make py3-pip
WORKDIR /usr/src/app
# COPY package.json ./ # TODO: Uncomment to get local build of Dockerfile
COPY dist/apps/vhg/package.json ./
RUN npm install --omit=dev --legacy-peer-deps

# Production image, copy all the files and run next
FROM docker.io/node:lts-alpine as runner
RUN apk add --no-cache dumb-init

ENV NODE_ENV production
ENV PORT 3000
ENV HOST 0.0.0.0
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /usr/src/app

# Copy installed dependencies from dependencies stage
COPY --from=dependencies /usr/src/app/node_modules ./node_modules

# Copy built application files
# COPY ./ ./ # TODO: Uncomment to get local build of Dockerfile
COPY --from=dependencies /usr/src/app/package.json ./package.json
COPY dist/apps/vhg/public ./public
COPY dist/apps/vhg/.next ./next

# Run the application under "node" user by default
RUN chown -R node:node .
USER node
EXPOSE 3000

# If you are using the custom server implementation:
#CMD ["dumb-init", "node", "server/main.js"]

# If you are using the NextJS built-int server:
CMD ["dumb-init", "npm", "start"]
