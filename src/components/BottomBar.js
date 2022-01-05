import React from 'react'
import FlipbookContext from '../context'
import IconButton from './IconButton'
import { layers, clearUndoRedoStacks, botCanvas } from '../drawData'
import './BottomBar.css'
import leftArrowIcon from '../icons/left-arrow.png'
import rightArrowIcon from '../icons/right-arrow.png'
import plusIcon from '../icons/plus.png'
import xIcon from '../icons/X.png'

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
        drawFrameToBottomCanvas(globalState.curFrame);
        setGlobalState(newState);
    }

    const removeFrame = () => {
        if (layers.length === 1) return;
        if (!window.confirm('Permanently delete this frame?')) return;
        let newState = Object.assign({}, globalState);
        layers.splice(globalState.curFrame, 1);
        if (globalState.curFrame === layers.length) {
            newState.curFrame--;
            drawFrameToBottomCanvas(globalState.curFrame - 2);
        }
        else {
            drawFrameToBottomCanvas(globalState.curFrame - 1);
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
        drawFrameToBottomCanvas(globalState.curFrame - 2);
        setGlobalState(newState);
    }

    const nextFrame = () => {
        if (globalState.curFrame === layers.length - 1) return;
        let newState = Object.assign({}, globalState);
        newState.curFrame++;
        newState.curLayer = 0;
        clearUndoRedoStacks();
        drawFrameToBottomCanvas(globalState.curFrame);
        setGlobalState(newState);
    }

    const drawFrameToBottomCanvas = (frameIndex) => {
        if (frameIndex < 0) return;
        let bc = botCanvas.ref.current;
        let bctx = bc.getContext('2d');
        let tempCanvas = document.createElement("canvas");
        tempCanvas.width = bc.width;
        tempCanvas.height = bc.height;
        bctx.clearRect(0, 0, bc.width, bc.height);
        for (let lyrIndex = layers[frameIndex].length - 1; lyrIndex >= 0; lyrIndex--) {
            if (layers[frameIndex][lyrIndex].imgData)
                tempCanvas.getContext('2d').putImageData(layers[frameIndex][lyrIndex].imgData, 0, 0);
            bctx.drawImage(tempCanvas, 0, 0);
        }
    }

    const createGIF = () => {
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
            <input type='number' id='fps' name='fps' defaultValue={1} min={1}
                onChange={(e) => { framesPerSecond = e.target.value; }} />

            <button onClick={createGIF}>Create GIF</button>

        </div>
    );
}

export default BottomBar;