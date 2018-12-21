import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync("../.env")) {
  console.log("Using .env file to supply config environment variables");
  dotenv.config({ path: "../.env" });
} else {
  console.log(
    "No .env file. Create an .env file to supply config environment variables"
  );
}

// env is default to "development" unless env is specified
let node_env;
if (process.env.NODE_ENV) {
  node_env = process.env.NODE_ENV;
} else {
  node_env = "development";
}
const NODE_ENV = node_env;

const { JWT_SECRET } = process.env;

const { SERVICE_USER_NAME } = process.env;
const { SERVICE_USER_HOST } = process.env;
const { SERVICE_USER_URL } = process.env;
const { SERVICE_USER_PORT } = process.env;
const { SERVICE_MOVIE_PSQL_DB_NAME } = process.env;
const { SERVICE_MOVIE_PSQL_DB_HOST } = process.env;
const { SERVICE_MOVIE_PSQL_DB_USER } = process.env;
const { SERVICE_MOVIE_PSQL_DB_PASS } = process.env;

module.exports = {
  NODE_ENV,
  JWT_SECRET,
  SERVICE_USER_NAME,
  SERVICE_USER_HOST,
  SERVICE_USER_URL,
  SERVICE_USER_PORT,
  SERVICE_MOVIE_PSQL_DB_NAME,
  SERVICE_MOVIE_PSQL_DB_HOST,
  SERVICE_MOVIE_PSQL_DB_USER,
  SERVICE_MOVIE_PSQL_DB_PASS
};
