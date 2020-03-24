const app = require("express")();

require("./startup/dotenv")(); // env
require("./startup/cors")(app); // enable cors
require("./startup/db")(); // db configuration
require("./startup/logger")(app); // morgan logger
require("./startup/parser")(app); // body and url-encoded parser
require("./startup/path")(app); // path
require("./startup/routes")(app); // routes

// setup port
const port = process.env.PORT || 2424;
app.listen(port, () => console.log(`Listening on port ${port}...`));
