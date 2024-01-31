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
Please refer [SWR docs](https://swr.vercel.app/) for the data fetch.

## Backend Api project

We use mongodb as the backend noSQL database.

### Mongodb docker image
You may look up mongo docker image on the [mongo dockerhub office page](https://hub.docker.com/_/mongo)

We use the docker image mongo:6-jammy as the base image.
MongoDB need several environment variables to start the container:
 * MONGO_INITDB_ROOT_USERNAME
 * MONGO_INITDB_ROOT_PASSWORD
  
Those variables specify the admin user crednetials.

Start the container
```bash 
docker run -d  --name mongo -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=<secret_pass> mongo:6-jammy 
```
Access the container mongosh
```bash
docker -it  exec <you-mongo-container-name> mongosh
```

Start the container with docker-compose

The Recommended way start mongodb is docker-compose.
Update the docker-compose.yml and then start it

```bash
docker-compose up -d
```

### Add app user and database to mongo

Start the mongosh in the container with admin credential
```bash
docker -it exec <mongodb_container> mongosh -u admin 
```

Create a new user

```mongosh
use admin;
db.createUser({
    user: 'k1'
    pwd: 'admin',
    roles: [
        { role: 'readWrite', db: 'todos'}
    ]
})
```

Test the user access to the db
```bash
docker -it exec <mongodb_container> mongosh -u app1 
```

[Mongodb and mongoose connection](https://mongoosejs.com/docs/connections.html#:~:text=You%20can%20connect%20to%20MongoDB%20with%20the%20mongoose.connect,databases%2C%20we%20recommend%20using%20127.0.0.1%20instead%20of%20localhost.)

Notes: please be careful the authSource option, in the mongoose connection , you must specify the authSource option which database you create the **k1** user.


