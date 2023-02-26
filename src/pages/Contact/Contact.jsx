import { Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import navtej from "../../assets/png/Maskgroup.png";
import twitter from "../../assets/png/twitter_circle.png";
import linkedin from "../../assets/png/linkedin.png";
import medium from "../../assets/png/Mediumicon.png";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <Row justify="space-between">
          <Col xxl={6} className="heading">
            <h1>contact.</h1>
            <p>Get in touch with me via social media or email</p>
            <div className="socialIcons">
              <Link to="https://twitter.com/CrafterInc" target="_blank">
                <div className="twitter">
                  <img src={twitter} alt="twitter" />
                </div>
              </Link>
              <Link
                to="https://www.linkedin.com/company/crafter-inc/."
                target="_blank"
              >
                <div className="linkedin">
                  <img src={linkedin} alt="linkedin" />
                </div>
              </Link>
              <Link to="https://medium.com/@crafter-inc" target="_blank">
                <div className="medium">
                  <img src={medium} alt="medium" />
                </div>
              </Link>
            </div>
          </Col>
          <Col xxl={12} className="imageDiv">
            <img src={navtej} alt="navtej" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
