const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      console.log('::::login failed:::');
      return{
        ...state,
        authError: 'Login failed '
      }
    case 'LOGIN_SUCCESS':
      console.log('::::Login Success::::');
      return {
        ...state,
        authError: null
      };
    case 'LOGOUT_SUCCESS':
      console.log(':::signout success:::');
      return state
    case 'SIGNUP_SUCCESS':
      console.log('::::signed up successfull::::');
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log(':::sign up failed:::');
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state;
  }
}

export default authReducer;