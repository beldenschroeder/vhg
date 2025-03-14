# Von Herff Gallery 

## Environment Configuration

TODO: Fill in later.

## Seeding Data for the Database

TODO: Fill in later.

## Starting the App

### Running the App Locally without a Docker Container

The run the application locally _without_ a Docker container, execute the folloing in your terminal:

```console
$npm i
$npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Running the App Locally with a Docker Container

The run the application locally _with_ a Docker container, ensure you are running [Docker Desktop](https://www.docker.com/products/docker-desktop/), and execute the folloing in your terminal.

For development environment, run

```console
$docker build -t vhg -f Dockerfile.dev .
$docker run -p 3000:3000 vhg
```

For production environment, run

```console
$docker build -t vhg -f Dockerfile.prod .
$docker run -p 3000:3000 vhg
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Run app remotely in production with GitHub Actions

Before you can deploy the app using GitHub Actions, you'll need to build part of the AWS cloud infrastructure on which its hosted. The entire infrustructuion is segmented into three layers and each is built from its own repo.

The first two layers need to be built first. After this, you'll want to build and merge this _vhg_ project into the _main_ branch. Doing so will kick off a GitHub Action that publishes the app's container into [AWS ECR](https://aws.amazon.com/ecr/). Execute these builds from each repo in the fllowing order by following their README instructions:

#### 1. Base Infrastructure

Follow the deployment instructions in the [README.md](https://github.com/beldenschroeder/vhg-infra/blob/main/README.md) for the _vhg-infra_ repo.

#### 2. Platform Infrastructure

Follow the deployment instructions in the [README.md](https://github.com/beldenschroeder/vhg-infra-platform/blob/main/README.md) for the _vhg-infra-platform_ repo.

#### 3. App Container Deployment

##### Deploy the App to Production

First check on the AWS account that will host this app if a container for the app already exists. You can determine this by going to the AWS Console and searching for "ECR". Make sure there isn't a container with the same tag as the one you're about to push up. If there is, simply remove it from the AWS Console.

Create a PR from your branch to the _main_ branch and merge it. This will kick off a GitHub Action to publish the app container to ECR.

#### 4. App Infrastructure

Follow the deployment instructions in the [README.md](https://github.com/beldenschroeder/vhg-infra-app/blob/main/README.md) for the _vhg-infra-app_ repo.

#### 5. Visit the Site

The app should now be hosted on http://vhgapp.beldenschroeder.me.

TODO: Remove this following section later.
## Vercel Info

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
