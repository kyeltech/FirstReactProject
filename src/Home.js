import React from 'react'
import Banner from './Component/Banner'
import home from './Images/home.jpg'
import Logo from './Images/logo.png'
import { FaAngleDoubleRight } from 'react-icons/fa'
// import Massage from './HomeHeader/Massage'
// import NailSalon from './HomeHeader/NailSalon'
// import Makeup from './HomeHeader/Makeup'
// import Fitness from './HomeHeader/Fitness'
// import Banner from './Component/Banner'
// import {BrowserRouter as Link, Router, Route} from "react-router-dom";


 class Home extends React.Component{
     constructor(props){
         super(props);
         this.state = {show: true};
     }
     onclick =() => {
         this.setState({
             show: !this.state.show 
         });
     }
     render(){ 
         const { show } =this.state;

         const children = show ? ( <div className="content">           <FaAngleDoubleRight /></div>) : null;
     
            return (
                // <div>
                //     <dl>
                //         <dt>
                //             Animate:
                //         </dt>
                //     <dd>
                //     <button className="k-button" onClick={this.onClick}><FaAngleDoubleRight />
                //     </button>
                //     </dd>
                //     </dl>
                //     <slide>
                //         {children}
                //     </slide>
                <div>
                    <img className="Logo" src={Logo}
                    alt="bookadabra"/>
                    <input type="Search" className="input" placeholder= "Search..." />
                     
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
  name:"Fade and",
 imgUrl:"https://www.menshairstylestoday.com/wp-content/uploads/2019/02/Best-Haircuts-For-Men.jpg" }}
 />
 <Banner  
  contact=
  {{
    item:"unknown",
  imgUrl:"https://www.menshairstylestoday.com/wp-content/uploads/2019/02/Best-Haircuts-For-Men.jpg"}}
 />
 <Banner className="banner"
 contact=
 {{ 
 style:"unknown", 
 imgUrl:"https://www.menshairstylestoday.com/wp-content/uploads/2019/02/Best-Haircuts-For-Men.jpg"
 }}
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
  make:"view",
  imgUrl:"https://www.menshairstylestoday.com/wp-content/uploads/2019/02/Best-Haircuts-For-Men.jpg"
 }}
 />
 
 </div>
 
</div>
</div>
            
                
            )   
        }
    }
        export default Home