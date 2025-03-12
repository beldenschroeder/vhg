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

## Running the App Locally with a Docker Container

The run the application locally _with_ a Docker container, ensure you are running [Docker Desktop](https://www.docker.com/products/docker-desktop/), and execute the folloing in your terminal.

```console
$docker build -t vhg .
$docker run -p 3000:3000 vhg
```

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
