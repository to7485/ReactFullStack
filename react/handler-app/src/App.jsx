import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HandlerCounter from './components/HandlerCounter'
import EarlyReturnExample from './components/EarlyReturnExample'
import TernaryExample from './components/TernaryExample'

function App() {
  

  return (
    <>
      {/* <HandlerCounter /> */}
      <Section>
        <EarlyReturnExample />
      </Section>

      <Section>
        <TernaryExample />
      </Section>
    </>
  )
}

//children을 갖는 컴포넌트 -> 레이아웃을 정하는 컴포넌트의 역할
function Section({children}){
  return(
    <div style={styles.section}>
      {children}
    </div>
  )
}

const styles = {
  section : {
    marginBottom : 32,
    paddingBottom : 24,
    borderBottom : "2px dashed #ddd",
  },
}

export default App
