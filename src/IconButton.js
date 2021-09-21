import React from 'react';
import ReactDOM from 'react-dom';
import './IconButton.css';

//small square button with an icon on it
class IconButton extends React.Component {
    render() {
        return (
            <img title={this.props.btnTitle} src={this.props.imgSrc} width={this.props.size} height={this.props.size}/>
        );
    }
}

export default IconButton;