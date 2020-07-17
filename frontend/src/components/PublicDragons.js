import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPublicDragons } from '../store/actions/publicDragons';
import { fetchAccountDragons } from '../store/actions/accountDragons';
import Navbar from './Navbar';
import BreadCrumb from './BreadCrumb';
import PublicDragonRow from './PublicDragonRow';

class PublicDragons extends Component {
    componentDidMount() {
        this.props.fetchPublicDragons();
        this.props.fetchAccountDragons();
    }

    render() {
        return(
            <div className="body_bg">
                <Navbar/>
                <BreadCrumb title="Dragon Market" description="You can buy dragon or breed baby dragon here"/>
                {
                    this.props.publicDragons.dragons.map(dragon => {
                        return (
                        <div key={dragon.dragonId}>
                            <PublicDragonRow dragon={dragon} />
                        </div>
                        )
                    })
                }
                <section className="padding_top"/>
            </div>
        )
    }
}

export default connect(
  ({ publicDragons }) => ({ publicDragons }),
  { fetchPublicDragons , fetchAccountDragons}
)(PublicDragons);