import React from 'react';
import './App.css';
import Header from "./components/header";
import Home from "./components/Home";
import About from './components/About';

function App() {
  return (
		<div>
			<Header></Header>
			<Home></Home>
      <About></About>
		</div>
	);
}

export default App;
