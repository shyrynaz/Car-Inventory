import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const Product = props => {
	const { product, auth } = props;
	console.log(product);
  if (!auth.uid) return <Redirect to="/login" />;
	if (product) {
		return (
			<div className="container section project-details">
				<div className="card z-depth-2">
					<div className="card-image">
						<img src={product.url} alt="Product" />
					</div>
					<div className="card-content">
						<span className="card-title">
							<b>{product.productName}</b>
						</span>
						<p>{product.productDetails}</p>
					</div>
					<div className="card-action row grey lighten-4 black-text">
						<div className="col s3">
							<b>Model:</b> {product.model}
						</div>
						<div className="col s3">
							<b>Year:</b> {product.year}
						</div>
						<div className="col s3">
							<b>Color: </b>
							{product.color}
						</div>
						<div className="col s3">
							{" "}
							<b>Date:</b> {moment(product.StartSellDate.toDate()).format("ll")}
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (<Redirect to="/" />
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
