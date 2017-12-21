var React = require('react');
var ReactDOM = require('react-dom');
require("./index.css");
var App = require('./components/App')

// state
// lifecycle event
// EXTENDS GIVES A NEW OBJECT THE PROPERTIES OF AN OLD OBJECT 

ReactDOM.render(
	<App />,
	document.getElementById('app')
	)