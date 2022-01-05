import React from 'react';
import FlipbookContext from '../context'
import './CompletedGIF.css'

const CompletedGIF = () => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    return (
        <div id='gifContainer'
            onClick={() => {
                let newState = Object.assign({}, globalState);
                newState.gifOpen = false;
                setGlobalState(newState);
            }}>

            <img src='https://ichef.bbci.co.uk/news/976/cpsprodpb/146EC/production/_115229638_gettyimages-603118336-gentoo-antarcticpeninsula.jpg'
                onClick={(event) => { event.stopPropagation(); }} />

        </div>
    );
}

export default CompletedGIF;