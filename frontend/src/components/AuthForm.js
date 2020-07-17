import React, {Component} from 'react';
import {Button, FormGroup, FormControl} from 'react-bootstrap';
import {signup, login} from '../store/actions/account';
import {connect} from 'react-redux';
import fetchStates from '../store/reducers/fetchStates';
import Intro from './Intro';

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
            <div className="body_bg">
                <Intro/>
                <section className="upcomming_war">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section_tittle text-center">
                                    <h2>Are you ready?</h2>
                                </div>
                            </div>
                        </div>
                        <div className="upcomming_war_iner">
                            <div className="row justify-content-center align-items-center h-100">
                                <div className="col-10 col-sm-5 col-lg-3">
                                    <div className="upcomming_war_counter text-center">
                                        <h2>Sign In/ Sign Up</h2>
                                        <div className="form" id ={'sectionsignup'}>
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
                                                <Button onClick={this.login} className="btn_1">Log In</Button>
                                                <span className="or"> or </span>
                                                <Button onClick={this.signup} className="btn_1">Sign Up</Button>
                                            </div>

                                            <br/>
                                            <p>{this.Error}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                
            </div>
        );
    }
}

export default connect(({account}) => ({account}), {signup,login})(AuthForm);