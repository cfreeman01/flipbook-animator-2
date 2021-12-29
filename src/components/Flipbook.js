import React from 'react'
import FlipbookContext from '../context'
import Toolbar from './Toolbar'
import Sidebar from './Sidebar'
import BottomBar from './BottomBar'
import CanvasForm from './CanvasForm'
import FlipbookCanvas from './FlipbookCanvas'

const Flipbook = () => {

    const [globalState, setGlobalState] = React.useState({
        canvasOpen: false,
        canvasWidth: 0,
        canvasHeight: 0,
        selectedTool: 'Pencil',
        selectedColor: '#000000',
        selectedSize: 1,
        curFrame: 0
    });

    const createCanvas = (width, height) => {
        let newState = Object.assign({}, globalState);
        newState.canvasOpen = true;
        newState.canvasWidth = width;
        newState.canvasHeight = height;
        setGlobalState(newState);
    }

    let middleComponent = globalState.canvasOpen ?
        <FlipbookCanvas width={globalState.canvasWidth} height={globalState.canvasHeight} />
        : <CanvasForm createCanvas_p={createCanvas} />;

    return (
        <FlipbookContext.Provider value={{globalState, setGlobalState}}>
            <Toolbar />
            {middleComponent}
            <Sidebar />
            <BottomBar />
        </FlipbookContext.Provider>
    );
}

export default Flipbook