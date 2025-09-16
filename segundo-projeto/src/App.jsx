import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './Components/MyComponent'
import OtherComponent from './Components/OtherComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MyComponent/>
     <p>Este parágrafo é do app.jsx</p>
     <OtherComponent/>
    </>
    
  )
}

export default App
