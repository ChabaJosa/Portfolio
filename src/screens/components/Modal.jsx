import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


export default function ProjectModal(props) {

    const reload = () => {
        return window.location.reload()
    }

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
          <p>
            {props.funFact}
          </p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => props.onHide, reload}>Close</Button>
        </ModalFooter>
      </Modal>
  );
}

//   function App() {
//     const [modalShow, setModalShow] = React.useState(false);

//     return (
//       <>
//         <Button variant="primary" onClick={() => setModalShow(true)}>
//           Launch vertically centered modal
//         </Button>

//         <ProjectModal
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//         />
//       </>
//     );
//   }

//   render(<App />);
