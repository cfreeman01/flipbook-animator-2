import React from 'react';
import PropTypes from "prop-types";
import './FlipbookCanvas.css'

const FlipbookCanvas = ({ width, height }) => {

    const bcRef = React.useRef();

    React.useEffect(() => {
        const bc = bcRef.current;
        bc.width = width * window.devicePixelRatio;
        bc.height = height * window.devicePixelRatio;
        bc.style.width = width + "px";
        bc.style.height = height + "px";
    }, [])

    return (
        <div id='canvasContainer'>
            <canvas id="bottomCanvas" ref={bcRef} />
        </div>
    );

}

export default FlipbookCanvas;