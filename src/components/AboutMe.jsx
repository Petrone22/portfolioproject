import React from "react";
import js from "../assets/SVGs/js.gif";
import tailwind from "../assets/SVGs/tailwind-icon.png";
import github from "../assets/SVGs/github.gif";
import git from "../assets/SVGs/git.png";
import figma from "../assets/SVGs/figma.png";
import react from "../assets/SVGs/react.png";
import python from "../assets/SVGs/python.png";
const AboutMe = ({ refName }) => {
  return (
    <div className="aboutMe" ref={refName}>
      <div className="my-title">About Mustafa Rashid</div>
      <p className="my-description">
        <span className="magicName">Mustafa Rashid</span> is A freelancing Front
        end developer & ReactJS developer. <br />
        Mustafa is Dedicated to the process of learning and improving, as well
        as delivering awesome-looking, user friendly reuslts in the least amount
        of time possible. <br />
        He has very keen attention to detail and a never-ending will to learn
        and grow within the tech industry.
      </p>
      <div className="info-box">
        <div className="personal">
          <h3>Front End & ReactJS Developer:</h3>
          <ul className="skills-list responsive-skills">
            <li>
              <span>
                {" "}
                <svg
                  stroke="white"
                  height="15px"
                  width="15px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 27.442 27.442"
                >
                  <g>
                    <path
                      d="M19.494,0H7.948C6.843,0,5.951,0.896,5.951,1.999v23.446c0,1.102,0.892,1.997,1.997,1.997h11.546
		c1.103,0,1.997-0.895,1.997-1.997V1.999C21.491,0.896,20.597,0,19.494,0z M10.872,1.214h5.7c0.144,0,0.261,0.215,0.261,0.481
		s-0.117,0.482-0.261,0.482h-5.7c-0.145,0-0.26-0.216-0.26-0.482C10.612,1.429,10.727,1.214,10.872,1.214z M13.722,25.469
		c-0.703,0-1.275-0.572-1.275-1.276s0.572-1.274,1.275-1.274c0.701,0,1.273,0.57,1.273,1.274S14.423,25.469,13.722,25.469z
		 M19.995,21.1H7.448V3.373h12.547V21.1z"
                    />
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </g>
                </svg>
              </span>
              {"  Phone: (+20) 109 619 0799"}
            </li>
            <li>
              <span>
                <svg
                  version="1.0"
                  stroke="white"
                  fill="white"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15px"
                  height="15px"
                  viewBox="0 0 64 64"
                  enableBackground="new 0 0 64 64"
                >
                  <g>
                    <path
                      fill="#231F20"
                      d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64
		s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39
		h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"
                    />
                    <path
                      fill="#231F20"
                      d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32
		c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                    />
                    <path
                      fill="#231F20"
                      d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36
		c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"
                    />
                  </g>
                </svg>
              </span>
              {"  Location: Cairo, Egypt"}
            </li>

            <li>
              <span>
                <svg
                  fill="white"
                  width="15px"
                  height="15px"
                  viewBox="0 0 14 14"
                  role="img"
                  focusable="false"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m 12.499079,12.25525 c 0.0968,0 0.188377,-0.0436 0.249339,-0.11884 0.06096,-0.0752 0.08473,-0.17385 0.06473,-0.26853 l -0.202146,-0.95662 c 0.115125,-0.11137 0.187491,-0.26686 0.187491,-0.43975 0,-0.182 -0.08106,-0.34343 -0.206876,-0.45558 l 0,-3.32202 -0.810333,0.50146 0,2.82056 c -0.125815,0.11215 -0.2069,0.27358 -0.2069,0.45558 0,0.17291 0.07239,0.32841 0.187515,0.43975 l -0.20217,0.95662 c -0.02,0.0947 0.0038,0.19335 0.06473,0.26853 0.06096,0.0752 0.152539,0.11884 0.249339,0.11884 l 0.625281,0 z M 12.773741,4.75539 7.5021019,1.49209 C 7.3477151,1.39699 7.1736728,1.34925 6.9996305,1.34925 c -0.1740423,0 -0.3482077,0.0477 -0.5016586,0.14284 l -5.271713,3.2633 C 1.0854931,4.84249 0.99999905,4.99633 0.99999905,5.1619 c 0,0.1656 0.085494,0.31949 0.22625985,0.40673 l 5.2716883,3.26333 c 0.153451,0.0952 0.3276163,0.14284 0.5016586,0.14284 0.1740423,0 0.3481092,-0.0477 0.5024714,-0.14284 L 12.773741,5.56863 c 0.140766,-0.0872 0.22626,-0.24113 0.22626,-0.40673 0,-0.16557 -0.08549,-0.31946 -0.22626,-0.40651 z M 6.9996059,9.78508 c -0.3283798,0 -0.6488777,-0.0912 -0.928242,-0.26411 l -3.0750017,-1.90368 0,3.27796 c 0,0.97016 1.7931578,1.7555 4.0032436,1.7555 2.2108742,0 4.0038842,-0.78536 4.0038842,-1.7555 l 0,-3.27796 -3.0748786,1.90368 C 7.6492472,9.69388 7.3279857,9.78508 6.9996059,9.78508 Z" />
                </svg>
              </span>
              {"  Education: Bachelors"}
            </li>
            <li>
              <span>
                <svg
                  fill="white"
                  width="15px"
                  height="15px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044-0 0-0 0-0.001 0h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c0 0 0 0-0 0-1.129 0-2.044-0.915-2.044-2.044 0-0 0-0.001 0-0.001v0-17.381c0-0 0-0.001 0-0.001 0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l-0.008-0.006 10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067v0z"></path>
                </svg>
              </span>
              {"  Gmail: the1rashid@gmail.com"}
            </li>
            <li>
              <span>
                <svg
                  fill="white"
                  width="15px"
                  height="15px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
                </svg>
              </span>
              {"  Age: 21"}
            </li>
          </ul>
        </div>
        <div className="skills-section">
          <h3 className="my-title skill-title">Skillset</h3>
          <div className="skills-container">
            <ul className="skills-list">
              <li>
                <span>
                  <img
                    className="skill-img"
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="HTML5"
                  />
                </span>
              </li>
              <li>
                <img
                  className="skill-img"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="CSS3"
                />
              </li>
              <li>
                <img className="skill-img" src={js} alt="JAVASCRIPT" />
              </li>
              <li>
                <img className="skill-img" src={react} alt="REACTJS" />
              </li>
              <li>
                <img className="skill-img" src={tailwind} alt="TAILWIND CSS" />
              </li>
              <li>
                <img className="skill-img" src={github} alt="GITHUB" />
              </li>
              <li>
                <img className="skill-img" src={git} alt="GIT" />
              </li>
              <li>
                <img className="skill-img" src={figma} alt="FIGMA" />
              </li>
              <img className="skill-img" src={python} alt="PYTHON" />
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="dividor2"></div>
    </div>
  );
};

export default AboutMe;
