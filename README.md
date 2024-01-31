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
