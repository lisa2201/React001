import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousaloffSetStyle, setCarousaloffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "javaScript", ratingPercentage: 50 },
    { skill: "React JS", ratingPercentage: 50 },
    { skill: "React Native", ratingPercentage: 50 },
    { skill: "Express JS", ratingPercentage: 50 },
    { skill: "Node JS", ratingPercentage: 50 },
    { skill: "Mongo Db", ratingPercentage: 50 },
    { skill: " MySQL", ratingPercentage: 50 },
    { skill: "Adobe XD", ratingPercentage: 50 },
    { skill: "Adobe Photoshop", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 70 },
    { skill: "CSS", ratingPercentage: 50 },
    // { skill: "Bootstrap", ratingPercentage: 50 },
    // { skill: "JQuery", ratingPercentage: 50 },
    // { skill: "PrestaShop", ratingPercentage: 70 },
  ];

  const projectsDetails = [
    {
      title: "Personal PortFolio Website",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used : React JS, Bootstrap",
    },

    {
      title: "Ecommerce Website",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "Online ecommerce website for showcasing and selling products online.",
      subHeading:
        "Technologies Used : React JS, Bootstrap, Node JS, Mongo DB, Express JS, MUI",
    },

    {
      title: "MovieDB",
      duration: { fromDate: "2021", toDate: "2021" },
      description: "Get the primary informations about a movies",
      subHeading: "Technologies Used : JavaScript, Bootstrap,JQuery",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Social Builder "}
        subHeading={"Web Developer"}
        fromDate={"03/2021"}
        toDate={"03/2022"}
      />

      <ResumeHeading
        heading={"Vocational Training Center (Sri Lanka) "}
        subHeading={"NVQ Level 5"}
        fromDate={"2016"}
        toDate={"2016"}
      />

      <ResumeHeading
        heading={"High School (Sri Lanka)"}
        subHeading={"Advance Level"}
        fromDate={"2011"}
        toDate={"2013"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Excella Business Service Pvt LTd"}
        subHeading={"Front-end Developer INTERN"}
        fromDate={"10/2021"}
        toDate={"12/2021"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Currently working as React Js
        </span>
      </div>

      <div className="experience-description">
        <span className="resume-description-text">
          * Developed an ecommerce website for client
        </span>
      </div>

      <ResumeHeading
        heading={"Vapiona/Chessy(Disney)"}
        subHeading={"Cashier"}
        fromDate={"12/2019"}
        toDate={"06/2021"}
      />
      {/* <ResumeHeading
        heading={"FiveGuys(Disney)"}
        subHeading={"Cashier"}
        fromDate={"03/2019"}
        toDate={"11/2019"}
      />
      <ResumeHeading
        heading={"Embassy of Sri Lanka (paris)"}
        subHeading={"Adjoint administratif INTERN"}
        fromDate={"01/2018"}
        toDate={"07/2018"}
      />
      <ResumeHeading
        heading={" Qualys hotel (Rosny sous Bois)"}
        subHeading={"Receptionist INTERN"}
        fromDate={"07/2018"}
        toDate={"07/2018"}
      /> */}
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Dance/ Music"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
      />

      <ResumeHeading
        heading="browsing internet"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
      />

      <ResumeHeading
        heading="Playing  online Video Games"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousaloffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt={`opps no internet connection!!!!!`}
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousaloffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
