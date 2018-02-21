import React from 'react';
import { Link } from 'react-router-dom';

import styles from './card.scss'
import './card.global.scss'

class Card extends React.Component {

    constructor() {
        super();
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleClickRefresh = this.handleClickRefresh.bind(this);
    };
    
    handleClickDelete() {
        this.props.deleteCity(this.props.data.id);
    }

    handleClickRefresh() {
        this.props.refreshCity(this.props.data.id);
    }

    handleLinkClick (e) {
        if (e.target.className === styles.updateBtn || e.target.className === styles.closeBtn) {
            e.preventDefault();
        }
    }

    render () {
        const { data } = this.props;
        const cardClass = styles.item + ' item2'
        return (
            <Link onClick={this.handleLinkClick} to={`/details/${data.id}`} className={styles.linkItem}>
                <div className={styles.cardClass}>
                    <div className={styles.shortInfo}>
                        <h2>{ data.name }</h2>
                        <p>{`${data.main.temp} C`}</p>
                        <div className={styles.weatherIcon} style={{ background: `url(http://openweathermap.org/img/w/${data.weather[0].icon}.png) no-repeat` }}></div>
                    </div>
                    <div className={styles.btns}>
                        <button className={styles.updateBtn} onClick={this.handleClickRefresh}></button>
                        <button className={styles.closeBtn} onClick={this.handleClickDelete}></button>
                    </div>
                </div>
            </Link>
        )
    }
}

export default Card;