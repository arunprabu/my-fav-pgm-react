import React, { Component } from 'react';
import Axios from 'axios';

// Class Comp
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaved: false
    }
  }

  contactFormSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    console.log(this.emailInput.value);
    console.log(this.phoneInput.value);
    const contactData = {
      email: this.emailInput.value,
      phone: this.phoneInput.value
    };

    // API URL: http://jsonplaceholder.typicode.com/users 
    // Method: POST 
    // Use third party REST API Client -- axios or else use JS's native fetch WEB API client ( intro in 2017)
    // npm i axios 
    Axios.post('http://jsonplaceholder.typicode.com/users', contactData)
      .then( ( response) =>{
        console.log(response);
        if(response.status == 201){
          this.setState({
            isSaved: true
          });
        }
      })
      .catch( (error) => {
        console.log(error);
      })
      .finally( () =>{
        console.log( 'Into Finally!');
      } );
  }

  // onTextInputChange = (event) => {  // add onChange event in each field 
  //   //console.log(event.target.value); 
  // }

  render() {
    return (
      <form className='container text-left' onSubmit={this.contactFormSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            ref={ (inputEl) => { this.emailInput = inputEl } } />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInput2">Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Phone" ref={ (inputEl) => { this.phoneInput = inputEl} }
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        { 
          this.state.isSaved? 
          <div className='alert alert-success'>Saved Successfully!</div>
          :
          <div className='alert alert-danger'>Some Error! Try later!!</div>
        }
      </form>
    )
  }
}

export default ContactForm;