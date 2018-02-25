import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Main />
			</div>
		);
	}
}

export default App;
