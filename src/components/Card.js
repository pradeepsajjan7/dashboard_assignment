import React from "react";

const Card = () => {
  const cardDetail = [
    {
      id: 1,
      icon: "fa fa-exclamation-triangle",
      val: "5 Cr",
      title: "Missing Truck",
      txt1: "Trip ID : 123456",
      txt2: "Transporter : VRL Logistics",
      txt3: "From : Banglore",
      txt4: "To : Mysore",
      txt5: "Driver Details",
      txt6: "Rahul(+91 9916673568)",
      txt7: "Last Known Details",
      txt8: "Kolhapur",
    },
    {
      id: 2,
      icon: "fa fa-sitemap",
      val: "2 Cr",
      title: "Detention Truck",
      txt1: "Trip ID : 123456",
      txt2: "Transporter : VRL Logistics",
      txt3: "From : Banglore",
      txt4: "To : Mysore",
      txt5: "Driver Details",
      txt6: "Rahul(+91 9916673568)",
      txt7: "Checkpoint Details",
      txt8: "Kolhapur",
    },
    {
      id: 3,
      val: "25 Cr",
      icon: "fa fa-bitcoin",
      title: "High Value Shipment",
      txt1: "Trip ID : 123456",
      txt2: "Transporter : VRL Logistics",
      txt3: "Mumbai Maharashtra",
      txt4: "22 OCT 9:45PM",
      txt5: "Driver Details",
      txt6: "Rahul(+91 9916673568)",
      txt7: "Place , State",
      txt8: "25 OCT , 2:04 PM",
    },
    {
      id: 4,
      icon: "fa fa-bullhorn",
      val: "100 Cr",
      title: "Transporter Details",
      txt1: "Trip ID : 123456",
      txt2: "Transporter : VRL Logistics",
      txt3: "From : Banglore",
      txt4: "To : Mysore",
      txt5: "Driver Details",
      txt6: "Rahul(+91 9916673568)",
      txt7: "Last Known Details",
      txt8: "Kolhapur",
    },
  ];

  const cardStructure = cardDetail.map(
    ({
      id,
      icon,
      val,
      title,
      txt1,
      txt2,
      txt3,
      txt4,
      txt5,
      txt6,
      txt7,
      txt8,
    }) => {
      return (
        <div className="col-sm-5 borderRed" key={id}>
          <div className="card p-3 mb-2" style={{ color: "grey" }}>
            <h4>
              <i class={icon} style={{ padding: "10px" }}></i>
              {title}
              <span style={{ float: "right" }}>
                Value :{" "}
                <button
                  style={{
                    fontSize: "12px",
                    padding: "3px",
                    borderRadius: "10px",
                    color: "black",
                    backgroundColor: "lightgrey",
                  }}
                >
                  {val}
                </button>
              </span>
            </h4>

            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="ms-2 c-details">
                  <h6 className="mb-0">{txt1}</h6>
                  <h6 className="mb-0">{txt2}</h6>
                </div>
              </div>

              <div className="badge">
                <h6 className="mb-0">{txt3}</h6>
                <h6 className="mb-0">{txt4}</h6>
              </div>
            </div>

            <hr />

            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="ms-2 c-details">
                  <h6 className="mb-0">{txt5}</h6>
                  <h6 className="mb-0">{txt6}</h6>
                </div>
              </div>
              <div className="badge">
                <h6 className="mb-0">{txt7}</h6>
                <h6 className="mb-0">{txt8}</h6>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

  return <div className="row">{cardStructure}</div>;
};

export default Card;
