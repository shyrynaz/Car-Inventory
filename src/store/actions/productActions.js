export const addProduct = (product) => {
  return(dispatch, getState) => {
    // make async call to database
    dispatch({type: 'ADD_PRODUCT', product});
  }
}