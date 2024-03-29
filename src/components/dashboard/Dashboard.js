import React, { Component } from "react";
// import Notifications from "./Notification";
import ProductList from "../products/ProductLists";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
	render() {
		const { products, auth } = this.props;
		// console.log(products);
		if (!auth.uid) return <Redirect to="/login" />;
		return (
			<div className="Dashboard container">
				<div className="row">
					<ProductList products={products} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
	return {
		products: state.firestore.ordered.products,
		auth: state.firebase.auth,
	};
};
export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{
			collection: "products",
		},
	])
)(Dashboard);
