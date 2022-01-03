import React from 'react'
import FlipbookContext from '../context'
import { layers, undoStack, redoStack } from '../drawData'
import _cloneDeep from 'lodash/cloneDeep';
import IconButton from './IconButton'
import TextAndRangeSelector from './TextAndRangeSelector'
import Layer from './Layer'
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

    const [newLayerId, setNewLayerId] = React.useState(0);

    const layerArray = layers[globalState.curFrame];

    React.useEffect(() => {
        layers[0].push({
            component: <Layer key={newLayerId} />,
            ref: React.createRef(),
            hidden: false,
            name: 'Layer 0',
            opacity: 100
        });

        setNewLayerId(newLayerId + 1);
    }, []);

    /*This function actually toggles the 'hidden' status of the layer*/
    const hideLayer = (index) => {
        layerArray[index].hidden = !layerArray[index].hidden;
        setNewLayerId(newLayerId + 1);
    }

    const selectLayer = (index) => {
        let newState = Object.assign({}, globalState);
        newState.curLayer = index;
        setGlobalState(newState);

        undoStack.length = 0;
        redoStack.length = 0;
    }

    const renameLayer = (index) => {
        let newName = prompt("Rename layer:", layerArray[index].name);
        if (!(newName == "" || newName == null)) {
            layerArray[index].name = newName;
        }
        setNewLayerId(newLayerId + 1);
    }

    const addLayer = () => {
        let newState = Object.assign({}, globalState);

        layerArray.unshift({
            component: <Layer key={newLayerId} />,
            ref: React.createRef(),
            hidden: false,
            name: 'New Layer',
            opacity: 100
        });

        newState.curLayer++;
        setGlobalState(newState);
        setNewLayerId(newLayerId + 1);
    }

    const cutLayer = () => {
        if (layerArray.length === 1) return;

        let newState = Object.assign({}, globalState);

        layerArray.splice(globalState.curLayer, 1);
        if (globalState.curLayer === layerArray.length)
            newState.curLayer--;

        setGlobalState(newState);
        setNewLayerId(newLayerId + 1);
    }

    const moveLayerUp = () => {
        if (globalState.curLayer === 0) return;
        let newState = Object.assign({}, globalState);

        let temp = layerArray[globalState.curLayer];
        layerArray[globalState.curLayer] = layerArray[globalState.curLayer - 1];
        layerArray[globalState.curLayer - 1] = temp;
        newState.curLayer--;

        setGlobalState(newState);
    }

    const moveLayerDown = () => {
        if (globalState.curLayer === layerArray.length - 1) return;
        let newState = Object.assign({}, globalState);

        let temp = layerArray[globalState.curLayer];
        layerArray[globalState.curLayer] = layerArray[globalState.curLayer + 1];
        layerArray[globalState.curLayer + 1] = temp;
        newState.curLayer++;

        setGlobalState(newState);
    }

    const setLayerOpacity = (value) => {
        layerArray[globalState.curLayer].opacity = value;
    }

    const copyLayer = () => {
        let canv = layerArray[globalState.curLayer].ref.current;
        let ctx = canv.getContext('2d');
        clipboard = ctx.getImageData(0, 0, canv.width, canv.height);
    }

    const pasteLayer = () => {
        let canv = layerArray[globalState.curLayer].ref.current;
        let ctx = canv.getContext('2d');
        undoStack.push(ctx.getImageData(0, 0, canv.width, canv.height));
        redoStack.length = 0;
        ctx.putImageData(clipboard, 0, 0);
    }

    return (
        <div id='layerMenuContainer'>

            <h2>Current Layer Opacity</h2>
            <TextAndRangeSelector min={0} max={100} unit='%' initValue={100} setValue={setLayerOpacity} />

            <IconButton btnTitle='Add layer at top' imgSrc={plusIcon} onClick_p={addLayer}
                size={28} selected={false} />

            <IconButton btnTitle='Cut current layer' imgSrc={xIcon} onClick_p={cutLayer}
                size={28} selected={false} />

            <IconButton btnTitle='Move current layer up' imgSrc={upIcon} onClick_p={moveLayerUp}
                size={28} selected={false} />

            <IconButton btnTitle='Move current layer down' imgSrc={downIcon} onClick_p={moveLayerDown}
                size={28} selected={false} />

            <IconButton btnTitle='Copy current layer' imgSrc={copyIcon} onClick_p={copyLayer}
                size={28} selected={false} />

            <IconButton btnTitle='Paste layer' imgSrc={pasteIcon} onClick_p={pasteLayer}
                size={28} selected={false} />

            {layers[globalState.curFrame].map(({ component, ref, hidden, name }, index) =>
                <LayerMenuItem
                    key={component.key}
                    name={name}
                    selected={globalState.curLayer === index}
                    hidden={hidden}
                    rename={() => renameLayer(index)} select={() => selectLayer(index)}
                    hide={() => hideLayer(index)} />
            )}

        </div>
    );
}

export default LayerMenu;