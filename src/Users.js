import React, { useState, useEffect } from 'react';
const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => {
                setUsers(users)
            })
            .catch((err) => {

            })
    }, [])
    return (
        <div>
            <h1>Users</h1>
            <ul>
            {
                users.map((user)=>{
                    return<li key={user.id}>{user.name}</li>
                })
            }
            </ul>
        </div>
    )
}
export default Users;