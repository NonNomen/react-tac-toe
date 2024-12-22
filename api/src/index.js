import express from 'express';

const app = express();

app.get('/test', (req, res) => {
  res.json({ body: 'Hello World!' });
});

app.listen(9000, () => {
  console.log('Server started');
});
