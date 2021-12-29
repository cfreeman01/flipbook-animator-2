import React from 'react'
import ReactDOM from 'react-dom'
import './IconButton.css'

const IconButton = ({btnTitle, imgSrc, onClick_p, selected, size}) => {

    const [btnClass, setClass] = React.useState('iconUnselected');

    const iconClass = selected ? 'iconSelected' : btnClass;

    return(
        <img alt={btnTitle}
        width={size}
        height={size}
        title={btnTitle} 
        src={imgSrc} 
        className={iconClass}
        onClick={onClick_p} 
        onMouseOver={() => setClass('iconHovered')}
        onMouseOut={() => setClass('iconUnselected')} 
        onMouseDown={() => setClass('iconSelected')} 
        onMouseUp={() => setClass('iconHovered')}/>
    );
}

export default IconButton;