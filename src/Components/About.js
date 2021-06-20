import React from "react";
import about1 from "../img/about1.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-center">
        <div className="image-container">
          <img src={about1} alt="about pic" className="about-image" />
        </div>
        <div className="about-me">
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            consequatur, veniam sapiente veritatis nam praesentium, aliquam
            atque ullam autem ipsam harum tempore unde! Totam hic eligendi
            accusamus ut, aspernatur dolor quasi quod consequatur, itaque maxime
            harum fugit dicta culpa possimus, facere impedit? Velit aperiam
            alias mollitia. Beatae rerum perspiciatis sed velit numquam facere
            totam nisi culpa architecto necessitatibus aspernatur ut voluptas,
            exercitationem sit nihil eum obcaecati illo consectetur! Dolorum,
            repudiandae asperiores? Assumenda quae minima praesentium animi
            natus porro placeat explicabo temporibus molestias, quasi autem
            voluptas, facilis quod veritatis, soluta iure. Doloremque omnis,
            vero officiis porro neque ullam quas ea minus.
          </p>
          <div className="buttons">
            <button>Hire Me</button>
            <button>Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
