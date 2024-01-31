import { Router } from 'express'

const router = Router()

const list = []
router.get('/', (_req,res)=> {
    res.status(200).send({
        code: 'ok',
        status: 200,
        message: 'todos api',
        data: list
    })
})

router.post('/',(req,res) => {
    const { title } = req.body
    list.push({ title })

    res.status(200).send({
        code: 'ok',
        status: 200,
        message: 'todos api',
        data: list
    })

} )

export default router;