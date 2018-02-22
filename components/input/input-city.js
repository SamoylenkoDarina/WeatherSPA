import React from 'react';
import styles from './input.scss';

class InputCity extends React.Component {
    constructor() {
        super();
        this.collectData = this.collectData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            data: ''
        }
    };

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.data === '') {
            return
        }
        this.props.addCity(this.state.data);
        this.setState({
            data: ''
        })
    }

    collectData(e) {
        let data = e.target.value;
        this.setState({
            data
        })
    }

    render () {
        return (
            <div className={styles.inputContainer}>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.data} type="text" onChange={this.collectData} className={styles.input}/>
                    <button className={styles.addBtn}>Add city</button>
                </form>
            </div>
        )
    }
}

export default InputCity;