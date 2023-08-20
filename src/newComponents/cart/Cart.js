import React, { useContext} from 'react'
import ProductContext from '../../context/product/ProductContext'

export const Cart = () => {

    const context = useContext(ProductContext)  
    const {cartStoreState, removeFromCart} = context
  return (
    <div>
        <h2>Cart List</h2>
        <ul>
            {cartStoreState.items.map((product) => {
              console.log('Product:', product); // Add this line
              return (
                <li key={product.id}>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                  <p>quantity: {product.productQuantity}</p>
                  <input type='number'></input>
                  <button onClick={()=>{removeFromCart(product.id)}}>remove</button>
                </li>
              );
            })}   
        </ul>
    </div>
  )
}
