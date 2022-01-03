import React from 'react'
import FlipbookContext from '../context'
import { tools } from '../drawData'

const Layer = ({ canvRef, width, height, top, left, zIndex, hidden, opacity }) => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    React.useEffect(() => {
        canvRef.current.getContext("2d").scale(window.devicePixelRatio, window.devicePixelRatio);
    }, []);

    let canvs = canvRef ? canvRef.current : null;
    let ctx = canvs ? canvs.getContext('2d') : null;

    if (ctx) {
        ctx.strokeStyle = globalState.selectedColor;
        ctx.lineWidth = globalState.selectedSize;
    }

    return (
        <canvas ref={canvRef}
            width={width * window.devicePixelRatio}
            height={height * window.devicePixelRatio}

            onPointerDown={(event) => {
                if (!canvs) return;
                event.preventDefault();
                let res = tools[globalState.selectedTool].startPath(event, canvs);
                if(globalState.selectedTool === 'Dropper'){
                    let newState = Object.assign({}, globalState);
                    newState.selectedColor = res;
                    setGlobalState(newState);
                }
            }}

            onPointerMove={(event) => {
                if (!canvs) return;
                event.preventDefault();
                tools[globalState.selectedTool].draw(event, canvs);
            }}

            onPointerUp={(event) => {
                if (!canvs) return;
                event.preventDefault();
                tools[globalState.selectedTool].endPath();
            }}

            onPointerOut={(event) => {
                if (!canvs) return;
                event.preventDefault();
                tools[globalState.selectedTool].endPath();
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
                opacity: opacity / 100
            }} />);
}

export default Layer;