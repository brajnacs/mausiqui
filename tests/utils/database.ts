import {connect as connection, disconnect as disconnection} from 'mongoose';

function connect() {
  return connection(`${process.env.MONGO_URI}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

function disconnect() {
  return disconnection();
}

export {connect, disconnect}
