import React from 'react'
import './Flipbook.css'
import FlipbookContext from '../context'
import CompletedGIF from './CompletedGIF'
import Toolbar from './Toolbar'
import UndoRedoBar from './UndoRedoBar.js'
import Sidebar from './Sidebar'
import FrameManager from './FrameManager'
import CanvasForm from './CanvasForm'
import DrawingArea from './DrawingArea'

/* Top-level component */
const Flipbook = () => {

    const [globalState, setGlobalState] = React.useState({
        canvasOpen: false,  //whether the canvas is displayed

        canvasWidth: 0,     //position and dimensions of the canvas
        canvasHeight: 0,
        canvasTop: 0,
        canvasLeft: 0,
        canvasRight: 0,

        botCanvasOpacity: 20,   //opacity of the bottom canvas which shows the 'ghost' of the previous frame

        selectedTool: 'Pencil',
        selectedColor: '#000000',
        selectedSize: 1,

        curLayer: 0,   //current layer that user is editing
        curFrame: 0,   //current frame that user is editing

        newLayerId: 1,   /*id number used to give each layer unique key (also sometimes used as a
                         'dummy state' to force re-renders*/
        gifOpen: false,  //whether the finished animation is displayed
        gifSrc: ''       //source for the finished animation
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
                    <FrameManager />
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