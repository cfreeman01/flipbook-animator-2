import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from "prop-types";
import './CanvasForm.css'

class CanvasForm extends React.Component {

    static propTypes = {
        createCanvas_prop: PropTypes.func
    }

    inputWidth = 500;
    inputHeight = 500;

    render() {
        return (
            <div id='canvasForm'>
                <h1>Canvas Dimensions</h1>
                <p>Width:  </p>
                <input type='number' defaultValue={500} onChange={(e) => this.inputWidth = e.target.value}/>
                <p> px</p>
                <br />
                <p>Height:  </p>
                <input type='number' defaultValue={500} onChange={(e) => this.inputHeight = e.target.value}/>
                <p> px</p>
                <br />
                <button onClick={() => this.props.createCanvas_prop(this.inputWidth,this.inputHeight)}>Create Canvas</button>
            </div>
        );
    }
}

export default CanvasForm;