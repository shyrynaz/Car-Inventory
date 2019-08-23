export const addProduct = product => {
	return (dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const merchantId = getState().firebase.auth;

		firestore
			.collection("products")
			.add({
				...product,
				merchantFirstName: profile.firstName,
				merchantSecondName: profile.lastName,
				merchantId: merchantId.uid,
				StartSellDate: new Date(),
			})
			.then(() => {
				dispatch({ type: "ADD_PRODUCT", product });
			})
			.catch(err => {
				dispatch({ type: "ADD_PRODUCT_ERROR", err });
			});
	};
};

export const editProduct = (id, product) => {
	console.log(product);
	return (dispatch, { getFirestore}) => {
		const firestore = getFirestore();
		console.log('::product:::', product);

		firestore.collection('products').doc(id).update(product).then(()=>{
			dispatch({type: 'EDIT_PRODUCT', product})
		}).catch(err => {
			dispatch({type: 'EDIT_PRODUCT_ERROR', err})
		})
	}
}

export const deleteProduct = id => {
  console.log(':::delete:::', id);

	return (dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();
		const products = getState().firestore;
		console.log(products);
    
		firestore
			.collection("products")
			.doc(id)
			.delete()
			.then(() => {
				dispatch({ type: "DELETE_PRODUCT" });
			})
			.catch(err => {
				dispatch({ type: "DELETE_PRODUCT_ERROR", err });
			});
	};
};
