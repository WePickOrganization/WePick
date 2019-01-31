import React from "react"
import ReactDOM from "react-dom"
//The entry point is the outermost component class the React app.
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

ReactDOM.render(
    <App />,
    document.getElementById('app')
);