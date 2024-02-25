import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/createTodo'
import { Todos } from './components/Todo'

function App() {
  const [todos, setTodos] = useState([]);

  // fetch
  // axios
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
      <todos />
    </div>
  )
}

export default App
