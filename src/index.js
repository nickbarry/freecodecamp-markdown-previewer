import React, {Component} from 'react';
import Editor from './components/editor';
import Previewer from './components/previewer';
import {text} from './src/starter-text';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {text};
    }

    render(){
        return (
            <div>
                <Editor />
                <Previewer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('container'));