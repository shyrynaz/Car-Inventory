import React, { Component } from "react";
import Notifications from "./Notification";
import ProductList from "../products/ProductLists";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
	render() {
		const { products } = this.props;
		// console.log(products);
		return (
			<div className="Dashboard container">
				<div className="row">
					<div className="col s12 m6">
						<ProductList products={products} />
					</div>
					<div className="col s12 m5 offset-m1">
						<Notifications />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
  console.log(state);
	return {
		products: state.firestore.ordered.products,
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
