import React, { Component } from 'react';
import { connect } from 'react-redux';

import AccountComponent from '../components/AccountComponent';
import { updateAccount, getAccountById } from '../actions/account';

class Account extends Component {

  onFetchAccountClicked() {
    console.log("Calling..")
    this.props.fetchAccount(1);
  }

  render() {
    console.log(this.props);
    return<AccountComponent account={this.props.account} updateClicked={() => this.onFetchAccountClicked()}/>
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    account: state.account,
    pokerGame: state.pokerGame
  }
}

const mapDispatchToProps = dispatch => ({
  updateAccount: account => {
    const action = updateAccount(account);
    console.log("Action waS: ");
    console.log(action)
    dispatch(action)
  },
  fetchAccount: id => {
    dispatch(getAccountById(id))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account)