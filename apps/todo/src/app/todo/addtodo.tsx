import { useState } from 'react'
export const AddTodo = ({add})=> {
    const [task,setTask] = useState('test - ')
    return (<>
    <div>
      <form>
        <label forhtml='task'>New Task: 
        <input className='flex-inital w-10-12 input input-bordered mr-4 shadow-md'
          type='text' id='task' name='task'
          value={task}
          onChange={e => setTask(e.target.value)}
          onKeyDown={ e=> {
            if(e.key=== 'Enter')
            {
              e.preventDefault()
              add(task)
              setTask(' text - ')
            }
          }} />
          </label>
      </form>
    </div>
    </>)
  }