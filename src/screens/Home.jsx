import React, { Children } from "react";
import mainPic from "./template-elements/images/ProfilePic.png";
import projectPic1 from "./template-elements/images/thumbs/01.png";
import projectPic2 from "./template-elements/images/thumbs/02.png";
import projectPic3 from "./template-elements/images/thumbs/03.png";
import projectPic4 from "./template-elements/images/thumbs/04.png";
import projectPic5 from "./template-elements/images/thumbs/05.png";
import projectPic6 from "./template-elements/images/thumbs/06.png";
import Background from "./template-elements/images/codeBackground.jpg";

import ReactTextCollapse from "react-text-collapse";
import { Collapse } from "react-collapse";
import { Link } from "react-router-dom";
import Modal from "./components/Modal";
import Skills from "./components/Skills";

export default function Home(props) {
  const TEXT_COLLAPSE_OPTIONS = {
    collapse: false, // default state when component rendered
    collapseText: "show more", // text to show when collapsed
    expandText: "show less", // text to show when expanded
    minHeight: 120, // component height when closed
    // maxHeight: 250, // expanded to
    maxHeight: 400,
    textStyle: {
      float: "none",
      fontSize: "16px",
      mozAppearance: "none",
      webkitAppearance: "none",
      msAppearance: "none",
      appearance: "none",
      borderRadius: "0.35em",
      border: "solid 3px #efefef",
      color: "#787878 !important",
      display: "inline-block",
      fontWeight: "400",
      // height: "3.15em",
      // height: "calc(2.75em + 6px)",
      lineHeight: "2.75em",
      minWidth: "7rem",
      textAlign: "center",
      textDecoration: "none",
      whiteSpace: "nowrap",
      margin: "1rem 0",
    },
  };

  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);
  const [modalShow4, setModalShow4] = React.useState(false);
  const [modalShow5, setModalShow5] = React.useState(false);
  const [modalShow6, setModalShow6] = React.useState(false);
  const [collapseProjects, setCollapseProjects] = React.useState(false);

  return (
    <>
      <div>
        {/* Header */}
        <header
          id="header"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
                ), 
              url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100rem",
          }}
        >
          {/* Work on this background image above later */}

          <div className="inner">
            <a href="#" className="image avatar">
              <img src={mainPic} alt="" />
            </a>
            <div>
              <h1>
                <strong>I'm Chaba</strong>
              </h1>
              <h1>Film Buff</h1>
              <h1>Bookworm</h1>
              <h1>MERN-Stack nerd</h1>
              <h1>Tech trend enthusiast</h1>
              <h1>Social Media Marketer</h1>
            </div>
          </div>
        </header>
        {/* Main */}
        <div id="main">
          {/* One */}
          <section id="one">
            <header className="major">
              <h2>About Me</h2>
            </header>
            <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
              <p>
                Ironhack graduate from January 2020, full-stack web development
                cohort with a +3 year background in content strategy and social
                media growth hacks. My current aspirations are to grow within
                the tech industry while continuing to learn about programming
                and data analysis. Specialties: Social Media, Organic Audience
                Growth, JavaScript (ES6), HTML5, CSS3, ReactJS, NodeJS,
                ReactNative.
              </p>
              <p>
                My education started in my home country of Venezuela and
                continued in the College of Southernn Maryland where I completed
                college in 3 semesters and a summer, while working remotely for
                the first company I worked for, MT Group. I went on to study
                marketing at Florida International University and start my
                Social Media Marketing career at Radar.
                <br />
                <br />
                Once I realized my true passion was coding, I ceased attending
                undergraduate classes with only a semester shy of graduating to
                study computer programming on my own. While I put in a couple of
                hours a day, I knew I was not doing enough to reach the
                professional level of expertise I was looking for. That's when I
                found the Ironhack coding school Full-Stack Web Development
                Bootcamp. With 500+ hours of hands on programming, I knew
                Ironhack would provide me the tools I was looking for.
                <br />
                <br />I completed the Bootcamp in 9 weeks, while still working
                full-time at Radar and delivering exponential results of organic
                growth. My team won best final project for our App that used
                machine learning and web scraping to help plan out social media
                content strategies.
              </p>
            </ReactTextCollapse>
          </section>

          {/* Two */}
          <section id="two">
            <h2>Recent Work</h2>
            <div className="row">
              <article className="col-12-xsmall work-item">
                {/* Insert Link here */}
                <Link
                  to="/"
                  style={
                    {
                      // display: "inline"
                    }
                  }
                  className="image fit thumb"
                  onClick={() => setModalShow1(true)}
                >
                  <img
                    src={projectPic1}
                    alt=""
                    // style={{ width:"20vw", overflow: "hidden" }}
                  />
                  {modalShow1 === true ? (
                    <div>
                      <Modal
                        show={modalShow1}
                        onHide={
                          (() => setModalShow1(false),
                          console.log("Pressed onHide 1"))
                        }
                        title={"EngagementML"}
                        funFact={"AI is my dream field."}
                        videoID={"cdzeYRqonuw"}
                      />
                    </div>
                  ) : null}
                </Link>
                <h3 className="hover-underline-animation">EngagementML</h3>
                <p>Instagram Insights + Machine Learning recommendations.</p>
              </article>
              <article className="col-12-xsmall work-item">
                {/* Eml above*/}
                <Link
                  to="/"
                  style={
                    {
                      // display: "inline"
                    }
                  }
                  className="image fit thumb"
                  onClick={() => setModalShow2(true)}
                >
                  <img
                    src={projectPic2}
                    alt=""
                    // style={{ width:"20vw", overflow: "hidden" }}
                  />
                  {modalShow2 === true ? (
                    <div>
                      <Modal
                        show={modalShow2}
                        onHide={
                          (() => setModalShow2(false),
                          console.log("Pressed onHide2"))
                        }
                        title={"Super Marvel Directory"}
                        funFact={
                          "My favorite superhero App of the two! Very much looking forward to a React Native version"
                        }
                      />
                    </div>
                  ) : null}
                </Link>

                <h3 className="hover-underline-animation">
                  Super Marvel Directory
                </h3>
                <p>
                  Power-Stats, fun facts, videos and comics your favorite
                  heroes!{" "}
                </p>
              </article>
              {/* Super Directory App above */}
              {collapseProjects ? null : (
                <div>

                <button
                  className="btn"
                  style={{
                    float: "none",
                    fontSize: "16px",
                    mozAppearance: "none",
                    webkitAppearance: "none",
                    msAppearance: "none",
                    appearance: "none",
                    borderRadius: "0.35em",
                    border: "solid 3px #efefef",
                    color: "#787878 !important",
                    display: "inline-block",
                    fontWeight: "400",
                    // height: "3.15em",
                    lineHeight: "2.75em",
                    minWidth: "7rem",
                    textAlign: "center",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    margin: "1rem 0",
                    color: "#a2a2a2",
                    alignSelf: "center",
                  }}
                  onClick={() => {
                    setCollapseProjects(true);
                  }}
                >
                  show more
                </button>
                </div>
              )}
              <Collapse isOpened={false}>
                <article className="col-12-xsmall work-item">
                  <Link
                    to="/"
                    style={
                      {
                        // display: "inline"
                      }
                    }
                    className="image fit thumb"
                    onClick={() => setModalShow3(true)}
                  >
                    <img
                      src={projectPic3}
                      alt=""
                      // style={{ width:"20vw", overflow: "hidden" }}
                    />
                    {modalShow3 === true ? (
                      <div>
                        <Modal
                          show={modalShow3}
                          onHide={
                            (() => setModalShow3(false),
                            console.log("Pressed onHide"))
                          }
                          title={"React Native FoodApp"}
                          funFact={"My first Mobile App!"}
                        />
                      </div>
                    ) : null}
                  </Link>

                  <h3 className="hover-underline-animation">
                    React-Native Food App
                  </h3>
                  <p>First React-Native App (of many to come).</p>
                </article>
                {/* Food App above */}
                <article className="col-12-xsmall work-item">
                  {/* Insert Link here */}
                  <Link
                    to="/"
                    style={
                      {
                        // display: "inline"
                      }
                    }
                    className="image fit thumb"
                    onClick={() => setModalShow4(true)}
                  >
                    <img
                      src={projectPic4}
                      alt=""
                      // style={{ width:"20vw", overflow: "hidden" }}
                    />
                    {modalShow4 === true ? (
                      <div>
                        <Modal
                          show={modalShow4}
                          onHide={
                            (() => setModalShow4(false),
                            console.log("Pressed onHide4"))
                          }
                          title={"Trakster"}
                          funFact={
                            "I'm currently working this one! It's going to be MERN stack project."
                          }
                        />
                      </div>
                    ) : null}
                  </Link>

                  <h3 className="hover-underline-animation">Trakster</h3>
                  <p>Prototype expense tracker (working progress).</p>
                </article>
                {/* Trakster above */}
                <article className="col-12-xsmall work-item">
                  <Link
                    to="/"
                    style={
                      {
                        // display: "inline"
                      }
                    }
                    className="image fit thumb"
                    onClick={() => setModalShow5(true)}
                  >
                    <img
                      src={projectPic5}
                      alt=""
                      // style={{ width:"20vw", overflow: "hidden" }}
                    />
                    {modalShow5 === true ? (
                      <div>
                        <Modal
                          show={modalShow5}
                          onHide={
                            (() => setModalShow5(false),
                            console.log("Pressed onHide5"))
                          }
                          title={"Twitter Bot"}
                          funFact={
                            "Fun little Twitter bot that will eventually manage my Twitter all day on my old PC."
                          }
                        />
                      </div>
                    ) : null}
                  </Link>

                  <h3 className="hover-underline-animation">Twitter Bot</h3>
                  <p>
                    So you can doubt any liked and retweeted content on your
                    feed!
                  </p>
                </article>
                {/* Twitter Bot above */}
                <article className="col-12-xsmall work-item">
                  {/* Insert Link here */}
                  <Link
                    to="/"
                    style={
                      {
                        // display: "inline"
                      }
                    }
                    className="image fit thumb"
                    onClick={() => setModalShow6(true)}
                  >
                    <img
                      src={projectPic6}
                      alt=""
                      // style={{ width:"20vw", overflow: "hidden" }}
                    />
                    {modalShow6 === true ? (
                      <div>
                        <Modal
                          show={modalShow6}
                          onHide={
                            (() => setModalShow6(false),
                            console.log("Pressed onHide6"))
                          }
                          title={"Whak-A-Villain"}
                          funFact={"This was my first project at Ironhack!"}
                        />
                      </div>
                    ) : null}
                  </Link>
                  <h3 className="hover-underline-animation">Whak-A-Villain</h3>
                  <p>Marvel themed D.O.M. Manipulation whack-a-mole.</p>
                </article>
                {/* Whak a Villain above */}
                {collapseProjects ? null : (
                  <button
                    className="btn"
                    style={{
                      float: "none",
                      fontSize: "16px",
                      mozAppearance: "none",
                      webkitAppearance: "none",
                      msAppearance: "none",
                      appearance: "none",
                      borderRadius: "0.35em",
                      border: "solid 3px #efefef",
                      color: "#787878 !important",
                      display: "inline-block",
                      fontWeight: "400",
                      // height: "3.15em",
                      lineHeight: "2.75em",
                      minWidth: "7rem",
                      textAlign: "center",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                      margin: "1rem 0",
                      color: "#a2a2a2",
                      alignSelf: "center",
                    }}
                    onClick={() => {
                      setCollapseProjects(false);
                    }}
                  >
                    show less
                  </button>
                )}
              </Collapse>
            </div>

            {/* Download resume btn */}
            <ul className="actions">
              <li>
                <a
                  target="_blank"
                  href="https://github.com/ChabaJosa?tab=repositories"
                  class="button primary icon fa-download"
                  rel="noopener noreferrer"
                >
                  All Repositories
                </a>
              </li>
            </ul>
          </section>
          {/* Two and a half*/}
          <section id="one">
            <div>
              <header className="major">
                <h2>Skills </h2>
              </header>
              {/* <h4>Standout Soft Skills</h4> */}
            </div>

            {/* Skills */}
            <div>
              <Skills
                style={{ width: "70vh" }}
                title="Top 3 Hard Skills"
                pbValues1={75}
                pbValues2={85}
                pbValues3={60}
                pbTitle1={"ReactJS"}
                pbTitle2={"ES6"}
                pbTitle3={"NodeJS"}
              />
              <Skills
                title="Top 3 Soft Skills"
                pbValues1={90}
                pbValues2={85}
                pbValues3={95}
                pbTitle1={"Critical Thinker"}
                pbTitle2={"Team Player"}
                pbTitle3={"Time management"}
              />
            </div>
          </section>
          {/* Three */}
          <section id="three">
            <h2>Get In Touch</h2>

            <div className="row">
              <div className="col-8 col-12-small">
                <form method="post" action="#">
                  <div className="row gtr-uniform gtr-50">
                    <div className="col-12-xsmall">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-12-xsmall">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows={4}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" defaultValue="Send Message" />
                  </li>
                </ul>
              </div>
              <div className="col-4 col-12-small">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon solid fa-home">
                      <span className="label">Address</span>
                    </h3>
                    Miami, FL
                    <br />
                  </li>
                  <li>
                    <h3 className="icon solid fa-mobile-alt">
                      <span className="label">Phone</span>
                    </h3>
                    301-532-7428
                  </li>
                  <li>
                    <h3 className="icon solid fa-envelope">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">chabagjg@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        {/* Footer */}
        <footer id="footer">
          <div className="inner">
            <ul className="icons">
              <li>
                <a
                  href="https://twitter.com/cg_josa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon brands fa-twitter"
                >
                  {/* <button onClick={() => { props.history.push("google.com"); window.location.reload() }} className="btn btn-light" type="submit" style={{ background: "transparent", color: "white", border:0 }} >+</button> */}
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ChabaJosa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon brands fa-github"
                >
                  {/* <button onClick={() => { props.history.push("google.com"); window.location.reload() }} className="btn btn-light" type="submit" style={{ background: "transparent", color: "white", border:0 }} >+</button> */}
                  <span className="label">Github</span>
                </a>
              </li>

              {/* <Route path='/privacy-policy' component={() => { 
					window.location.href = 'https://google.com/'; 
					return null;
				}}/> */}

              <li>
                <a
                  href="https://linkedin.com/in/chaba-josa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon solid fa-envelope"
                >
                  <span className="label">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
