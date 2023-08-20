import axios from "axios";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Product from "./Product";
import Cart from "../cart/Cart";
import useLocalStorage from "../UseLocalStorage"; // Correct import path for useLocalStorage hook

const Container = styled.div`
  display: flex;
  padding: 20px;
  box-shadow: 10px 10px 20px 10px rgba(0, 0, 0, 0.4);
  margin: 50px;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const Page = styled.div`
  display: flex;
`;

function ProductList(props) {
  const [cart, setCart] = useLocalStorage("cartProduct", []); // Use the useLocalStorage hook to manage cart state
  const [products, setProducts] = useState([]); // Renamed 'product' to 'products'

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => setProducts(res.data)); // Set the fetched products in the state
  };
  const handleAddToCart = ()=>{
    console.log("clicked")
  }

  return (
    <Page>
      <Container>
        {products.map((product) => ( // Renamed 'res' to 'product'
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            price={product.price}
            title={product.title}
            onClick={handleAddToCart}
          />
        ))}
      </Container>
      <Cart cart={cart} /> {/* Pass the cart state to the Cart component */}
    </Page>
  );
}

export default ProductList;
