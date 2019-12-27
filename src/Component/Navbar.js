import React, { Component } from 'react'
// import Home from './Home'
// import Booking from './Booking'
// import Payment from './Payment'
// import Services from './Services'
// import Contacts from './Contacts'
// import Error from './Error'

import logo from '../images/logo.png'
import {FaAlignRight,FaHome, FaServicestack, FaAlipay, FaBootstrap, FaContao} from "react-icons/fa";
import {Link} from 'react-router-dom'


export default class Navbar extends Component {
    state={
        IsOpen:false
    }
    handleToggle = () =>{
        this.setState({isOpen:!this.state.IsOpen})
    }
    render() {
        return (
          <div className="Sider-Menu">
            <nav className="navbar">
            <div className="nav-center">
            <div className="nav-header">
             <Link to="/">
             <img src={logo} alt="Bookadabra" />
             </Link>
             <button 
             type="button" 
             ClassName="nav-btn"
             onClick={this.handleToggle}>
            <FaAlignRight className="Nav-icon" />
            </button>
            </div>
            <ul className={this.state.isOpen ?
            "nav-links show-nav" : "nav-links"}>
           <li className="nav__items">
            <Link to="/"> Home 
            <FaHome /></Link>
          </li>
          <li className="nav__items">
            <Link to="/Booking"> Booking 
            <FaBootstrap /></Link>
          </li>
                  <li className="nav__items">
            <Link to="/Contacts"> Contacts 
            <FaContao /></Link>
          </li>
                  <li className="nav__items">
            <Link to="/Payment"> Payment 
            <FaAlipay/></Link>
          </li>
                  <li className="nav__items">
            <Link to="/Services" > Services <FaServicestack /></Link>
          </li>
            </ul>
            </div>
            </nav>
            </div>
        );
    }
}
