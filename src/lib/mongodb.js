// @ts-nocheck

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const connect = async () => {
  const uri = process.env.MONGODB_URL;
  if (!uri) {
    throw new Error("MONGODB_URL is not defined in the environment variables.");
  }

  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(uri, {});
    console.log("Mongo Connection successfully established.");
  } catch (error) {
    throw new Error("Error connecting to Mongoose: " + error.message);
  }
};

export default connect;
