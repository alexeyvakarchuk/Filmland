const Koa = require("koa");
const serve = require("koa-static");
const logger = require("koa-logger");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const config = {
  port: process.env.PORT,
};

const app = new Koa();

app.use(logger());
app.use(serve(`${process.cwd()}/build`));

app.listen(config.port, () => {
  console.log(`> Listening on port : ${config.port}`);
});
