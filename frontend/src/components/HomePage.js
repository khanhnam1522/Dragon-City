import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import Generation from "./Generation";
import Dragon from './Dragon';
import AccountInfo from './AccountInfo'
import {logout} from '../store/actions/account';
import {Link} from 'react-router-dom';

class HomePage extends Component{
    render(){
        return (
            <div className="App">
                <Button className='logout-button' onClick={this.props.logout}>Log Out</Button>
                <h2>DRAGON STACK</h2>
                <Generation/>
                <Dragon/>
                <hr/>
                <AccountInfo/>
                <hr/>
                <Link to='/account-dragons'>Account Dragons</Link>
                <br/>
                <Link to='/public-dragons'>Public Dragons</Link>
            </div>
        )
    }
}

export default connect(null,{logout})(HomePage);