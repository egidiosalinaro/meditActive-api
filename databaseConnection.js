const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
require('dotenv').config();

// connecting to the database using mongoDB
let mongoConnection = null;

const connectToDB = async () => {
  try {
    let dbUrl = process.env.DB_URI;
    if (process.env.NODE_ENV === 'test') {
      mongoConnection = await MongoMemoryServer.create();
      dbUrl = mongoConnection.getUri();
    }
    const linked = await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `connected to MongoBD server with the host: ${linked.connection.host}`
    );
  } catch (err) {
    console.log(err);
  }
};

const disconnectToDB = async () => {
  try {
    await mongoose.connection.close();
    if (mongoConnection) {
      await mongoConnection.stop();
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connectToDB, disconnectToDB };
