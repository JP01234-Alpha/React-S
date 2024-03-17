import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const[counter,setCounter] = useState(0);

  const addvalue = () => {
    setCounter(counter + 1)
  }

  const removevalue = () => {
    if(counter>0)setCounter(counter - 1)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter : {counter}</h2>

      <button onClick={addvalue}>add value</button>
      <br/>
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
