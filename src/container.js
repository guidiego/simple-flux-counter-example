import React, { Component } from 'react';
import CounterComponent from './component';
import { increase, decrease  } from './action';
import store from './store';

class CounterContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {value: 0}

        this.updateValue = this.updateValue.bind(this);
    }

    componentDidMount() {
        store.onValueChange(this.updateValue)
    }

    updateValue(value) {
        this.setState({value})
    }

    render() {
        return (
            <CounterComponent value={this.state.value}
                    increase={increase} decrease={decrease}
            />
        )
    }
}

export default CounterContainer;