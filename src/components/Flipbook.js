import React from 'react'
import ReactDOM from 'react-dom'
import Toolbar from './Toolbar'
import CanvasForm from './CanvasForm'
import FlipbookCanvas from './FlipbookCanvas'

//top-level react component
class Flipbook extends React.Component {

    state = {
        canvasOpen: false,
        canvasWidth: 0,
        canvasHeight: 0
    }

    render() {
        let middleComponent = this.state.canvasOpen ? <FlipbookCanvas width={this.state.canvasWidth} height={this.state.canvasHeight}/> 
        : <CanvasForm createCanvas_prop={this.createCanvas} />;

        return (
            <div id="top-container">
                <Toolbar />
                {middleComponent}
            </div>
        );
    }

    createCanvas = (width, height) => {
        let newState = Object.assign({}, this.state, { canvasOpen: true });
        newState.canvasOpen = true;
        newState.canvasWidth = width;
        newState.canvasHeight = height;
        this.setState(newState);
    }
}

export default Flipbook