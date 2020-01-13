import React, { Component } from 'react'
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

var styles = {
    pickupSavings: {
        textDecoration: 'underline'
    },
    totalSavings: {
        color: 'gray',
        fontWeight: 800
    }
}

export default class PickupSaving extends Component {
    render() {
        const tooltip =(
            <Tooltip id="tooltip">
            <p> hello</p>
        </Tooltip>
        );
      
        return (
          
                <Row className="show-grid">
                <Col md={6}> morethan One
                <OverlayTrigger placement="bottom" overlay={Tooltip}>
                <div style={styles.pickupSavings}pickup savings>
                </div>
                </OverlayTrigger>
                </Col>
                <Col style={styles.totalSavings} md={6}> 
                {`$${this.props.price}`}
                </Col>
                </Row>

        );
    }
}