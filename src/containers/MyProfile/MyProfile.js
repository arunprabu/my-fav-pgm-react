import React, { Component } from 'react';

class MyProfile extends Component{
  constructor(props){
    super(props);
    this.state = {
      userName: "Arun",
      accountCreated: '4/May/2018'
    }
  }

  profileNameChangeHandler(e){
    console.log('typed', e.target.value);
    this.setState(
      {
        userName: e.target.value
      }
    )
  }

  render() {
    return (
      <div>
        <h2>Update Profile | Two Way Binding Example</h2>
        { /* the following input field without 
          onChange will show error in console 
        and it will be immutable */ }
        <input type='text' value={this.state.userName} 
          onChange={this.profileNameChangeHandler.bind(this)} />
        <p>Username: {this.state.userName} </p>
        <span>
          Account Created On: {this.state.accountCreated}
        </span>
      </div> 
    )
  }
}

export default MyProfile;