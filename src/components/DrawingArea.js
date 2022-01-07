import React from 'react'
import './DrawingArea.css'
import FlipbookContext from '../context'
import { layers, botCanvas } from '../drawData'
import Layer from './Layer'
import _debounce from 'lodash.debounce'

const DrawingArea = ({ width, height, botCanvasOpacity }) => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    botCanvas.ref = React.useRef();

    const adjustPositions = () => {
        _debounce(() => {
            let rect = botCanvas.ref.current.getBoundingClientRect();
            if (rect.right === globalState.canvasRight && rect.left === globalState.canvasLeft &&
                rect.top === globalState.canvasTop)
                return;
            let newState = Object.assign({}, globalState);
            newState.canvasTop = rect.top;
            newState.canvasLeft = rect.left;
            newState.canvasRight = rect.right;
            setGlobalState(newState);
        }, 100)();
    }

    React.useEffect(() => {
        adjustPositions();

        window.addEventListener('resize', adjustPositions);
        return () => window.removeEventListener('resize', adjustPositions);
    });

    return (
        <div id='canvasContainer'>
            {layers.map((frame, frameIndex) =>
                layers[globalState.curFrame].map(({ id, imgData, hidden, name, opacity }, lyrIndex) =>
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
                        hidden={hidden || (frameIndex !== globalState.curFrame)}
                        opacity={opacity}
                    />))}

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