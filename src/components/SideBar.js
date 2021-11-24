import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const sideBarDetail = [
    {
      id: 1,
      icon: "fa fa-2x fa-home",
      txt: "Dashboard",
      links: "/Dashboard",
    },
    {
      id: 2,
      icon: "fa fa-2x fa-car",
      txt: "Trips",
      links: "/Trips",
    },
    {
      id: 3,
      icon: "fa fa-2x fa-map-marker",
      txt: "Tracking",
      links: "/Tracking",
    },
    {
      id: 4,
      icon: "fa fa-2x fa-group",
      txt: "Transporters",
      links: "/Transporters",
    },
    {
      id: 5,
      icon: "fa fa-2x fa-bar-chart",
      txt: "Analytics",
      links: "/Analytics",
    },
    {
      id: 6,
      icon: "fa fa-2x fa-gear",
      txt: "Settings",
      links: "/Settings",
    },
  ];

  const sideBarStructure = sideBarDetail.map(({ id, icon, txt, links }) => {
    return (
      <li key={id}>
        <span>
          <Link to={links}>
            <i className={icon}></i>
            <br />
            {txt}
          </Link>
        </span>
      </li>
    );
  });

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <nav style={{ overflow: "hidden" }}>
        <div className="logo">
          <h3>LOGO</h3>
        </div>
        <ul>{sideBarStructure}</ul>
      </nav>
    </div>
  );
};

export default SideBar;
