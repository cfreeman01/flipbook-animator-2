import React from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './components/Toolbar'

//top-level react component
class App extends React.Component {
    render() {
        return (
            <Toolbar/>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));