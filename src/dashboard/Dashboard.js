import React, { Component } from "react";
import Notifications from "./Notification";
import ProductList from "../products/ProductLists";
import { connect } from "react-redux";

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
	return {
		products: state.product.products,
	};
};
export default connect(mapStateToProps)(Dashboard);
