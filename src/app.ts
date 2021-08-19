import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Keep playing the music')
});

app.listen(port, () => {
  console.log('listening music on ' + port);
})

