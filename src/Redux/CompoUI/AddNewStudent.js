import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { addStudent } from '../Slice/Slice';
const AddNewStudent = () => {
  
  const [student, setStudent] = useState({ Name: '', 
  Age: '', 
  Course: '',
   Batch: '' });
  const navigate=useNavigate();
  
  const dispatch=useDispatch();
 
  const handleInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    dispatch(addStudent(student))
    navigate('/student')
  };
  return (
    <div>
     <h1>Add New Data</h1>
<form onSubmit={handleSubmit}>
    <div className='edit'>
    <div>
    <fieldset className="fieldset-container">
      <legend style={{color:'black'}}>Name</legend>
    <input className="input-field" id='feild' type='text' name='Name' placeholder='Name' value={student.Name} onChange={handleInputChange} required />
    </fieldset><br></br>
    <fieldset style={{marginTop:'80px'}} className="fieldset-container">
      <legend style={{color:'black'}}>Age</legend>
    <input className="input-field" id='feild' type='text' name='Age' placeholder='Age' value={student.Age} onChange={handleInputChange} required/> </fieldset><br></br>
    </div>
    <div>
    <fieldset className="fieldset-container">
      <legend style={{color:'black'}}>Course</legend>
    <input className="input-field" id='feild' type='text' name='Course' value={student.Course} placeholder='Course' onChange={handleInputChange} required/></fieldset><br></br>
    <fieldset style={{marginTop:'80px'}} className="fieldset-container">
      <legend style={{color:'black'}}>Batch</legend>
    <input className="input-field" id='feild' type='text' name='Batch' value={student.Batch} placeholder='Batch' onChange={handleInputChange} required /></fieldset><br></br>
    </div></div>
    
    <button id='edit1' className='editbutton' type='submit'>Submit</button>
        <button id='edit2' className='editbutton' onClick={()=>navigate('/student')}>Cancel</button>
        </form>
    
    </div>
  )
}

export default AddNewStudent
