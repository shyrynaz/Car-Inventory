import React, { Component } from 'react'

class signIn extends Component {
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
    console.log(this.state);
  }
  render() {
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
          </div>
        </form>
      </div>
    )
  }
}

export default signIn
