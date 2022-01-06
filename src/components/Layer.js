import React from 'react'
import FlipbookContext from '../context'
import { tools, isDrawing } from '../drawData'

const Layer = ({ imgData, setImgData, width, height, top, left, zIndex, hidden, opacity }) => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    const canvRef = React.useRef();

    React.useEffect(() => {
        let ctx = canvRef.current.getContext('2d');
        if (ctx) {
            if (!isDrawing && imgData !== null) {
                ctx.putImageData(imgData, 0, 0);
            }
        }
    });

    return (
        <canvas ref={canvRef} className='layer'
            width={width * window.devicePixelRatio}
            height={height * window.devicePixelRatio}

            onPointerDown={(event) => {
                if (!canvRef.current) return;

                event.preventDefault();

                let ctx = canvRef.current.getContext('2d');
                ctx.strokeStyle = globalState.selectedColor;
                ctx.lineWidth = globalState.selectedSize;

                let res = tools[globalState.selectedTool].startPath(event, canvRef.current);
                if (globalState.selectedTool === 'Dropper') {
                    let newState = Object.assign({}, globalState);
                    newState.selectedColor = res;
                    setGlobalState(newState);
                }
            }}

            onPointerMove={(event) => {
                if (!canvRef.current) return;
                event.preventDefault();
                tools[globalState.selectedTool].draw(event, canvRef.current);
            }}

            onPointerUp={(event) => {
                if (!canvRef.current) return;
                event.preventDefault();
                let ctx = canvRef.current.getContext('2d');
                tools[globalState.selectedTool].endPath();
                setImgData(ctx.getImageData(0, 0, width, height));
            }}

            onPointerOut={(event) => {
                if (!canvRef.current) return;
                event.preventDefault();
                let ctx = canvRef.current.getContext('2d');
                tools[globalState.selectedTool].endPath();
                setImgData(ctx.getImageData(0, 0, width, height));
            }}

            style={{
                position: 'absolute',
                width: width,
                height: height,
                top: top + window.scrollY,
                left: left + window.scrollX,
                zIndex: zIndex,
                pointerEvents: (zIndex === 0) ? 'all' : 'none',
                visibility: hidden ? 'hidden' : 'visible',
                opacity: opacity / 100,
            }} />);
}

export default Layer;