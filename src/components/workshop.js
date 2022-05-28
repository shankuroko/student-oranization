import React from "react";
import "../css/workshop.css";
function Workshop(props){
  return (
		<a className="swiper-slide box">
			<img src={props.image} alt=""></img>
			<h3 className="title">Workshop On Big Data</h3>
			<div className="icons">
				<a href="#" className="fas fa-share">
					Register
				</a>
			</div>
		</a>
	);
}
export default Workshop;