import React from 'react';
import ReactDOM from 'react-dom';
import './mysass.scss';

class MyhHeader extends React.Component {
	render() {
		return (
			<div>
			<h1>Hello Style!</h1>
			<p>Add a little style!</p>
			</div>
			);
	}
}


ReactDOM.render(<MyhHeader />, document.getElementById('root'));

