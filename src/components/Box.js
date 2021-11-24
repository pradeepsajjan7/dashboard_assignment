import React from "react";

const Box = () => {
  const boxDetail = [
    {
      id: 1,
      title: "TOTAL TRIPS",
      leftNum1: 54,
      rightNum1: "100cr",
      leftNum2: "+8%",
      rightNum2: "-9.9%",
      color: "purple",
    },
    {
      id: 2,
      title: "ON-TIME",
      leftNum1: 26,
      rightNum1: "47 cr",
      leftNum2: "+8%",
      rightNum2: "-9.9%",
      color: "green",
    },
    {
      id: 3,
      title: "DELAYED",
      leftNum1: 12,
      rightNum1: "27.2cr",
      leftNum2: "+8%",
      rightNum2: "-9.9%",
      color: "grey",
    },
    {
      id: 4,
      title: "DEVIATED",
      leftNum1: 3,
      rightNum1: "9.3cr",
      leftNum2: "+8%",
      rightNum2: "-9.9%",
      color: "black",
    },
    {
      id: 5,
      title: "MISSING",
      leftNum1: 7,
      rightNum1: "9.3cr",
      leftNum2: "8%",
      rightNum2: "-9.9%",
      color: "blue",
    },
    {
      id: 6,
      title: "UN-TRACKED",
      leftNum1: 3,
      rightNum1: "3.2cr",
      leftNum2: "8%",
      rightNum2: "-9.9%",
      color: "skyblue",
    },
  ];

  const boxStructure = boxDetail.map(
    ({ id, title, leftNum1, rightNum1, leftNum2, rightNum2, color }) => {
      return (
        <div className="col-sm-2 borderRed" key={id}>
          <div
            className="card p-3 mb-2"
            style={{ backgroundColor: `${color}` }}
          >
            <h4>{title}</h4>

            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="ms-2 c-details">
                  <h6 className="mb-0">{leftNum1}</h6> <span></span>
                </div>
              </div>
              <div className="badge">
                {" "}
                <span>{rightNum1}</span>{" "}
              </div>
            </div>

            <hr />

            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="ms-2 c-details">
                  <h6 className="mb-0">{leftNum2}</h6> <span></span>
                </div>
              </div>
              <div className="badge">
                {" "}
                <span>{rightNum2}</span>{" "}
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

  return (
    <div>
      <div className="row">{boxStructure}</div>
    </div>
  );
};

export default Box;
