// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import useSWR, { mutate }from 'swr'
import axios from 'axios'
export  function App() {
  const fetcher = async (url:string) => {
    const response = await axios.get(url)
    return response.data.data
  }

  const { data, error, isLoading } = useSWR('/api/todos', fetcher)

  const onAdd = ()=> {
    const title = `new task ${Math.floor(Math.random()*1000)}`
    axios.post('/api/todos', { title })
    mutate('/api/todos')
  }

  return (
    <div className='flex flex-row justify-center items-center'>
      <h1>Todo App</h1>
      <div>
        <button onClick={e=> onAdd()}>add</button>
      </div>
      <div>
        {isLoading&& <h3>Data Loading...</h3>}
        {error&& <h3>ERROR: {error.message}</h3>}
        {data&& data.map(todo=> <h3>{todo.title}</h3>)}
      </div>
    </div>
  );
}

export default App;
