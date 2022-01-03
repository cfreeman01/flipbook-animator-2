import React from 'react'
import FlipbookContext from '../context'
import IconButton from './IconButton'
import pencilIcon from '../icons/pencil.png'
import penIcon from '../icons/pen.png'
import eraserIcon from '../icons/eraser.png'
import dropperIcon from '../icons/dropper.png'

//toolbar on the left side of the page
const Toolbar = () => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    const setSelectedTool = (toolName) => {
        let newState = Object.assign({}, globalState);
        newState.selectedTool = toolName;
        setGlobalState(newState);
    }

    return (
        <div id="toolbarContainer">
            <IconButton btnTitle='Pencil' imgSrc={pencilIcon} onClick_p={() => setSelectedTool('Pencil')}
                size={40} selected={globalState.selectedTool === 'Pencil'} />

            <IconButton btnTitle='Pen' imgSrc={penIcon} onClick_p={() => setSelectedTool('Pen')}
                size={40} selected={globalState.selectedTool === 'Pen'} />

            <IconButton btnTitle='Eraser' imgSrc={eraserIcon} onClick_p={() => setSelectedTool('Eraser')}
                size={40} selected={globalState.selectedTool === 'Eraser'} />

            <IconButton btnTitle='Dropper' imgSrc={dropperIcon} onClick_p={() => setSelectedTool('Dropper')}
                size={40} selected={globalState.selectedTool === 'Dropper'} />
        </div>
    );
}

export default Toolbar;