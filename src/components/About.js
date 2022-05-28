import React from "react";
import ab from "../images/about-img.jpg"
function About(){
return (
  <section className="about" id="about">

        <h1 className="heading"><span>about</span> us </h1>

        <div className="row">

            <div className="image">
                <img src={ab} alt=""></img>
            </div>

            <div className="content">
                <h3>we conduct wide range of Events</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore fugiat ut esse perferendis perspiciatis provident dolores fuga in facilis culpa possimus, quia praesentium itaque, sapiente quasi harum rem asperiores.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero expedita incidunt provident quibusdam aut odit, numquam nesciunt similique nisi.</p>
            </div>

        </div>

    </section>
);
}
export default About;