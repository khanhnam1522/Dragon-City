import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomePage from './HomePage';
import AuthForm from './AuthForm';

class Root extends Component {
    render(){
        return (
            this.props.account.loggedIn ? <HomePage/> : <AuthForm/>
        )
    }
};

export default connect(
    ({account}) => ({account}),
    null
)(Root);