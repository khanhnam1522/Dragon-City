import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import DragonImage from './DragonImage';

class DragonAvatar extends Component {

  render() {
    const { generationId, dragonId, traits, nickname } = this.props.dragon;
    
    if(!dragonId) return <div></div>

    return (
        <div>
            <section className="Latest_War padding_top" id= {'sectionDragonView'}>
              <h2> You have collected a dragon!</h2>

              <div className="container">
                  <div className="row justify-content-center align-items-center">
                      <div className="col-lg-6">
                          <div className="Latest_War_text Latest_War_bg_1">
                              <div className="row justify-content-center align-items-center h-100">
                                  <div className="col-lg-6">
                                      <div className="single_war_text text-center">
                                          <img src="img/logo.png" style={{width:"65px", height:"65px"}} alt=""/>
                                          <h2>Name: {nickname}</h2>
                                          <h3>Generation: {generationId}</h3>
                                          <h3>Traits: {traits.map(trait => trait.traitValue).join(', ') }</h3>
                                          <DragonImage dragon={this.props.dragon}/>
                                      </div>
                                  </div>
                              </div>
                              <Link to='/account-dragons' className="btn_2">My Collection</Link>
                          </div>
                      </div>
                  </div>
              </div>
            </section>
            
        </div>
    )
  }
}

export default (DragonAvatar);