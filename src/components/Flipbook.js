import React from 'react'
import Toolbar from './Toolbar'
import Sidebar from './Sidebar'
import CanvasForm from './CanvasForm'
import FlipbookCanvas from './FlipbookCanvas'

const Flipbook = () => {

    const [globalState, setGlobalState] = React.useState({
        canvasOpen: false,
        canvasWidth: 0,
        canvasHeight: 0
    });

    const getGlobalState = () => Object.assign({}, globalState);

    const createCanvas = (width, height) => {
        let newState = getGlobalState();
        newState.canvasOpen = true;
        newState.canvasWidth = width;
        newState.canvasHeight = height;
        setGlobalState(newState);
    }

    let middleComponent = globalState.canvasOpen ?
        <FlipbookCanvas width={globalState.canvasWidth} height={globalState.canvasHeight} />
        : <CanvasForm createCanvas_p={createCanvas} />;

    return (
        <div id="top-container">
            <Toolbar />
            {middleComponent}
            <Sidebar />
        </div>
    );
}

export default Flipbook