import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faBars} from "@fortawesome/free-solid-svg-icons";
function Header(){
  return (
		<header className="header">
			<a className="logo">
				<span>S</span>tudent <span>C</span>ommunity
			</a>

			<nav className="navbar">
				<a>
					<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
					 {"   "}Login/Sign Up
				</a>
			</nav>
			<FontAwesomeIcon id="menu-bars" icon={faBars}></FontAwesomeIcon>
			
		</header>
	);
}
export default Header;