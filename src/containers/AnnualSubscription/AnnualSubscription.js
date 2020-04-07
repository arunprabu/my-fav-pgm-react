import React, { Component } from 'react'


class AnnualSubscription extends Component{
  constructor(props){
    super(props);
    this.state = {
      lbl6Months: 'Subscribe for 6 Months',
      lbl12Months: 'Subscribe for 12 Months',
    }
  }

  // method for the handler 
  sixMonthsSubscribeHandler(){
    console.log(this);
    this.setState({
      lbl6Months: '6 Months Subscripion Active'
    })
  }

  // Arrow function
  annualSubscribeHandler = () => {
    console.log(this);
    this.setState({
      lbl12Months: '12 Months Subscripion Active'
    });
  }

  render() {
    return (
      <div>
        <h2>Annual Subscription | Event Binding (2 Ways )</h2>
        <button type='button' 
          className='btn btn-success' 
          onClick={this.sixMonthsSubscribeHandler.bind(this)}>
           {this.state.lbl6Months}</button>
        <button type='button' 
          className='btn btn-success'
          onClick={this.annualSubscribeHandler}>{this.state.lbl12Months}</button>
      </div> 
    )
  }
}

export default AnnualSubscription;