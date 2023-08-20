import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ProductList from "./product/ProductList"
import FormField from "./FormField"

function Home() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<ProductList/> }></Route>
        <Route path='/submit' element={<FormField/> }></Route>
        </Routes>
          
      </Router>
   
    </div>
  )
}

export default Home