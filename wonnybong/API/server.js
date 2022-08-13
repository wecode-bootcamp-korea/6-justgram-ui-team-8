const http = require('http');
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// const { sendPostings } = require('./sendPostings');
const { feeds } = require('./feeds');
const { profiles } = require('./profiles');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'hi!' });
});
// app.get('/posts', sendPostings);
app.get('/feeds', feeds);
app.get('/profiles', profiles);
app.post('/comments', async (req, res) => {
  const createComment =
    await prisma.$queryRaW`INSERT INTO comments(id, comment, posting_id, user_id) VALUES (${id},${comment},${postingId},${userId})`;
});

const server = http.createServer(app);

const start = () => {
  try {
    server.listen(8000, (req, res) => {
      console.log({ message: 'Listening to requests on port 8000' });
    });
  } catch (err) {
    console.log(err);
  }
};
start();
