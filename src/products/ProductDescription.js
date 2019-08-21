import React from "react";
import { Link } from 'react-router-dom';

const ProductDescription = ({ product }) => {
	return (
		<div className="card z-depth-1 project-summary">
			<div className="card-image">
				<button className="btn-floating halfway-fab waves-effect waves-light blue">
					<i className="material-icons">edit</i>
				</button>
			</div>
			<div className="card-content grey-text text-darken-3">
				<span className="card-title">{product.productName}</span>
				<p>Posted by me</p>
				<p className="grey-text">19th, August, 8AM</p>
			</div>
		</div>
	);
};

export default ProductDescription;
