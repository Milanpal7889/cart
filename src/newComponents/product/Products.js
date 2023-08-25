import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../../context/product/ProductContext";
import { Cart } from "../cart/Cart";
import { styled } from "styled-components";
const ProductBox = styled.div`
margin: 20px;
width: 55vw;
border-radius: 30px;
box-shadow: 5px 10px 30px rgba(0,0,0,0.5);
display: flex;
align-items: center;
justify-content: center;


`
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
  width: 70px;
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
const MainPage = styled.div`
display: flex;
gap: 50px;
width: 100%;


`

const Products = () => {
  const context = useContext(ProductContext);
  const { getProductsState, productsState,cartStoreState, setCartStatefunction, setInput } =
    context;

  const onChange = (event) => {
    setInput(parseInt(event.target.value));
  };

  useEffect(() => {
    getProductsState();
  }, []);

  


  const newSetCartStatefunction = (product) => {
    setCartStatefunction(product)
    localStorage.setItem("newCartStoreState",JSON.stringify(cartStoreState))
  }


  return (
    <MainPage>
    
      <ProductBox>
        
        <div>
        {productsState.map((product) => (
          <Container key={product.id}>
            <ProductImg src={product.image} />
            <ProductTitle>{product.title}</ProductTitle>

            <ProductPrice>Price: ${product.price}</ProductPrice>
            <ProductQuantity
              onChange={onChange}
              id={product.id}
              type="number"
              placeholder="quantity"
            ></ProductQuantity>
            <AddToCart
              onClick={() => {
                newSetCartStatefunction(product);
              }}
            >
              Add to cart
            </AddToCart>
          </Container>
        ))}

        </div>

        
      </ProductBox>
      <div>
        <h1>CArt is here</h1>
        <Cart />
      </div>
    </MainPage>
  );
};

export default Products;
