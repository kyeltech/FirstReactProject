import React from 'react';
import {Row, Col,} from 'react-bootstrap'

class Book extends React.Component{
    constructor(props) {
        super();
            this.state = {
                total:100,
        };
    }
    render() {
        return (
          <Row className="show-grid">
          <Col md={6}>Subtotal</Col>
          <Col md={6}> {`$${this.state.total}`}
          </Col>
          </Row>
        );
    }
}
export default Book
