import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Event from './components/Event'
import MostrarImagens from './components/MostrarImagens'
import PcGamer from './components/PcGamer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <TemplateExpressions />
      <FirstComponent />
      <SecondComponent /> */}
      <Event/>
      <MostrarImagens/>
      <PcGamer/>
    </>
  )
}

export default App
