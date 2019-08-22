import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './layout/Navbar';
import Dashboard from './dashboard/Dashboard';
import Product from './products/Product';
import SignIn from './auth/signIn';
import SignUp from './auth/SignUp';
import CreateProduct from './products/CreateProduct';
import EditProduct from "./products/EditProduct";
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route path="/product/:id" component={Product} />
					<Route path="/login" component={SignIn} />
					<Route path="/register" component={SignUp} />
					<Route path="/addProduct" component={CreateProduct} />
					<Route path="/editProduct/:id" component={EditProduct} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
