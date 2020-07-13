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
                <div className="info">
                    <AccountInfo/>
                    <Button className='logout-button butt' onClick={this.props.logout}>Log Out</Button>
                    <img src={Logo} alt="logo"></img>
                    <h2>Welcome to the world of the dragons</h2>
                    <h3>In this world, you can collect dragons, trade dragons and breed baby dragons</h3>
                    <h3>Let's start our journey!</h3>
                </div>

                <div className="generate">
                    <Generation/>
                    <Dragon/>
                </div>

                <hr/>
                <Link to='/account-dragons'>
                    <Button className='butt'>
                        Collection
                    </Button>
                </Link>
                <br/>
                <Link to='/public-dragons'>
                    <Button className='butt dragon-market'>
                        Dragon Market
                    </Button>
                </Link>
            </div>
        )
    }
}

export default connect(null,{logout})(HomePage);