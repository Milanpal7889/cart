import React, { useContext, useEffect, useState } from 'react'
import ProductContext from '../../context/product/ProductContext'
import { Cart } from '../cart/Cart'

const Products = () => {
    const context = useContext(ProductContext)
    const { getProductsState, productsState, setCartStatefunction, setInput } =context

    const onChange = (event) =>{
        setInput(parseInt(event.target.value))
    }

    useEffect(() => {
        getProductsState()  
    },[]);
  return (
    <>
    <div>
        <h2>Product List</h2>
        <ul>
            {productsState.map((product) => (
                <li key={product.id}>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <input onChange={onChange} id={product.id} type='number'></input>
                    <button onClick={()=>{setCartStatefunction(product)}}>Add to cart</button>
                </li>
            ))}
        </ul>
    </div>
    <div>
        <h1>CArt is here</h1>
        <Cart/>
    </div>
    </>
  )
}

export default Products
