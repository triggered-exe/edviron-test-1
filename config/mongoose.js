const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on("connected", () => {
    console.log("Connected to MongoDB");
  });
  
  db.on("error", (error) => {
    console.error("MongoDB connection error:", error);
  });

module.exports = db;
