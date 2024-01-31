# NX react with express project

## Project setup

Create a new react application with integrated monorepo:

```bash
pnpm create nx-workspace@latest <project-name> --preset=react --bundler=vite
```
 >  NX   First time using Nx? Check out this interactive Nx tutorial.

   https://nx.dev/react-tutorial/1-code-generation

Add the express backend

```bash
pnpm i -D @nx/express
pnpm nx g @nx/express <backend-project-name></backend-project-name> --frontendProject <frontend-Poject-name>

```

## Frontend Project 

Add tailwindcss support to the project
```bash
pnpm nx g @nx/react:setup-tailwind todo
```
NX will add tailwindcss related package and update the tailwind config file.

Use the swr for the component data fetch support
add SWR, axios, react-router-dom package
```bash
pnpm i swr axios react-router-dom
```
[SWR docs](https://swr.vercel.app/)



