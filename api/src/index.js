import express from 'express';
import path from 'path';

const app = express();
const __dirname = import.meta.dirname;
console.log('DIRNAME: ' + __dirname);

app.get('/api/test', (req, res) => {
  res.json({ body: 'Hello World!' });
});

app.use(express.static(path.join(__dirname, '..', '..', 'ui', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'ui', 'build', 'index.html'));
});

app.listen(process.env.PORT || 9000, () => {
  console.log('Server started');
});
