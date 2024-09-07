import React, { useEffect } from 'react'
import {useFormik}  from 'formik';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function EditUser() {

    const navigate = useNavigate();
    const params = useParams();

  const formik = useFormik({
    initialValues:{
      name:"",
      age:0,
      city:""
    },
    validate : (values)=>{
      let error ={}

      if(values.name == ""){
        error.name ="Please Enter the name"
      }

      if(values.age < 18){
        error.age ="Please Enter age above 18"
      }

      if(values.city == ""){ 
        error.city ="Please Enter your City"
      }
      return error;
    },
    onSubmit : async (values)=>{
      try{
        console.log(values);
        
        await axios.put(`https://nodedemo-be.onrender.com/user/${params.id}`,values);
        navigate("/");
        

      }catch(error){
        console.log(error);
      } 
    }
  })

  let getUser = async() =>{
    try{

       const userResp = await axios.get(
        `https://nodedemo-be.onrender.com/user/${params.id}`);
        formik.setValues(userResp.data)
    }catch(error){
        console.log(error);
    }
}

  useEffect(()=>{
    getUser();
  },[])

  return (
    <div className='container'>
    <form onSubmit={formik.handleSubmit}>
    <div className='row'>
      <h1 className='heading my-5'>Edit user : </h1>
      <div className='col-lg-4'>
        <label htmlFor="name">Name:</label>
        <input 
          
          type="text" 
          className='form-control'
          name='name'
          value={formik.values.name}
          onChange={formik.handleChange} />
          <span style={{color:"maroon"}}>{formik.errors.name}</span>

      </div>
      <div className='col-lg-4'>
        <label htmlFor="">Age:</label>
        <input 
        type="number" 
        className='form-control'
        name='age'
        value={formik.values.age}
         onChange={formik.handleChange} />
         <span style={{color:"maroon"}}>{formik.errors.age}</span>
      </div>

      <div className='col-lg-4'>
        <label htmlFor="">City:</label>
        <input 
          type="text" 
          className='form-control'
          name='city'
          value={formik.values.city}
          onChange={formik.handleChange} />
         <span style={{color:"maroon"}}>{formik.errors.city}</span>
      </div>
      <div className='col-lg-2 mx-4'>
        
        <button type="submit" value={"submit"} className='form-control my-4  btn btn-primary' > Update</button>
      </div>
    </div>
    </form>
  </div>
  )
}

export default EditUser