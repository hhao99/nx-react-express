/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import cors from 'cors'

import todoRouter from './routes/todos'
const app = express();
app.use(express.json())
app.use(cors())

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req,res)=> { res.send({ message: 'api project'})})

app.use( (err,_req,res,_next) => {
  res.status(500).send({
    code: 'error',
    status: 500,
    message: err.message
  })
})

// todo api endpoints
app.use('/api/v1/todos',todoRouter)


const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
