import { useState } from 'react'


import './App.css'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListRender/>
      <ConditionalRender/>
    </>
  )
}

export default App
