import React, {Component} from 'react';
import Editor from './components/editor';
import Previewer from './components/previewer';
import {starterText} from './src/starter-text';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {text: starterText};
    }

    handleTextChange(text){
        console.log(text);
        this.setState({text});
    }

    render(){
        return (
            <div>
                <Editor onTextChange={() => this.handleTextChange} /> <!-- TODO: not sure I need the fat arrow function here; next, try just passing this.handleTextChange -->
                <Previewer text={this.state.text} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('container'));