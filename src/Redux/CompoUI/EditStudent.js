import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import { useState } from 'react';

import {useDispatch, useSelector} from 'react-redux'
import { editStudent } from '../Slice/Slice';
const EditStudent = () => {
    const Navigate= useNavigate();
    const indexData=useLocation().state.index;
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.Stu_Data)
    console.log(indexData)
 const [info,setInfo]=useState({
  Name: data[indexData].Name, 
  Age: data[indexData].Age,
   Course: data[indexData].Course, 
   Batch: data[indexData].Batch
 })
    const handleChange=(e)=>{
          setInfo({...info,[e.target.name]:e.target.value})  
    }

    const handleUpdate=()=>{
  dispatch(editStudent({info,indexData}))
  Navigate('/student')
}  
return (
    <div><h1>Update the Data</h1>
    <div className='edit'>
    <div>
    <fieldset className="fieldset-container">
      <legend style={{color:'black'}}>Name</legend>
    <input className="input-field" type='text' name='Name' placeholder={data[indexData].Name} onChange={handleChange}/>
    </fieldset><br></br>
    <fieldset style={{marginTop:'80px'}} className="fieldset-container">
      <legend style={{color:'black'}}>Age</legend>
    <input className="input-field" type='text' name='Age' placeholder={data[indexData].Age} onChange={handleChange}/> </fieldset><br></br>
    </div>
    <div>
    <fieldset className="fieldset-container">
      <legend style={{color:'black'}}>Course</legend>
    <input className="input-field" type='text' name='Course' placeholder={data[indexData].Course} onChange={handleChange}/></fieldset><br></br>
    <fieldset style={{marginTop:'80px'}} className="fieldset-container">
      <legend style={{color:'black'}}>Batch</legend>
    <input className="input-field" type='text' name='Batch' placeholder={data[indexData].Batch} onChange={handleChange}/></fieldset><br></br>
    </div></div>
    
    <button id='edit1' className='editbutton' onClick={handleUpdate}> Update </button>
        <button id='edit2' className='editbutton' onClick={()=>Navigate('/student')}>Cancel</button>
        
    </div>

  )
}

export default EditStudent
