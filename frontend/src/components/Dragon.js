import React, {Component} from 'react';
import { connect } from 'react-redux';
import DragonAvatar from './DragonAvatar';
import {Button} from 'react-bootstrap';
import {fetchDragon} from '../store/actions/dragon';

class Dragon extends Component {

    render() {
        return (
            <div>
                <Button onClick={this.props.fetchDragon}>New Dragon</Button>
                <DragonAvatar dragon= {this.props.dragon}/>
            </div>
        )
    }
}

export default connect(
    ({dragon}) => ({ dragon }),
    { fetchDragon }
)(Dragon);