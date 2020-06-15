import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { Button } from "react-bootstrap";
import Player from "./Player"
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
        <ModalTitle id="contained-modal-title-vcenter">
          {props.title}
        </ModalTitle>
      </ModalHeader>
      <ModalBody>
        {/* Insert iframe here */}
        <Player videoID={props.videoID} title={props.title}/>
        <br />
        <p>{props.funFact}</p>
      </ModalBody>
      <ModalFooter>
        <Button onClick={(() => props.onHide, reload)}>Close</Button>
      </ModalFooter>
    </Modal>
  );
}
