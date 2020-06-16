import React from "react";

export default function Skills(props) {
  return (
    <>
      {/* Skills */}

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">{props.title}</h6>
        </div>
        <div className="card-body" style={{ textAlign: "left" }}>
          <h4 className="small font-weight-bold">
            {props.pbTitle1} <span className="float-right">{}</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: `${props.pb1}%` }}
              aria-valuenow={50}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <h4 className="small font-weight-bold">
            {props.pbTitle2} <span className="float-right">{}</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{ width: `${props.pb2}%` }}
              aria-valuenow={70}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <h4 className="small font-weight-bold">
            {props.pbTitle3} <span className="float-right">{}</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: `${props.pb3}%` }}
              aria-valuenow={40}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <h4 className="small font-weight-bold">
            {props.pbTitle4} <span className="float-right">{}</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar bg-primary"
              role="progressbar"
              style={{ width: `${props.pb4}%` }}
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <h4 className="small font-weight-bold">
            {props.pbTitle5} <span className="float-right">{}</span>
          </h4>
          <div className="progress mb-4">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: `${props.pb5}%` }}
              aria-valuenow={30}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <h4 className="small font-weight-bold">
            {props.pbTitle6} <span className="float-right">{}</span>
          </h4>
          <div className="progress">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: `${props.pb6}%` }}
              aria-valuenow={90}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </div>
    </>
  );
}
