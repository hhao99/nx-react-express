import { model, Schema , Document } from 'mongoose'

export interface ITodo extends Document {
    title: string
    complete: boolean
}

const TodoSchema: Schema = new Schema({
    title: { type: String, required: true},
    complete: { type: Boolean, default: false},
})

export const Todo = model('todos', TodoSchema)