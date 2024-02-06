import { useState } from 'react'
import './App.css'
import { TodoList } from './TodoList'

function App() {

  const list = ['Luca','Andrea','Mario']

  return (
    <>
<TodoList list={list} ></TodoList>
    </>
  )
}

export default App
