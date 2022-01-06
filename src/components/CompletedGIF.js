import React from 'react';
import FlipbookContext from '../context'
import './CompletedGIF.css'

const CompletedGIF = ({ gifSrc }) => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    return (
        <div id='gifContainer'
            onClick={() => {
                let newState = Object.assign({}, globalState);
                newState.gifOpen = false;
                setGlobalState(newState);
            }}>

            <img src={gifSrc} onClick={(event) => { event.stopPropagation(); }} />

        </div>
    );
}

export default CompletedGIF;