import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './details.scss'

class Details extends React.Component {
    constructor() {
        super()
    }

    get city () {
        return this.props.cities.find((item) => item.id == this.props.match.params.id)
    }

    render () {
        return(
            <div className={styles.details}>
                <div className={styles.detailsHeader}>
                    <h2>{`${this.city.name}, ${this.city.sys.country}`}</h2>
                    <p>{`${this.city.main.temp} C`}&#176;</p>  
                    <Link to={'/'} className={styles.closeBtn}></Link>             
                </div>

                <div className={styles.detailsBody}>
                    <div className={styles.column}>
                        <div className={styles.weatherItem}>
                            <p>Humidity: </p>
                            <p>{`${this.city.main.humidity} %`}</p>
                        </div>

                        <div className={styles.weatherItem}>
                            <p>Pressure: </p>
                            <p>{`${this.city.main.pressure} mm`}</p>    
                        </div>
                
                        <div className={styles.weatherItem}>
                            <p>Max temperature: </p>
                            <p>{`${this.city.main.temp_max} C`}&#176;</p>
                        </div>

                        <div className={styles.weatherItem}>
                            <p>Min temperature: </p>
                            <p>{`${this.city.main.temp_min} C`}&#176;</p>
                        </div>   
                    </div>

                    <div className={styles.column}>
                        <div className={styles.weatherItem}>
                            <p>Wind: </p>
                            <p>{`${this.city.wind.speed} m/s`}</p>
                        </div>

                        <div className={styles.weatherItem}>
                            <p>Precipitation: </p>
                            <p>{this.city.weather[0].main}</p>    
                        </div>
                
                        <div className={styles.weatherItem}>
                            <p>Clouds: </p>
                            <p>{`${this.city.clouds.all} %`}</p>
                        </div>

                        <div className={styles.weatherItem}>
                            <p>Visibility: </p>
                            <p>{`${this.city.visibility || ''} m`}</p>
                        </div>   
                    </div>
                </div>
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
