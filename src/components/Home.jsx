import React from "react";
import mainPic from "./strata/images/ProfilePic.png";

import projectPic1 from "./strata/images/thumbs/01.jpg";
import projectPic2 from "./strata/images/thumbs/02.jpg";
import projectPic3 from "./strata/images/thumbs/03.jpg";
import projectPic4 from "./strata/images/thumbs/04.jpg";
import projectPic5 from "./strata/images/thumbs/05.jpg";
import projectPic6 from "./strata/images/thumbs/06.jpg";

import ReactTextCollapse from "react-text-collapse";
import { Switch, Route } from 'react-router-dom';

const Home = (props) => {
  const TEXT_COLLAPSE_OPTIONS = {
    collapse: false, // default state when component rendered
    collapseText: "show more", // text to show when collapsed
    expandText: "show less", // text to show when expanded
    minHeight: 120, // component height when closed
	// maxHeight: 250, // expanded to
    maxHeight: 400, 
    textStyle: {
      float: "none",
      color: "#787878",
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
      height: "3.15em", 
      height: "calc(2.75em + 6px)",
      lineHeight: "2.75em",
      minWidth: "7rem",
      textAlign: "center",
      textDecoration: "none",
      whiteSpace: "nowrap",
      margin: "1rem 0",      
    },
  };

  return (
    <>
      <div>
        {/* Header */}
        <header
          id="header"
          style={{
            backgroundImage: `url("../strata/assets/css/images/overlay.png")`,
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
            <ReactTextCollapse
              options={TEXT_COLLAPSE_OPTIONS}
            >
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
				<br />
				I completed the Bootcamp in 9 weeks, while still working
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
              <article className="col-6 col-12-xsmall work-item">
                <a href="images/fulls/01.jpg" className="image fit thumb">
                  <img src={projectPic1} alt="" />
                </a>
                <h3>Magna sed consequat tempus</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article className="col-6 col-12-xsmall work-item">
                <a href="images/fulls/02.jpg" className="image fit thumb">
                  <img src={projectPic2} alt="" />
                </a>
                <h3>Ultricies lacinia interdum</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article className="col-6 col-12-xsmall work-item">
                <a href="images/fulls/03.jpg" className="image fit thumb">
                  <img src={projectPic3} alt="" />
                </a>
                <h3>Tortor metus commodo</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article className="col-6 col-12-xsmall work-item">
                <a href="images/fulls/04.jpg" className="image fit thumb">
                  <img src={projectPic4} alt="" />
                </a>
                <h3>Quam neque phasellus</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article className="col-6 col-12-xsmall work-item">
                <a href="images/fulls/05.jpg" className="image fit thumb">
                  <img src={projectPic5} alt="" />
                </a>
                <h3>Nunc enim commodo aliquet</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
              <article className="col-6 col-12-xsmall work-item">
                <a href="images/fulls/06.jpg" className="image fit thumb">
                  <img src={projectPic6} alt="" />
                </a>
                <h3>Risus ornare lacinia</h3>
                <p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
              </article>
            </div>
            <ul className="actions">
              	<li>
					<a href="#" class="button primary icon fa-download">Download Resume</a>
				</li>
            </ul>
          </section>
          {/* Three */}
          <section id="three">
            <h2>Get In Touch</h2>

            <div className="row">
              <div className="col-8 col-12-small">
                <form method="post" action="#">
                  <div className="row gtr-uniform gtr-50">
                    <div className="col-6 col-12-xsmall">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-6 col-12-xsmall">
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
                <a href="twitter.com/cg_josa" target="_blank" rel="nofollow" className="icon brands fa-twitter">
                	{/* <button onClick={() => { props.history.push("google.com"); window.location.reload() }} className="btn btn-light" type="submit" style={{ background: "transparent", color: "white", border:0 }} >+</button> */}
				  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="github.com/ChabaJosa" target="_blank" rel="nofollow" className="icon brands fa-github">
                	{/* <button onClick={() => { props.history.push("google.com"); window.location.reload() }} className="btn btn-light" type="submit" style={{ background: "transparent", color: "white", border:0 }} >+</button> */}
				  <span className="label">Github</span>
                </a>
              </li>

			  {/* <Route path='/privacy-policy' component={() => { 
					window.location.href = 'https://google.com/'; 
					return null;
				}}/> */}


              <li>
                <a href="#" target="_blank" rel="nofollow"  className="icon solid fa-envelope">
                	{/* <button onClick={() => { props.history.push("google.com"); window.location.reload() }} className="btn btn-light" type="submit" style={{ background: "transparent", color: "white", border:0 }} >+</button> */}
				  <span className="label">Email</span>
                </a>
              </li>
            </ul>
          </div>
        </footer>
        {/* Scripts */}
      </div>
    </>
  );
};

export default Home;
