import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TwoInputs from './components/TwoInputs.jsx'
import GreetingForm from './components/GeetingForm.jsx'
import RenderDebugger from './components/RenderDebugger.jsx'
import MountEffect from './components/MountEffect.jsx'
import UserProfile from './components/UserProfile.jsx'
import KeywordWatcher from './components/KeywordWatcher.jsx'
import Timer from './components/Timer.jsx'
import CountrySearch from './components/CountrySearch.jsx'
import NoticeSlider from './components/Notice.jsx'
function App() {
    


  return (
    <>
      {/* <TwoInputs /> */}
      {/* <GreetingForm /> */}
      {/* <RenderDebugger /> */}
      {/* <MountEffect /> */}
      {/* <UserProfile /> */}
      {/* <KeywordWatcher /> */}

      {/* 버튼을 하나 만든다. 
      버튼을 누르면 "타이머 보이기" / "타이머 다시 생성"*/}
      {/* <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "타이머 제거" : "타이머 다시 생성"}
      </button>
      {/* 타이머 띄우기 */}
      {/* {showTimer && <Timer />} */} 

      {/* <CountrySearch /> */}

      <NoticeSlider />

    </>
  )
}

export default App
