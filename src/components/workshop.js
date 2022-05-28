import React from "react";
import bg from "../images/bigData.jpg";
import "../css/workshop.css";
function Workshop(){
  return (
		<a className="swiper-slide box">
			<img src={bg} alt=""></img>
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