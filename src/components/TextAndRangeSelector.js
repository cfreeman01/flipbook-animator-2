import React from 'react'
import './TextAndRangeSelector.css'

/*a number input field with a range input field next to it, both kept in sync and 
enforcing min and max values*/
const TextAndRangeSelector = ({min, max, unit, setValue}) => {

    const textRef = React.useRef();
    const rangeRef = React.useRef();

    const validateInput = (input) => {
        if (!input) return;
        if (input < min)
            input = min;
        if (input > max)
            input = max;
        textRef.current.value = input;
        rangeRef.current.value = input;

        setValue(input);
    }

    return (
        <div id='selectorContainer'>
            <input type='number' id='selectorText' defaultValue={min} ref={textRef}
                onChange={(e) => validateInput(e.target.value)} />
            <p>  {unit}</p>
            <input type='range' id='selectorRange' defaultValue={min} ref={rangeRef}
                onChange={(e) => validateInput(e.target.value)} />
        </div>
    );
}

export default TextAndRangeSelector;