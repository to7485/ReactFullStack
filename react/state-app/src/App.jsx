import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BadCounter from './components/BadCounter'
import CounterFunctional from './components/CounterFunctional'
import CounterBugExample from './components/CounterBugExample'
import Immutability from './components/Immutability'

function App() {
  

  return (
    <>
      <CounterFunctional />
      <CounterBugExample />
      <Immutability />
    </>
  )
}

export default App
