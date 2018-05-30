<h1 align="center">
Fullstack Playground
</h1>

<p align="center">
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
</p>

## Table of Contents
- [Requirements](#requirements)
- [Installation for server](#Installation-for-server)
- [License](#license)

## Requirements
- [Node.js](https://nodejs.org)
- [MongoDB](https://mongodb.com)

## Directory Layout
```bash
.
├── /src/
│   ├── /src/
│   │   │   ├── /app.config.ts
│   │   ├── /graphql/
│   │   │   ├── /resolvers/
│   │   │   │   ├── /index.ts
│   │   │   │   ├── /user-resolvers.ts
│   │   │   ├── /schema.ts
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