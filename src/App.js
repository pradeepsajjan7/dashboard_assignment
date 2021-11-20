import "./App.css";

function App() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7" style={{ display: "flex" }}>
            <div className="btn-group p-2">
              <button
                className="btn btn-secondary btn-lg dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Tracking
              </button>
            </div>

            <div className="search hidden-xs hidden-sm p-2">
              <input type="text" placeholder="search" />
            </div>
          </div>

          <div className="col-md-5">
            <h1>Dashboard</h1>
          </div>
        </div>

        <div className="row navs">
          <ul>
            <li>
              <a href="@">All</a>
            </li>
            <li>
              <a href="@">FTL</a>
            </li>
            <li>
              <a href="@">LCL</a>
            </li>
            <li>
              <a href="@">Courier</a>
            </li>
            <li>
              <a href="@">Container</a>
            </li>
            <li>
              <a href="@">Inbound</a>
            </li>
            <li>
              <a href="@">Outbound</a>
            </li>
          </ul>
        </div>

        <nav>
          <div className="logo">
            <h3>LOGO</h3>
          </div>
          <ul>
            <li>
              <a href="@">
                <i className="fa fa-2x fa-home"></i>
                <br />
                home
              </a>
            </li>
            <li>
              <a href="@">
                <i className="fa fa-2x fa-circle"></i>
                <br />
                about us
              </a>
            </li>
            <li>
              <a href="@">
                <i className="fa fa-2x fa-book"></i>
                <br />
                program
              </a>
            </li>
            <li>
              <a href="@">
                <i className="fa fa-2x fa-comments"></i>
                <br />
                forum
              </a>
            </li>
            <li>
              <a href="@">
                <i className="fa fa-2x fa-user"></i>
                <br />
                members
              </a>
            </li>
            <li>
              <a href="@">
                <i className="fa fa-2x fa-map-marker"></i>
                <br />
                contacts
              </a>
            </li>
          </ul>
        </nav>

        <div className="main content">
          <hr />

          <div className="row">
            <div className="col-sm-2 borderRed">
              <div
                className="card p-3 mb-2"
                style={{ backgroundColor: "purple" }}
              >
                <h4>Total Trips</h4>

                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="ms-2 c-details">
                      <h6 className="mb-0">54</h6> <span></span>
                    </div>
                  </div>
                  <div className="badge">
                    {" "}
                    <span>100cr</span>{" "}
                  </div>
                </div>

                <hr />

                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="ms-2 c-details">
                      <h6 className="mb-0">8%</h6> <span></span>
                    </div>
                  </div>
                  <div className="badge">
                    {" "}
                    <span>10%</span>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-2 borderRed">
              <div
                className="card p-3 mb-2"
                style={{ backgroundColor: "green" }}
              >
                <h4>Total Trips</h4>

                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="ms-2 c-details">
                      <h6 className="mb-0">54</h6> <span></span>
                    </div>
                  </div>
                  <div className="badge">
                    {" "}
                    <span>100cr</span>{" "}
                  </div>
                </div>

                <hr />

                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="ms-2 c-details">
                      <h6 className="mb-0">8%</h6> <span></span>
                    </div>
                  </div>
                  <div className="badge">
                    {" "}
                    <span>10%</span>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-2 borderRed">
              <div
                className="card p-3 mb-2"
                style={{ backgroundColor: "grey" }}
              >
                <h4>Total Trips</h4>

                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="ms-2 c-details">
                      <h6 className="mb-0">54</h6> <span></span>
                    </div>
                  </div>
                  <div className="badge">
                    {" "}
                    <span>100cr</span>{" "}
                  </div>
                </div>

                <hr />

                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="ms-2 c-details">
                      <h6 className="mb-0">8%</h6> <span></span>
                    </div>
                  </div>
                  <div className="badge">
                    {" "}
                    <span>10%</span>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-2 borderRed">
              <div
                className="card p-3 mb-2"
                style={{ backgroundColor: "black" }}
              >
                <h4>Total Trips</h4>

                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="ms-2 c-details">
                      <h6 className="mb-0">54</h6> <span></span>
                    </div>
                  </div>
                  <div className="badge">
                    {" "}
                    <span>100cr</span>{" "}
                  </div>
                </div>

                <hr />

                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="ms-2 c-details">
                      <h6 className="mb-0">8%</h6> <span></span>
                    </div>
                  </div>
                  <div className="badge">
                    {" "}
                    <span>10%</span>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-2 borderRed">
              <div
                className="card p-3 mb-2"
                style={{ backgroundColor: "skyblue" }}
              >
                <h4>Total Trips</h4>
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="ms-2 c-details">
                      <h6 className="mb-0">54</h6> <span></span>
                    </div>
                  </div>
                  <div className="badge">
                    {" "}
                    <span>100cr</span>{" "}
                  </div>
                </div>

                <hr />

                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div className="ms-2 c-details">
                      <h6 className="mb-0">8%</h6> <span></span>
                    </div>
                  </div>
                  <div className="badge">
                    {" "}
                    <span>10%</span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-sm-5 borderRed">
            <div className="card p-3 mb-2" style={{ color: "grey" }}>
              <h4>Missing Truck</h4>

              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Trip ID : 123456 </h6>
                    <h6 className="mb-0">Transporter : VRL Logistics </h6>
                  </div>
                </div>
                <div className="badge">
                  <h6 className="mb-0">From : Banglore </h6>
                  <h6 className="mb-0">To : Mysore </h6>
                </div>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Driver Details</h6>
                    <h6 className="mb-0">Rahul(+91 9916673568)</h6>
                  </div>
                </div>
                <div className="badge">
                  <h6 className="mb-0">Last Known Details</h6>
                  <h6 className="mb-0">Kolhapur</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-5 borderRed">
            <div className="card p-3 mb-2" style={{ color: "grey" }}>
              <h4>Detention Truck</h4>

              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Trip ID : 123456 </h6>
                    <h6 className="mb-0">Transporter : VRL Logistics </h6>
                  </div>
                </div>
                <div className="badge">
                  <h6 className="mb-0">From : Banglore </h6>
                  <h6 className="mb-0">To : Mysore </h6>
                </div>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Driver Details</h6>
                    <h6 className="mb-0">Rahul(+91 9916673568)</h6>
                  </div>
                </div>
                <div className="badge">
                  <h6 className="mb-0">Last Known Details</h6>
                  <h6 className="mb-0">Kolhapur</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-5 borderRed">
            <div className="card p-3 mb-2" style={{ color: "grey" }}>
              <h4>High Value Shipment</h4>

              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Trip ID : 123456 </h6>
                    <h6 className="mb-0">Transporter : VRL Logistics </h6>
                  </div>
                </div>
                <div className="badge">
                  <h6 className="mb-0">From : Banglore </h6>
                  <h6 className="mb-0">To : Mysore </h6>
                </div>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Driver Details</h6>
                    <h6 className="mb-0">Rahul(+91 9916673568)</h6>
                  </div>
                </div>
                <div className="badge">
                  <h6 className="mb-0">Last Known Details</h6>
                  <h6 className="mb-0">Kolhapur</h6>
                </div>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Driver Details</h6>
                    <h6 className="mb-0">Rahul(+91 9916673568)</h6>
                  </div>
                </div>
                <div className="badge">
                  <h6 className="mb-0">Last Known Details</h6>
                  <h6 className="mb-0">Kolhapur</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-5">
            <div className="card p-3 mb-2" style={{ color: "grey" }}>
              <h4>Transporter Details</h4>

              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Trip ID : 123456 </h6>
                    <h6 className="mb-0">Transporter : VRL Logistics </h6>
                  </div>
                </div>
                <div className="badge">
                  <h6 className="mb-0">From : Banglore </h6>
                  <h6 className="mb-0">To : Mysore </h6>
                </div>
              </div>
            </div>

            <div className="card p-3 mb-2" style={{ color: "grey" }}>
              <h4>Transporter Details</h4>

              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Trip ID : 123456 </h6>
                    <h6 className="mb-0">Transporter : VRL Logistics </h6>
                  </div>
                </div>
                <div className="badge">
                  <h6 className="mb-0">From : Banglore </h6>
                  <h6 className="mb-0">To : Mysore </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
