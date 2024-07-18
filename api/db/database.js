const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Ortam değişkenlerini yükleme

let instance = null;

class Database {
  constructor() {
    if (!instance) {
      this.mongoConnection = null;
      instance = this;
    }

    return instance;
  }

  async connect() {
    try {
      const options = {
        CONNECTION_STRING: process.env.CONNECTION_STRING,
      };

      console.log("Connecting to database...");
      console.log("MongoDB URI:", options.CONNECTION_STRING); // Debug line

      let db = await mongoose.connect(options.CONNECTION_STRING, {
       
      });
      this.mongoConnection = db;
      console.log("MongoDB connected");
    } catch (error) {
      console.error("Database connection error:", error);
    }
  }
}

module.exports = Database;
