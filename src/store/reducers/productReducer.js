const initialState = {
	products: [
		{ id: 1, productName: "steve", quantity: 20, instock: true, price: 30, details: "Abra cadabra" },
		{ id: 2, productName: "naz", quantity: 20, instock: true, price: 30, details: "learinig from net ninja" },
		{ id: 3, productName: "shiri", quantity: 20, instock: true, price: 30, details: "hoping to work at jenga" },
	],
};

const productReducer = (state = initialState, action) => {
	switch(action.type){
		case 'ADD_PRODUCT':
			console.log('product added', action.product);
			break;
		default:
			break;
	}
	return state;
};

export default productReducer;
