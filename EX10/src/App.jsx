import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("hello CUG?")

  const styleArgument = { fontSize: `${20 + count*5}px`, color:'red', lineHeight: '1.2'};

  const changeText=(event)=>{
    console.log(event.target)
    setText(text + "被點了!")
    setCount(count + 1)
  }
  return (
    <div className="App">
      <h1 style = {styleArgument} onClick={changeText}>{text}</h1>
    </div>
  )
}

export default App
