import React from 'react'
import FlipbookContext from '../context'
import IconButton from './IconButton'
import TextAndRangeSelector from './TextAndRangeSelector'
import './LayerMenu.css'

import pencilIcon from '../icons/pencil.png'
import penIcon from '../icons/pen.png'
import eraserIcon from '../icons/eraser.png'
import dropperIcon from '../icons/dropper.png'
import undoIcon from '../icons/undo.png'
import redoIcon from '../icons/redo.png'

const LayerMenu = () => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    const setLayerOpacity = (value) => {

    }

    return (
        <div id='layerMenuContainer'>

            <h2>Current Layer Opacity</h2>
            <TextAndRangeSelector min={0} max={100} unit='%' setValue={setLayerOpacity} />

            <IconButton btnTitle='Pencil' imgSrc={pencilIcon} onClick_p={() => { }}
                size={30} selected={globalState.selectedTool === 'Pencil'} />

            <IconButton btnTitle='Pen' imgSrc={penIcon} onClick_p={() => { }}
                size={30} selected={globalState.selectedTool === 'Pen'} />

            <IconButton btnTitle='Eraser' imgSrc={eraserIcon} onClick_p={() => { }}
                size={30} selected={globalState.selectedTool === 'Eraser'} />

            <IconButton btnTitle='Dropper' imgSrc={dropperIcon} onClick_p={() => { }}
                size={30} selected={globalState.selectedTool === 'Dropper'} />

            <IconButton btnTitle='Dropper' imgSrc={dropperIcon} onClick_p={() => { }}
                size={30} selected={globalState.selectedTool === 'Dropper'} />

            <IconButton btnTitle='Dropper' imgSrc={dropperIcon} onClick_p={() => { }}
                size={30} selected={globalState.selectedTool === 'Dropper'} />
        </div>
    );
}

export default LayerMenu;