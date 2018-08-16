import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Account from '../records/Account';

export default class AccountComponent extends Component {

  render() {
    const { account, updateClicked } = this.props;
    return (
      <div>
        <h3>{account.firstName}'s account</h3>
        <p>Email: {account.email}</p>
        <p>Phone Number: {account.phoneNumber}</p>
        <button onClick={updateClicked}>Fetch account!</button>
      </div>
    );
  }
}

AccountComponent.propTypes = {
  account: PropTypes.instanceOf(Account).isRequired,
  updateClicked: PropTypes.func.isRequired
};
