import { useState } from 'react'
import './App.css'
import MyButton from './MyButton'
import MyInput from './MyInput';

function App() {
  const [count, setCount] = useState(0);
  const [resetCount, setResetCount] = useState(0);
  const [stateCoin, setStateCoin] = useState("heads");

  const add = () => {
    setCount(count + 1)
  };

  const reset = () => {
    setCount(0);
    setResetCount(resetCount + 1);
  }

  const flipCoin = () => {
    const random = Math.floor(Math.random() * 2);
    if (random === 0) {
      setStateCoin("heads");
    } else {
      setStateCoin("tails");
    }
  }

  return (
    <>
      <MyInput />
      <hr />
      <h2>{count}</h2>
      <h3>Count Reset: {resetCount}</h3>
      <h4>State Coin: {stateCoin}</h4>
      <MyButton
        acction={add}
        title={`Click Me`} />

      <MyButton
        acction={reset}
        title='Reset' />

      <MyButton
        acction={flipCoin}
        title='Flip Coin' />
    </>
  )
}

export default App
