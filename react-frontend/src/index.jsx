//import React from "react"
//import ReactDOM from "react-dom"
//The entry point is the outermost component class the React app.
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    render() {
        return (
            <div>Wagwan boy This is a test Let's see if I can add new stuff! This works on my machine also keith </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
