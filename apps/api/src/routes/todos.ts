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

router.get('/:id' ,async (req,res) => {
    // request url /todos/{id}
    // get the id params from the url parmas
    const id = req.params.id

    /* Finds a single document by its _id field. findById(id) is almost* 
    equivalent to findOne({ _id: id }). 
    If you want to query by a document's _id, use findById() 
    instead of findOne().
    */
    //const todo = await Todo.findOne({_id: id }).catch(console.log)
    const todo = await Todo.findById(id).catch(console.log) 
        
    res.status(201).send({
        code: 'ok',
        status: 201,
        message: `find the todo: ${id}`,
        data: todo
    })
})

router.delete('/:id', (req,res)=> {
    const id   = req.params.id 
    console.log("delete " + id)
    Todo.findByIdAndDelete(id)
        .then( (result)=> {
            if(!result) {
                res.status(404).send( {
                    code: 'fail',
                    message: 'failed to delete the id ' + id
                })
            } else {
            res.send({
                code: 'ok',
                status: '202',
                message: "DeleteAll done"
            }) }
        })
        .catch(console.log)
})
router.delete('/', (req,res) => {
    Todo.deleteMany({})
        .then( ()=> {
            res.send({
                code: 'ok',
                status: '202',
                message: "DeleteAll done"
            })
        })
        .catch(console.log)
})
export default router;