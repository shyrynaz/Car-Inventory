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
			console.log(':::product added:::', action.product);
			return state;
		case 'ADD_PRODUCT_ERROR':
			console.log('::::add product error:::', action.err);
			return state;
		case 'EDIT_PRODUCT':
			console.log(':::Product edited:::', action.product)
			return state;
		case 'EDIT_PRODUCT_ERROR':
			console.log(':::edit product error', action.err);
			return state;
		case 'DELETE_PRODUCT':
			console.log(':::product deleted:::');
			return {
				...state
			};
		default:
			return state;
	}
};

export default productReducer;
