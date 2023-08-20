import React, { useState, useRef } from 'react';
import { styled } from 'styled-components';
import Cart from '../cart/Cart';
import useLocalStorage from "../UseLocalStorage"; // Correct import path for useLocalStorage hook

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50vw;
  padding: 20px 0;
  border-bottom: 0.7px solid black;
  margin: 5px;
  height: 50px;
`;

const ProductImg = styled.img`
  width: 30px;
  height: 50px;
`;

const ProductTitle = styled.h4`
  width: 200px;
`;

const ProductPrice = styled.p``;

const ProductQuantity = styled.input`
  padding: 10px 14px;
  width: 50px;
  border-radius: 8px;
  text-align: center;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.1);
`;

const AddToCart = styled.button`
  padding: 14px 20px;
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: #2678c0;
  color: white;
`;

function Product(props) {
  const [cart, setCart] = useLocalStorage("cartProduct", [])
  const [quantity, setQuantity] = useState(0);
  const quantityInputRef = useRef();

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setQuantity(Math.max(value, 0));
    }
  };

  const handleAddToCart = (productId, quantity) => {
    console.log("clicked")
    if (quantity > 0) {
      const item = {
        id: props.id,
        title: props.title,
        price: props.price,
        quantity: quantity,
      };

    const selectedProduct = item.find((p) => p.id === productId);
    const existingProduct = cart.find((p) => p.id === productId);
    if(existingProduct){
      setCart((prevCart) =>
        prevCart.map((p) =>
          p.id === productId ? { ...p, quantity: p.quantity + quantity } : p
          
        )
      );
    }else{
        setCart((prevCart) => [...prevCart, { ...selectedProduct, quantity }]);
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      setQuantity(0);
      quantityInputRef.current.value = '';
    }
  };

  return (
    <>
    <Container id={props.id}>
      <ProductImg src={props.image} />
      <ProductTitle>{props.title}</ProductTitle>
      <ProductPrice>${props.price}</ProductPrice>

      <ProductQuantity
        type="number"
        placeholder="quantity"
        value={quantity}
        onChange={handleQuantityChange}
        ref={quantityInputRef}
      />

      <AddToCart onClick={handleAddToCart}>Add To Cart</AddToCart>
    </Container>
    </>
  );
}

export default Product;
