import React from 'react'
import FlipbookContext from '../context'
import { undo, redo } from '../drawData'
import IconButton from './IconButton'
import undoIcon from '../icons/undo.png'
import redoIcon from '../icons/redo.png'

const UndoRedoBar = () => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    return (
        <div>
            <IconButton btnTitle='Undo' imgSrc={undoIcon}
                onClick_p={(e) => {
                    undo(globalState.curFrame, globalState.curLayer);
                }}
                size={40} selected={false} />

            <IconButton btnTitle='Redo' imgSrc={redoIcon}
                onClick_p={(e) => {
                    redo(globalState.curFrame, globalState.curLayer)
                }}
                size={40} selected={false} />
        </div>
    );
}

export default UndoRedoBar;