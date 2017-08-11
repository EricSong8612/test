import React from "react";
import Link from 'gatsby-link';

export default ({ children }) =>
  <div >
    <Link to='/'>
      <img src='https://s3.amazonaws.com/pinkberry-menu/logo.png' alt='logo'/>
    </Link>
    {children()}
  </div>
