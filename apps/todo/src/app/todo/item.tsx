export function TodoItem({todo, remove}) {
    return (
        <>
             <div className='card card-compact mb-3 bg-base-100 shadow-md'>
            <div className='card-body'>
              <div className='card-title w-full'>
              <div className='w-11/12 float-left'>{todo.title}</div>
              <button className="w-1/12 float-right" onClick={e => remove(todo._id)}>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              </div>
              
            </div>
          </div>
        </>
    )
}