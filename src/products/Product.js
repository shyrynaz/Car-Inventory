import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from 'react-router-dom';

const Product = props => {
  const { product, auth } = props;
  if(!auth.uid) return <Redirect to="/login" />
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
    auth: state.firebase.auth
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
