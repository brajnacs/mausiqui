import {config} from 'dotenv'
import express from 'express';

config();

const app = express();
const port = parseInt(process.env.APP_PORT || '3000', 10);

app.get('/', (req, res) => {
  res.send('Keep playing the music')
});

app.listen(port, () => {
  console.log('listening music on ' + port);
})

