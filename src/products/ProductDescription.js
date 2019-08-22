import React from "react";
// import { Link } from 'react-router-dom';
import moment from 'moment';
import {connect} from 'react-redux';
import { deleteProduct } from "../store/actions/productActions";

const ProductDescription = ( props ) => {
	// console.log(product.id);
	const {product, deleteProduct} = props;
	return (
		<div className="card z-depth-1 project-summary">
			<div className="card-image">
				<img src={product.url} alt="Product" />
				<button className="btn-floating halfway-fab waves-effect waves-light blue">
					<i className="material-icons">edit</i>
				</button>
			</div>
			<div className="card-content grey-text text-darken-3">
				<span className="card-title">{product.productName}</span>
				<p>Posted by {product.merchantFirstName} {product.merchantSecondName}</p>
				<p className="grey-text">Start Sell Date: {moment(product.StartSellDate.toDate()).format('ll')}</p>
			</div>
			<button className="btn red " onClick={() => deleteProduct(product.id)}>DELETE</button>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
  return{
    deleteProduct: (id) => dispatch(deleteProduct(id))
  }
}

export default connect(null, mapDispatchToProps)(ProductDescription);
