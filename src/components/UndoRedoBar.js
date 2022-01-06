import React from 'react'
import FlipbookContext from '../context'
import { undo, redo } from '../drawData'
import IconButton from './IconButton'
import undoIcon from '../icons/undo.png'
import redoIcon from '../icons/redo.png'

let ctrlPressed = false;

const UndoRedoBar = () => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    const keyPress = (event) => {
        if (event.ctrlKey === true) ctrlPressed = true;

        if (event.key === 'z' && ctrlPressed == true) {
            event.preventDefault();
            undo(globalState.curFrame, globalState.curLayer);
            let newState = Object.assign({}, globalState);
            newState.newLayerId++;
            setGlobalState(newState);
        }

        if (event.key === 'y' && ctrlPressed == true) {
            event.preventDefault();
            redo(globalState.curFrame, globalState.curLayer);
            let newState = Object.assign({}, globalState);
            newState.newLayerId++;
            setGlobalState(newState);
        }
    }

    const keyUp = (event) => {
        if (event.key === 'Control')
            ctrlPressed = false;
    }

    React.useEffect(() => {
        document.addEventListener("keydown", keyPress);
        document.addEventListener("keyup", keyUp);

        return () => {
            document.removeEventListener("keydown", keyPress);
            document.removeEventListener("keyup", keyUp);
        }
    });

    return (
        <div>
            <IconButton btnTitle='Undo' imgSrc={undoIcon}
                onClick_p={(e) => {
                    undo(globalState.curFrame, globalState.curLayer);
                    let newState = Object.assign({}, globalState);
                    newState.newLayerId++;
                    setGlobalState(newState);
                }}
                size={40} selected={false} />

            <IconButton btnTitle='Redo' imgSrc={redoIcon}
                onClick_p={(e) => {
                    redo(globalState.curFrame, globalState.curLayer);
                    let newState = Object.assign({}, globalState);
                    newState.newLayerId++;
                    setGlobalState(newState);
                }}
                size={40} selected={false} />
        </div>
    );
}

export default UndoRedoBar;