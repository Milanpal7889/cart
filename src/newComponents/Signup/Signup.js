import React, { useState } from 'react'

const Signup = () => {
    const [user, setUser] = useState({ name: "", email: "", password: "" })

    const handleSignup = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/create", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        const json = await response.json()
        console.log(json)
        setUser({ name: "", email: "", password: "" })
    }

    const onchange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <label htmlFor="username">Username</label>
                    <input onChange={onchange} type="text" id="name" name="name" required />

                    <label htmlFor="email">Email</label>
                    <input onChange={onchange} type="email" id="email" name="email" required />

                    <label htmlFor="password">Password</label>
                    <input onChange={onchange} type="password" id="password" name="password" required />

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
