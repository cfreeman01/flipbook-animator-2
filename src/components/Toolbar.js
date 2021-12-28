import React from 'react'
import FlipbookContext from '../context'
import './Toolbar.css'
import IconButton from './IconButton'
import pencilIcon from '../icons/pencil.png'
import penIcon from '../icons/pen.png'
import eraserIcon from '../icons/eraser.png'
import dropperIcon from '../icons/dropper.png'
import undoIcon from '../icons/undo.png'
import redoIcon from '../icons/redo.png'

//toolbar on the left side of the page
const Toolbar = () => {

    const {globalState, setGlobalState} = React.useContext(FlipbookContext);

    const undo = () => {
        console.log('Undo');
    }

    const redo = () => {
        console.log('Redo');
    }

    const setSelectedTool = (toolName) => {
        let newState = Object.assign({}, globalState);
        newState.selectedTool = toolName;
        setGlobalState(newState);
    }

    return (
        <div id="toolbarContainer">
            <IconButton btnTitle='Pencil' imgSrc={pencilIcon} onClick_p={() => setSelectedTool('Pencil')}
                selected={globalState.selectedTool === 'Pencil'} />

            <IconButton btnTitle='Pen' imgSrc={penIcon} onClick_p={() => setSelectedTool('Pen')}
                selected={globalState.selectedTool === 'Pen'} />

            <IconButton btnTitle='Eraser' imgSrc={eraserIcon} onClick_p={() => setSelectedTool('Eraser')}
                selected={globalState.selectedTool === 'Eraser'} />

            <IconButton btnTitle='Dropper' imgSrc={dropperIcon} onClick_p={() => setSelectedTool('Dropper')}
                selected={globalState.selectedTool === 'Dropper'} />

            <hr />

            <IconButton btnTitle='Undo' imgSrc={undoIcon} onClick_p={() => undo()}
                selected={false} />

            <IconButton btnTitle='Redo' imgSrc={redoIcon} onClick_p={() => redo()}
                selected={false} />

        </div>
    );
}

export default Toolbar;