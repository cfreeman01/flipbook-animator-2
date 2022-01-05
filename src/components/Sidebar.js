import React from 'react'
import FlipbookContext from '../context'
import ColorSelector from './ColorSelector'
import TextAndRangeSelector from './TextAndRangeSelector'
import LayerMenu from './LayerMenu'
import './Sidebar.css'

const Sidebar = () => {

    const {globalState, setGlobalState} = React.useContext(FlipbookContext);

    const setSelectedSize = (size) =>{
        let newState = Object.assign({}, globalState);
        newState.selectedSize = size;
        setGlobalState(newState);
    }

    const setLastFrameOpacity = (value) => {
        let newState = Object.assign({}, globalState);
        newState.botCanvasOpacity = value;
        setGlobalState(newState);
    }

    return (
        <div id='sidebarContainer'>
            <h1>Brush Color</h1>
            <ColorSelector />
            <h1>Brush Size</h1>
            <TextAndRangeSelector min={1} max={100} unit='px' initValue={1} setValue={setSelectedSize}/>
            <h1>Last Frame Opacity</h1>
            <TextAndRangeSelector min={0} max={100} unit='%' initValue={20} setValue={setLastFrameOpacity}/>
            <h1>Layers</h1>
            <LayerMenu />
        </div>
    );
}

export default Sidebar;