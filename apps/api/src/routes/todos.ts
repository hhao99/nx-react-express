import { Router } from 'express'
import { ITodo, Todo } from '../models/todo'
import { db_init } from '../utils/db'



const router = Router()
db_init()
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