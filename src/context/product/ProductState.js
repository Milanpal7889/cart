import React, { useEffect, useState } from "react";
import ProductContext from "./ProductContext";

const ProductState = (props) => {
    const host = "http://localhost:5000";
    const [productsState, setProductsState] = useState([])
    const cartState = localStorage.getItem("newCartStoreState")?JSON.parse(localStorage.getItem("newCartStoreState")):{
        items : []
    }
    let { authToken } = localStorage.getItem('token')?JSON.parse(localStorage.getItem('token')):"";
    const [input, setInput] = useState("")
    const [cartStoreState, setCartStoreState] = useState(
        cartState
    );
    const [testing, setTesting]=useState([])  
    const emptyInput = ""

    //get token
    let getToken = () =>{
        console.log(authToken)
       return authToken
    }


    const getCartFromDb = async()=>{
        const response = await fetch(`${host}/api/product/fetchcart`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authToken': getToken()
            }
        })
        const json = await response.json()
        setTesting(json)
    }
    

    const getProductsState = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const fetchedProductsState = await response.json(); // Corrected this line
            setProductsState(fetchedProductsState);
            return productsState;
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    // const addProduct = (newProductArray ,productArray)=>{
    //     newProductArray.productQuantity = input
    //     cartStoreState.items.push(newProductArray);
    // }
    const removeFromCart = (id) => {
        setCartStoreState(prevCart => {
            const updatedItems = prevCart.items.filter(item => item.id !== id);
            return {
                items: updatedItems
            };
        }); 
    };
    
    useEffect(()=>{
        localStorage.setItem("newCartStoreState",JSON.stringify(cartStoreState))
    },[cartStoreState])
    
    const setCartStatefunction = (productArray) => {
        try {
            const idState = productArray.id;
            const existingProductIndex = cartStoreState.items.findIndex(item => item.id === idState);
    
            if (existingProductIndex === -1) {
                const newProductArray = { ...productArray, productQuantity: input }; // Add quantity to the new product
                const newCartState = [...cartStoreState.items, newProductArray];
                setCartStoreState({
                    items: newCartState
                })
            } else {
                const updatedCart = cartStoreState.items.map(item => {
                    if (item.id === idState) {
                        return { ...item, productQuantity: input }; // Update quantity for the existing product
                    }
                    return item;
                });
                setCartStoreState({
                    items: updatedCart
                })
            }
            setInput("");
        } catch (error) {
            console.error("Error updating cart:", error);
        }
    };
    

    return (
        <ProductContext.Provider
            value={{
                emptyInput,
                productsState,
                cartStoreState,
                getProductsState,
                setProductsState,
                setCartStatefunction,
                cartState,
                input,
                setInput,
                removeFromCart,
                getCartFromDb
            }}>

            {props.children}

        </ProductContext.Provider>
    )
}

export default ProductState;
