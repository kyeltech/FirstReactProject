import React from 'react'

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
    handleSubmit(e) {
      e.preventDefault();
  
      fetch('http://localhost:3001/send',{
          method: "POST",
          body: JSON.stringify(this.state),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        }).then(
        (response) => (response.json())
         ).then((response)=>{
        if (response.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
        }else if(response.status === 'fail'){
          alert("Message failed to send.")
        }
      })
    }
    render() {
        return(
          <div className="form">
            <h1 className="form-Note"> fill in the form below and thick it purpose:</h1>
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
           <div className="form-Name">
               <label htmlFor="name">Name</label>
               <input type="text" className="form-control" placeholder="Name......" required value={this.state.name} onChange={this.onNameChange.bind(this)} />
           </div>
           <div className="form-Email">
               <label htmlFor="exampleInputEmail1">Email address</label>
               <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Email.." required  value={this.state.email} onChange={this.onEmailChange.bind(this)} />
           </div>
           <div className="form-Message">
               <label htmlFor="message">Message</label>
               <textarea className="form-control" rows="5" placeholder="minimum character  of 10" required value={this.state.message} onChange={this.onMessageChange.bind(this)} />
           </div>
           <button type="submit" className="btn btn-primary">Send it </button>
           </form>
    </div>
 );
}

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }

handleSubmit(event) {
}
}
export default Contact;
