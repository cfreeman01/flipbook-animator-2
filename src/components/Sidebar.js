import React from 'react'
import FlipbookContext from '../context'
import ColorSelector from './ColorSelector'
import TextAndRangeSelector from './TextAndRangeSelector'
import LayerManager from './LayerManager'
import './Sidebar.css'

/* Menu containing various controls and options like layer menu, color selector etc. */
const Sidebar = () => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    const setSelectedSize = (size) => {
        let newState = Object.assign({}, globalState);
        newState.selectedSize = size;
        setGlobalState(newState);
    }

    const setLastFrameOpacity = (value) => {
        let newState = Object.assign({}, globalState);
        newState.botCanvasOpacity = value;
        setGlobalState(newState);
    }

    let styleTop = globalState.canvasTop + window.scrollY;
    let styleLeft = globalState.canvasRight + window.scrollX >= window.innerWidth - 190 ?
        globalState.canvasRight + 15 + window.scrollX : window.innerWidth - 190;

    return (
        <div id='sidebarContainer'
            style={{
                left: '' + styleLeft + 'px',
                top: '' + styleTop + 'px'
            }}>

            <h1>Brush Color</h1>
            <ColorSelector />
            <h1>Brush Size</h1>
            <TextAndRangeSelector min={1} max={100} unit='px' initValue={1} setValue={setSelectedSize} />
            <h1>Last Frame Opacity</h1>
            <TextAndRangeSelector min={0} max={100} unit='%' initValue={20} setValue={setLastFrameOpacity} />
            <h1>Layers</h1>
            <LayerManager />
        </div>
    );
}

export default Sidebar;