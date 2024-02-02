// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react'
import useSWR, { mutate }from 'swr'
import axios from 'axios'

import { AddTodo } from './addtodo'
import { TodoList } from './list'

export default  function TodoApp() {
  const todo_url = '/api/v1/todos'
  const fetcher = async (url:string) => {
    const response = await axios.get(url)
    return response.data.data
  }

  const { data, error, isLoading } = useSWR(todo_url, fetcher)

  const onAdd = async (task: string)=> {
    console.log(`add ${task}`)
    const title = `new ${task} ${Math.floor(Math.random()*1000)}`
    await axios.post(todo_url, { title })
    await mutate(todo_url)
  }
const onRemove = async (id: string)=> {
  await axios.delete(`${todo_url}/${id}`)
  await mutate(todo_url)
}
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Todo App</h1>
      <div>
        <AddTodo add={onAdd}/>
      </div>
      <div className='overflow-scroll w11/12 h-3/5'>
        {isLoading&& <div className='flex h-full items-center justify-center'>
          <span className='loading loading-spinner loading-lg'></span>
          </div>}
        {error&& <div className='flex h-full items-center justify-center'>ERROR: {error.message}</div>}
        { data&& <TodoList list={data} remove={onRemove}/> }
      </div>
    </div>
  );
}

