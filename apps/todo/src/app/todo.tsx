// eslint-disable-next-line @typescript-eslint/no-unused-vars

import useSWR, { mutate }from 'swr'
import axios from 'axios'
export default  function TodoApp() {
  const todo_url = '/api/v1/todos'
  const fetcher = async (url:string) => {
    const response = await axios.get(url)
    return response.data.data
  }

  const { data, error, isLoading } = useSWR(todo_url, fetcher)

  const onAdd = ()=> {
    const title = `new task ${Math.floor(Math.random()*1000)}`
    axios.post(todo_url, { title })
    mutate(todo_url)
  }
const onDelete = (id: string)=> {
  console.log(`trying deleteing ${id}`)
  axios.delete(`${todo_url}/${id}`)
  mutate(todo_url)
}
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Todo App</h1>
      <div>
        <button onClick={e=> onAdd()}>add</button>
      </div>
      <div className='overflow-scroll w11/12 h-3/5'>
        {isLoading&& <div className='flex h-full items-center justify-center'>
          <span className='loading loading-spinner loading-lg'></span>
          </div>}
        {error&& <div className='flex h-full items-center justify-center'>ERROR: {error.message}</div>}
        {data&& data.map( todo=> (
          <div key={todo._id} className='card card-compact mb-3 bg-base-100 shadow-md'>
            <div className='card-body'>
              <div className='card-title'>
              <div className='w-11/12 float-left'>{todo.title}</div>
              <button className="w-1/12 float-right" onClick={e => onDelete(todo._id)}>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

