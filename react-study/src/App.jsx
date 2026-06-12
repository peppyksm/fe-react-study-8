import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Basic01 from './conponents/basic01'
import State01 from './conponents/State01'
import Export01 from './conponents/export01'
import Quiz01 from './quiz/Quiz01'
import State02 from './conponents/State02'
import State03 from './conponents/State03'

function App() {
  const [count, setCount] = useState(0)

  return (
    //<Basic01/>
    //<State01/>
    //<Export01 />
    //<Quiz01 />
    //<State02/>
    <State03/>
  )
}

export default App