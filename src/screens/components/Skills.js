import React from "react";
import Background from "../template-elements/images/codeBackground.jpg";

export default function Skills(props) {
  return (
    <>
      {/* Skills */}

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6
            className="m-0 font-weight-bold text-secondary"
            style={{ fontSize: "1.3rem", color: "#03B2E8" }}
          >
            {props.title}
          </h6>
        </div>
        <div
          className="card-body"
          style={{
            textAlign: "left",
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
          <h4 className="small font-weight-bold text-light">
            {props.pbTitle1}{" "}
            <span className="float-right">{props.pbValues1}</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar "
              role="progressbar"
              style={{
                width: `${props.pbValues1}%`,
                backgroundColor: "#03B2E8",
              }}
              aria-valuenow={props.pbValues1}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <h4 className="small font-weight-bold text-light">
            {props.pbTitle2}{" "}
            <span className="float-right">{props.pbValues2}</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar "
              role="progressbar"
              style={{
                width: `${props.pbValues2}%`,
                backgroundColor: "#03B2E8!important",
              }}
              aria-valuenow={props.pbValues2}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <h4 className="small font-weight-bold text-light">
            {props.pbTitle3}{" "}
            <span className="float-right">{props.pbValues3}</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar "
              role="progressbar"
              style={{
                width: `${props.pbValues3}%`,
                backgroundColor: "#03B2E8",
              }}
              aria-valuenow={props.pbValues3}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
    </>
  );
}
