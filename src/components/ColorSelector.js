import React from 'react'
import FlipbookContext from '../context'
import './ColorSelector.css'
import IconButton from './IconButton'
import blackIcon from '../icons/black.png'
import whiteIcon from '../icons/white.png'
import redIcon from '../icons/red.png'
import orangeIcon from '../icons/orange.png'
import yellowIcon from '../icons/yellow.png'
import greenIcon from '../icons/green.png'
import pinkIcon from '../icons/pink.png'
import blueIcon from '../icons/blue.png'

const ColorSelector = () => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    const setSelectedColor = (colorValue) => {
        let newState = Object.assign({}, globalState);
        newState.selectedColor = colorValue;
        setGlobalState(newState);
    }

    return (
        <div id='colorSelectorContainer'>
            <IconButton btnTitle='Black' imgSrc={blackIcon} onClick_p={() => { setSelectedColor('#000000') }}
                size={40} selected={globalState.selectedColor === '#000000'} />

            <IconButton btnTitle='White' imgSrc={whiteIcon} onClick_p={() => { setSelectedColor('#ffffff') }}
                size={40} selected={globalState.selectedColor === '#ffffff'} />

            <IconButton btnTitle='Red' imgSrc={redIcon} onClick_p={() => { setSelectedColor('#f85e43') }}
                size={40} selected={globalState.selectedColor === '#f85e43'} />

            <IconButton btnTitle='Orange' imgSrc={orangeIcon} onClick_p={() => { setSelectedColor('#f39127') }}
                size={40} selected={globalState.selectedColor === '#f39127'} />

            <IconButton btnTitle='Yellow' imgSrc={yellowIcon} onClick_p={() => { setSelectedColor('#f3c327') }}
                size={40} selected={globalState.selectedColor === '#f3c327'} />

            <IconButton btnTitle='Green' imgSrc={greenIcon} onClick_p={() => { setSelectedColor('#34a234') }}
                size={40} selected={globalState.selectedColor === '#34a234'} />

            <IconButton btnTitle='Pink' imgSrc={pinkIcon} onClick_p={() => { setSelectedColor('#f74579') }}
                size={40} selected={globalState.selectedColor === '#f74579'} />

            <IconButton btnTitle='Blue' imgSrc={blueIcon} onClick_p={() => { setSelectedColor('#4376f8') }}
                size={40} selected={globalState.selectedColor === '#4376f8'} />

            <input type="color" id="colorPicker" onChange={(e) => { setSelectedColor(e.target.value) }} />
        </div>
    );
}

export default ColorSelector;