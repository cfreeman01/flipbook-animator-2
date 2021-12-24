import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from "prop-types";
import './FlipbookCanvas.css'

class FlipbookCanvas extends React.Component {

    static propTypes = {
        width: PropTypes.number,
        height: PropTypes.number
    }

    bcRef = React.createRef();

    componentDidMount = () => {
        const bc = this.bcRef.current;
        bc.width = this.props.width * window.devicePixelRatio;
        bc.height = this.props.height * window.devicePixelRatio;
        bc.style.width = this.props.width + "px";
        bc.style.height = this.props.height + "px";
    }

    render() {
        return (
            <div id='canvasContainer'>
                <canvas id="bottomCanvas" ref={this.bcRef}/>
            </div>
        );
    }

}

export default FlipbookCanvas;