import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function UserList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(setUsers)
    },[])

    return (
        <>
            <h1>User List</h1>
            <ul>
                {users?.map(({ id, name }) => <li key={id}>
                    <Link to={`/users/${id}`}>{name}</Link>
                </li>)}
            </ul>
        </>
    )
}
