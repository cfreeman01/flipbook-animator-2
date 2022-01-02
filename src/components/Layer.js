import React from 'react'
import './Layer.css'
import { tools } from '../drawData'

const Layer = ({ width, height, top, left, zIndex, currentTool, currentColor, currentSize }) => {

    const canv = React.useRef();

    React.useEffect(() => {
        canv.current.getContext("2d").scale(window.devicePixelRatio, window.devicePixelRatio);
    }, []);

    let canvs = canv ? canv.current : null;
    let ctx = canvs ? canvs.getContext('2d') : null;

    if (ctx) {
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = currentSize;
    }

    return (
        <canvas ref={canv}
            width={width * window.devicePixelRatio}
            height={height * window.devicePixelRatio}

            onPointerDown={(event) => {
                if(!canvs) return;
                event.preventDefault();
                tools[currentTool].startPath(event, canvs);
            }}

            onPointerMove={(event) => {
                if(!canvs) return;
                event.preventDefault();
                tools[currentTool].draw(event, canvs);
            }}

            onPointerUp={(event) => {
                if(!canvs) return;
                event.preventDefault();
                tools[currentTool].endPath();
            }}

            onPointerOut={(event) => {
                if(!canvs) return;
                event.preventDefault();
                tools[currentTool].endPath();
            }}

            style={{
                position: 'absolute',
                width: width,
                height: height,
                top: top + window.scrollY,
                left: left + window.scrollX,
                zIndex: zIndex,
                pointerEvents: (zIndex === 0) ? 'all' : 'none'
            }} />
    );

}

export default Layer;