import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Keep playing the music')
});

export default app;
