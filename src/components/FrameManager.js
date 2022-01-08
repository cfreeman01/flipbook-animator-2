import React from 'react'
import FlipbookContext from '../context'
import IconButton from './IconButton'
import { layers, clearUndoRedoStacks, botCanvas } from '../drawData'
import './FrameManager.css'
import leftArrowIcon from '../icons/left-arrow.png'
import rightArrowIcon from '../icons/right-arrow.png'
import plusIcon from '../icons/plus.png'
import xIcon from '../icons/X.png'

import { GIFEncoder } from '../gif'

let framesPerSecond = 1;

/* Menu + methods  to allow user to manipulate the animation frames */
const FrameManager = () => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    /* Add a frame after the current frame */
    const addFrame = () => {
        let newState = Object.assign({}, globalState);
        layers.splice(globalState.curFrame + 1, 0, [{
            id: globalState.newLayerId,
            imgData: null,
            hidden: false,
            name: 'Layer ' + globalState.newLayerId,
            opacity: 100
        }]);
        newState.curFrame++;
        newState.newLayerId++;
        newState.curLayer = 0;
        clearUndoRedoStacks();
        drawFrame(botCanvas.ref.current, globalState.curFrame);
        setGlobalState(newState);
    }

    /* Delete the current frame */
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

    /* Move to the previous frame */
    const prevFrame = () => {
        if (globalState.curFrame === 0) return;
        let newState = Object.assign({}, globalState);
        newState.curFrame--;
        newState.curLayer = 0;
        clearUndoRedoStacks();
        drawFrame(botCanvas.ref.current, globalState.curFrame - 2);
        setGlobalState(newState);
    }

    /* Move to the next frame */
    const nextFrame = () => {
        if (globalState.curFrame === layers.length - 1) return;
        let newState = Object.assign({}, globalState);
        newState.curFrame++;
        newState.curLayer = 0;
        clearUndoRedoStacks();
        drawFrame(botCanvas.ref.current, globalState.curFrame);
        setGlobalState(newState);
    }

    /* Draw all of the layers of a frame, at layers[frameIndex], onto a single canvas */
    const drawFrame = (canvas, frameIndex) => {
        let ctx = canvas.getContext('2d');

        let tempCanvas = document.createElement("canvas"); /* The tempCanvas object is used to tranfer the image */
        tempCanvas.width = canvas.width;                   /* from the ImageData object at layers[frameIndex] to */
        tempCanvas.height = canvas.height;                 /* the destination canvas                             */

        ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas then fill in a white background
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (frameIndex < 0) return;

        //for each layer at layers[frameIndex], put the image data onto temp canvas then transfer it to the destination canvas
        for (let lyrIndex = layers[frameIndex].length - 1; lyrIndex >= 0; lyrIndex--) {
            let lyr = layers[frameIndex][lyrIndex];
            if (lyr.imgData && !lyr.hidden) {         //make sure the ImageData is valid and the layer is not hidden

                ctx.globalAlpha = lyr.opacity / 100;  //make sure to draw with the user's selected opacity

                tempCanvas.getContext('2d').putImageData(layers[frameIndex][lyrIndex].imgData, 0, 0, 0, 0,
                    canvas.width, canvas.height);
                canvas.getContext('2d').drawImage(tempCanvas, 0, 0,
                    canvas.width, canvas.height);
            }
        }
    }

    /* Use the jsgif library to create the finished animation as a GIF */
    const createGIF = () => {
        let encoder = GIFEncoder();
        let delay = (1 / framesPerSecond) * 1000;

        encoder.setQuality(1);
        encoder.setRepeat(0); 
        encoder.setDelay(delay);
        encoder.start();

        let offScreenCanvas = document.createElement("canvas"); //temporary canvas object to store each completed frame
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
        <div id='bottombarContainer'
            style={{
                width: globalState.canvasWidth + 'px'
            }}>

            <div id='topRow'>
                <IconButton btnTitle='Add frame after current frame' imgSrc={plusIcon} onClick_p={addFrame}
                    size={globalState.canvasWidth * 0.08} selected={false} />

                <span id='chooseFrame'>
                    <IconButton btnTitle='Last Frame' imgSrc={leftArrowIcon} onClick_p={prevFrame}
                        size={globalState.canvasWidth * 0.08} selected={false} />

                    <span id='frameNum'>frame {globalState.curFrame + 1}/{layers.length}</span>

                    <IconButton btnTitle='Next Frame' imgSrc={rightArrowIcon} onClick_p={nextFrame}
                        size={globalState.canvasWidth * 0.08} selected={false} />
                </span>

                <IconButton btnTitle='Remove current frame' imgSrc={xIcon} onClick_p={removeFrame}
                    size={globalState.canvasWidth * 0.08} selected={false} />
            </div>

            <label>Frames per second:</label>
            <input type='number' id='fps' name='fps' defaultValue={framesPerSecond} min={1}
                onChange={(e) => { framesPerSecond = e.target.value; }} />

            <button onClick={createGIF}>Create GIF</button>

        </div>
    );
}

export default FrameManager;