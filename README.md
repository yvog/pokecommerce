# Pokecommerce

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Technologies

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- GraphQL
  - graphql-codegen (with near-operation-file-preset)
  - graphql-request
- PokéAPI (GraphQL V1 Beta)
- Prettier, ESLint, Commitlint
- Deployed on Vercel

## Remarks

- I've never used Tailwind CSS before, in this project I'm experimenting with it.
- I've also never worked with React-Aria-Components before, but I'm known with the concepts.

## Development

1. First, creat a local .env file based on `.env.example`.

2. Then, generate the GraphQL types:

```bash
npm run codegen
```

3. Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
