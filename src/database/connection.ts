import {connect} from 'mongoose';

export default () => connect('mongodb://localhost:27017', {
  dbName: process.env.DB_NAME || 'mausiqui',
  user: process.env.DB_USERNAME,
  pass: process.env.DB_PASSWORD,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
