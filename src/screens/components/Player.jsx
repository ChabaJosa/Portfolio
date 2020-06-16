import React from "react";
import {
  MDBContainer,
  MDBIframe 
} from "mdbreact";

export default function ProjectModal(props) {
  return (
    <React.Fragment>
      <MDBContainer>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title={props.title}
                className="embed-responsive-item"
                id="ytplayer"
                type="text"
                src={`https://www.youtube.com/embed/${props.videoID}`}
                frameBorder="0"
              ></iframe>
            </div>
      </MDBContainer>
    </React.Fragment>
  );
}
