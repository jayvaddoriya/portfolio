import { Card, Col, Row } from "antd";
import React from "react";
import "./home.scss";
import navtej from "../../assets/png/NavtejDark.png";
import navtejL from "../../assets/png/Navtej.png";
import crafter from "../../assets/png/crafter.png";
import medium from "../../assets/png/medium.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const { Meta } = Card;

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Navatej Kumar - Personal Website</title>
      </Helmet>
      <meta property="og:title" content="Navatej Portfolio" />
      <meta
        name="description"
        content="Welcome to my personal website. I am Navatej Kumar, and this website serves as a platform to share my thoughts, experiences, and interests with you."
      />
      <Row className="mainDivOfHome">
        <Col xxl={12} xl={12} lg={12} md={12} xs={12} className="leftSide">
          <div className="contant">
            <h1>{`<product>`}</h1>
            <p>
              A computer engineer turned product manager who is applying the
              little technical expertise I gained to create innovative solutions
              that meet customer needs and business goals.
            </p>
          </div>
          <img src={navtej} alt="navtej" className="imageOfNavtej" />
        </Col>
        <Col xxl={12} xl={12} lg={12} md={12} xs={12} className="rightSide">
          <div className="contant">
            <h1>{`<movie buff>`}</h1>
            <p>
              A movie buff , passionate and knowledgeable about films, and enjoy
              watching movies from a variety of genres, eras, and cultures. I
              often engage in discussions and debates about movies
            </p>
          </div>
          <img src={navtejL} alt="navtej" className="navtej" />
        </Col>
      </Row>
      <div className="latestWork">
        <div className="container">
          <Row justify="space-between">
            <Col xxl={8} xl={8} lg={8} md={8}>
              <div className="border" />
            </Col>
            <Col xxl={8} xl={8} lg={8} md={8} style={{ textAlign: "center" }}>
              <p>SOME OF MY LATEST WORK</p>
            </Col>
            <Col xxl={8} xl={8} lg={8} md={8}>
              <div className="border" />
            </Col>
          </Row>
          <Row justify="space-around" className="innerCardDiv">
            <Col xxl={11} xl={11} lg={11} md={11}>
              <Link to="https://www.crafter.co.in/" target="_blank">
                <Card cover={<img alt="example" src={crafter} />}>
                  <Meta title="Crafter" description="" />
                </Card>
              </Link>
            </Col>
            <Col xxl={11} xl={11} lg={11} md={11}>
              <Link to="https://medium.com/@navatejkumar.p" target="_blank">
                <Card
                  className="secondCard"
                  cover={<img alt="example" src={medium} />}
                >
                  <Meta title="My personal blog" description="" />
                </Card>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
