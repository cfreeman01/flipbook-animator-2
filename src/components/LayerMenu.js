import React from 'react'
import FlipbookContext from '../context'
import { layers } from '../drawData'
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

const LayerMenu = () => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    const [layerMenuItems, setLayerMenuItems] = React.useState([{
        id: 0,
        name: 'Layer 0',
        hidden: false
    }]);

    const setLayerOpacity = (value) => {

    }

    /*This function actually toggles the 'hidden' status of the layer*/
    const hideLayer = (index) => {
        let newLmi = JSON.parse(JSON.stringify(layerMenuItems));
        newLmi[index].hidden = !newLmi[index].hidden;
        setLayerMenuItems(newLmi);
    }

    const selectLayer = (index) => {
        let newState = Object.assign({}, globalState);
        newState.curLayer = index;
        setGlobalState(newState);
    }

    const renameLayer = (index) => {
        let newLmi = JSON.parse(JSON.stringify(layerMenuItems));
        let newName = prompt("Rename layer:", newLmi[index].name);
        if (!(newName == "" || newName == null)) {
            newLmi[index].name = newName;
            setLayerMenuItems(newLmi);
        }
    }

    const addLayer = () => {
        let newLmi = JSON.parse(JSON.stringify(layerMenuItems));
        let newState = Object.assign({}, globalState);

        newLmi.unshift({
            id: globalState.newLayerId,
            name: 'Layer ' + globalState.newLayerId,
            hidden: false
        });
        layers[globalState.curFrame].unshift(
            <Layer key={globalState.newLayerId}/>
        );

        newState.newLayerId++;
        newState.curLayer++;

        setLayerMenuItems(newLmi);
        setGlobalState(newState);
    }

    const cutLayer = () => {
        if (layerMenuItems.length === 1) return;

        let newLmi = JSON.parse(JSON.stringify(layerMenuItems));
        let newState = Object.assign({}, globalState);

        newLmi.splice(globalState.curLayer, 1);
        if (newState.curLayer === newLmi.length) newState.curLayer--;

        setLayerMenuItems(newLmi);
        setGlobalState(newState);
    }

    const moveLayerUp = () => {
        if (globalState.curLayer === 0) return;
        let newLmi = JSON.parse(JSON.stringify(layerMenuItems));
        let newState = Object.assign({}, globalState);

        let temp = newLmi[globalState.curLayer];
        newLmi[globalState.curLayer] = newLmi[globalState.curLayer - 1];
        newLmi[globalState.curLayer - 1] = temp;
        newState.curLayer--;

        setLayerMenuItems(newLmi);
        setGlobalState(newState);
    }

    const moveLayerDown = () => {
        if (globalState.curLayer === layerMenuItems.length - 1) return;
        let newLmi = JSON.parse(JSON.stringify(layerMenuItems));
        let newState = Object.assign({}, globalState);

        let temp = newLmi[globalState.curLayer];
        newLmi[globalState.curLayer] = newLmi[globalState.curLayer + 1];
        newLmi[globalState.curLayer + 1] = temp;
        newState.curLayer++;

        setLayerMenuItems(newLmi);
        setGlobalState(newState);
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

            <IconButton btnTitle='Copy current layer' imgSrc={copyIcon} onClick_p={() => { }}
                size={28} selected={false} />

            <IconButton btnTitle='Paste layer at top' imgSrc={pasteIcon} onClick_p={() => { }}
                size={28} selected={false} />

            {layerMenuItems.map((item, index) =>
                <LayerMenuItem key={item.id} name={item.name} selected={globalState.curLayer === index} hidden={item.hidden}
                    rename={() => renameLayer(index)} select={() => selectLayer(index)} hide={() => hideLayer(index)} />
            )}

        </div>
    );
}

export default LayerMenu;