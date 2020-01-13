import React, { Component } from 'react'
// import ServeStore from './Component/ServeStore'


class Services extends Component {
    render() {
        return (
            <div className="Serve">
         <h2> Making sure you understand how our services works</h2>
    <ul>
        <ol>
        <div className="Header">
        <h2>Home Service</h2>
        <h2>USD:$70</h2>
        <p>"perfect for those are busy at home and love be attended to at home."</p> 
        </div>
            </ol> 
            <hr/>
            <ol>
        <div className="Header">
        <h2>Office Service</h2>
        <h2>USD:$100</h2>
        <p>"busy at the office? we can always come and make a quick and nice haircut for you."</p> 
        </div>
            </ol>
            <hr />
        
            <ol>
        <div className="Header">
        <h2></h2>
        <h2>USD:$300</h2>
        <p>"properly need quick attendance whenever you come? call us now and book a spot for yourself and more."</p> 
        </div>
            </ol>
            <hr/>
            <ol>
                <div className="Header">
            <h2>Enquire about </h2>
        <h2>USD:$300</h2>
        <p>we work in collaborationn with many other professional barbers here in nigeria.</p> 
        </div>
            </ol>
        
        </ul>
{/*        
    {
        id:"2",
        name:"OfficeService",
        price:"0",
        description:"busy at the office? we can always come attend to ahoir services over there."
    },
    {
        id:"3",
        name:"Booking",
        price:"300",
        description:"properly need quick attendance whenever you come? call us now and book a spot."
    },
    {
        id:"4",
        name:"Booking for more",
        price:"2",
        description:" click on these to know ethe cost and how many soace you could get down for the duration of time"
    },
    {
        id:"5",
        name:"Have any style in mind? ask us if we are up for it.",
        Price:"3.59",
        description:"we work in collaborationn with many other professional barbers here in nigeria"
    },
} */}
            </div>
        )
    }
}
export default Services
