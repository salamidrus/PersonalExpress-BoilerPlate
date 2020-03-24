const express = require("express");
module.exports = function(app) {
  // body parser
  app.use(express.json());
  // url-encoded parser
  app.use(express.urlencoded({ extended: false }));
};
