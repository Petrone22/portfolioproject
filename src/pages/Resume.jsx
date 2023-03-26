import React from "react";

const Resume = () => {
  return (
    <div className="resume-page">
      <div className="resume-container">
        <div className="general-info">
          <h1 className="my-name">Mustafa</h1>
          <h3>
            👋 I'm a software engineer, team leader and a customer service pro.
          </h3>
          <p className="myself">
            I have delivered world class service and dependence throughout all
            the fields that I have worked in. As a dedicated software engineer,
            I vowed to deliver impeccable user experience to all my clients,
            using industry standards such as ReactJS, Tailwind CSS and more.
          </p>
          <div className="email-span">
            <span>email: </span>
            the1rashid@gmail.com
          </div>
          <div className="email-span">
            <span>Website: </span>
            <a href="https://petrone22.github.io/portfolioproject/#/">
              Rashid.com
            </a>{" "}
          </div>
          <div className="resume-links">
            <button className="resume-btn nav-button">
              {" "}
              <a
                href="https://github.com/Petrone22"
                target={"_blank"}
                className="resume-link"
              >
                Github
              </a>{" "}
            </button>
            <button className="resume-btn nav-button">
              <a
                href="https://linkedin.com/in/mustafa-rashid-7370a7265/"
                className="resume-link"
              >
                LinkedIN
              </a>{" "}
            </button>
            <button className="resume-btn nav-button">
              <a
                href="https://instagram.com/petrone0001/"
                target={"_blank"}
                className="resume-link"
              >
                Instagram
              </a>{" "}
            </button>
            <button className="resume-btn nav-button">
              <a
                href="https://facebook.com/OneLittleGod/"
                target={"_blank"}
                className="resume-link"
              >
                Facebook
              </a>{" "}
            </button>
          </div>
        </div>
        <div className="experience-section">
          <h1 className="my-experience">Experience</h1>
          <div className="experience">
            <div className="experience-time">
              <span className="experience-timespan">2018 - 2020</span>
              <br /> <span className="experience-kind">Full Time</span>
            </div>
            <div className="experience-description">
              <div className="experience-title">
                Customer Service Rep at TP.
              </div>
              <li>Customer service representative.</li>
              <li>Contracting Web Dev</li>
              <li>Team Lead.</li>
            </div>
          </div>
          <div className="experience">
            <div className="experience-time">
              <span className="experience-timespan">2020 - 2022</span>
              <br /> <span className="experience-kind">Full Time</span>
            </div>
            <div className="experience-description">
              <div className="experience-title">
                Customer Service Rep at CX.
              </div>
              <li>Customer service representative.</li>
              <li>Team Lead.</li>
            </div>
          </div>
        </div>
        <div className="education-section">
          <h1 className="education">Education</h1>
          <div className="experience-time education-time">
            <span className="experience-timespan">English Law</span>
            <br /> <span className="experience-kind">2018-2022</span>
          </div>
          <p className="education-background">
            I studied law at the english law school in the Tanta law
            institution, Egypt. but I also decided to teach myself software
            engineering throughout my time there. as it turned out to be my real
            passion, I decided to focus on it even more.
          </p>
        </div>
        <div className="skills-section">
          <h1 className="Skills-title">Skills</h1>
          <div className="skills-container">
            <div className="skill">
              <h3>Software Engineering</h3>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Python</li>
            </div>
            <div className="skill">
              {" "}
              <h3>Team Management</h3>
              <li>Core communication skills</li>
              <li>Digging for root causes for issues</li>
              <li>Team work</li>
              <li>Finding Vision in projects</li>
            </div>
            <div className="skill">
              {" "}
              <h3>Customer Service</h3>
              <li>Core Communication skills</li>
              <li>Experience personalization</li>
              <li>Determination</li>
              <li>Learning and growth</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
