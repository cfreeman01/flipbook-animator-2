import React from 'react'
import FlipbookContext from '../context'
import IconButton from './IconButton'
import { layers, clearUndoRedoStacks, botCanvas } from '../drawData'
import './BottomBar.css'
import leftArrowIcon from '../icons/left-arrow.png'
import rightArrowIcon from '../icons/right-arrow.png'
import plusIcon from '../icons/plus.png'
import xIcon from '../icons/X.png'

import { GIFEncoder } from '../gif'

let framesPerSecond = 1;

const BottomBar = () => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    const addFrame = () => {
        let newState = Object.assign({}, globalState);
        layers.splice(globalState.curFrame + 1, 0, [{
            id: globalState.newLayerId,
            imgData: null,
            hidden: false,
            name: 'New Layer',
            opacity: 100
        }]);
        newState.curFrame++;
        newState.newLayerId++;
        newState.curLayer = 0;
        clearUndoRedoStacks();
        drawFrame(botCanvas.ref.current, globalState.curFrame);
        setGlobalState(newState);
    }

    const removeFrame = () => {
        if (layers.length === 1) return;
        if (!window.confirm('Permanently delete this frame?')) return;
        let newState = Object.assign({}, globalState);
        layers.splice(globalState.curFrame, 1);
        if (globalState.curFrame === layers.length) {
            newState.curFrame--;
            drawFrame(botCanvas.ref.current, globalState.curFrame - 2);
        }
        else {
            drawFrame(botCanvas.ref.current, globalState.curFrame - 1);
        }
        newState.newLayerId++;
        newState.curLayer = 0;
        setGlobalState(newState);
        clearUndoRedoStacks();
    }

    const prevFrame = () => {
        if (globalState.curFrame === 0) return;
        let newState = Object.assign({}, globalState);
        newState.curFrame--;
        newState.curLayer = 0;
        clearUndoRedoStacks();
        drawFrame(botCanvas.ref.current, globalState.curFrame - 2);
        setGlobalState(newState);
    }

    const nextFrame = () => {
        if (globalState.curFrame === layers.length - 1) return;
        let newState = Object.assign({}, globalState);
        newState.curFrame++;
        newState.curLayer = 0;
        clearUndoRedoStacks();
        drawFrame(botCanvas.ref.current, globalState.curFrame);
        setGlobalState(newState);
    }

    const drawFrame = (canvas, frameIndex) => {
        let ctx = canvas.getContext('2d');

        let tempCanvas = document.createElement("canvas");
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;

        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (frameIndex < 0) return;

        for (let lyrIndex = layers[frameIndex].length - 1; lyrIndex >= 0; lyrIndex--) {
            let lyr = layers[frameIndex][lyrIndex];
            if (lyr.imgData && !lyr.hidden) {
                ctx.globalAlpha = lyr.opacity / 100;
                tempCanvas.getContext('2d').putImageData(layers[frameIndex][lyrIndex].imgData, 0, 0);
                canvas.getContext('2d').drawImage(tempCanvas, 0, 0);
            }
        }
    }

    const createGIF = () => {
        let encoder = GIFEncoder();
        let delay = (1 / framesPerSecond) * 1000;
        encoder.setQuality(1);
        encoder.setRepeat(0);
        encoder.setDelay(delay);
        encoder.start();

        let offScreenCanvas = document.createElement("canvas");
        let osctx = offScreenCanvas.getContext('2d');
        offScreenCanvas.width = botCanvas.ref.current.width;
        offScreenCanvas.height = botCanvas.ref.current.height;

        for (let frame = 0; frame < layers.length; frame++) {
            drawFrame(offScreenCanvas, frame);
            encoder.addFrame(osctx);
        }

        encoder.finish();
        let binary_gif = encoder.stream().getData()
        let data_url = 'data:image/gif;base64,' + btoa(binary_gif);

        let newState = Object.assign({}, globalState);
        newState.gifOpen = true;
        newState.gifSrc = data_url;
        setGlobalState(newState);
    }

    return (
        <div id='bottombarContainer'>

            <div id='topRow'>
                <IconButton btnTitle='Add frame after current frame' imgSrc={plusIcon} onClick_p={addFrame}
                    size={40} selected={false} />

                <span id='chooseFrame'>
                    <IconButton btnTitle='Last Frame' imgSrc={leftArrowIcon} onClick_p={prevFrame}
                        size={40} selected={false} />

                    <span id='frameNum'>frame {globalState.curFrame + 1}/{layers.length}</span>

                    <IconButton btnTitle='Next Frame' imgSrc={rightArrowIcon} onClick_p={nextFrame}
                        size={40} selected={false} />
                </span>

                <IconButton btnTitle='Remove current frame' imgSrc={xIcon} onClick_p={removeFrame}
                    size={40} selected={false} />
            </div>

            <label>Frames per second:</label>
            <input type='number' id='fps' name='fps' defaultValue={framesPerSecond} min={1}
                onChange={(e) => { framesPerSecond = e.target.value; }} />

            <button onClick={createGIF}>Create GIF</button>

        </div>
    );
}

export default BottomBar;