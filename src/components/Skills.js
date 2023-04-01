import React from "react";

const Skills = () => {
  const [header] = React.useState({
    mainHeader: "SKILLS",
    subHeading: "My Skills",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "HTML",
      percentage: "80%",
    },
    {
      id: 2,
      heading: "CSS",
      percentage: "70%",
    },
    {
      id: 3,
      heading: "JavaScript",
      percentage: "60%",
    },
    {
      id: 4,
      heading: "React Js",
      percentage: "50%",
    },
    {
      id: 5,
      heading: "Wordpress",
      percentage: "40%",
    },
    {
      id: 6,
      heading: "Bootstrap",
      percentage: "30%",
    },
    {
      id: 7,
      heading: "Material UI",
      percentage: "20%",
    },
    {
      id: 8,
      heading: "Responsive UI  Design",
      percentage: "10%",
    },
  ]);
  return (
    <div className="projects" id="skills">
      <div className="container">
        <div className="projects__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="projects__box">
                  {info.icon}
                  <div className="projects__box-header">{info.heading}</div>
                  <div className="projects__box-p">{info.text}</div>
                  {/* <div className="projects__box-p">{info.percentage}</div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
