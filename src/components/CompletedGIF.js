import React from 'react';
import FlipbookContext from '../context'
import './CompletedGIF.css'

/* Display the finished animation as a GIF */
const CompletedGIF = ({ gifSrc }) => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    return (
        <div id='gifContainer'
            onClick={() => {
                let newState = Object.assign({}, globalState);
                newState.gifOpen = false;
                setGlobalState(newState);
            }}>

            <img src={gifSrc} onClick={(event) => { event.stopPropagation(); }} 
            style={{
                display: 'table',
                margin: 'auto',
                width: globalState.canvasWidth,
                height: globalState.canvasHeight
            }}/>

        </div>
    );
}

export default CompletedGIF;