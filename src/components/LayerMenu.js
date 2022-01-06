import React from 'react'
import FlipbookContext from '../context'
import { layers, clearUndoRedoStacks } from '../drawData'
import IconButton from './IconButton'
import TextAndRangeSelector from './TextAndRangeSelector'
import LayerMenuItem from './LayerMenuItem'
import './LayerMenu.css'
import plusIcon from '../icons/plus.png'
import xIcon from '../icons/X.png'
import upIcon from '../icons/up.png'
import downIcon from '../icons/down.png'
import copyIcon from '../icons/copy.png'
import pasteIcon from '../icons/paste.png'

let clipboard = 'empty';

const LayerMenu = () => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    React.useEffect(() => {
        layers[0].push({
            id: 0,
            imgData: null,
            hidden: false,
            name: 'Layer 0',
            opacity: 100
        });
    }, []);

    /*This function actually toggles the 'hidden' status of the layer*/
    const hideLayer = (index) => {
        let newState = Object.assign({}, globalState);
        layers[globalState.curFrame][index].hidden = !layers[globalState.curFrame][index].hidden;
        newState.newLayerId++;
        setGlobalState(newState);
    }

    const selectLayer = (index) => {
        let newState = Object.assign({}, globalState);
        newState.curLayer = index;
        setGlobalState(newState);
        clearUndoRedoStacks();
    }

    const renameLayer = (index) => {
        let newState = Object.assign({}, globalState);
        let newName = prompt("Rename layer:", layers[globalState.curFrame][index].name);
        if (!(newName == "" || newName == null)) {
            layers[globalState.curFrame][index].name = newName;
        }
        newState.newLayerId++;
        setGlobalState(newState);
    }

    const addLayer = () => {
        let newState = Object.assign({}, globalState);

        layers[globalState.curFrame].unshift({
            id: globalState.newLayerId,
            imgData: null,
            hidden: false,
            name: 'Layer ' + globalState.newLayerId,
            opacity: 100
        });

        newState.curLayer++;
        newState.newLayerId++;
        setGlobalState(newState);
        clearUndoRedoStacks();
    }

    const removeLayer = () => {
        if (layers[globalState.curFrame].length === 1) return;
        if (!window.confirm('Permanently delete this layer?')) return;

        let newState = Object.assign({}, globalState);

        layers[globalState.curFrame].splice(globalState.curLayer, 1);
        if (globalState.curLayer === layers[globalState.curFrame].length)
            newState.curLayer--;

        newState.newLayerId++;
        setGlobalState(newState);
        clearUndoRedoStacks();
    }

    const moveLayerUp = () => {
        if (globalState.curLayer === 0) return;
        let newState = Object.assign({}, globalState);

        let temp = layers[globalState.curFrame][globalState.curLayer];
        layers[globalState.curFrame][globalState.curLayer] = layers[globalState.curFrame][globalState.curLayer - 1];
        layers[globalState.curFrame][globalState.curLayer - 1] = temp;
        newState.curLayer--;

        setGlobalState(newState);
    }

    const moveLayerDown = () => {
        if (globalState.curLayer === layers[globalState.curFrame].length - 1) return;
        let newState = Object.assign({}, globalState);

        let temp = layers[globalState.curFrame][globalState.curLayer];
        layers[globalState.curFrame][globalState.curLayer] = layers[globalState.curFrame][globalState.curLayer + 1];
        layers[globalState.curFrame][globalState.curLayer + 1] = temp;
        newState.curLayer++;

        setGlobalState(newState);
    }

    const setLayerOpacity = (value) => {
        layers[globalState.curFrame][globalState.curLayer].opacity = value;
    }

    const copyLayer = () => {
        clipboard = layers[globalState.curFrame][globalState.curLayer].imgData;
        clipboard.data.set(new Uint8ClampedArray(layers[globalState.curFrame][globalState.curLayer].imgData.data));
    }

    const pasteLayer = () => {
        let newState = Object.assign({}, globalState);
        let newData = clipboard;
        newData.data.set(new Uint8ClampedArray(clipboard.data));
        layers[globalState.curFrame].unshift({
            id: globalState.newLayerId,
            imgData: clipboard,
            hidden: false,
            name: 'Pasted Layer',
            opacity: 100
        });
        newState.curLayer++;
        newState.newLayerId++;
        setGlobalState(newState);
    }

    return (
        <div id='layerMenuContainer'>

            <h2>Current Layer Opacity</h2>
            <TextAndRangeSelector min={0} max={100} unit='%' initValue={100} setValue={setLayerOpacity} />

            <IconButton btnTitle='Add layer at top' imgSrc={plusIcon} onClick_p={addLayer}
                size={28} selected={false} />

            <IconButton btnTitle='Remove current layer' imgSrc={xIcon} onClick_p={removeLayer}
                size={28} selected={false} />

            <IconButton btnTitle='Move current layer up' imgSrc={upIcon} onClick_p={moveLayerUp}
                size={28} selected={false} />

            <IconButton btnTitle='Move current layer down' imgSrc={downIcon} onClick_p={moveLayerDown}
                size={28} selected={false} />

            <IconButton btnTitle='Copy current layer' imgSrc={copyIcon} onClick_p={copyLayer}
                size={28} selected={false} />

            <IconButton btnTitle='Paste layer' imgSrc={pasteIcon} onClick_p={pasteLayer}
                size={28} selected={false} />

            {layers[globalState.curFrame].map(({ id, imgData, hidden, name }, index) =>
                <LayerMenuItem
                    key={id}
                    name={name}
                    selected={globalState.curLayer === index}
                    hidden={hidden}
                    rename={() => renameLayer(index)}
                    select={() => selectLayer(index)}
                    hide={() => hideLayer(index)}
                />)}

        </div>
    );
}

export default LayerMenu;