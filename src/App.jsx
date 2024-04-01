import { useState } from 'react'
import {Button, Typography} from "@mui/material"
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant='contained' color='info' >Class Compass</Button>
      <Home/>
    </>
  )
}

export default App
