import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import Generation from "./Generation";
import Dragon from './Dragon';
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
                <Link to='/account-dragons'>Account Dragons</Link>
            </div>
        )
    }
}

export default connect(null,{logout})(HomePage);