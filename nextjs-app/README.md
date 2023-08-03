# JUX + Next.js

Using JUX with Next.js

This example demonstrates how JUX can be used in a typical Next.js project.

⚠️ **Note: for demo purposes - running the commands below would likely break the examples provided herein.**

## Setup JUX dependencies

The `@jux/cli` and `@jux/dui` libraries are already included in the package.json.

They can be updated by running:

```bash
npm i @jux/cli @jux/dui
```

## Generated Code

The generated code is located under the `src/lib/jux` folder:

- `components.ts` - contains the generated styled components.
- `theme.ts` - contains the generated theme object.
- `fonts.ts` - contains the supported fonts, etc.

<details>
The commands used for this setup:

1. Login to the JUX server
   ```bash
   npm run jux:login
   ```
2. Pull data from JUX server and update the generated code modules.
`bash
    npm run jux:pull 
    `
</details>

## Usage examples

1. The generated theme is used in [src/app/layout.tsx](./src/app/layout.tsx):
   ```typescript jsx
   <ThemeProvider />
   ```
2. The generated components are used in [src/app/page.tsx](./src/app/page.tsx):
   ```typescript jsx
   <Jux.Button_1 />
   ```

# Next.js app

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
