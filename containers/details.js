import React from 'react';
import { connect } from 'react-redux';

class Details extends React.Component {
    constructor() {
        super()
    }

    get city () {
        return this.props.cities.find((item) => item.id == this.props.match.params.id)
    }

    render () {
        return(
            <div>
                <h2>{this.city.name}</h2>
                <p>{this.city.main.pressure}</p>
                <p>{this.city.main.temp}</p>
                <p>{this.city.main.temp_max}</p>
                <p>{this.city.main.temp_min}</p>
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

export default connect(mapStateToProps)(Details);
