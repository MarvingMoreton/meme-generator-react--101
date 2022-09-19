import { useState } from 'react'
import reactLogo from '../public/assets/react.svg'
import './App.css'
import Header from "./components/Header.jsx"
import Meme from "./components/Meme.jsx"

function App() {

  return (
    <div>
            <Header />
            <Meme />
        </div>
  )
}

export default App
