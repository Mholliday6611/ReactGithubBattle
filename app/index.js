var React = require('react');
var ReactDOM = require('react-dom');
require("./index.css");


// state
// lifecycle event
// EXTENDS GIVES A NEW OBJECT THE PROPERTIES OF AN OLD OBJECT 
class App extends React.Component {
	render(){
		return (
			<div>
				Hello Heri!
			</div>
			)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
	)