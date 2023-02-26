import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  const linksItem = [
    {
      linkName: "Home",
      to: "/",
    },
    {
      linkName: "About",
      to: "/about",
    },
    {
      linkName: "Contact",
      to: "/contact",
    },
  ];
  return (
    <div className="mainFooterDiv">
      <div className="container">
        <div className="footer">
          <p>2023 Navatej Kumar</p>
          <div className="allNavLinks">
            {linksItem.map((item, index) => (
              <NavLink
                exact
                key={index}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "activeClassName" : "navLink"
                }
              >
                {item.linkName}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
