export const addProduct = product => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
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

export const uploadImage = (image) => {
	return (dispatch, getState, {getFirebase}) => {

	}
}

export const deleteProduct = id => {
  console.log(':::delete:::', id);

	return (dispatch, getState, { getFirestore }) => {
		const firestore = getFirestore();
		const userId = getState().firebase.auth.uid;
		const products = getState().firestore;
		console.log(products);
		

		
		// const previousProducts = getState().firestore.data;
    // const updatedProducts = previousProducts.filter(product => product.id !== id);
    
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
