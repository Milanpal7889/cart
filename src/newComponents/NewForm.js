import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'



const Container =styled.div`
display: flex;
flex-direction: column;
width: 40%;
padding: 20px;
box-shadow: 1px 20px 30px rgba(0,0,0,0.2);
border-radius: 60px;
background-color: white;

    

`
const Desktop = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;


`
const InputBox = styled.input`
padding: 10px 15px;
margin: 10px;
font-size: 15px;
border-radius: 20px;
border: none;
background-color: #d1cece7c;
&:last-child {
    height: 80px;   

  }

`
const SubmitOrder = styled(Link)`

padding: 10px 20px;
width: 90%;
margin: 20px auto;
background-color: #ae14e7;
color: white;
text-align: center;
font-weight: 900;
font-size: 19px;
text-decoration: none;
border-radius: 20px;

`
function NewForm() {
    const clearLocalStorage = ()=>{
        localStorage.clear();
    }
  return (
    <Desktop>
        <h2>Fill Your Details To Submit The Order</h2>
        <Container>
            <InputBox placeholder='Name' />
            <InputBox placeholder='Company Name'/>
            <InputBox placeholder='Phone Number'/>
            <InputBox placeholder='Email Address'/>
            <InputBox placeholder='Address'/>
            <InputBox placeholder='Description'/>
          <SubmitOrder onClick={clearLocalStorage} to="/">Submit Order</SubmitOrder>
        </Container>
    </Desktop>
  )
}

export default NewForm