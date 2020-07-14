import React, { Component } from 'react';
import { skinny, slender, sporty, stocky, patchy, plain, spotted, striped } from '../images';

const propertyMap = {
  backgroundColor: {
    black: '#263238',
    white: '#cfd8dc',
    green: '#a5d6a7',
    blue: '#0277bd'
  },
  build: { slender, stocky, sporty, skinny },
  pattern: { plain, striped, spotted, patchy },
  size: { small: 100, medium: 140, large: 180, enormous: 220 }
};

class DragonAvatar extends Component {
  get DragonImage() {
    const dragonPropertyMap = {};

    this.props.dragon.traits.forEach(trait => {
      const { traitType, traitValue } = trait;

      dragonPropertyMap[traitType] = propertyMap[traitType][traitValue];
    });

    const { backgroundColor, build, pattern, size } = dragonPropertyMap;

    const sizing = { width: size, height: size };


    return (
        <div className='dragon-avatar-image-wrapper'>
            <div className='dragon-avatar-image-background' style={{ backgroundColor, ...sizing }}></div>
            <img src={pattern} className='dragon-avatar-image-pattern' style={{ ...sizing }} alt="pattern" />
            <img src={build} className='dragon-avatar-image' style={{ ...sizing }} alt="build"/>
        </div>
    );
  }

  render() {
    const { generationId, dragonId, traits, nickname } = this.props.dragon;
    
    if(!dragonId) return <div></div>

    return (
        <div>
            {this.props.isFetch && (<h2>Congratulations, you have collected a new dragon</h2>)}
            <h3>Generation: {generationId}.</h3>
            {this.props.isFetch && (<h3>Name: {nickname}</h3>)}
            <h3>Traits: 
                { traits.map(trait => trait.traitValue).join(', ') }
            </h3>
            { this.DragonImage }
            
        </div>
    )
  }
}

export default DragonAvatar;