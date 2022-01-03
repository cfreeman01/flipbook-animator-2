import React from 'react'
import './DrawingArea.css'
import FlipbookContext from '../context'
import { layers, botCanvas } from '../drawData'
import Layer from './Layer'
import _debounce from 'lodash.debounce'

const DrawingArea = ({ width, height }) => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    botCanvas.ref = React.useRef();

    const [pos, setPos] = React.useState({ top: 0, left: 0 });

    React.useEffect(() => {
        _debounce(() => {
            let rect = botCanvas.ref.current.getBoundingClientRect();
            setPos({ top: rect.top, left: rect.left });
        }, 50)();
    });

    return (
        <div id='canvasContainer'>
            {layers[globalState.curFrame].map(({component, ref, hidden, name, opacity}, index) => React.cloneElement(component, {
                canvRef: ref,
                width: width,
                height: height,
                top: pos.top,
                left: pos.left,
                zIndex: (globalState.curLayer - index),
                hidden: hidden,
                opacity: opacity
            }))}

            <canvas id="bottomCanvas" ref={botCanvas.ref}
                width={width * window.devicePixelRatio}
                height={height * window.devicePixelRatio}

                style={{
                    width: width,
                    height: height
                }} />
        </div>
    );

}

export default DrawingArea;