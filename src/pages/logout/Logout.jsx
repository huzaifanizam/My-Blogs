import React, { useState } from "react";
import "./Logout.css"
import { Link } from "react-router-dom";

export default function Logout() {
    const user = true;
  return (
    <div className="logout">
        
        <span className="logoutTitle">Logout</span>
      <form className="logoutForm">
            <label>Are you sure you want to logout? </label>
            <button className="logoutButton" >Logout</button>
            <button className="cancelButton">
        <Link to="/" className="Link">
          CANCEL
        </Link>
      </button>

      </form>
            <button className="logoutRegisterButton" >
            <Link to="/Register" className="Link">REGISTER</Link>
            </button>
            
    </div>
  )
}
