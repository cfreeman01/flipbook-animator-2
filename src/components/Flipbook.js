import React from 'react'
import './Flipbook.css'
import FlipbookContext from '../context'
import CompletedGIF from './CompletedGIF'
import Toolbar from './Toolbar'
import UndoRedoBar from './UndoRedoBar.js'
import Sidebar from './Sidebar'
import BottomBar from './BottomBar'
import CanvasForm from './CanvasForm'
import DrawingArea from './DrawingArea'

const Flipbook = () => {

    const [globalState, setGlobalState] = React.useState({
        canvasOpen: false,

        canvasWidth: 0,
        canvasHeight: 0,
        canvasTop: 0,
        canvasLeft: 0,
        canvasRight: 0,

        botCanvasOpacity: 20,

        selectedTool: 'Pencil',
        selectedColor: '#000000',
        selectedSize: 1,

        curLayer: 0,
        curFrame: 0,

        newLayerId: 1,

        gifOpen: false,
        gifSrc: ''
    });

    const createCanvas = (width, height) => {
        let newState = Object.assign({}, globalState);
        newState.canvasOpen = true;
        newState.canvasWidth = width;
        newState.canvasHeight = height;
        setGlobalState(newState);
    }

    if (globalState.canvasOpen)
        return (
            <FlipbookContext.Provider value={{ globalState, setGlobalState }}>
                <div id='topLevelContainer'>
                    <div id='leftBar'>
                        <Toolbar />
                        <hr />
                        <UndoRedoBar />
                    </div>
                    <DrawingArea width={globalState.canvasWidth} height={globalState.canvasHeight}
                        botCanvasOpacity={globalState.botCanvasOpacity} />
                    <Sidebar />
                    <BottomBar />
                    {globalState.gifOpen ? <CompletedGIF gifSrc={globalState.gifSrc}/> : ''}
                </div>
            </FlipbookContext.Provider>
        );
    else
        return (
            <CanvasForm createCanvas_p={createCanvas} />
        );
}

export default Flipbook