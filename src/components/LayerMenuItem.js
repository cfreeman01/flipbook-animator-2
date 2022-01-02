import React from 'react'
import IconButton from './IconButton'
import './LayerMenuItem.css'
import hideIcon from '../icons/hide.png'
import unhideIcon from '../icons/unhide.png'

const LayerMenuItem = ({ name, selected, hidden, rename, select, hide }) => {

    const [layerClass, setClass] = React.useState('layerMenuItemUnselected');

    const renderClass = selected ? 'layerMenuItemSelected' : layerClass;
    const title = hidden ? 'Unhide Layer' : 'Hide Layer';
    const imSrc = hidden ? unhideIcon : hideIcon;

    console.log(name);

    return (
        <div className={renderClass} onClick={select}
            onMouseOver={() => setClass('layerMenuItemHovered')}
            onMouseOut={() => setClass('layerMenuItemUnselected')}>

            <IconButton btnTitle={title} imgSrc={imSrc} size={28} selected={false}
                onClick_p={(e) => { e.stopPropagation(); hide(); }} />

            <span id='layerName' onDoubleClick={rename}>{name}</span>

        </div>
    );
}

export default LayerMenuItem;