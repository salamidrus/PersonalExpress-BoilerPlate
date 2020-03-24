const dotenv = require("dotenv");

module.exports = function() {
  try {
    dotenv.config();
  } catch (err) {
    throw new Error("FATAL ERROR: dotenv is not configured correctly.");
  }
};
