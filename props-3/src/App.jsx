import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Age } from './Age'
import { Welcome } from './Welcome'

function App() {

  return (
    <>
    <Welcome name="Matteo" age={25}></Welcome>
    </>
  )
}

export default App
