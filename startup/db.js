const mongoose = require("mongoose");

// setup mongodb
mongoose.Promise = global.Promise;
const mongoURI = process.env.MONGO_URI;
const mongoLocal = process.env.MONGO_LOCAL;
const mongoAtlas = process.env.MONGO_ATLAS;
const mongoOptions = {
  autoIndex: false, // Don't build indexes
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  connectTimeoutMS: 3000,
  socketTimeoutMS: 8000
};
const mongoLogOptions = {
  useUnifiedTopology: true
};

module.exports = async function() {
  if (process.env.NODE_ENV === "development") {
    mongoose.connect(mongoLocal, mongoOptions);
  } else {
    mongoose.connect(mongoURI, mongoOptions);
  }

  // disable buffer, make sure opening connection properly
  mongoose.set("bufferCommands", false);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log("Connected to mongoDB!");
  });
};
