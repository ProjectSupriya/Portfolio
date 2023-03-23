import React from "react";
import {
  FaWordpress,
  FaShoppingCart,
  FaCircleNotch,
} from "react-icons/fa";

const Projects = () => {
  const [header] = React.useState({
    mainHeader: "PROJECTS",
    subHeading: "My Projects",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaWordpress className="commonIcons" />,
      heading: "Wordpress Websites",
      text:
        "Developed and Implemented 4+ websites using wordpress themes and plugins",
    },
    {
      id: 2,
      icon: <FaShoppingCart className="commonIcons" />,
      heading: "E-commerce Website",
      text:
        "Develope E-commerce websites using Wordpress, HTML, CSS, JavaScript and React framework",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Web Developement",
      text:
        "Implementd 3+ Websites using React js framework. Develope 8+ projects using HTML,CSS and JavaScript",
    },

    
  ]);
  return (
    <div className="projects" id="project">
      <div className="container">
        <div className="projects__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="projects__box">
                  {info.icon}
                  <div className="projects__box-header">{info.heading}</div>
                  <div className="projects__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
