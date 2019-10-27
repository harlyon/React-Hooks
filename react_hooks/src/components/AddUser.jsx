import React, { useState } from 'react'
import axios from 'axios';

export const AddUser = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

    const addUser = e => {
        e.preventDefault()
        axios.post('http://localhost:4000/addUser', { name, email, age })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={addUser}>
                <input placeholder="Name" onChange={e => setName(e.target.value)} />
                <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <input placeholder="Age" onChange={e => setAge(e.target.value)} />
                <button type="submit">Add User</button>
            </form>
        </div>
    )
}