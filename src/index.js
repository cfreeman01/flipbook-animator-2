import React from 'react'
import ReactDOM from 'react-dom'
import Flipbook from './components/Flipbook'

class App extends React.Component {

    render() {
        return (
            <Flipbook />
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));