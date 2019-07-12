import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send("hello express");
});

app.get('/products', (req, res) => {
  res.send("recieve the requset for product searching");
});

const server = app.listen(8000, 'localhost', () => {
  console.log("server start, address is: http://localhost: 8000");
});