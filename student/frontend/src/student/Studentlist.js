import React, { useEffect, useState } from "react";
import "./Studentlist.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Studentlist() {
  const navigate = useNavigate();
  const [Studentlist, setStudentlist] = useState([]);
 

  useEffect(() => {
    fetch("http://localhost:4000/student/all")
      .then((response) => response.json())
      .then((data) => setStudentlist(data))
      .catch((error) => console.log(error));
  }, []);

const handleDelete = (id) => {
console.log(id)
const url = `http://localhost:4000/student/delete/${id}`;
console.log(url)
const conf = window.confirm('Are you sure you want to delete this');
if(conf)                                         
fetch(url, {method: 'DELETE',

}).then((response) => {
    if (!response.ok){
        toast.error("something error")}
        toast.success("successfully deleted")         
window.location.reload()
      })
.catch((error) => {

     console.log(error)
})}
  return (
    <section className="body">
      <div className="panal">
        <section className="Welcome">
          <h3>Student List</h3>
        </section>
        <section className="table">
          <table>
            <thead>
              <tr>
                <th>Student Id</th>
                <th>Student Name</th>
                <th>Class</th>
                <th>Mark</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Studentlist.map((Studentlist) => (
                <tr key={Studentlist._id}>
                  <td>{Studentlist.StudentId}</td>
                  <td>{Studentlist.StudentName}</td>
                  <td>{Studentlist.StudentClass}</td>
                  <td>{Studentlist.StudentMark}</td>
                  <td>
                
                    <button onClick={() => navigate(`/Edit/${Studentlist._id}`)}>edit</button>{" "}
                  </td>
                  <td>
                    <button  onClick={() => handleDelete(Studentlist._id)} >Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => navigate("/add")}>Add New</button>
        </section>
      </div>
    </section>
  );
}

export default Studentlist;
