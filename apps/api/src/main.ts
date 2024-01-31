/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors())

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req,res)=> { res.send({ message: 'api project'})})
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

// todo api endpoints
const list = [
  { title: 'first task' }
]
app.get('/todos', (req, res) => {
  res.status(201).send({ 
    code: 'ok',
    status: '201',
    data: list

   });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
