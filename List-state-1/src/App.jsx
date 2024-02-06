
import './App.css'
import { TodoList } from './TodoList'

function App() {
  const list = ['mario','Claudio','Luigi']

  return (
    <>
  <TodoList list={list}></TodoList>
    </>
  )
}

export default App
