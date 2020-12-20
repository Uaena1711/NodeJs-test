import mongoose from "mongoose";
import bluebird from "bluebird";
import { MONGODB_URI } from "../util/secrets";

export default () => {
  // Connect to MongoDB
  const mongoUrl = MONGODB_URI;
  console.log(mongoUrl)
  mongoose.Promise = bluebird;

  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
      console.log("connected MongoDb");
      
    })
    .catch((err) => {
      console.log(
        `MongoDB connection error. Please make sure MongoDB is running. ${err}`
      );
      // process.exit();
    });

  return mongoose.connection;
};
