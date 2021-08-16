import React from "react";
import mainPic from "./template-elements/images/ProfilePic.png";
import projectPic0 from "./template-elements/images/thumbs/00.png";
import projectPic1 from "./template-elements/images/thumbs/01.png";
import projectPic2 from "./template-elements/images/thumbs/02.png";
import projectPic3 from "./template-elements/images/thumbs/03.png";
import projectPic4 from "./template-elements/images/thumbs/04.png";
import projectPic5 from "./template-elements/images/thumbs/05.png";
import projectPic6 from "./template-elements/images/thumbs/06.png";
import Background from "./template-elements/images/codeBackground.jpg";
import Resume from "../ChabaJosa-07-21.1.pdf";
import ReactTextCollapse from "react-text-collapse";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import ProjectCard from "./components/ProjectCard";

export default function Home(props) {
  const TEXT_COLLAPSE_OPTIONS = {
    collapse: false, // default state when component rendered
    collapseText: "Full Story", // text to show when collapsed
    expandText: "Show Less", // text to show when expanded
    minHeight: 120, // component height when closed
    // maxHeight: 250, // expanded to
    maxHeight: 400,
    textStyle: {
      float: "none",
      fontSize: "16px",
      MozAppearance: "none",
      WebkitAppearance: "none",
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
  //
  const [collapseProjects, setCollapseProjects] = React.useState(false);
  //
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
              <h1>Pitbull Dad</h1>
              <h1>React-Native Nerd</h1>
              <h1>Tech trend enthusiast</h1>
            </div>
          </div>
        </header>
        {/* Main */}
        <div id="main">
          {/* One */}
          <section id="one">
            <header className="major">
              <h2><i>My Story in Software</i></h2>
            </header>
            <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
              <p>
                Ironhack graduate from January 2020, full-stack web development
                cohort with a +2 year background in software development and
                a +3 year background digital media. My current aspirations are
                to grow within the tech industry while continuing to learn about
                programming.
              </p>
              <p>
                My education started in my home country of Venezuela and
                continued in the College of Southern Maryland where I completed
                college in 3 semesters and a summer, while working remotely for
                the first company I worked for, MT Group. I went on to study
                marketing at Florida International University and started my
                Social Media Marketing career at Radar.
                <br />
                <br />
                Once I realized my true passion was coding, I ceased attending
                undergraduate classes with only a semester shy of graduating to
                study computer programming on my own. While I put in a couple of
                hours a day, I knew I wasn't doing enough to reach the
                professional level of expertise I was looking for. That is when I
                found the Ironhack coding school Full-Stack Web Development
                Bootcamp. With 500+ hours of hands-on programming, I knew
                Ironhack would provide me the tools I was looking for.
                <br />
                <br />I completed the Bootcamp in 9 weeks, while still working
                full-time at Radar and delivering exponential results of organic
                growth. My team won best final project for our App that used
                machine learning and web scraping to help plan out social media
                content strategies.
                <br />
                <br />
                I applied my newly acquired skills at Radar for a while, but I was
                still having to do social media and digital marketing related tasks.
                I was ready for a 100 percent software development job and I found
                <a target="_blank" rel="noopener noreferrer" href='https://www.banyanair.com/'>Banyan</a>
                <br />
                <br />
                I started as an ile RPG Developer and as such, developed end-of-month reports for accounting,
                web programs for technicians to look up available parts and inventory for aircrafts. After a few
                months, I noticed there was a huge opportunity cost. While most employees are out in the tarmac, they
                have no access to any program unless they are sitting at their desktop, so I convinced the
                Director of Application Development to let me create proof of concept for a mobile app using a REST API
                and a React-Native frontend. After a month, I had a prototype working and searching for parts!
                This shifted our focus for the entire 2021 year towards building a multi-faceted mobile app for both
                employees and customers of Banyan Air Services and we succeeded in doing so! This will be the first
                project listed below!
                <br />
                <br />
                This experience has made me realize that I want to focus on mobile development in the next few years
                of my career at infosec. I am looking forward to learning other mobile technologies like Flutter, Swift,
                and Kotlin.
                <br />
                <br />
                If you have made it this far, thank you for reading my story!
              </p>
              <p>
                Specialties: JavaScript (ES6), HTML5, CSS3, ReactJS, NodeJS, React-Native, NoSQL, SQL, ile RPG, IBM iOS.
              </p>
            </ReactTextCollapse>
          </section>
          {/* Two */}
          <section id="two">
            <h2>Highlight Projects</h2>
            <div className="row">
              {/* #0 */}
              <ProjectCard
                pic={projectPic0}
                purpose={"Mobile App for both employees and customers of Banyan Air Services (FBO)."}
                title={"Banyan Air Services App"}
                subtitle={
                  "Flight Reservations, Aircraft Inquiry, Personal Profile and much more!"
                }
                videoDuration={">1 min"}
                funFact={"This is likely the only React-Native App with ile RPG you'll ever see."}
                technologies={
                  "React-Native, Expo, ContextAPI, NodeJS, ile RPG, IBM i OS"
                }
                hyperLink={"https://apps.apple.com/us/app/banyan-air-services/id1576872343"}
                videoID={"pX4-TYdKjUk"}
              />
              {/* #1 */}
              <ProjectCard
                pic={projectPic1}
                purpose={"Ideally, this app would give users insights on how to do better, more efficient content strategies for instagram."}
                title={"EngagementML"}
                subtitle={
                  "Instagram Insights + Machine Learning recommendations."
                }
                videoDuration={"+7 min"}
                funFact={"AI is my dream field."}
                technologies={
                  "HTML5, CSS3, JavaScript, ReactJS, Node.js, Express.js, Jquery, Web Scraping, Python, Machine Learning"
                }
                hyperLink={"https://engagementml.herokuapp.com/"}
                videoID={"cdzeYRqonuw"}
              />
              {/* #2 */}
              <ProjectCard
                title={"Super Marvel Directory"}
                subtitle={
                  "Power-Stats, fun facts, videos and comics your favorite heroes!"
                }
                videoDuration={"+2 min"}
                funFact={
                  "My favorite superhero App of the two! I'm looking forward to making a React Native version."
                }
                technologies={
                  "HTML5, CSS3, JavaScript, ReactJS and Marvel, Superhero  & YouTube API"
                }
                hyperLink={"https://super-directory.netlify.app/"}
                videoID={"Vq5letSRWPM"}
                pic={projectPic2}
                purpose={"This app allows you to learn more about your favorite heroes!"}
              />
              {/* #3 */}
              <ProjectCard
                title={"React-Native Food App"}
                subtitle={"First React-Native App (of many to come)"}
                videoDuration={">1 min"}
                funFact={"My first Mobile App!"}
                technologies={"React-Native, React Hooks, contextAPI"}
                hyperLink={"https://github.com/ChabaJosa/FoodAppRN"}
                videoID={"4Jo3q3iE_EE"}
                pic={projectPic3}
                purpose={"If you ever get hungry and want to see which restaurants are open anywhere in the U.S. you should have this app which uses the Yelp API to search for restaurants, or maybe Yelp."}
              />
              {/* #4 */}
              <ProjectCard
                title={"Trakster"}
                subtitle={"Prototype expense tracker (working progress)."}
                videoDuration={"+2 min"}
                funFact={
                  "I'm currently working on this one! It's going to be MERN stack project. Right now most of the App functionality comes from an awesome tutorial from the talented Brad Traversy!"
                }
                technologies={"ReactJS, React Hooks, Bootstrap"}
                hyperLink={"https://trakster.herokuapp.com/"}
                videoID={"-DYcwRQQKTk"}
                pic={projectPic4}
                purpose={"Hopefully, when I'm done with this app it will help my keep track, separately, of my fixed and variable expenses."}
              />
              {/* #5 */}
              <ProjectCard
                title={"TwitterBot"}
                subtitle={
                  "So you can doubt any liked and retweeted content on your feed!"
                }
                funFact={
                  "Quick Twitter bot that will eventually manage my Twitter all day on my old PC."
                }
                technologies={"Python, Tweepy, TwitterAPI"}
                hyperLink={"https://github.com/ChabaJosa/TwitterBot"}
                videoID="VGm41RH9ZGM"
                pic={projectPic5}
                purpose={"If you're lazy about liking tweets or retweeting, clone this repo, install 2 python libraries and you're set for life!"}
              />
              {/* 6 */}
              <ProjectCard
                title={"Whak-A-Villain"}
                subtitle={"Marvel themed D.O.M. Manipulation whack-a-mole."}
                videoDuration={"+7 min"}
                funFact={
                  "This was my first project at Ironhack and my first Marvel Project!"
                }
                technologies={"JavaScript, HTML5, CSS3, DOM Manipulation"}
                hyperLink={"https://chabajosa.github.io/Whak-a-villain/"}
                videoID={"w3eXuTN9vq0"}
                pic={projectPic6}
                purpose={"If you ever wanted to see what a Marvel themed Whack-A-Mole game looks like, here it is!"}
              />

              {/* CollapseCode */}

              {collapseProjects ? null : (
                <div>
                  {/* <button
                  className="btn"
                  style={{
                    float: "none",
                    fontSize: "16px",
                    MozAppearance: "none",
                    WebkitAppearance: "none",
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
                </button> */}
                </div>
              )}
              {/* <Collapse isOpened={true}>
                
              </Collapse> */}
            </div>

            {/* Download resume btn */}
            <ul className="actions">
              <li>
                <a href={Resume} download={Resume}>
                  Download Resume
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
            </div>

            {/* End of CollapseCode */}

            {/* Skills */}
            <div>
              <Skills
                style={{ width: "70vh" }}
                title="My Top 3 Tech Skills"
                pbValues1={90}
                pbValues2={90}
                pbValues3={95}
                pbTitle1={"ES6"}
                pbTitle2={"React-Native"}
                pbTitle3={"ContextAPI & React Hooks"}
              />
              <Skills
                title="Top 3 Soft Skills"
                pbValues1={95}
                pbValues2={85}
                pbValues3={90}
                pbTitle1={"Critical Thinker"}
                pbTitle2={"Time management"}
                pbTitle3={"Team Player"}
              />
            </div>
          </section>
          {/* Three */}
          <section id="three">
            <h2>Get In Touch</h2>

            <div className="row">
              <ContactMe />

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
                    <p>chabagjg@gmail.com</p>
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
