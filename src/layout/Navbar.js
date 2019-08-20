import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./signedIn";
import SignedOutLinks from "./signedOut";
import { connect } from "react-redux";

const Navbar = () => {
	return (
		<nav className="nav-wrapper blue darken-3">
			<div className="container">
				<Link to="/" className="brand-logo">
					Inventory
				</Link>
				<SignedInLinks />
				<SignedOutLinks />
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => {
  return{

  }
}

export default connect(mapStateToProps)(Navbar);
