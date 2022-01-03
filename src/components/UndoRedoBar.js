import React from 'react'
import FlipbookContext from '../context'
import { layers, undoStack, redoStack } from '../drawData'
import IconButton from './IconButton'
import undoIcon from '../icons/undo.png'
import redoIcon from '../icons/redo.png'

let ctrlPressed = false;

const UndoRedoBar = () => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    const undo = () => {
        let canv = layers[globalState.curFrame][globalState.curLayer].ref.current;
        let ctx = canv.getContext('2d');
        if (undoStack.length != 0) {
            redoStack.push(ctx.getImageData(0, 0, canv.width, canv.height));
            let newCanvasImage = undoStack.pop();
            ctx.putImageData(newCanvasImage, 0, 0);
        }
    }

    const redo = () => {
        let canv = layers[globalState.curFrame][globalState.curLayer].ref.current;
        let ctx = canv.getContext('2d');
        if (redoStack.length != 0) {
            undoStack.push(ctx.getImageData(0, 0, canv.width, canv.height));
            let newCanvasImage = redoStack.pop();
            ctx.putImageData(newCanvasImage, 0, 0);
        }
    }

    const keyPress = (event) => {
        if (event.ctrlKey === true) ctrlPressed = true;
        if (event.key === 'z' && ctrlPressed == true) {
            event.preventDefault();
            undo();
        }
        if (event.key === 'y' && ctrlPressed == true) {
            event.preventDefault();
            redo();
        }
    }

    const keyUp = (event) => {
        if (event.key === 'Control') 
            ctrlPressed = false;
    }

    React.useEffect(() => {
        document.addEventListener("keydown", keyPress);
        document.addEventListener("keyup", keyUp);
    }, []);

    return (
        <div>
            <IconButton btnTitle='Undo (ctrl + z)' imgSrc={undoIcon} onClick_p={() => undo()}
                size={40} selected={false} />

            <IconButton btnTitle='Redo (ctrl + y)' imgSrc={redoIcon} onClick_p={() => redo()}
                size={40} selected={false} />
        </div>
    );
}

export default UndoRedoBar;