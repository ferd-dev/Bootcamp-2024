import { useState, useMemo } from 'react'
import './App.css'
import { factorial } from './helps'

function App() {
  const [count, setCount] = useState(0)
  const numFactorial = useMemo(() => factorial(count), [count]);

  return (
    <>
      <h2>Counter: {count}</h2>
      <h2>Factorial: {numFactorial}</h2>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((count) => count - 1)}>
        Decrement
      </button>
    </>
  )
}

export default App
