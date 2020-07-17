import React, {Component} from 'react';
import {connect} from 'react-redux';
import Generation from "./Generation";
import Dragon from './Dragon';
import {logout} from '../store/actions/account';
import Navbar from './Navbar';
import BreadCrumb from './BreadCrumb';

class HomePage extends Component{
    render(){
        return (
            <div className="body_bg">
                <Navbar/>
                <BreadCrumb title="Dragon City" description="Start Collecting Dragon Now"/>

                <section className="upcomming_war" style={{paddingTop:"70px"}} id={'collectDragon'}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section_tittle text-center">
                                    <h2>Upcoming Dragons</h2>
                                </div>
                            </div>
                        </div>
                        <div className="upcomming_war_iner">
                            <div className="row justify-content-center align-items-center h-100">
                                <div className="col-10 col-sm-5 col-lg-3">
                                    <div className="upcomming_war_counter text-center">
                                        <Generation/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Dragon/>

                {/* <DragonAvatar/> */}

            </div>

        )
    }
}

export default connect(null,{logout})(HomePage);




// <div classNameNameName="page">
//     <div classNameNameName="info">
//         <AccountInfo/>
//         <Button classNameNameName='logout-button butt' onClick={this.props.logout}>Log Out</Button>
//         <img src={Logo} alt="logo"></img>
//         <h2>Welcome to the world of the dragons</h2>
//         <h3>In this world, you can collect dragons, trade dragons and breed baby dragons</h3>
//         <h3>Let's start our journey!</h3>
//     </div>

//     <div classNameNameName="generate">
//         <Generation/>
//         <Dragon/>
//     </div>

//     <hr/>
//     <Link to='/account-dragons'>
//         <Button classNameNameName='butt'>
//             Collection
//         </Button>
//     </Link>
//     <br/>
//     <Link to='/public-dragons'>
//         <Button classNameNameName='butt dragon-market'>
//             Dragon Market
//         </Button>
//     </Link>
// </div>