import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz'
import sample from './assets/quiz.mp4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="video-container">
      <video className='myVideo' autoPlay loop muted>
      <source src={sample} type='video/mp4' />
    </video>
    </div>
    <Quiz/>
    </>
  )
}

export default App
