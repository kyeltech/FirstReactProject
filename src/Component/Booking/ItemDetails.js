import React, { Component } from 'react'
import { Button, Collapse, Media,  Row, Col} from 'react-bootstrap'


export default class ItemDetails extends Component {
constructor(){
super()
this.state = {
open: false
};
}
render() {
return (
    
<div>
<Button className="item-details-button" bsStyle="link" onClick={() =>this.setState({open: !this.state.open})}>
{this.state.open === false ? `see` : `Hide`} Barber details
{this.state.open === false ? `+` : `-`}
</Button>
<hr />
<Collapse in={this.state.open}>
<div>
<Media>
    <img 
width={100}
height={100}
src="http://barber.premiumcoding.com/barber-new/wp-content/uploads/2013/12/barber-team-1.jpg"
alt="Thumbnail" />


<Media.Body>
<h5> Bob Lorenta</h5>
<p> 5 years experience in barbing with different varieties of haircut.</p>
<Row className="show-grid">
<Col md={6}>
    <strong> {`$${this.props.price}`}</strong>
    <br/>
    <strong className="price-strike"> {`$${this.props.price}`} </strong>
</Col>
<Col md={6}>TimeFrame:1hr</Col>
</Row>
</Media.Body></Media></div></Collapse>
</div>
)
}
}
