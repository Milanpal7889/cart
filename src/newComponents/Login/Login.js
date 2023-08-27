import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState({email:"", password:""})
    const navigate = useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/login",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        setUser({email:"",password:""})
        const json = await response.json()  
        if(json.success){
            localStorage.setItem('token',JSON.stringify(json))
            console.log(json)
            navigate('/');
        } 
        else{
            alert("wrong crendentials")
        }
    }

    const onchange = (e) =>{
        setUser({...user, [e.target.name]:e.target.value})
    }

    return (

        <div>
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input onChange={onchange} type="email" id="email" name="email" required /> 
                    <label htmlFor="password">Password</label>
                    <input onChange={onchange} type="password" id="password" name="password" required />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}


export default Login
