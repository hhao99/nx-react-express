// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import useSWR, { mutate }from 'swr'
import axios from 'axios'
export  function App() {
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

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Todo App</h1>
      <div>
        <button onClick={e=> onAdd()}>add</button>
      </div>
      <div>
        {isLoading&& <h3>Data Loading...</h3>}
        {error&& <h3>ERROR: {error.message}</h3>}
        {data&& data.map(todo=> <h3 key={todo.title}>{todo.title}</h3>)}
      </div>
    </div>
  );
}

export default App;
