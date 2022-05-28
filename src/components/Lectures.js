import React from "react";
import "../css/lectures.css";
function Lectures(){
  return (
		<section class="lecture" id="review">
			<h1 class="heading">
				Guest <span>Lectures</span>
			</h1>

			<div class="review-slider swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide box">
						<i class="fas fa-quote-right"></i>
						<div class="user">
							<img src="images/pic-1.png" alt=""></img>
							<div class="user-info">
								<h3>john deo</h3>
								<span>HR</span>
							</div>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
							dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut
							corrupti, ipsam iure nisi unde et assumenda perspiciatis
							voluptatibus nihil.
						</p>
					</div>

					<div class="swiper-slide box">
						<i class="fas fa-quote-right"></i>
						<div class="user">
							<img src="images/pic-2.png" alt=""></img>
							<div class="user-info">
								<h3>john deo</h3>
								<span>CEO</span>
							</div>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
							dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut
							corrupti, ipsam iure nisi unde et assumenda perspiciatis
							voluptatibus nihil.
						</p>
					</div>

					<div class="swiper-slide box">
						<i class="fas fa-quote-right"></i>
						<div class="user">
							<img src="images/pic-3.png" alt=""></img>
							<div class="user-info">
								<h3>john deo</h3>
								<span>Team Leader</span>
							</div>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
							dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut
							corrupti, ipsam iure nisi unde et assumenda perspiciatis
							voluptatibus nihil.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Lectures;