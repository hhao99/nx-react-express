import { Link, Routes, Route } from 'react-router-dom'

import Home from './home'
import About from './about'
import NotFound from './notfound'

import TodoApp from './todo'
export default function App({ title }: { title: string }) {
  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Todo App</a>
      </div>

      <div className="flex-none">
        <ul className='menu menu-horizontal px-1'>
          <li><Link to="/todo">Todo App</Link></li> 
          <li><Link to="/about">About</Link></li> 
        </ul>
      </div>  
    </div>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </div>) 
}
