import React from 'react';
import {BrowserRouter as Router, Route, Link} from
"react-router-dom";
// import Navbar from './Component/Navbar'
import Home from './Home'
import Booking from './Booking'
import Payment from './Payment'
import Services from './Services'
import Contacts from './Contacts'
import Error from './Error'
import { FaHome, FaServicestack, FaAlipay, FaBootstrap, FaContao, FaAngleDoubleRight} from 'react-icons/fa'

// import Header from './header_footer/Header'

export default function App() {
  return (
  <Router>
   <div className="Sider-Menu"> 
       <nav className="nav__cont"> 
        <ul className="nav">
        <li className="nav__items">
           <Link to="/">  
           <FaAngleDoubleRight /></Link>
           </li>
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
      </nav>  
            {/* <Navbar /> */}
          

              <Route path="/"exact>
              <Home />
              </Route>
              <Route path="/Services">
              <Services />
              </Route> 
              <Route path="/contacts">
              <Contacts />
              </Route>
              <Route path="/Payment">
              <Payment />
              </Route>
              <Route path="/Booking">
              <Booking />
              </Route>
              <Route component={Error} />
  
 </div> 
 
   </Router>
    
   );
   }