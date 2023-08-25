import React, { useContext } from "react";
import ProductContext from "../../context/product/ProductContext";
import { styled } from "styled-components";

export const Cart = () => {
  const context = useContext(ProductContext);
  const { cartStoreState, removeFromCart } = context;
  const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  width: 100%;
  height: auto;
`;

const ProductImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const ProductTitle = styled.h4`
  width: 200px;
  font-weight: 400;
  font-size: 16px;
  margin-right: 20px;
`;

const ProductPrice = styled.p`
  width: 60px;
  font-size: 16px;
  margin-right: 20px;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const ProductQuant = styled.input`
  width: 60px;
  padding: 5px;
  margin: 0 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const RemoveBtn = styled.button`
  padding: 5px 10px;
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ee2200;
  }
`;

  const newRemoveFromCart=(id)=>{
    removeFromCart(id)
    localStorage.setItem("newCartStoreState",JSON.stringify(cartStoreState))
  }

  return (
    <div>
      {cartStoreState.items.map((product) => {
        console.log("Product:", product); // Add this line
        return (
          <Container key={product.id}>
            <Head>
              <ProductImg src={product.image} />
              <ProductTitle>{product.title}</ProductTitle>
            </Head>

            <ProductPrice>Price: ${product.price}</ProductPrice>
            <productQuantity>quantity: </productQuantity>
            
            <ProductQuant type="number" value ={product.productQuantity}></ProductQuant>
            <ProductPrice>Total: ${product.price*product.productQuantity}</ProductPrice>
            <RemoveBtn
              onClick={() => {
                newRemoveFromCart(product.id);
              }}
            >
              remove
            </RemoveBtn>
          </Container>
        );
      })}
    </div>
  );
};
