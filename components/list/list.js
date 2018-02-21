import React from 'react';

import Card from '../card/card';
import styles from './list.scss'

class List extends React.Component {
    constructor() {
        super();
    };

    render () {
        return (
            <div className={styles.item}>
                {
                    this.props.cities.map((card) => {
                        return <Card key={card.id} data={card} deleteCity={this.props.deleteCity} refreshCity={this.props.refreshCity}/>
                    })
                }    
            </div>
        )
    }
}

export default List;