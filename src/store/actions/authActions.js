export const signIn = (credentials) => {
  return(dispatch, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(()=>{
      dispatch({type: 'LOGIN_SUCCESS'})
    }).catch((err)=>{
      dispatch({type: 'LOGIN_ERROR'}, err);
    })
  }
}

export const signOut = () =>{
  return (dispatch, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(()=>{
      dispatch({type: 'LOGOUT_SUCCESS'})
    }).catch((err) => {
      dispatch({type: 'LOGOUT_ERROR', err})
    })
  }
}

export const signUp = (newUser) => {
  return (dispatch, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    console.log(':::dispatch called :::');
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then(res => {
      return firestore.collection('users').doc(res.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      })
    }).then(()=>{
      dispatch({type: 'SIGNUP_SUCCESS'})
    }).catch((err) => {
      dispatch({type: 'SIGNUP_ERROR', err});
    })
  }
}