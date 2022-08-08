const http = require('http');
const express = require('express');
const { sendPostings } = require('./sendPostings');
const { feeds } = require('./feeds');
const { profiles } = require('./profiles');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'hi!' });
});
app.get('/posts', sendPostings);
app.get('/feeds', feeds);
app.get('/profiles', profiles);

const server = http.createServer(app);

server.listen(8000, (req, res) => {
  console.log({ message: 'server is running PORT 8000' });
});
