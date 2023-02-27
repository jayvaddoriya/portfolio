import { Col, Row } from "antd";
import React from "react";
import navtej from "../../assets/png/Navtej.png";
import yoda from "../../assets/png/yoda.png";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <Row style={{ borderBottom: "1px solid rgba(122, 118, 118, 0.47)" }}>
          <Col xxl={12} xl={12} lg={12} md={24} className="heading">
            <h1>about.</h1>
            <p>I’m based in Hyderabad, India.</p>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={24} className="imageDiv">
            <img src={navtej} alt="navtej" />
          </Col>
        </Row>
        <div className="paragraphs">
          <p>
            I am a true renaissance individual, with a wide range of passions
            and interests that drive me forward. Mylove of travel has made me
            took a decision to travel all corners of the globe by 2027, from the
            bustling streets of Tokyo to the picturesque countryside of Tuscany.
            I relishe the opportunity to immerse myself in new cultures and
            experiences, and always comes back from his trips with a fresh
            perspective and a renewed sense of purpose.
          </p>
          <p>
            As an entrepreneur, I am constantly looking for new opportunities to
            create innovative business solutions that address real-world
            problems like what we are doing at Crafter now . I have a keen eye
            for identifying market gaps and am always looking for ways to bring
            new products and services to market. Whether I'm working on a new
            tech startup or launching a food business, I'm always pushing the
            boundaries of what's possible and striving to create something truly
            unique.
          </p>
          <p>
            Of course, no man would be complete without a love of food, and I am
            no exception. I'm a true foodie at heart, always on the hunt for the
            next great meal or culinary experience. I love trying new cuisines
            and experimenting with new ingredients and flavours, and is equally
            at home in a five-star restaurant or a local street food stall.
          </p>
          <p>
            Last but not least, I am also a true movie buff. I love nothing more
            than settling in for a good film, and have a deep appreciation for
            the art of cinema. I enjoy films from a variety of genres, and am
            always on the lookout for new and interesting films to add to my
            collection.
          </p>
          <p>
            In short, I am a true polymath, with a range of interests and
            passions that make me a truly unique individual. My love of travel,
            entrepreneurship, food, and movies all come together to create a
            rich and fulfilling life, one that is full of adventure, excitement,
            and the constant pursuit of new experiences.
          </p>
        </div>
        <Row className="yodaAndText">
          <Col xxl={12} xl={12} lg={12}>
            <img src={yoda} alt="yoda" />
          </Col>
          <Col xxl={12} xl={12} lg={12} className="facts">
            <div className="heading">
              <h2>Random facts</h2>
            </div>
            <div className="factText">
              <p>I drink a lot of coffee</p>
              <p>I’m into sustainable & minimalistic living</p>
              <p>Watching movies is my zen time</p>
              <p>I love to cook (and eat) </p>
              <p>I want to travel all 196 countries </p>
              <p>Steve Jobs is my role model</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
