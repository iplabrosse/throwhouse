import React from 'react';
import "./Navbar.css"
import {  Link } from "react-router-dom";

const Navbar= () =>{
  return (
    <header class="header">
    
<div class="mid">
    <ul class="navbar">
    <li>
    <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/About">About</Link>
    </li>
    <li>
    <Link to="/Contact">Contact</Link>
    </li>
    <li>
    <Link to="/Pricing">Pricing</Link>
    </li>
    <li>
    <Link to="/Reserve">Reserve</Link>
    </li>
    <li>
    <Link to="/Waiver">Waiver</Link>
    </li>
    </ul>

</div>

</header>
  );
}
export default Navbar;
