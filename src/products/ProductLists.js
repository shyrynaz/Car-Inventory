import React from "react";
import ProcuctDescription from "./ProductDescription";
import { Link } from "react-router-dom";

const ProductLists = ({ products }) => {
	return (
		<div className="project-list section">
			{products &&
				products.map(product => {
					return (
						<Link to={`/product/${product.id}`} key={product.id}>
							<div className="col s12 m6">
								<ProcuctDescription product={product} />
							</div>
						</Link>
					);
				})}
		</div>
	);
};

export default ProductLists;
