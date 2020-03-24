const errorHandler = require("../middelwares/errorHandler");
const tesRoutes = require("../routes/route");
const startupChecker = require("../utils/startupChecker");

module.exports = app => {
  app.use("/api/v1/tes", tesRoutes);
  app.use("/", startupChecker);
  app.use(errorHandler);
  app.use((req, res, next) => {
    res.status(404).send("<h1>Page Not Found</h1>");
  });
};
