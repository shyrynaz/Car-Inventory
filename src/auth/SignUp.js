import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class signUp extends Component {
	state = {
		email: "",
		password: "",
		firstName: "",
		lastName: "",
	};
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
	};
	render() {
		const { auth } = this.props;
		if (auth.uid) return <Redirect to="/" />;
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white z-depth-0">
					<h5 className="green-text text-darken-3">SignUp</h5>
					<div className="input-field">
						<label htmlFor="FirstName">FirstName</label>
						<input type="text" id="firstName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="LastName">LastName</label>
						<input type="text" id="lastName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="text" id="email" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<button className="btn blue lighten-2 z-depth-1-half">SignUp</button>
					</div>
				</form>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		auth: state.firebase.auth,
	};
};

export default connect(mapStateToProps)(signUp);
