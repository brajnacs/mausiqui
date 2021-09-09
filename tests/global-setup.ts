import {config} from 'dotenv';
import {MongoMemoryServer} from "mongodb-memory-server";
import mongoose from 'mongoose';
config();

module.exports = async() => {
  const instance = await MongoMemoryServer.create();
  const uri = instance.getUri();
  (global as any).__MONGOINSTANCE = instance;
  process.env.MONGO_URI = uri.slice(0, uri.lastIndexOf('/'));

  // The following is to make sure the database is clean before an test starts
  await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
};
