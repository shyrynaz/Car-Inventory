import React from 'react';
import { NavLink } from 'react-router-dom';
const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/register">Signup</NavLink></li>
      <li><NavLink to="/login">Log In</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks;