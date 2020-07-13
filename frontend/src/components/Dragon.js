import React, {Component} from 'react';
import { connect } from 'react-redux';
import DragonAvatar from './DragonAvatar';
import {Button} from 'react-bootstrap';
import {fetchDragon} from '../store/actions/dragon';
import fetchStates from '../store/reducers/fetchStates';


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
            <div>
                <Button className="butt" onClick={this.props.fetchDragon}>Collect New Dragon</Button>
                <br/>
                {this.DragonView}
            </div>
        )
    }
}

export default connect(
    ({dragon}) => ({ dragon }),
    { fetchDragon }
)(Dragon);