import React, { useEffect, useState } from 'react'
import './Edit.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Edit() {
  const {id}= useParams();
 const navigate = useNavigate()
  const [Sid,setSid] =useState('');
  const [name,setname]=useState('');
  const [className1,setclassName1] =useState('')
  const [mark,setMark]=useState(0);

  
  
  
  useEffect(() => {
    fetch(`http://localhost:4000/student/Find/${id}`)
      .then((response) => response.json())
      .then((data) =>{
        setSid(data.StudentId)
        setname(data.StudentName)
        setclassName1(data.StudentClass)
        setMark(data.StudentMark)
      })
      .catch((error) => console.log(error));
  },[id]);






const handleSubmit = (e) =>{
  e.preventDefault();
console.log(name,className1,mark)
const url = `http://localhost:4000/student/edit/${id}`
  const data ={ 
               StudentName: name,
               StudentClass:className1,
               StudentMark:mark 
            }

axios.put(url,data).then((res) => {
    console.log(res);
    toast.success('successfull updated')
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
   Edit Details
</h3>
</section>
<section className="form">
<form onSubmit={(e)=> handleSubmit(e)}>
    <section>
        <label htmlFor="id">Student Id  : </label>
        <span>{Sid}  </span>
    </section>
    <section>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" placeholder="name" value={name} onChange={(e)=> setname(e.target.value)} /> 
</section>
<section>
    <label htmlFor="className">class</label>
    <input type="text" id="className"  value={className1}   placeholder="className" onChange={(e)=> setclassName1(e.target.value)}/>
</section>
<section>
    <label htmlFor="mark">Mark</label>
    <input type="text" id="mark"   value={mark}  placeholder="mark" onChange={(e)=> setMark(e.target.value)}/>
</section>
    <button type='submit'>update</button>
    <h4 onClick={()=> navigate('/all')}>All student</h4>
</form>
 </section>
</div>
</section>
  )
}

export default Edit