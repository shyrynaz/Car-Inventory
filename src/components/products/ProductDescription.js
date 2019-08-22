import React from "react";
// import { Link } from 'react-router-dom';
import moment from "moment";
import { connect } from "react-redux";
import { deleteProduct } from "../../store/actions/productActions";
import { Link } from 'react-router-dom';

const ProductDescription = props => {
	// console.log(product.id);
	const { product, deleteProduct } = props;
	return (
		<div className="card z-depth-1 project-summary">
			<div className="card-image">
				<img src={product.url} alt="Product" />
				<Link to={`/editProduct/${product.id}`}>
					<button className="btn-floating halfway-fab waves-effect waves-light blue">
						<i className="material-icons">edit</i>
					</button>
				</Link>
			</div>
			<div className="card-content grey-text text-darken-3">
				<span className="card-title">{product.productName}</span>
				<p>
					Merchant: {product.merchantFirstName} {product.merchantSecondName}
				</p>
				<p className="grey-text">Start Sell Date: {moment(product.StartSellDate.toDate()).format("ll")}</p>
			</div>
			<button className="btn red " onClick={() => {
				   deleteProduct(product.id)
				}}>
				<i className="material-icons">delete</i>
			</button>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		deleteProduct: id => dispatch(deleteProduct(id)),
	};
};

export default connect(
	null,
	mapDispatchToProps
)(ProductDescription);
