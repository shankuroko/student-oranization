import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
	EffectCoverflow,
	Pagination,
	Navigation,
} from "swiper/core";
/*
import cs from "../images/CyberSecurity.jpg";
import bg from "../images/bigData.jpg";
import em from "../images/Embedded.jpeg";
import ml from "../images/ml.jpg";
import vr from "../images/vr.jpg";
import ui from "../images/UiUx.png";*/
import Workshop from "./workshop";
import "../css/home.css";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);
function Home(){
	const workshopList = [
		{
			image: "images/bigData.jpg",
			title: "Workshop On Big Data",
		},
		{
			image: "",
			title: "Workshop On Cyber Security",
		},
		{
			image: "",
			title: "Workshop On UI & UX",
		},
		{
			image: "",
			title: "Workshop on Mechine Learning",
		},
		{
			image: "",
			title: "Workshop On Virtual Reality",
		},
		{
			image: "",
			title: "Workshop On Embedded System",
		},
	];
	const workshops=workshopList.map((w) => {
		return (
			<SwiperSlide>
				<Workshop image={w.image} title={w.title}></Workshop>
			</SwiperSlide>
		);
	});
return (
	<section className="home" id="home">
		<div className="content">
			<h3>
				its time to
				<span>Learn</span>
			</h3>
		</div>
		<Swiper
			navigation={true}
			effect={"coverflow"}
			centeredSlides={true}
			slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
			loop={true}
			coverflowEffect={{
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true,
			}}
			pagination={{
				clickable: true,
			}}
			className="home-slider"
		>
			{workshops}
		</Swiper>
		<div className="swiper-container home-slider">
			<div className="swiper-wrapper"></div>
		</div>
	</section>
);
}
export default Home;