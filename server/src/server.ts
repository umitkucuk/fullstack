import * as express from "express";
import { ApolloServer } from "apollo-server-express";
import * as helmet from "helmet";
import * as cors from "cors";
import * as session from "express-session";
import * as mongoose from "mongoose";
(<any>mongoose).Promise = require("bluebird");
import * as mongoSessionStore from "connect-mongo";
import * as errorhandler from "errorhandler";

import config from "./config/app.config";
import typeDefs from "./graphql/typedefs";
import resolvers from "./graphql/resolvers";

const PORT = config.PORT || 8000;

const app = express();

app.use(helmet());

mongoose
  .connect(config.MONGO_URI, { useCreateIndex: true, useNewUrlParser: true })
  .then(() => console.log("Connection succesful to DB!"))
  .catch(err => console.log(err));

// Error Handler
if (config.NODE_ENV === "development") {
  app.use(errorhandler());
}

// Cors Middleware Options
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};

const MongoStore = mongoSessionStore(session);

app.use(
  session({
    name: "sid",
    secret: config.NODE_ENV === "production" ? config.SESSION_SECRET : "secret",
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 14 * 24 * 60 * 60
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 14 * 24 * 60 * 60 * 1000
    }
  })
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({
    req,
    res
  }),
  playground: {
    settings: {
      "editor.theme": "dark",
      "request.credentials": "include"
    }
  }
});

server.applyMiddleware({ app, cors: corsOptions });

app.listen(PORT, () =>
  console.log(
    `🚀  Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
);
