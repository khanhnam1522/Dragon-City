import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import { BACKEND } from '../config';
import DragonImage from './DragonImage';

class AccountDragonRow extends Component{
    state = {
        nickname: this.props.dragon.nickname,
        isPublic: this.props.dragon.isPublic,
        saleValue: this.props.dragon.saleValue,
        breedValue: this.props.dragon.breedValue,
        edit: false
    };

    updateNickname = event => {
        this.setState({nickname:event.target.value});
    }

    updateBreedValue = event => {
        this.setState({breedValue: event.target.value});
    }

    updateSaleValue = event => {
        this.setState({saleValue: event.target.value});
    }

    updateIsPublic = event => {
        this.setState({isPublic: event.target.checked});
    }

    toggleEdit = () => {
        this.setState({edit: !this.state.edit});
    }

    save = () => {
        fetch(`${BACKEND.ADDRESS}/dragon/update`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                dragonId: this.props.dragon.dragonId,
                nickname: this.state.nickname,
                isPublic: this.state.isPublic,
                saleValue: this.state.saleValue,
                breedValue: this.state.breedValue
            })
        }).then(response => response.json())
          .then(json => {
            if (json.type === 'error') {
              alert(json.message);
            } else {
              this.toggleEdit();
            }
          })
          .catch(error => alert(error.message));
    }

    get SaveButton() {
        return <Button className='btn_1' onClick={this.save}>Save</Button>
    }

    get EditButton() {
        return <Button className='btn_1' onClick={this.toggleEdit}>Edit</Button>
    }

    render(){
        const { generationId, traits } = this.props.dragon;

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
                                                <h2>Name: <input 
                                                            type='text' 
                                                            value={this.state.nickname}
                                                            onChange={this.updateNickname}
                                                            disabled={!this.state.edit}
                                                        ></input> </h2>
                                                
                                                <h3>Generation: {!generationId ? "Bred" : generationId} </h3>
                                                <h3>Traits: { traits.map(trait => trait.traitValue).join(', ') }</h3>
                                                <h3>Price:
                                                    <input
                                                        type='number'
                                                        disabled={!this.state.edit}
                                                        value={this.state.saleValue}
                                                        onChange={this.updateSaleValue}
                                                        className='account-dragon-row-input'
                                                    />
                                                </h3>
                                                <h3>Breed:
                                                    <input
                                                        type='number'
                                                        disabled={!this.state.edit}
                                                        value={this.state.breedValue}
                                                        onChange={this.updateBreedValue}
                                                        className='account-dragon-row-input'
                                                    />
                                                </h3>
                                                <h3>Place on market:
                                                    <input
                                                        type='checkbox'
                                                        disabled={!this.state.edit}
                                                        checked={this.state.isPublic}
                                                        onChange={this.updateIsPublic}
                                                    />
                                                </h3>
                                                <DragonImage dragon={this.props.dragon}/>
                                            </div>
                                        </div>
                      
                                    </div>
                                    {
                                        this.state.edit ? this.SaveButton : this.EditButton
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        )
    }
}

export default AccountDragonRow;
