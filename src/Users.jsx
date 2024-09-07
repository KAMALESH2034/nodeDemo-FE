import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Users() {

    const [users,setUsers] = useState([])

    const getAllUsers = async()=>{
      await axios.get("https://nodedemo-be.onrender.com/users").then
      ((res)=>{
        console.log(res.data)
        setUsers(res.data);
      });
      
    }
  
    useEffect(()=>{
      getAllUsers();
  
    },[])

    let deleteUser = async(id) =>{
         let yesno = confirm("Are you sure you want to delete this user ?")
         if(yesno){
            await axios.delete(`https://nodedemo-be.onrender.com/user/${id}`)
         }
         getAllUsers(); 
    }

  return (
     <div className='container'>
    <h3 className='heading mt-4 mb-4'>CRUD Application with React.Js FrontEnd and Node.Js Backend</h3>
    <div className='mb-3 d-flex justify-content-center'>
      
      <Link to={"/create-user"} type="submit" className='btn btn-primary px-5'>Create User</Link>
    </div>
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>View</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        
          {
            users.map((user,index)=>{
              return(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.city}</td>
                  <td><Link to={`/user/${user._id}`} className='btn btn-primary'>View</Link></td>
                  <td><Link to={`/edit/${user._id}`} className='btn btn-success'> Edit</Link></td>
                  <td><button onClick={()=>{
                    deleteUser(user._id)
                  }} className='btn btn-danger'>Delete</button></td>
                </tr>
              )
          })
        }
       
      </tbody>
    </table>
  </div>
  )
}

export default Users