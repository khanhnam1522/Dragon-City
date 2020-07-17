import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccountInfo } from '../store/actions/accountInfo';

class AccountInfo extends Component {
    componentDidMount() {
        this.props.fetchAccountInfo();
    }

    render() {
        return (
        <div>
            <h4>Username: {this.props.accountInfo.username}</h4>
            <h4>Balance: {this.props.accountInfo.balance}</h4>
        </div>
        )
    }
}

export default connect(
  ({ accountInfo }) => ({ accountInfo }),
  { fetchAccountInfo }
)(AccountInfo);