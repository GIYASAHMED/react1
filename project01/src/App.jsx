import { useState } from 'react'
import './App.css'


function App() {

  
  let [counter, setCounter] = useState(15)
  function Add() {
    
    setCounter(counter = counter + 1)
  }
  
  

  


  return (
    <>
      <h1>Counter App</h1>
      <h2>Value:{ counter}</h2>
      <button onClick={Add}>App Value:</button>
      <button>Remove Value:</button>
    </>
    
    
  )
}

export default App