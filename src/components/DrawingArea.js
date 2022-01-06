import React from 'react'
import './DrawingArea.css'
import FlipbookContext from '../context'
import { layers, botCanvas } from '../drawData'
import Layer from './Layer'
import _debounce from 'lodash.debounce'

const DrawingArea = ({ width, height, botCanvasOpacity }) => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    botCanvas.ref = React.useRef();

    const [pos, setPos] = React.useState({ top: 0, left: 0 });

    React.useEffect(() => {
        _debounce(() => {
            let rect = botCanvas.ref.current.getBoundingClientRect();
            setPos({ top: rect.top, left: rect.left });

            if (rect.top != globalState.botCanvasTop || rect.left != globalState.botCanvasLeft) {
                let newState = Object.assign({}, globalState);
                newState.botCanvasTop = rect.top;
                newState.botCanvasLeft = rect.left;
                newState.botCanvasRight = rect.right;
                setGlobalState(newState);
            }
        }, 100)();
    });

    return (
        <div id='canvasContainer'>
            {layers.map((frame, frameIndex) =>
                layers[globalState.curFrame].map(({ id, imgData, hasNewData, hidden, name, opacity }, lyrIndex) => <Layer
                    key={id}
                    imgData={imgData}
                    hasNewData={hasNewData}
                    setImgData={(newData) => {
                        layers[globalState.curFrame][globalState.curLayer].imgData = newData;
                    }}
                    width={width}
                    height={height}
                    top={pos.top}
                    left={pos.left}
                    zIndex={(globalState.curLayer - lyrIndex)}
                    hidden={hidden || (frameIndex !== globalState.curFrame)}
                    opacity={opacity} />))}

            <canvas id="bottomCanvas" ref={botCanvas.ref}
                width={width * window.devicePixelRatio}
                height={height * window.devicePixelRatio}

                style={{
                    position: 'relative',
                    width: width,
                    height: height,
                    opacity: botCanvasOpacity / 100,
                    zIndex: -100,
                    marginLeft: (window.innerWidth / 2) - (width / 2)
                }} />
        </div>
    );

}

export default DrawingArea;