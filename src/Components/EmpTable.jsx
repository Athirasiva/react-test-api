import React, { useEffect, useState } from 'react'

function EmpTable() {
  const [users,setUsers] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
      res.json().then((result)=>{
        setUsers(result)
      })
    })
  },[])
   
    console.log(users);
    
  return (
    <div className='p-5'>
        <table className='table table-striped '>
            <thead>
                 <th>Name</th>
                 <th>Email</th>
                 <th>Address</th>
                 <th>City</th>
            </thead>
            <tbody>
              {
                users.length>0 ?
                users.map((user,index)=>(
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address.street}</td>
                    <td>{user.address.city}</td>
                  </tr>
                ))
                :
                "Nothing to display" 
              }
              
            </tbody>
        </table>
    </div>
  )
}

export default EmpTable