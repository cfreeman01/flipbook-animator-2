import React from 'react'
import './DrawingArea.css'
import FlipbookContext from '../context'
import { layers } from '../drawData'
import Layer from './Layer'
import _debounce from 'lodash.debounce'

const DrawingArea = ({ width, height }) => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    const botCanvas = React.useRef();

    const [pos, setPos] = React.useState({ top: 0, left: 0 });

    React.useEffect(() => {
        _debounce(() => {
            let rect = botCanvas.current.getBoundingClientRect();
            setPos({ top: rect.top, left: rect.left });
        }, 50)();
    });

    React.useEffect(() => {
        let rect = botCanvas.current.getBoundingClientRect();
        layers[0].push(<Layer key={0} />);
        setPos({ top: rect.top, left: rect.left });
    }, []);

    return (
        <div id='canvasContainer'>
            {layers[globalState.curFrame].map((item, index) => React.cloneElement(item, {
                width: width,
                height: height,
                top: pos.top,
                left: pos.left,
                zIndex: (globalState.curLayer - index),
                currentTool: globalState.selectedTool,
                currentColor: globalState.selectedColor,
                currentSize: globalState.selectedSize
            }))}

            <canvas id="bottomCanvas" ref={botCanvas}
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