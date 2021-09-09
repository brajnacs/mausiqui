import {config} from 'dotenv'
import app from './app'
import connect from './database/connection';
config();

function connectDB() {
  return connect();
}

function startExpress() {
  const port = parseInt(process.env.APP_PORT || '3000', 10);
  app.listen(port, () => 'Listening on port ' + port);
}

connectDB()
  .then(() => 'Database connected')
  .then(() => startExpress())
  .catch((err) => console.error('Failed connecting DB', err));

