import { useState } from 'react'
import './App.css'
import Panel from './components/Panel'

function App() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <h2>Lorem ipsum dolor</h2>
      <Panel
        title='About'
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Lorem ipsum dolor sit amet consectetu, adipisicing elit. Mollitia consequuntur cum impedit sed sequi iure illum nesciunt dolorem ut necessitatibus, harum fuga fugiat, itaque placeat quibusdam dolorum quam voluptatem minima.
      </Panel>
      <Panel
        title='Etymology'
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia consequuntur cum impedit sed sequi iure illum nesciunt dolorem ut necessitatibus, harum fuga fugiat, itaque placeat quibusdam dolorum quam voluptatem minima.
      </Panel>
    </>
  )
}

export default App
