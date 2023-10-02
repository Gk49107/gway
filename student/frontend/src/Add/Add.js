import React, { useState } from 'react'
import './Add.css'
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';



function AddStudent() {
    const navigate = useNavigate()
         const [id,setId]=useState();
         const [name,setname]=useState();
         const [className1,setclassName1] =useState()
         const [mark,setMark]=useState();

function handleSubmit(e) {
 e.preventDefault();
const url = "http://localhost:4000/student/add"
  const data ={ StudentId:id,
               StudentName: name,
               StudentClass:className1,
               StudentMark:mark 
            }
console.log(data)
axios.post(url,data)
.then((res) => {
    toast.success(' student added successfully')
    setTimeout(() => {
    
    navigate('/')
    },2000)
  })
  .catch((err) => {
    toast.error(err.response.data.message)
    console.log(err);
  });
 


}






  return (
<section className="body">
<div className="panal">
<section className="Welcome">
<h3>
   Add Student
</h3>
</section>
<section className="form">
<form onSubmit={(e) => handleSubmit(e)}>
    <section>
        <label htmlFor="id">Std Id </label>
        <input type="text" id="id" placeholder="Student Id" onChange={(e) =>setId(e.target.value)}/> 
    </section>
    <section>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" placeholder="name" onChange={(e) => setname(e.target.value)}/> 
</section>
<section>
    <label htmlFor="className">class</label>
    <input type="text" id="className"  placeholder="className"onChange={(e) => setclassName1(e.target.value)}/>
</section>
<section>
    <label htmlFor="mark">Mark</label>
    <input type="text" id="mark"  placeholder="mark" onChange={(e) => setMark(e.target.value)}/>
</section>
    <button type='submit'>Add</button>

    <h4 onClick={() => navigate('/all')}>All Students</h4>
</form>
 </section>
</div>
</section>
  )
}

export default AddStudent