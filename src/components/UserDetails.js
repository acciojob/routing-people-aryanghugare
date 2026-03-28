import React from 'react';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

function UserDetails() {

const [users,setUsers] = useState({});
const [loading,setLoading] = useState(false);

const {id}= useParams();
const fetchUsers=() => {

setLoading(true);
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then((res)=> res.json())
.then((data)=> setUsers(data))
.catch((error)=> console.log(error))
.finally(()=> setLoading(false))
}


useEffect(fetchUsers,[id])


  return (
    <>
{
loading ? <div>Loading...</div> :


<div key={users.id}>
<h1>User Details</h1>
<p>Name: {users.name}</p>
<p>Username: {users.username}</p>
<p>Email: {users.email}</p>
<p>Phone: {users.phone}</p>
<p>Website: {users.website}</p>
</div>

}
</>
  )
}

export default UserDetails