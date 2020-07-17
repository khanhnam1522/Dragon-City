import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAccountDragons} from "../store/actions/accountDragons";
import AccountDragonRow from './AccountDragonRow';
import Navbar from './Navbar';
import BreadCrumb from './BreadCrumb';

class AccountDragons extends Component{
    componentDidMount(){
        this.props.fetchAccountDragons();
    }

    render(){
        return(
            <div className="body_bg">
                <Navbar/>
                <BreadCrumb title="My collection" description="My Prestige Dragon Collection"/>
                
                {
                    this.props.accountDragons.dragons.map(dragon => {
                        return (
                            <div key={dragon.dragonId}>
                                <AccountDragonRow dragon={dragon}  />
                            </div>
                        )
                    })
                }
                <section className="padding_top"/>


            </div>
        );
    }
}

export default connect(
    ({accountDragons}) => ({accountDragons}),
    {fetchAccountDragons}
)(AccountDragons);





