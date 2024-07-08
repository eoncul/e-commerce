import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Checkout from './pages/Checkout'
import Header from './components/Header'
import ProductDetail from './pages/ProductDetail'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
       <Route path='/'element={<MainPage/>} />
       <Route path='/checkout'element={<Checkout/>} />
       <Route path='/products/:id'element={<ProductDetail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
