import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import List from '../../components/list/list';
import InputCity from '../../components/input/input-city';
import { addCity, deleteCity, refreshCity } from '../../store/actions'

class Main extends React.Component {
    render () {
        return (
            <div>
                <InputCity addCity={this.props.addCity}/>
                <List cities={this.props.cities} deleteCity={this.props.deleteCity} refreshCity={this.props.refreshCity}/>
            </div> 
        )
    } 
}

const mapStateToProps = (state) => {
    const { cities } = state;
    return {
        cities
    } 
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCity: (cityName) => {dispatch(addCity(cityName))},
        deleteCity: (cityId) => {dispatch(deleteCity(cityId))},
        refreshCity: (cityId) => {dispatch(refreshCity(cityId))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);