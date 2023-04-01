import React from "react";
import {
  FaWordpress,
  FaShoppingCart,
  FaCircleNotch,
  FaProjectDiagram,
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
        "Developed and Implemented 3+ websites using wordpress themes and plugins",
      text0:"View Sites"  
    },
    {
      id: 2,
      icon: <FaShoppingCart className="commonIcons" />,
      heading: "E-commerce Website",
      text:
        "Develope E-commerce websites using Wordpress, HTML, CSS, JavaScript and React framework",
        text1:" GITHUB", 
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Web Developement",
      text:
        "Implementd 3+ Websites using React js framework. Develope 8+ projects using HTML,CSS and JavaScript", 
      text2:" GITHUB "  
    },

    {
      id: 4,
      icon: <FaProjectDiagram className="commonIcons" />,
      heading: "Project", 
      text3:" View Site "  
    },

    {
      id: 5,
      icon: <FaProjectDiagram className="commonIcons" />,
      heading: "Project", 
      text4:" View Site "  
    },
    {
      id: 6,
      icon: <FaProjectDiagram className="commonIcons" />,
      heading: "Project", 
      text5:" View Site "  
    },
    {
      id: 7,
      icon: <FaProjectDiagram className="commonIcons" />,
      heading: "Project", 
      text6:" View Site "  
    },
    {
      id: 8,
      icon: <FaProjectDiagram className="commonIcons" />,
      heading: "Project", 
      text7:" View Site "  
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
                  <div className="projects__box-p1"><a href= "https://punecaterers.in/" target="blank" className="cl">{info.text0}</a></div>
                   <div className="projects__box-p1"><a href= "https://github.com/ProjectSupriya/Ecommerce-Site" target="blank" className="cl">{info.text1}</a></div>
                   <div className="projects__box-p1"><a href= "https://github.com/ProjectSupriya" target="blank" className="cl">{info.text2}</a></div>
                   <div className="projects__box-p1"><a href= "https://www.sociumpartners.co/" target="blank" className="cl">{info.text3}</a></div>
                   <div className="projects__box-p1"><a href= "https://acciomeals.in/" target="blank" className="cl">{info.text4}</a></div>
                   <div className="projects__box-p1"><a href= "http://23.23.58.169/wordpress/" target="blank" className="cl">{info.text5}</a></div>
                   <div className="projects__box-p1"><a href= "https://www.ndw.net.au/" target="blank" className="cl">{info.text6}</a></div>
                   <div className="projects__box-p1"><a href= "https://www.ndw.net.au/admin/" target="blank" className="cl">{info.text7}</a></div>
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
