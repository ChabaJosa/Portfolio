import React from 'react'
import Modal from "./Modal";
import { Link } from "react-router-dom";


export default function ProjectCard({ pic, title, funFact, technologies, hyperLink, videoID, subtitle, videoDuration, purpose }) {
  //
  const [modalShow, setModalShow] = React.useState(false);
  //
  return (
    <>
      <article className="col-12-xsmall work-item">
        <Link
          to="/"
          className="image fit thumb"
          onClick={() => setModalShow(true)}
        >
          <img
            src={pic}
            alt=""
          />
          {modalShow === true ? (
            <div>
              <Modal
                show={modalShow}
                onHide={
                  (() => setModalShow(false))
                }
                title={title}
                funFact={funFact}
                technologies={technologies}
                hyperLink={hyperLink}
                videoID={videoID}
                purpose={purpose}
              />
            </div>
          ) : null}
        </Link>
        <Link
          to="/"
          // className="image fit thumb"
          onClick={() => setModalShow(true)}
        >
          <h3 className="hover-underline-animation">{title}</h3>
        </Link>
        <p>{subtitle}</p>
        <p>
          <span className="hover-underline-animation">
            Video Duration:
          </span>{" "}
          {videoDuration}
        </p>
      </article>
      {/* Eml above*/}
    </>
  )
}
