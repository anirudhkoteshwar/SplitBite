import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
      </BrowserRouter>      
    </>
  )
}

