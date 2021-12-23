import React from 'react';
import './Toolbar.css'
import pencilIcon from '../icons/pencil.png'
import penIcon from '../icons/pen.png'
import eraserIcon from '../icons/eraser.png'
import dropperIcon from '../icons/dropper.png'
import undoIcon from '../icons/undo.png'
import redoIcon from '../icons/redo.png'

//toolbar on the left side of the page
class Toolbar extends React.Component {

    state = {
        selectedTool: 'Pencil',

        iconClass: {
            Pencil: 'iconSelected',
            Pen: 'iconUnselected',
            Eraser: 'iconUnselected',
            Dropper: 'iconUnselected',
            Undo: 'iconUnselected',
            Redo: 'iconUnselected'
        }
    };

    render() {
        return (
            <div id="toolbarContainer">
                <img alt='Pencil' title='Pencil' src={pencilIcon} className={this.state.iconClass['Pencil']}
                    onClick={() => this.selectTool('Pencil')} onMouseOver={() => this.mouseOverIcon('Pencil')}
                    onMouseOut={() => this.mouseOutIcon('Pencil')} />

                <img alt='Pen' title='Pen' src={penIcon} className={this.state.iconClass['Pen']}
                    onClick={() => this.selectTool('Pen')} onMouseOver={() => this.mouseOverIcon('Pen')}
                    onMouseOut={() => this.mouseOutIcon('Pen')} />

                <img alt='Eraser' title='Eraser' src={eraserIcon} className={this.state.iconClass['Eraser']}
                    onClick={() => this.selectTool('Eraser')} onMouseOver={() => this.mouseOverIcon('Eraser')}
                    onMouseOut={() => this.mouseOutIcon('Eraser')} />

                <img alt='Dropper' title='Dropper' src={dropperIcon} className={this.state.iconClass['Dropper']}
                    onClick={() => this.selectTool('Dropper')} onMouseOver={() => this.mouseOverIcon('Dropper')}
                    onMouseOut={() => this.mouseOutIcon('Dropper')} />

                <hr />

                <img alt='Undo' title='Undo' src={undoIcon} className={this.state.iconClass['Undo']}
                    onMouseOver={() => this.mouseOverIcon('Undo')} onMouseOut={() => this.mouseOutIcon('Undo')}
                    onMouseDown={() => this.mouseDownIcon('Undo')} onMouseUp={() => this.mouseUpIcon('Undo')}
                    onClick={this.undo} />

                <img alt='Redo' title='Redo' src={redoIcon} className={this.state.iconClass['Redo']}
                    onMouseOver={() => this.mouseOverIcon('Redo')} onMouseOut={() => this.mouseOutIcon('Redo')}
                    onMouseDown={() => this.mouseDownIcon('Redo')} onMouseUp={() => this.mouseUpIcon('Redo')}
                    onClick={this.redo} />
            </div>
        );
    }

    selectTool = (toolName) => {
        let newState = Object.assign({}, this.state);
        newState.iconClass[this.state.selectedTool] = 'iconUnselected';
        newState.iconClass[toolName] = 'iconSelected';
        newState.selectedTool = toolName;
        this.setState(newState);
    }

    mouseOverIcon = (iconName) => {
        if (this.state.iconClass[iconName] !== 'iconSelected') {
            let newState = Object.assign({}, this.state);
            newState.iconClass[iconName] = 'iconHovered';
            this.setState(newState);
        }
    }

    mouseOutIcon = (iconName) => {
        let newState = Object.assign({}, this.state);
        if (this.state.iconClass[iconName] !== 'iconSelected' || iconName === 'Undo' || iconName === 'Redo')
            newState.iconClass[iconName] = 'iconUnselected';
        this.setState(newState);
    }

    mouseDownIcon = (iconName) => {
        let newState = Object.assign({}, this.state);
        newState.iconClass[iconName] = 'iconSelected';
        this.setState(newState);
    }

    mouseUpIcon = (iconName) => {
        let newState = Object.assign({}, this.state);
        newState.iconClass[iconName] = 'iconHovered';
        this.setState(newState);
    }

    undo = () => {
        console.log('Undo');
    }

    redo = () => {
        console.log('Redo');
    }
}

export default Toolbar;