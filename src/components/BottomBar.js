import React from 'react'
import FlipbookContext from '../context'
import IconButton from './IconButton'
import TextAndRangeSelector from './TextAndRangeSelector'
import './BottomBar.css'
import leftArrowIcon from '../icons/left-arrow.png'
import rightArrowIcon from '../icons/right-arrow.png'
import plusIcon from '../icons/plus.png'
import xIcon from '../icons/X.png'

const BottomBar = () => {

    const { globalState, setGlobalState } = React.useContext(FlipbookContext);

    return (
        <div id='bottombarContainer'>

            <div id='topRow'>
                <IconButton btnTitle='Add frame after current frame' imgSrc={plusIcon} onClick_p={() => { }}
                    size={40} selected={false} />

                <span id='chooseFrame'>
                    <IconButton btnTitle='Last Frame' imgSrc={leftArrowIcon} onClick_p={() => { }}
                        size={40} selected={false} />

                    <span id='frameNum'>frame {globalState.curFrame + 1}/1</span>

                    <IconButton btnTitle='Next Frame' imgSrc={rightArrowIcon} onClick_p={() => { }}
                        size={40} selected={false} />
                </span>

                <IconButton btnTitle='Remove current frame' imgSrc={xIcon} onClick_p={() => { }}
                    size={40} selected={false} />
            </div>

            <label for='fps'>Frames per second:</label>
            <input type='number' id='fps' name='fps' defaultValue={1} min={1} />

            <button onClick={() => { }}>Create GIF</button>

        </div>
    );
}

export default BottomBar;