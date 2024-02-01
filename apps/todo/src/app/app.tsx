import { Link, Routes, Route } from 'react-router-dom'

import Home from './home'
import About from './about'
import NotFound from './notfound'

import TodoApp from './todo'
export default function App({ title }: { title: string }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='m-4 flex justify-between'>
      <h1> { title || "Todo App"}</h1>
      <nav className='grid grid-cols-3 gap-2'>
        <Link to="/">Home</Link>
        <Link to="/todo">Todo App</Link>
        <Link to="/about">About</Link>
      </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </div>) 
}
