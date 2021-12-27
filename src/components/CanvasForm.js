import React from 'react';
import PropTypes from "prop-types";
import './CanvasForm.css'

const CanvasForm = ({ createCanvas_p }) => {

    let inputWidth = 500;
    let inputHeight = 500;

    return (
        <div id='canvasForm'>
            <h1>Canvas Dimensions</h1>
            <p>Width:  </p>
            <input type='number' defaultValue={500} onChange={(e) => inputWidth = e.target.value} />
            <p> px</p>
            <br />
            <p>Height:  </p>
            <input type='number' defaultValue={500} onChange={(e) => inputHeight = e.target.value} />
            <p> px</p>
            <br />
            <button onClick={() => createCanvas_p(inputWidth, inputHeight)}>Create Canvas</button>
        </div>
    );
}

export default CanvasForm;