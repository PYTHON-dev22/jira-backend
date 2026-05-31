// Database connection setup
// Replace this with your actual DB (MongoDB, PostgreSQL, etc.)
const connectDB = async () => {
  // Example with MongoDB:
  // const mongoose = require("mongoose");
  // await mongoose.connect(process.env.MONGO_URI);
  console.log("Database connected");
};

module.exports = connectDB;
