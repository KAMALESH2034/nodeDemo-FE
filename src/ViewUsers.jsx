import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

function ViewUsers() {
let params = useParams();
let [user,setUser] = useState({})
let navigate = useNavigate();
let getUser = async() =>{
    try{

       const userResp = await axios.get(
        `https://nodedemo-be.onrender.com/user/${params.id}`)
        setUser(userResp.data)
    }catch(error){
        console.log(error);
    }
}
    useEffect(()=>{
        getUser();
        console.log(user);
    },[])

  return (
    <div className='container'>
       <div className='row'>
        
        <div className='d-flex justify-content-center flex-column align-items-center'>
        <div className='col-lg-6'>
           
            <h1 className='heading my-5'>User Details : </h1>
            <div className='card shadow'>
                <div className='card-body'>
                    <h2 className='card-title'>Name : {user.name}</h2>
                    <p className='card-title'>Age : {user.age}</p>
                    <p className='card-title'>City : {user.city}</p>
                <Link  to={"/"} className='btn btn-primary' >Back</Link>
                </div>
            </div>
        </div>
        </div>
       </div>
    </div>
  )
}

export default ViewUsers