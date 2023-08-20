import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  padding: 0px 3%;
  background-color: aquamarine;
  border-bottom: 0.7px solid black;
  width: 600px;
  height: 80px;
`;

const ProductImg = styled.img`
  width: 20px;
  height: 20px;
`;

const ProductTitle = styled.h4`
  width: 170px;
  font-weight: 400;
  font-size: 13px;
`;

const ProductPrice = styled.p`
  width: 60px;
  font-size: 13px;
`;

const Head = styled.div`
  width: 150px;
  margin-right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Flex = styled.div`
  width: 100%; /* Use 100% width to span the entire available width */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RemoveBtn = styled.button`
  /* Add styling for the remove button */
`;

function CartProduct(props) {
  const { id, image, price, title, quantity, removeFromCart } = props;

  const productTotal = quantity * price; // Change variable name to camelCase

  return (
    <Container id={id}>
      <Head>
        <ProductImg src={image} />
        <ProductTitle>{title}</ProductTitle>
      </Head>

      <ProductPrice>${price.toFixed(2)}</ProductPrice>
      <ProductTitle>{quantity}</ProductTitle>
      <ProductTitle>${productTotal.toFixed(2)}</ProductTitle>
      <RemoveBtn onClick={() => removeFromCart(id)}>Remove</RemoveBtn>
    </Container>
  );
}

export default CartProduct;
