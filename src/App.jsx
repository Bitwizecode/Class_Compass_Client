import { useState } from 'react'
import {Button, Typography} from "@mui/material"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant='contained' color='info' >Class Compass</Button>
    </>
  )
}

export default App
