const logger = require("morgan");

module.exports = app => {
  if (process.env.NODE_ENV === "development") app.use(logger("dev"));
};
