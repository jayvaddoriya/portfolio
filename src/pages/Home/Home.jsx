import { Card, Col, Row } from "antd";
import React from "react";
import "./home.scss";
import navtej from "../../assets/png/Navtej.png";
import crafter from "../../assets/png/crafter.png";
import medium from "../../assets/png/medium.png";

const { Meta } = Card;

const Home = () => {
  return (
    <div className="home">
      <Row className="mainDiv">
        <Col xxl={12} xl={12} lg={12} className="leftSide">
          <div className="contant">
            <h1>{`<product>`}</h1>
            <p>
              A computer engineer turned product manager who is applying the
              little technical expertise I gained to create innovative solutions
              that meet customer needs and business goals.
            </p>
          </div>
        </Col>
        <img src={navtej} alt="navtej" className="imageOfNavtej" />
        <Col xxl={12} xl={12} lg={12} className="rightSide">
          <div className="contant">
            <h1>{`<movie buff>`}</h1>
            <p>
              A movie buff , passionate and knowledgeable about films, and enjoy
              watching movies from a variety of genres, eras, and cultures. I
              often engage in discussions and debates about movies
            </p>
          </div>
        </Col>
      </Row>
      <div className="latestWork">
        <div className="container">
          <Row>
            <Col xxl={8} xl={8}>
              <br className="border" />
            </Col>
            <Col xxl={8} xl={8} style={{ textAlign: "center" }}>
              <p>SOME OF MY LATEST WORK</p>
            </Col>
            <Col xxl={8} xl={8}>
              <br />
            </Col>
          </Row>
          <Row justify="space-around" className="innerCardDiv">
            <Col xxl={11} xl={11} lg={11}>
              <Card cover={<img alt="example" src={crafter} />}>
                <Meta title="My UI design book" description="Book" />
              </Card>
            </Col>
            <Col xxl={11} xl={11} lg={11}>
              <Card
                className="secondCard"
                cover={<img alt="example" src={medium} />}
              >
                <Meta
                  title="Creating a lean design system"
                  description="Design system"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
