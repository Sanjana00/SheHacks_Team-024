import express from 'express';
import mongoose from 'mongoose';
const app = express();

app.get('/', (_, res) => {
  res.send('Greetings from the backend!!');
});

app.post('/', (req, res) => {
  res.send('Jobs listing served from the backend!!');
});

app.post('/users', (req, res) => {
  res.send('User details inserted into the database successfully!');
});
const port = process.env.PORT || '3000'; app.listen(port); 
console.log(`Listening on port ${port}`);
