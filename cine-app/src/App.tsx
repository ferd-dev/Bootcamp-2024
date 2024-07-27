import './App.css'
import Chairs from './Chairs'

function App() {

  return (
    <>
      <div className="screen">CINEMA SCREEN</div>
      <Chairs coloumn={5} row={5} />
    </>
  )
}

export default App
