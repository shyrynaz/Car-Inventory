import React, { Component } from 'react'
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authActions';
import {Redirect} from 'react-router-dom';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
   this.setState({
     [e.target.id]: e.target.value
   })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.signIn(this.state);
  }
  render() {
    const {authError, auth} = this.props;
    if(auth.uid) return <Redirect to="/" />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white z-depth-0">
          <h5 className="green-text text-darken-3">SignIn</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn blue lighten-2 z-depth-1-half">
              SignIn
            </button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials)=>dispatch(signIn(credentials))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (SignIn);
