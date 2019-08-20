import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const Product = props => {
  const { product } = props;
  if(product){
    return(<div className="container section project-details">
    <div className="card z-depth-2">
      <div className="card-content">
        <span className="card-title">{product.productName}</span>
        <p>
          {product.productDetails}
        </p>
      </div>
      <div className="card-action grey lighten-4 grey-text">
        <div>Posted BY {product.merchantFirstName} {product.merchantSecondName}</div>
        {/* <div>{product.StartSellDate}</div> */}
      </div>
    </div>
  </div>
    )
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
