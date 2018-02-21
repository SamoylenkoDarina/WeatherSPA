import React from 'react';

import Card from './card'

class List extends React.Component {
    constructor() {
        super();
    };

    render () {
        return (
            <div className='listCities'>
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