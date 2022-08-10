const http = require('http');
const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const { sendPostings } = require('./sendPostings');
const { feeds } = require('./feeds');
const { profiles } = require('./profiles');

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'hi!' });
});
app.get('/posts', sendPostings);
app.get('/feeds', feeds);
app.get('/profiles', profiles);
app.get('/comments', async (req, res) => {
  const createComment =
    await prisma.$queryRaW`INSERT INTO comments(id, content) VALUES (${id},${content})`;
});

const server = http.createServer(app);

server.listen(8000, (req, res) => {
  console.log({ message: 'Listening to requests on port 8000' });
});
