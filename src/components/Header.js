import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navContent = [
    {
      id: 1,
      txt: "All(54)",
      links: "/",
    },
    {
      id: 2,
      txt: "FTL(26)",
      links: "/FTL",
    },
    {
      id: 3,
      txt: "LCL(16)",
      links: "/LCL",
    },
    {
      id: 4,
      txt: "Container(03)",
      links: "/Container",
    },
    {
      id: 5,
      txt: "Inbound(30)",
      links: "/Inbound",
    },
    {
      id: 6,
      txt: "Outbound(16)",
      links: "/Outbound",
    },
  ];

  const navStructure = navContent.map(({ id, txt, links }) => {
    return (
      <li key={id}>
        <span>
          <Link to={links}>{txt}</Link>
        </span>
      </li>
    );
  });

  return (
    <div>
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
            <input
              type="text"
              placeholder="Search.."
              style={{ borderRadius: "10px", width: "500px" }}
            />
            <button style={{ margin: "10px", borderRadius: "5px" }}>
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>

        <div className="col-md-5">
          <h1>
            Dashboard
            <i class="fa fa-bell" style={{ padding: "0px 100px" }}></i>
          </h1>
        </div>
      </div>

      <div className="row navs">
        <ul>{navStructure}</ul>
      </div>
    </div>
  );
};

export default Header;
