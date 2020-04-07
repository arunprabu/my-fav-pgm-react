import React from 'react';
import Menu from '../Menu/Menu';

// Functional Comp with Anonymous Function -- Recommended
const Footer = function () {
  const year = 2020;

  return(
    <React.Fragment>
      <div className='text-center'>
        <hr />
        <Menu></Menu>
        <p>Copyright {year} | Arun </p>
      </div>
      <div className='text-center'>
        Happily Made during Lockdown
      </div>
    </React.Fragment>
  )
}

export default Footer;