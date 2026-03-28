import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
export default function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    function fetchUser() {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(setUser).finally(() => setLoading(false));
    }

    useEffect(() => {
        fetchUser();

    }, [id])

    return (
        loading ? <p>Loading...</p> : <div>
            <h1>User Details</h1>
            <p>Name: {user.name} </p>
            <p>Username: {user.username} </p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone} </p>
            <p>Website: {user.email}</p>
        </div>
    )
}
