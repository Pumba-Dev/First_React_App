import './styles.css';
import { Component } from "react";

export class Button extends Component {
    render() {
        const {text, functionOnClick, disabled} = this.props;

        return(
            <button 
            className='button' 
            onClick={functionOnClick}
            disabled={disabled}
            > 
                {text}
            </button>
        );
    }
}