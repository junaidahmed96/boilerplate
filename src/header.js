import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './index.css';
import './hover.css';


class Header extends Component {
  render() {
    
    return (
    
      <div className='header-side hide-on-print'>
    
      
        <NavLink exact to="/InvoiceData" activeClassName='active-navlinks' className='links add-new--fee hvr-underline-from-left' >
        Add And GET Invoice Data
        </NavLink>
       
        
      </div>
     
      );
  }
}


export default Header;
