const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.log("err", err);
    });
};

module.exports = connectDB;
