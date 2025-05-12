const mongoose = require('mongoose');
const mongoURI = "mongodb://mongo:27017/IMS"; // Use the Docker service name 'mongo'

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log("Failed to connect to MongoDB:", error);
  }
};

module.exports = connectToMongo;
