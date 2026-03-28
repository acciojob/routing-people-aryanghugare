import React from 'react';
import { useEffect  } from 'react';
import { useState } from 'react';
import { Link , NavLink } from "react-router-dom";



function UserList() {

const [users,setUsers] = useState([]);
const [loading,setLoading] = useState(false);
const fetchUsers =  () =>{
setLoading(true);
fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=> res.json())

.then((data)=> setUsers(data))
.catch((error)=> console.log(error))
.finally(()=> setLoading(false))
}
 

useEffect(fetchUsers
,[])
  return (
    <>
<h1>User List</h1>
<ul>

{loading ? <h1>Loading...</h1> : (
  users.map((user) => (
    <li key={user.id}><Link to={"users/" + user.id}>{user.name}</Link></li>
  ))
)}
</ul>
</>
  )
}

export default UserList