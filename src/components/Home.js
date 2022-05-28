import React from "react";
import cs from "../images/CyberSecurity.jpg";
import em from "../images/Embedded.jpeg";
import ml from "../images/ml.jpg";
import vr from "../images/vr.jpg";
import ui from "../images/UiUx.png";
import Workshop from "./workshop";
import "../css/home.css";
function Home(){
return (
	<section className="home" id="home">
		<div className="content">
			<h3>
				its time to
				<span>Learn</span>
			</h3>
		</div>
		<div className="swiper-container home-slider">
			<div className="swiper-wrapper">
				<Workshop></Workshop>
				<a className="swiper-slide box">
					<img src={cs} alt=""></img>
					<h3 className="title">Workshop On Cyber Security</h3>
					<div className="icons">
						<a href="#" className="fas fa-share">
							Register
						</a>
					</div>
				</a>
				<a className="swiper-slide box">
					<img src={ui} alt=""></img>
					<h3 className="title">Workshop On UI & UX</h3>
					<div className="icons">
						<a href="#" className="fas fa-share">
							Register
						</a>
					</div>
				</a>
				<a className="swiper-slide box">
					<img src={ml} alt=""></img>
					<h3 className="title">Workshop on Mechine Learning</h3>
					<div className="icons">
						<a href="#" className="fas fa-share">
							Register
						</a>
					</div>
				</a>
				<a className="swiper-slide box">
					<img src={vr} alt=""></img>
					<h3 className="title">Workshop On Virtual Reality</h3>
					<div className="icons">
						<a href="#" className="fas fa-share">
							Register
						</a>
					</div>
				</a>
				<a className="swiper-slide box">
					<img src={em} alt=""></img>
					<h3 className="title">Workshop On Embedded System</h3>
					<div className="icons">
						<a href="#" className="fas fa-share">
							Register
						</a>
					</div>
				</a>
			</div>
		</div>
	</section>
);
}
export default Home;