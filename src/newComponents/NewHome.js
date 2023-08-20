import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NewForm from './NewForm'
import Products from './product/Products'
import { Cart } from './cart/Cart'

const NewHome = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Products/>}></Route>
        <Route path='/submit' element={<NewForm/> }></Route>
        <Route path='/cart' element={<Cart/> }></Route>
        </Routes>
          
      </Router>
   
    </div>
  )
}

export default NewHome