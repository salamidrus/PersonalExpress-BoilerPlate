const Model = require("../models/model");

exports.ModelController = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: "Tes API"
    });
  } catch (e) {
    // custom error here
    e.status(500);
    e.message = "Something Wrong";

    next(e);
  }
};
