import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { User } from './User'
import { AddUser } from './AddUser'
import { UserContext } from '../context/UserContext'
export const Main = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/users")
            .then(res => {
                setUsers(res.data)
            })
    }, [users])

    return (
        <div>
            {users.map(user => {

                return (
                    <UserContext.Provider key={user._id} value={user}>
                        <User />
                    </UserContext.Provider>
                )
            })}
            <AddUser />
        </div>
    )
}