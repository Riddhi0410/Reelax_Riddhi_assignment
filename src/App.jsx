import { useState } from 'react'
import CheckoutPage from './pages/Checkoutpage'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <CheckoutPage />
    </>
  )
}

export default App
