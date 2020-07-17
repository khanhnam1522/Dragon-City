import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../store/actions/account';
import {connect} from 'react-redux';

class Navbar extends Component{
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
                                            </ul>
                                        </div>
                                        <a className="btn_1 d-none d-sm-block" onClick={this.props.logout} href="avascript:void(0);">Log Out</a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </header>
            </div>
        )
    }
}


export default connect(null,{logout})(Navbar);