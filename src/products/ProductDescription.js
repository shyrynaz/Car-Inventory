import React from "react";

const ProductDescription = () => {
	return (
		<div className="card z-depth-1 project-summary">
      <div class="card-image">
          <img src="images/logo192.png" alt="logo.png" />
          <a href="/" className="btn-floating halfway-fab waves-effect waves-light blue"><i className="material-icons">edit</i></a>
      </div>
			<div className="card-content grey-text text-darken-3">
			  	<span className="card-title">Product Name</span>
				<p>Posted by me</p>
				<p className="grey-text">19th, August, 8AM</p>
			</div>
		</div>
	);
};

export default ProductDescription;
