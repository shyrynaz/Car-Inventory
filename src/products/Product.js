import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const Product = props => {
	const { product, auth } = props;
	if (!auth.uid) return <Redirect to="/login" />;
	if (product) {
		return (
			<div className="container section project-details">
				<div className="card z-depth-2">
					<div className="card-image">
						<img src={product.url} alt="Product" />
						<button className="btn-floating halfway-fab waves-effect waves-light blue">
							<i className="material-icons">edit</i>
						</button>
					</div>
					<div className="card-content">
						<span className="card-title">{product.productName}</span>
						<p>{product.productDetails}</p>
					</div>
					<div className="card-action grey lighten-4 grey-text">
						<div>
							Posted BY {product.merchantFirstName} {product.merchantSecondName}
						</div>
						<div> Date: {moment(product.StartSellDate.toDate()).format("ll")}</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container center">
				<p>Loading...</p>
			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const products = state.firestore.data.products;
	const product = products ? products[id] : null;
	return {
		product: product,
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
)(Product);
