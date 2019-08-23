import React, { Component } from "react";
import { addProduct } from "../../store/actions/productActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { storage } from "../../config/fbConfig";
import Spinner from "../../layout/spinner"

class CreateProduct extends Component {
	state = {
		productName: "",
		model: "",
		quantity: "",
		color: "",
		url: "",
		year: "",
		inStock: "",
		uploading: false 
	};
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
				this.setState({uploading: true})
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
						this.setState({ 
							uploading: false,
							url 
						});
					});
			}
		);
	};

	handleSubmit = e => {
		e.preventDefault();
		// console.log(this.state);
		this.props.addProduct(this.state);
		this.props.history.push("/");
	};
	render() {
		const {uploading} = this.state;
		const { auth } = this.props;
		if (!auth.uid) return <Redirect to="/login" />;
		const spinner = uploading ? <Spinner /> : <img src={this.state.url} alt="" />; 
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
					<div className="row">
						<div className="input-field col s3">
							<input id="model" type="text" onChange={this.handleChange} />
							<label htmlFor="model">Model</label>
						</div>
						<div className="input-field col s3">
							<input id="year" type="text" onChange={this.handleChange} />
							<label htmlFor="year">Year</label>
						</div>
						<div className="input-field col s3">
							<input id="color" type="text" onChange={this.handleChange} />
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
						{spinner}
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
