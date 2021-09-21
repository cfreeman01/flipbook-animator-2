import React from 'react';
import ReactDOM from 'react-dom';
import IconButton from './IconButton.js'
import './Toolbar.css'
import pencilIcon from './icons/pencil.png'

class Toolbar extends React.Component {
    render() {
        return (
            <div id="container">
                <IconButton btnTitle="Pencil" imgSrc={pencilIcon} size="50" />
            </div>
        );
    }
}

export default Toolbar;