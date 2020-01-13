import React  from 'react'
import Button, { Spinner } from 'react-bootstrap'
import Book from './Book'
import { render } from '@testing-library/react'

class ButtonAction extends React.Component {
  constructor() {
    super()
    this.state ={
      buttonAction: Book
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(prevState => {
      return {
        buttonAction: !prevState.buttonAction
      }
    })
  }
  render(){
    let buttonText = this.state.buttonAction ? "Book" : "Booked"
    return(
      <div>
      <button onClick={this.handleClick} className="click">{buttonText}</button>
      </div>
    )
  }
}
  export default ButtonAction
