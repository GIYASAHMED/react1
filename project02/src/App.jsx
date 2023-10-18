import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  
  return (
    <>
      <h1 className='bg-slate-400 rounded-lg p-4 text-black mb-10'>Hello World</h1>
    {/* card 1 */}
      <Card name='giyas'
        btn="Read More"
        para="Hi I am from India" /> 
      
    {/* card 2 */}
      <Card btn="Click Me" para="Hi I am from Pakistan"/>
    </>
  )
}

export default App
