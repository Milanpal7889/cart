import React from 'react'
import NewHome from "./newComponents/NewHome"
import ProductState from './context/product/ProductState'

function App() {
  return (
    <div>
      <ProductState>
        <NewHome/>
      </ProductState>
    </div>
  )
}

export default App