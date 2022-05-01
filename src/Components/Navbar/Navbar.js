import React from 'react';
import brain from './brain.png';
import './Navbar.css';
function Navbar(){
    return(
    <div className='navbar'>
        <img src={brain}  className='logo'/>
        <h1 className='head'>Calendar for better experience</h1>
    </div>
    );

}
export default Navbar;