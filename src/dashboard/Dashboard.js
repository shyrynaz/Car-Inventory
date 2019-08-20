import React, { Component } from 'react';
import Notifications from './Notification';
import ProductList from '../products/ProductLists';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProductList />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}
