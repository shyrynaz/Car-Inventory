import React from "react";
import ProcuctDescription from "./ProductDescription";
import { Link } from "react-router-dom";

const ProductLists = ({ products }) => {
	return (
		<div className="project-list section">
			{products &&
				products.map(product => {
					return (
						<Link to={`/product/${product.id}`}>
							<ProcuctDescription product={product} key={product.id} />
						</Link>
					);
				})}
		</div>
	);
};

export default ProductLists;
