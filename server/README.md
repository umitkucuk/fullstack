<h2 align="center">Server</h2>
### Table of Contents

- [Requirements](#requirements)
- [Installation for server](#installation-for-server)
- [License](#license)

### Requirements

- [Node.js](https://nodejs.org)
- [MongoDB](https://mongodb.com)

### Directory Layout

```bash
.
├── /server/
│   ├── src/
│   │   │   ├── config/
│   │   │   │   ├── app.config.ts
│   │   ├── graphql/
│   │   │   ├── resolvers/
│   │   │   │   ├── index.ts
│   │   │   │   ├── user-resolvers.ts
│	│	├── typedefs.ts
│   │   ├── loaders/
│   │   │   ├── index.ts
│   │   │   ├── user.ts
│   │   ├── /models/
│   │   │   ├── /user.ts
│   │   ├── /services/
│   │   │   ├── /auth.ts
│   │   ├── /server.ts
│   │
│   │
│   ├── /.env
│   ├── /nodemon.json
│   ├── /package.json
│   ├── /tsconfig.json
│   ├── /yarn.lock
```

## Installation for server

Clone the repository.

```bash
$ yarn install
```

Create an .env file inside the server folder. After that

```bash
$ yarn install
```

Then, you can start the project with:

```bash
$ yarn start
```

## License

[MIT](./LICENSE). Copyright © 2018 - present Ümit Küçük.
