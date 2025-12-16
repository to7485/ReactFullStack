import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'
import './App.css'
import Counter from './components/Counter'
import Student from './components/Student'
import Box from './components/Box'
import CardList from './components/CardList'

function App() {
  const totalCount = 3;
  return (
    <>
    {/* Props 전달하기
    HTML의 속성을 지정하듯이 원하는 데이터를 key-value 쌍으로 전달한다. 
      {/* <Button text="확인" />
      <Button />
      {/* JSX에서 중괄호에 숫자를 넣으면 정수로 전달된다. 
      <Counter count={10} />
      <Counter count={totalCount} />
      <Student name="Kim" age={30} isStudent={true} />

      <Student age={30} isStudent={true} />
      <Box style={{
        width:"600px",
        border:"1px solid #ccc",
        backgroundColor:"#f9f9f9",
        borderRadius : "8px"
      }} /> */}
      <CardList />
    </>
  )
}

export default App
