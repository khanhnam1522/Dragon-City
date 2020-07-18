import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../store/actions/account';
import {connect} from 'react-redux';
import history from '../history';

class Navbar extends Component{
    logout = () => {
        this.props.logout();
        if(this.props.account.status !== 'error'){
            history.push('/');
        }
    }

    render(){
        return (
            <div>
                <header className="main_menu single_page_menu">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <nav className="navbar navbar-expand-lg navbar-light">
                                        <Link to='/' className="navbar-brand"><img src="img/logo.png" alt="logo" style={{width:"65px", height:"65px"}}/></Link>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="menu_icon"><i className="fas fa-bars"></i></span>
                                        </button>
    
                                        <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                                            <ul className="navbar-nav">
                                                <li className="nav-item">
                                                    <Link to='/' className="nav-link">Home</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/account-dragons' className="nav-link">My Collection</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link to='/public-dragons' className="nav-link">Dragon Market</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <a onClick={this.logout} href="avascript:void(0);" className="nav-link">Log Out</a>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </header>
            </div>
        )
    }
}


export default connect(({account}) => ({account}),{logout})(Navbar);