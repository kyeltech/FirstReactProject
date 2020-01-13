import React from 'react';
import ItemDetails from './Booking/ItemDetails'
// import Book from './Component/Booking/Book'
import { Container } from 'react-bootstrap'
import PickupSaving from './PickupSaving'
import {CardImg, CardText, CardBody, CardTitle} from 'reactstrap'
import ButtonAction from './Booking/ButtonAction'


class Booking extends React.Component{
constructor(props) {
super(props);
this.state = {
total:100,
PickupSaving: -3.85,
// click: 'Booked'
}
}
click() {
    this.setState({ click:'Booked'})
}
// onClickData(Button) {
//     if(this.state.Booked.indexOf(Button) >-1)
//     {
//         this.setState({
//             Button:
//             this.state.Button.concat(Button),Booked:this.state.Booked.filter(res => res != Button)
//         })
//     }   else{
//         this.setState({
//             Booked:
//             this.state.Booked.concat(Button),
//             Button:
//             this.state.Button.filter(res =>
//                 res != Button)
//         })
//     }
// }
render() {
return (
<div className="Card">
<Container className="purchase-card">
<CardImg
src="https://www.pinterest.com/pin/581738476852886420/" 
width={100}
height={100}
alt="card images"
/> 
<CardBody>
<CardTitle>Style Name</CardTitle>
<CardText>
</CardText>
<ButtonAction />
</CardBody>
<hr />
<stripeCheckout />
{/* <Book price={this.state.total.toFixed(2)} /> */}
<PickupSaving price={this.state.PickupSaving} />

<ItemDetails />
<hr />
</Container>
</div>
)   
}
}


export default Booking

