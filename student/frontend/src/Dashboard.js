import React from 'react'
import './Dashboard.css'
import {useNavigate } from 'react-router-dom';

function Dashboard() {

const navigate  = useNavigate()
  return (
    <section className="body">
    <div className="panal">
    <section className="Welcome">
    <h3>
        Welcome to student Portel
    </h3>
    </section>
    <section className="buttons">
      <button onClick={() => navigate('/All')}>All students</button>
      
      <button onClick={() => navigate('/Add')}> Add students</button>
    </section>
    </div>
    </section>
  )
}

export default Dashboard;