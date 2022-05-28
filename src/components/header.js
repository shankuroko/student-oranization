import React from 'react';
function Header(){
  return (
		<header className="header">
			<a className="logo">
				<span>S</span>tudent <span>C</span>ommunity
			</a>

			<nav className="navbar">
				<a>home</a>
				<a>about</a>
				<a>Lectures</a>
			</nav>

			<div id="menu-bars" className="fas fa-bars"></div>
		</header>
	);
}
export default Header;