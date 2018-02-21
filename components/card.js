import React from 'react';
import { Link } from 'react-router-dom';

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

    render () {
        return (
            <Link to={`/details/${this.props.data.id}`}>
                <div className='card'>
                    { this.props.data.name }
                    <button className='updateBtn' onClick={this.handleClickRefresh}>O</button>
                    <button className='closeBtn' onClick={this.handleClickDelete}>x</button>
                </div>
            </Link>
        )
    }
}

export default Card;