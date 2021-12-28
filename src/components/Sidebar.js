import React from 'react'
import ColorSelector from './ColorSelector'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div id='sidebarContainer'>
            <h1>Color</h1>
            <ColorSelector />
            <h1>Size</h1>
            <h1>Layers</h1>
        </div>
    );
}

export default Sidebar;