import React from 'react';
import './App.css';
import Header from "./components/header";
import Home from "./components/Home";
import About from './components/About';
import Lectures from './components/Lectures';

function App() {
  return (
		<div>
			<Header></Header>
			<Home></Home>
      <About></About>
      <Lectures></Lectures>
		</div>
	);
}

export default App;
