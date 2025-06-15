import { useState } from 'react'
import GuessTheNumber from './GuessTheNumber'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <GuessTheNumber/>
   </>
  )
}

export default App
