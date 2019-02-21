//import React from "react"
//import ReactDOM from "react-dom"
//The entry point is the outermost component class the React app.
import React from 'react';
import ReactDOM from 'react-dom';

import './app.css'

class App extends React.Component {
      render() {
        return (
          <div id='body'> CSS LOADER ADDED </div>
        );
      }
}
  
ReactDOM.render(<App />, document.getElementById('app'));
