import { TodoItem } from './item'
const TodoList = ({list, remove})=> {
    return (<>
        <div className='overflow-scroll w11/12 h-3/5'>
        {list&& list.map( todo=> (
          <TodoItem key={todo._id} remove={remove} todo={todo} />
        ))}
      </div>
    </>)
  }
  

export { TodoList }