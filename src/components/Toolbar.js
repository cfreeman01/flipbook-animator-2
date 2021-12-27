import React from 'react'
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

    const [selectedTool, setSelectedTool] = React.useState('Pencil');

    const undo = () => {
        console.log('Undo');
    }

    const redo = () => {
        console.log('Redo');
    }

    return (
        <div id="toolbarContainer">
            <IconButton btnTitle='Pencil' imgSrc={pencilIcon} onClick_p={() => setSelectedTool('Pencil')}
                selected={selectedTool === 'Pencil'} />

            <IconButton btnTitle='Pen' imgSrc={penIcon} onClick_p={() => setSelectedTool('Pen')}
                selected={selectedTool === 'Pen'} />

            <IconButton btnTitle='Eraser' imgSrc={eraserIcon} onClick_p={() => setSelectedTool('Eraser')}
                selected={selectedTool === 'Eraser'} />

            <IconButton btnTitle='Dropper' imgSrc={dropperIcon} onClick_p={() => setSelectedTool('Dropper')}
                selected={selectedTool === 'Dropper'} />

            <hr />

            <IconButton btnTitle='Undo' imgSrc={undoIcon} onClick_p={() => undo()}
                selected={false} />

            <IconButton btnTitle='Pencil' imgSrc={redoIcon} onClick_p={() => redo()}
                selected={false} />

        </div>
    );
}

export default Toolbar;