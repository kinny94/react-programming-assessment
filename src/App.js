import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Main />
			</div>
		);
	}
}

export default App;
