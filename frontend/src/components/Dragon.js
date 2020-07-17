import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchDragon} from '../store/actions/dragon';
import fetchStates from '../store/reducers/fetchStates';
import { HashLink as Link } from 'react-router-hash-link';
import DragonAvatar from './DragonAvatar';

class Dragon extends Component {

    get DragonView() {
        const {dragon} = this.props;

        if(this.props.dragon.status === fetchStates.error){
            return <span>{this.props.dragon.message}</span>
        }
        return <DragonAvatar dragon= {dragon} isFetch={true}/>;
    }

    render() {
        return (
            <div className="collectBtn">
                <Link to='/#sectionDragonView' className="btn_1 btnC" onClick={this.props.fetchDragon}>Collect This Dragon</Link>
                {this.DragonView}
            </div>
        )
    }
}

export default connect(
    ({dragon}) => ({ dragon }),
    { fetchDragon }
)(Dragon);