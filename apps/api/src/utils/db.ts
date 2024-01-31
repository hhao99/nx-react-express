import * as mongoose from 'mongoose'

export async function db_init() {
    try {
        const host = process.env.DB_HOST || '127.0.0.1'
        const port = process.env.DB_HOST || 27017
        const user = process.env.DB_HOST || 'k1'
        const pass = process.env.DB_HOST || 'admin'
        const db = process.env.DB_HOST || 'todos'

        const conn_str = `mongodb://${user}:${pass}@${host}:${port}/${db}?authSource=admin`

        mongoose.connect(conn_str)
            .then( ()=> console.log(`connected to ${db}`))
            .catch(err=> { 
                console.log(conn_str)
                console.log(err.message)
            })
    } catch(err) {
        console.log(err.message)
    }
}