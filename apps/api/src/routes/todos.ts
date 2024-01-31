import { Router } from 'express'
import {ITodo, Todo } from '../models/todo'
import mongoose from 'mongoose'

const db_url = 'mongodb://k1:admin@127.0.0.1/todos?' //authSource=todos'
mongoose.connect(db_url)

const router = Router()

router.get('/', async (_req,res)=> {
    const list =  await Todo.find()
        .catch(console.log)

    res.status(200).send({
        code: 'ok',
        status: 200,
        message: 'todos api',
        data: list
    })
})

router.post('/',(req,res) => {
    const { title } = req.body
    Todo.create({ title })

    res.status(200).send({
        code: 'ok',
        status: 200,
        message: 'todos api',
    })

} )

export default router;