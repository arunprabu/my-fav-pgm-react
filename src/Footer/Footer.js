import React from 'react';
import Menu from '../Menu/Menu';

// Functional Comp with Anonymous Function -- Recommended
const Footer = function () {
  const year = 2020;

  return (
    <div className='text-center'>
      <hr />
      <Menu></Menu>
      <p>Copyright {year} | Arun </p>
    </div>
  )
}

export default Footer;