import React from 'react';
import "../App.css"


function Dashboard(){
    return(
        <>
        <div className="dashboard">
        <h1 id="wlm">Welcome <span id="name">{localStorage.getItem('name')}</span> </h1>

        <h3>Personal Details</h3>
        <h4>Email: {localStorage.getItem('email')}</h4>
        </div>
        </>
    )
}
export default Dashboard;