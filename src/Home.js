import React from 'react'
import Banner from './Component/Banner'
import home from './images/home.jpg'
import Logo from './images/logo.png'
import Massage from './HomeHeader/Massage'
import NailSalon from './HomeHeader/NailSalon'
import Makeup from './HomeHeader/Makeup'
import Fitness from './HomeHeader/Fitness'
// import Banner from './Component/Banner'
// import {BrowserRouter as Link, Router, Route} from "react-router-dom";


 function Home (props){
            return (
                <div>
                    <img className="Logo" src={Logo}
                    alt="bookadabra"/>
                    <input type="text" className="input" placeholder="Search..." />
                    {/* <Router>
                  <nav>
                  <ul>
                      <li>
                          <Link to="/Massage">Massage</Link>
                          </li>
                          <li>
                              <Link to="/NailSalon">Nail Salon</Link>
                          </li>
                     <li>
                         <Link to="/Makeup">Make Up</Link>
                     </li>
                     <li>
                         <Link to="/Fitness">Fitness</Link>
                     </li>
                  </ul>
                  </nav>
                  <Route path="/Fitness">
                      <Fitness />
                  </Route>
                  </Router> */}
                  
                <div className="Home-Content">
                    
                    <img className="img" src={home} alt="Sulla Swdia del"/>
                    <h1 className="Home">Home service</h1>
                    <h1 className="Details">Details</h1>
                    <h1 className="Book">Book</h1>

<div className="hair-cut">
 <h1 className="haircut-word"> Hair styles you may like</h1>
 <Banner 
  contact=
  {{
  name:"side-style",
  imgUrl:"https://www.menshairstylestoday.com/wp-content/uploads/2019/02/Best-Haircuts-For-Men.jpg"}}
 />
 <Banner  
  contact=
  {{
    item:"unknown",
  imgUrl:"https://www.menshairstylestoday.com/wp-content/uploads/2019/02/Best-Haircuts-For-Men.jpg"}}
 />
 <Banner
 contact=
 {{ 
 style:"unknown", 
 imgUrl:"https://www.menshairstylestoday.com/wp-content/uploads/2019/02/Best-Haircuts-For-Men.jpg"}}
 />
 <Banner
 contact=
 {{
  cut:"unknown",
  imgUrl:"https://www.menshairstylestoday.com/wp-content/uploads/2019/02/Best-Haircuts-For-Men.jpg"
 }} 
 
 />
 <Banner
 contact={{
  make:"unknown",
  imgUrl:"https://www.menshairstylestoday.com/wp-content/uploads/2019/02/Best-Haircuts-For-Men.jpg"
 }}
 
 />
 </div>
 
                </div>
                </div>
                
            )   
        }
        export default Home