import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchGeneration} from '../store/actions/generation';
import fetchStates from '../store/reducers/fetchStates';
import moment from 'moment';
const MINIMUM_DELAY = 3000;

class Generation extends Component {
    timer = null;

    componentDidMount(){
        this.fetchNextGeneration();
    }

    componentWillUnmount(){
        clearTimeout(this.timer);
    }

    fetchNextGeneration = () => {
        this.props.fetchGeneration();

        let delay = new Date(this.props.generation.expiration).getTime() - new Date().getTime();

        if(delay < MINIMUM_DELAY){
            delay = MINIMUM_DELAY;
        }

        this.timer = setTimeout(() => this.fetchNextGeneration(), delay);
    }

    render(){
        const {generation} = this.props;
        // if(generation.status === fetchStates.fetching){
        //     return <div>...</div>;
        // }
        var date = moment(new Date(generation.expiration));
        var hours = date.hours();
        var minutes = date.minutes();
        var seconds = date.seconds();

        if(generation.status === fetchStates.error){
            return <div>{generation.message}</div>
        }
        return(
            <div>
                <h2>Generation: {generation.generationId} </h2>
                <h2>Expires on: </h2>

                <div id="timer" className="d-flex justify-content-between" style={{marginBottom: "20px"}}>
                    <div id="expireTime">
                        {hours}
                        <span>Hours</span>
                    </div>
                    <div id="expireTime">
                        {minutes}
                        <span>Minutes</span>
                    </div>
                    <div id="expireTime">
                        {seconds}
                        <span>Seconds</span>
                    </div>

                </div>
            </div>
        )
    }   
}

const mapStateToProps = state => {
    const generation = state.generation;
    return {generation};
};


const componentConnector = connect(
    mapStateToProps, 
    {fetchGeneration}
);

export default componentConnector(Generation);