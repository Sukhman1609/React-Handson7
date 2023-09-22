import React from 'react'
import {useSelector} from 'react-redux'
import { NavLink,useNavigate } from 'react-router-dom'
const Student = () => {
    const data = useSelector((state)=>state.Stu_Data)
    console.log(data)
    const Navi=useNavigate();
  return (
    <div><h1>Student</h1>
    <button className='studentButton' onClick={()=>Navi('/addnewstudent')}>Add new Student</button>
    <table cellPadding={'10px'} cellSpacing={'0px'}>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
{data.map((item,index)=>{
        return(
            <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Course}</td>
                <td>{item.Batch}</td>
                <td><NavLink to='/editstudent' state={{index}}>Edit</NavLink></td>
            </tr>
         )
      })}
            </table></div>
           
  )
}

export default Student