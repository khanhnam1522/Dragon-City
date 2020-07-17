import React, { Component } from 'react';
import MatingOptions from './MatingOptions';
import { BACKEND } from '../config';
import history from '../history';
import DragonImage from './DragonImage';
import { Button} from 'react-bootstrap';

class PublicDragonRow extends Component {
    state = { displayMatingOptions: false };

    toggleDisplayMatingOptions = () => {
        this.setState({
            displayMatingOptions: !this.state.displayMatingOptions
        });
    }

    buy = () => {
        const { dragonId, saleValue } = this.props.dragon;

        fetch(`${BACKEND.ADDRESS}/dragon/buy`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dragonId, saleValue })
        })
        .then(response => response.json())
        .then(json => {
            alert(json.message);

            if (json.type !== 'error') {
                history.push('/account-dragons');
            }
        })
        .catch(error => alert(error.message));
    }

    render() {
        const {nickname, saleValue, breedValue, generationId, traits} = this.props.dragon;
        return (
            <div>

                <section className="Latest_War padding_top">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-8">
                                <div className="Latest_War_bg_1">
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-lg-8">
                                            <div className="single_war_text text-center">
                                                <img src="img/logo.png" style={{width:"65px", height:"65px"}} alt=""/>
                                                <h2>Name: {nickname}</h2>
                                                
                                                <h3>Generation: {!generationId ? "Bred" : generationId} </h3>
                                                <h3>Traits: { traits.map(trait => trait.traitValue).join(', ') }</h3>
                                                <h3>Price: {saleValue}
                                                    
                                                </h3>
                                                <h3>Breed: {breedValue}
                                                    
                                                </h3>
            
                                                <DragonImage dragon={this.props.dragon}/>
                                                <br/>

                                                <Button onClick={this.buy} className="btn_1 options">Buy</Button>{' '}
                                                <Button onClick={this.toggleDisplayMatingOptions} className="btn_1 options">Breed</Button>
                                                <br/>
                                                {
                                                    this.state.displayMatingOptions ?
                                                        <MatingOptions patronDragonId={this.props.dragon.dragonId} /> :
                                                        <div></div>
                                                }
                                            </div>
                                        </div>
                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default PublicDragonRow;