import React, { PropTypes } from 'react';

export const CounterComponent = ({ value, increase, decrease }) => (
    <div className="counter">
        <h1>{value}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </div>
);

CounterComponent.propTypes = {
    value: PropTypes.number,
    increase: PropTypes.func,
    decrease: PropTypes.func,
};

export default CounterComponent;