import React, {Component} from 'react';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import {signup, login} from '../store/actions/account';
import {connect} from 'react-redux';
import fetchStates from '../store/reducers/fetchStates';
import Logo from '../images/Logo.png';

class AuthForm extends Component{
    state = {username: '', password: '', buttonClicked: false};

    updateUsername = event => {
        this.setState({username:event.target.value});
    }

    updatePassword = event => {
        this.setState({password: event.target.value});
    }

    signup = () => {
        this.setState({buttonClicked: true});
        const {username, password} = this.state;
        this.props.signup({username, password});
    }

    login = () => {
        this.setState({buttonClicked: true});
        const {username, password} = this.state;
        this.props.login({username, password});    
    }

    get Error() {
        if (this.state.buttonClicked && this.props.account.status === fetchStates.error){
            return <div className="error-message">{this.props.account.message}</div>
        }
        return null;
    }

    render() {
        return (
            <div className="authForm">
                <img src={Logo} alt="logo"></img>

                <div className="form">
                    <FormGroup>
                        <FormControl 
                            type='text' 
                            value={this.state.username} 
                            placeholder='username'
                            onChange={this.updateUsername}
                            className="input-field"
                        />
                    </FormGroup>

                    <FormGroup>
                        <FormControl 
                            type='password' 
                            value={this.state.password} 
                            placeholder='password'
                            onChange= {this.updatePassword}
                            className="input-field"
                        />
                    </FormGroup>

                    <div className="buttons">
                        <Button onClick={this.login} className="butt">Log In</Button>
                        <span className="or"> or </span>
                        <Button onClick={this.signup} className="butt">Sign Up</Button>
                    </div>

                    <br/>
                    {this.Error}

                </div>
                
            </div>
        );
    }
}

export default connect(({account}) => ({account}), {signup,login})(AuthForm);