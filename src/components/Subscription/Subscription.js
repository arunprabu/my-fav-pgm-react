import React from "react";

// Functional Component with inline styles
const Subscription = (props) => {
  console.log(props);
  
  let subscriptionCompStyle = {
    subscriptionStyle: {
      backgroundColor: 'red',
      padding: '10px',
      color: '#fff',
      fontSize: '20px'
    },
    renewStyle: {
      backgroundColor: 'green',
      padding: '10px',
      color: '#fff',
      fontSize: '20px'
    }
  }

  return(
    <div className='container text-left'>
      <h2>Subscription | Inline Styles Example </h2>
      <div>
        <p style={ subscriptionCompStyle.subscriptionStyle }>
          Subscription Ends: { props.endsOn }
        </p>
        <p style={ subscriptionCompStyle.renewStyle }>
          Please renew at 50% discount - Coupon Code: 50PERCENT
        </p>
      </div>
    </div>
  )
};

export default Subscription;