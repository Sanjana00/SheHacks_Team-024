import express from 'express';
import mongoose from 'mongoose';
let bodyParser = require('body-parser')
const pageRouter = require('./router-controller/router')
const app = express();
const db = require('./connection')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

db.once('open',() => console.log('Connected to db'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/',pageRouter)
app.get('/', (_, res) => {
  res.send('Greetings from the backend!!');
});

app.all('/users', (req, res) => {
            res.status(405).send("ERROR:--Method not implemented")
    })


app.all('/', (req, res) => {
            res.status(405).send("ERROR:--Method not implemented")
    })
    
app.all('*', (req, res) => {
            res.status(400).send("ERROR:--Invalid path")
    })
const port = process.env.PORT || '3000'; app.listen(port); 
console.log(`Listening on port ${port}`);
