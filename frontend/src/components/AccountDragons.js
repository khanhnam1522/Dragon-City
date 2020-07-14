import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchAccountDragons} from "../store/actions/accountDragons";
import AccountDragonRow from './AccountDragonRow';
import collection from '../images/collection.png'
import {Button} from 'react-bootstrap';
import AccountInfo from './AccountInfo'

class AccountDragons extends Component{
    componentDidMount(){
        this.props.fetchAccountDragons();
    }

    render(){
        return(
            <div className="dragon-collection">
                <div className="userinfo">
                    <AccountInfo/>
                </div>
                
                
                <img src={collection} alt='market-logo'></img>

                <div className="dragon-list">
                    {
                        this.props.accountDragons.dragons.map(dragon => {
                            return (
                                <div key={dragon.dragonId} >
                                    <AccountDragonRow dragon={dragon}/>
                                </div>
                            )
                        })
                    }
                </div>
                <Link to='/'>                    
                    <Button className='butt dragon-market'>
                        Home
                    </Button>
                </Link>

            </div>

        );
    }
}

export default connect(
    ({accountDragons}) => ({accountDragons}),
    {fetchAccountDragons}
)(AccountDragons);