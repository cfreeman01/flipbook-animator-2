import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import pencilIcon from './icons/pencil.png'

//top-level component that is rendered to the DOM root node
class App extends React.Component {
    render() {
        return (
            <header id = "mainHeader">
                <h1 id = "mainTitle">Flipbook Animator</h1>
                <img src = {pencilIcon}/>
            </header>
        );
    }
}

export default App;