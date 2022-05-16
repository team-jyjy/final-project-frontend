import React, { useState } from 'react';
 
const Counter = ({ onPlus, onMinus }) => {
    const [state, setState] = useState({});
 
    const handleChange = (evt) => {
        setState({
            ...state,
            [evt.target.name]: Number(evt.target.value)
        })
    };
 
    return (
        <div>
            <input type="text" name="plus" value={state?.plus} onChange={handleChange} />
            <button onClick={onPlus(state?.plus)}>+</button>
            <input type="text" name="minus" value={state?.minus} onChange={handleChange} />
            <button onClick={onMinus(state?.minus)}>-</button>
        </div>
    );
}
 
export default Counter;