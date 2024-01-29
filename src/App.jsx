import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
  

  const AddValue = () =>{
    console.log("clicked",counter)
    counter = counter +1
    setCounter(counter)
  }
  
  const SubValue = () =>{
    console.log("clicked",counter)
    counter = counter-1
    if(counter<0){
      counter =0
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>Hey! sup?</h1>
      <h2>Counter Value {counter}</h2>
      <button
        onClick={AddValue}>
          Add Value </button>
      <br />
      <button
      onClick={SubValue}>Remove Value </button>
    </>
  )
}

export default App
