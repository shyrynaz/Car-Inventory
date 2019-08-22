import React, { Component } from "react";
import { editProduct } from "../../store/actions/productActions";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { storage } from "../../config/fbConfig";
// import {storage} from 'firebase'

class EditProduct extends Component {
	state = {
		productName: "",
		model: "",
		quantity: "",
		color: "",
		url: "",
		year: "",
		inStock: false,
  };
  mapProductDetailsToState = (product) => {
    if(product){
      this.setState({
        productName: product.productName ? product.productName : '',
        model: product.model ? product.model : '',
        quantity: product.quantity ? product.quantity : '',
        color: product.color ? product.color : '',
        url: product.url ? product.url : '',
        year: product.year ? product.year : '',
        inStock: product.inStock ? product.inStock : '',
      })
    }
    
  }
  componentDidMount(){
    const {product} = this.props;
    this.mapProductDetailsToState(product)
  }
	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	handleUpload = e => {
		const image = e.target.files[0];
		console.log(image);
		const uploadTask = storage.ref(`images/${image.name}`).put(image);
		uploadTask.on(
			"state_changed",
			snapshot => {
				console.log(":::Uploading:::", snapshot);
			},
			error => {
				// error function ....
				console.log(error);
			},
			() => {
				// complete function ....
				storage
					.ref("images")
					.child(image.name)
					.getDownloadURL()
					.then(url => {
						console.log(url);
						this.setState({ url });
					});
			}
		);
	};

	handleSubmit = e => {
    const {id} = this.props;
		e.preventDefault();
		console.log(this.state);
		this.props.editProduct(id, this.state);
		this.props.history.push("/");
	};
	render() {
    const { auth} = this.props;
    // console.log(this.state);
    // console.log(product);
		if (!auth.uid) return <Redirect to="/login" />;
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white z-depth-0">
					<h5 className="green-text text-darken-3">Edit Product</h5>
					<div className="input-field">
						<label htmlFor="productname">Product Name</label>
						<input type="text" value={this.state.productName} id="productName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="quantity">quantity</label>
						<input type="text" value={this.state.quantity} id="quantity" onChange={this.handleChange} />
					</div>
					<div className="row">
						<div className="input-field col s3">
							<input id="model" value={this.state.model} type="text" onChange={this.handleChange} />
							<label htmlFor="model">Model</label>
						</div>
						<div className="input-field col s3">
							<input id="year" value={this.state.year} type="text" onChange={this.handleChange} />
							<label htmlFor="year">Year</label>
						</div>
						<div className="input-field col s3">
							<input id="color" value={this.state.color} type="text" onChange={this.handleChange} />
							<label htmlFor="color">Color</label>
						</div>
					</div>
					<div className="file-field input-field">
						<div className="btn blue lighten-1 small">
							<span>image</span>
							<input type="file" onChange={this.handleUpload} />
						</div>
						<div className="file-path-wrapper">
							<input className="file-path validate" type="text" placeholder="Upload product image" />
						</div>
					</div>
					<div className="input-field">
						<button className="btn blue lighten-1 z-depth-1-half">Save</button>
					</div>
				</form>
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const products = state.firestore.data.products;
	const product = products ? products[id] : null;
	return {
    product: product,
    id: id,
		auth: state.firebase.auth,
	};
};



const mapDisatchToProps = dispatch => {
	return {
		editProduct: (id, product) => dispatch(editProduct(id, product)),
	};
};

export default compose(
	connect(mapStateToProps, mapDisatchToProps),
	firestoreConnect([
		{
			collection: "products",
		},
	])
)(EditProduct);

