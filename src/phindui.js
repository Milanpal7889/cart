import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../../context/product/ProductContext";
import { Cart } from "../cart/Cart";
import { styled } from "styled-components";const ProductBox = styled.div`
margin: 20px;
padding: 20px;
border-radius: 30px;
box-shadow: 5px 10px 30px rgba(0,0,0,0.1);
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
gap: 20px;
align-items: start;
justify-items: center;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 100%;
padding: 20px;
border: 1px solid #ddd;
border-radius: 10px;
box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
`;

const ProductImg = styled.img`
width: 100px;
height: 100px;
object-fit: cover;
`;

const ProductTitle = styled.h4`
margin: 10px 0;
`;

const ProductPrice = styled.p`
font-size: 18px;
font-weight: bold;
margin: 10px 0;
`;

const ProductQuantity = styled.input`
padding: 10px;
width: 100%;
border-radius: 8px;
border: 1px solid #ddd;
margin: 10px 0;
text-align: center;
`;

const AddToCart = styled.button`
padding: 10px 20px;
border-radius: 20px;
border: none;
background-color: #2678c0;
color: white;
cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
  background-color: #1a5a8d;
}
`;

const MainPage = styled.div`
display: flex;
gap: 50px;
width: 100%;
justify-content: center;
`;

const Products = () => {
  const context = useContext(ProductContext);
  const { getProductsState, productsState, setCartStatefunction, setInput } =
    context;

  const onChange = (event) => {
    setInput(parseInt(event.target.value));
  };

  useEffect(() => {
    getProductsState();
  }, []);
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
                setCartStatefunction(product);
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
