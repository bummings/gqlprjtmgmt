const express = require("express");
const colors = require("colors");
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");

const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

const port = process.env.PORT || 8000;
const app = express();

// connect to database
connectDB();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server runnin on port ${port}`));
