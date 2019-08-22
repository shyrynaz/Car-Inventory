import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Product from './components/products/Product';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/SignUp';
import CreateProduct from './components/products/CreateProduct';
import EditProduct from "./components/products/EditProduct";
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
