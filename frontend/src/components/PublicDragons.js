import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPublicDragons } from '../store/actions/publicDragons';
import { fetchAccountDragons } from '../store/actions/accountDragons';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import PublicDragonRow from './PublicDragonRow';
import AccountInfo from './AccountInfo'
import market from '../images/market.png'

class PublicDragons extends Component {
    componentDidMount() {
        this.props.fetchPublicDragons();
        this.props.fetchAccountDragons();
    }

    render() {
        return (
            <div className="dragon-collection">
                <div className="userinfo">
                    <AccountInfo/>
                </div>

                <img src={market} alt='market-logo'></img>

                <div className="dragon-list">
                    {
                        this.props.publicDragons.dragons.map(dragon => {
                            return (
                            <div key={dragon.dragonId} className="dragon-card-market">
                                <PublicDragonRow dragon={dragon} />
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

        )
    }
}

export default connect(
  ({ publicDragons }) => ({ publicDragons }),
  { fetchPublicDragons , fetchAccountDragons}
)(PublicDragons);