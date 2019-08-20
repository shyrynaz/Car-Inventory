export const addProduct = (product) => {
  return(dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('products').add({
      ...product,
      merchantFirstName: 'steve',
      merchantSecondName: 'Naz',
      merchantId: 123,
      StartSellDate: new Date() 
    }).then(() => {
      dispatch({type: 'ADD_PRODUCT', product});
    }).catch((err)=>{
      dispatch({type: 'ADD_PRODUCT_ERROR', err})
    })
   
  }
}