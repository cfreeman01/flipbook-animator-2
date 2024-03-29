import React from 'react'
import FlipbookContext from '../context'
import { tools, isDrawing } from '../drawData'

/* A canvas that can be drawn on */
const Layer = ({ imgData, setImgData, width, height, top, left, zIndex, hidden, opacity }) => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    const canvRef = React.useRef();

    React.useEffect(() => {
        let ctx = canvRef.current.getContext('2d');
        if (ctx) {
            if (!isDrawing && imgData !== null) { //do this to make sure the canvas gets updated image data from outside sources (like an undo, frame change etc.)
                ctx.putImageData(imgData, 0, 0, 0, 0, canvRef.current.width, canvRef.current.height);
            }
        }
    });

    React.useEffect(() => {
        let ctx = canvRef.current.getContext('2d');
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }, [])

    return (
        <canvas ref={canvRef}
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
                setImgData(ctx.getImageData(0, 0, canvRef.current.width, canvRef.current.height));
            }}

            onPointerOut={(event) => {
                if (!canvRef.current) return;
                event.preventDefault();
                let ctx = canvRef.current.getContext('2d');
                tools[globalState.selectedTool].endPath();
                setImgData(ctx.getImageData(0, 0, canvRef.current.width, canvRef.current.height));
            }}

            style={{
                position: 'absolute',
                width: width + 'px',
                height: height + 'px',
                top: top + 'px',
                left: left + 'px',
                zIndex: zIndex,
                pointerEvents: (zIndex === 0) ? 'all' : 'none', //only accept pointer events if z-index is zero (layer is selected)
                visibility: hidden ? 'hidden' : 'visible',
                opacity: opacity / 100,
            }} />);
}

export default Layer;