import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { Button } from "react-bootstrap";
import Player from "./Player";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProjectModal(props) {
  const reload = () => {
    return window.location.reload();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader closeButton>
        <ModalTitle id="contained-modal-title-vcenter" className="hover-underline-animation " >
          {props.title}
        </ModalTitle>
      </ModalHeader>
      <ModalBody>
        {/* Insert iframe here */}
        <div className="modalBodyDiv">
          <p style={{padding: "0", marginBottom: "0.5vh" }}><span className="hover-underline-animation modalTitle " >Fun Fact:</span><span>{" " + props.funFact}</span></p>
          <p style={{padding: "0", marginBottom: "1vh" }}><span className="hover-underline-animation modalTitle " >Technologies:</span><span>{" " + props.technologies}</span></p>
          <p style={{padding: "0", marginBottom: "1vh" }}><span className="hover-underline-animation modalTitle " >Purpose:</span><span></span>{" " + props.purpose}</p>
          <br />
          {
            props.videoID === "" ?
            <div style={{display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "center"}}>
              <h1>Sorry, there's something wrong with this video ID :\</h1>
              <p>Please try again later!</p>
            </div>
            :
            <Player videoID={props.videoID} title={props.title} />
          }
          {/* <p>Check it out!</p> */}
          <ul className="actions modalBtn" style={{margin: "1vh"}} >
            <li>
              <a
                // target="_blank"
                href={props.hyperLink}
                className="hover-underline-animation " 
                // rel="noopener noreferrer"
                onClick={(e) => {window.open(props.hyperLink)}}
              >
                {console.log("Here's the hyperlink" , props.hyperLink)}
                {`${
                  props.hyperLink.includes("https://github.com/ChabaJosa/")
                    ? "Github Repo"
                    : "Deployed App"
                }`}
              </a>
            </li>
          </ul>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button onClick={(() => props.onHide, reload)} >Close</Button>
      </ModalFooter>
    </Modal>
  );
}
