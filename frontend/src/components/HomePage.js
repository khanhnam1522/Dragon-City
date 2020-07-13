import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import Generation from "./Generation";
import Dragon from './Dragon';
import AccountInfo from './AccountInfo'
import {logout} from '../store/actions/account';
import {Link} from 'react-router-dom';
import Logo from '../images/Logo.png';

class HomePage extends Component{
    render(){
        return (
            <div className="page">
                <div>
                    <AccountInfo/>
                    <Button className='logout-button' onClick={this.props.logout}>Log Out</Button>
                    <img src={Logo} alt="logo"></img>
                    <hr/>
                    <h2>Welcome to the world of the dragons</h2>
                </div>

                <Generation/>
                <Dragon/>
                <hr/>
                <hr/>
                <Link to='/account-dragons'>Account Dragons</Link>
                <br/>
                <Link to='/public-dragons'>Public Dragons</Link>
            </div>
        )
    }
}

export default connect(null,{logout})(HomePage);