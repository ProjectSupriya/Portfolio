import React from "react";
import Pdf from '../Documents/Resume.pdf';
import {
  FaGithub,
  FaLinkedin,
  FaPlay,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    textone:"WELCOME TO MY WORLD",
    title: "Hi, I'm Supriya Patil",
    text:
      "I`m Supriya, Front-end developer with greater than 1 year \
    experience in this field​",
    image: "/images/woman.png",
  });
  return (
    <header className="header" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                  <a href="https://github.com/ProjectSupriya" target="_blank" className="cl" >
                    <FaGithub className="headerIcon" /></a>
                  </li>
                  <li>
                  <a href="https://www.linkedin.com/in/supriya-patil-1402961b2" target="_blank" className="cl">
                    <FaLinkedin className="headerIcon" /></a>
                  </li>
                </ul>
                <h5>{state.textone}</h5>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href={Pdf} target = "_blank" className="btn btn-outline">
                   Resume
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href={Pdf} target = "_blank" className="btn btn-smart">
                    <FaPlay className="play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="woman"  />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
