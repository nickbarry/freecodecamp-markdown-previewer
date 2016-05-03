import {Component} from 'react';
import {starterText} from './src/starter-text';

class Editor extends Component{
    constructor(props){
        super(props);
        this.state = {text: starterText};
    }

    render(){
        return (
            <div className="editor">
                <textarea
                    onChange={this.onInputChange}
                    className="editor__textarea" cols="30" rows="20"
                >
                    {this.state.text}
                </textarea>
            </div>
        );
    }

    onInputChange(event){
        const text = event.target.value; // Get updated text from textarea
        this.setState({text});
        this.props.handleTextChange(text);
    }
}