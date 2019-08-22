import React, { Component } from "react";
import { addProduct } from "../store/actions/productActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {storage} from '../config/fbConfig';
// import {storage} from 'firebase'


class CreateProduct extends Component {
	state = {
		productName: "",
		price: "",
		quantity: "",
		image: null,
		url: '',
		productDetails: "",
		inStock: false,
	};
	handleChange = e => {
		
		this.setState({
			[e.target.id]: e.target.value,
		});
	};
	
	handleUpload = (e) => {

		const image = e.target.files[0];
		console.log(image);
		const uploadTask = storage.ref(`images/${image.name}`).put(image);
		uploadTask.on('state_changed', 
		(snapshot) => {
			// progrss function ....
			console.log(':::Uploading:::', snapshot);
			// const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
			// this.setState({progress});
		}, 
		(error) => {
				 // error function ....
			console.log(error);
		}, 
	() => {
			// complete function ....
			storage.ref('images').child(image.name).getDownloadURL().then(url => {
					console.log(url);
					this.setState({url});
			})
	});
}
	
	handleSubmit = e => {
		e.preventDefault();
		// console.log(this.state);
		this.props.addProduct(this.state);
		this.props.history.push("/");
	};
	render() {
		const { auth } = this.props;
		if (!auth.uid) return <Redirect to="/login" />;
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white z-depth-0">
					<h5 className="green-text text-darken-3">Add Product</h5>
					<div className="input-field">
						<label htmlFor="productname">Product Name</label>
						<input type="text" id="productName" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="quantity">quantity</label>
						<input type="text" id="quantity" onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="price">price</label>
						<input type="text" id="price" onChange={this.handleChange} />
					</div>
					{/* <div className="input-field">
            <label htmlFor="image">image</label>
            <input type="image" id="image" onChange={this.handleChange} alt="image"/>
          </div> */}
					<div className="input-field">
						<label htmlFor="productDetails">Details</label>
						<textarea className="materialize-textarea" id="productDetails" onChange={this.handleChange} />
					</div>
					<div className="file-field input-field">
						<div className="btn blue lighten-1 small">
							<span>image</span>
							<input type="file" onChange={this.handleUpload} />
						</div>
						<div className="file-path-wrapper">
							<input className="file-path validate"  type="text" placeholder="Upload product image"  />
						</div>
					</div>
					<div className="input-field">
						<button className="btn blue lighten-1 z-depth-1-half">Add Product</button>
					</div>
				</form>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		auth: state.firebase.auth,
	};
};

const mapDisatchToProps = dispatch => {
	return {
		addProduct: product => dispatch(addProduct(product)),
	};
};

export default connect(
	mapStateToProps,
	mapDisatchToProps
)(CreateProduct);
