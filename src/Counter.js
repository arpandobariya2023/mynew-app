import React from 'react'
import { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = {count};
    }, [count]);

    const [value, setValue] = useState('');

    const onClickHandler = (event) => {
        const newValue = event.target.value;
        setValue(value + newValue);
    }

    const onClickClear = () => {
        setValue('');
    }

    const onClickResult = () => {
        try {
            const result = eval(value);
            setValue(result.toString());
        } catch (error) {
            setValue('Error');
        }
    }

    return (
        <div>
            <div>
                <h2>Count: {count}</h2>
                <button onClick={() => setCount(count - 1)} className="btn btn-primary m-2">Decrement</button>
                <button onClick={() => setCount(count + 1)} className="btn btn-primary m-2">Increment</button>
            </div>
            <div>
            <h1 className='mt-5'>Calculator</h1>
            <input type="text" value={value} onChange={(event) => setValue(event.target.value)} className="cal_input"/>
            <br />
            <button onClick={onClickClear} className="cal_clear_btn btn_danger">Clear</button><br />
            <button value="7" onClick={onClickHandler} className="cal_btn btn_warning" variant="warning">7</button>
            <button value="8" onClick={onClickHandler} className="cal_btn btn_warning" variant="warning">8</button>
            <button value="9" onClick={onClickHandler} className="cal_btn btn_warning" variant="warning">9</button>
            <button value="*" onClick={onClickHandler} className="cal_btn btn_success" variant="warning">*</button>
            <br /> 
            <button value="4" onClick={onClickHandler} className="cal_btn btn_warning" variant="danger">4</button>
            <button value="5" onClick={onClickHandler} className="cal_btn btn_warning">5</button>
            <button value="6" onClick={onClickHandler} className="cal_btn btn_warning">6</button>
            <button value="-" onClick={onClickHandler} className="cal_btn btn_success">-</button>
            <br /> 
            <button value="1" onClick={onClickHandler} className="cal_btn btn_warning">1</button>
            <button value="2" onClick={onClickHandler} className="cal_btn btn_warning">2</button>
            <button value="3" onClick={onClickHandler} className="cal_btn btn_warning" >3</button>
            <button value="+" onClick={onClickHandler} className="cal_btn btn_success">+</button>
            <br /> 
            <button value="." onClick={onClickHandler} className="cal_btn btn_warning">.</button>
            <button value="0" onClick={onClickHandler} className="cal_btn btn_warning">0</button>
            <button value="/" onClick={onClickHandler} className="cal_btn btn_success">/</button>
            <button onClick={onClickResult} className="cal_btn btn_success">=</button>
        </div>
        </div>
    )
}

export default Counter
