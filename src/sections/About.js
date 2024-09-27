import React from "react";
import Wrapper from "../assets/wrappers/About";
import developerImage from "../assets/images/developer.jpg";
import { aboutData } from "../data/data";
import pdf from "../assets/cv.pdf";
import Card from "../components/Card";

const About = () => {
  return (
    <Wrapper id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={developerImage} alt="developer" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {aboutData.map((item) => {
              const { id, title, icon, desc } = item;
              return (
                <Card key={id} className="about__card">
                  <span className="about__card-icon">{icon}</span>
                  <h5>{title}</h5>
                  <small>{desc}</small>
                </Card>
              );
            })}
            <article className="card about__card"></article>
          </div>
          <p>
            I am a front-end web developer with 4 years of working experience in
            fields like sales, accounting and management. I combine my
            management expertise with technical skills and fully commit to
            consistency, meeting deadlines, and utilizing all available
            resources to achieve results. I enjoy creating beautiful,
            accessible, and responsive websites using
          </p>
          <p>
            <b>
              React.js,Next.js, Vue.js, Vanilla JavaScript, TypeScript
              ,Redux-tookit,React-Query, Tailwind, Bootstrap, CSS, and HTML.
            </b>
            Effective use of time, problem-solving, and communication skills
            help me show a positive attitude in complex situations, and my
            desire to learn quickly adapts me to changing situations. Check out
            my resume below!
          </p>
          <a href={pdf} download className="btn primary">
            Download CV
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
