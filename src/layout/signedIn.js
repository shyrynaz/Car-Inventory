import React from 'react';
import { NavLink } from 'react-router-dom';
const SignedInLInks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/addProduct">New Product</NavLink></li>
      <li><NavLink to="/">Log Out</NavLink></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">SM</NavLink></li>
    </ul>
  )
}

export default SignedInLInks;