import React from 'react';

class InputCity extends React.Component {
    constructor() {
        super();
        this.collectData = this.collectData.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            data: ''
        }
    };

    handleClick() {
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
            <div>
                <input value={this.state.data} type="text" onChange={this.collectData}/>
                <button onClick={this.handleClick}>add</button>
            </div>
        )
    }
}

export default InputCity;