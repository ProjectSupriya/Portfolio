import React from "react";

const About = () => {
  const [header] = React.useState({
    mainHeader: "ABOUT",
    subHeader: "About Me",
    text:
      "I am Front End Developer. I have greater than 1 year experience in website developement.\
      Designed front-end code using HTML, CSS, Javascript and React",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Supriya Patil" },
    { id: 2, title: "Email:", text1: "supriyapatil1228@gmail.com" },
    { id: 3, title: "Phone:", text: "+917387916033" },
    { id: 4, title: "Linkedin", text2: "https://www.linkedin.com/in/supriya-patil-1402961b2" },
  ]);
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="common">
        <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/woman.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                Implement websites and Landing pages from concept through deployment. Developed UI for Dashboard.
              </div>
              <div className="about__info-p2">
              Implement websites using Wordpress, design front-end code using HTML, CSS, JS, and React Js 
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                      <p><a href="mailto:supriyapatil1228@gmail.com" target="_blank" className="cl">{info.text1}</a></p>
                      <p><a href="https://www.linkedin.com/in/supriya-patil-1402961b2" target="_blank" className="cl">{info.text2}</a></p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
