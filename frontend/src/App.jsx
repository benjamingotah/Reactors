

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HouseListing from './components/francis'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center text-orange-400">Our beginning</div>
      <HouseListing />
    </>
  )
}
