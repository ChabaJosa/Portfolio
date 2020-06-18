import React from "react";

export default function Skills(props) {
  return (
    <>
      {/* Skills */}

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-secondary" style={{fontSize:"1.3rem", color: "#03B2E8"}}>{props.title}</h6>
        </div>
        <div className="card-body" style={{ textAlign: "left" }}>
          <h4 className="small font-weight-bold text-secondary">
            {props.pbTitle1} <span className="float-right">{props.pbValues1}</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar "
              role="progressbar"
              style={{ width: `${props.pbValues1}%`, backgroundColor:"#03B2E8" }}
              aria-valuenow={props.pbValues1}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <h4 className="small font-weight-bold text-secondary">
            {props.pbTitle2} <span className="float-right">{props.pbValues2}</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar "
              role="progressbar"
              style={{ width: `${props.pbValues2}%`, backgroundColor:"#03B2E8!important" }}
              aria-valuenow={props.pbValues2}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <h4 className="small font-weight-bold text-secondary">
            {props.pbTitle3} <span className="float-right">{props.pbValues3}</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar "
              role="progressbar"
              style={{ width: `${props.pbValues3}%`, backgroundColor:"#03B2E8" }}
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
