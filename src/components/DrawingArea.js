import React from 'react'
import './DrawingArea.css'
import FlipbookContext from '../context'
import { layers, botCanvas } from '../drawData'
import Layer from './Layer'
import _debounce from 'lodash.debounce'

/* Main workspace that contains all of the canvas elements */
const DrawingArea = ({ width, height, botCanvasOpacity }) => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    botCanvas.ref = React.useRef(); /* Reference to the 'bottom canvas' which shows the previous frame */
                                    /* And also acts a base to position the other canvases on top of   */

    //update the canvas position to make sure all layers are properly displayed on top of each-other
    const adjustPositions = () => {
        _debounce(() => {
            let rect = botCanvas.ref.current.getBoundingClientRect();

            if (rect.right === globalState.canvasRight && rect.left === globalState.canvasLeft &&
                rect.top === globalState.canvasTop)
                return;  //only change the state if the location of the canvas has actually changed

            let newState = Object.assign({}, globalState);
            newState.canvasTop = rect.top;
            newState.canvasLeft = rect.left;
            newState.canvasRight = rect.right;
            setGlobalState(newState);
        }, 100)();
    }

    React.useEffect(() => {
        adjustPositions();  //call adjustPositions on every re-render

        window.addEventListener('resize', adjustPositions);  //also call adjustPositions on window resize
        return () => window.removeEventListener('resize', adjustPositions);
    });

    return (
        <div id='canvasContainer'>
            {layers[globalState.curFrame].map(({ id, imgData, hidden, name, opacity }, lyrIndex) =>
                    <Layer
                        key={id}
                        imgData={imgData}
                        setImgData={(newData) => {
                            layers[globalState.curFrame][globalState.curLayer].imgData = newData;
                        }}
                        width={width}
                        height={height}
                        top={globalState.canvasTop + window.scrollY}
                        left={globalState.canvasLeft + window.scrollX}
                        zIndex={(globalState.curLayer - lyrIndex)}
                        hidden={hidden}
                        opacity={opacity}
                    />)}

            <canvas id="bottomCanvas" ref={botCanvas.ref}
                width={width * window.devicePixelRatio}
                height={height * window.devicePixelRatio}
                style={{
                    position: 'relative',
                    width: width + 'px',
                    height: height + 'px',
                    opacity: botCanvasOpacity / 100,
                    zIndex: -100,
                    display: 'table',
                    margin: 'auto'
                }} />
        </div>
    );

}

export default DrawingArea;