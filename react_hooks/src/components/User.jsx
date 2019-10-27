import React, { useContext } from 'react'
import '../App.css'
import { UserContext } from '../context/UserContext'
import axios from 'axios';
export const User = () => {
    const user = useContext(UserContext)
    const deleteUser = (id)=>{
        axios.delete(`http://localhost:4000/deleteUser/${id}`)
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>
            <li className="user">Name: {user.name} age: {user.age}</li>
            <button onClick={()=>deleteUser(user._id)}>Delete</button>
        </div>
    )
}