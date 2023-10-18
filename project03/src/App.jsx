import { useState } from 'react'
import './App.css'

function App() {
  
  const [color, setColor] = useState('white')



  return (
    <div className='w-full h-screen' style={{backgroundColor:color}}>
      <div className='w-full absolute bottom-10 bg-black flex flex-wrap justify-center'>
        <button className='text-black px-4 py-1 rounded-lg flex m-4' style={{ backgroundColor: "red" }} onClick={()=>setColor('red')}>Red</button>
        <button className='text-black px-4 py-1 rounded-lg flex m-4'style={{backgroundColor:"blue"}} onClick={()=>setColor('blue')}>Blue</button>
        <button className='text-black px-4 py-1 rounded-lg flex m-4'style={{backgroundColor:"Green"}} onClick={()=>setColor('green')}>yellow</button>
        <button className='text-black px-4 py-1 rounded-lg flex m-4'style={{backgroundColor:"purple"}} onClick={()=>setColor('purple')}>Purple</button>
        <button className='text-black px-4 py-1 rounded-lg flex m-4'style={{backgroundColor:"orange"}} onClick={()=>setColor('orange')}>orange</button>
        <button className='text-black px-4 py-1 rounded-lg flex m-4'style={{backgroundColor:"pink"}} onClick={()=>setColor('pink')}>Pink</button>
        <button className='text-black px-4 py-1 rounded-lg flex m-4'style={{backgroundColor:"black"}} onClick={()=>setColor('black')}>Black</button>
      </div>
    </div>
  )
}

export default App
