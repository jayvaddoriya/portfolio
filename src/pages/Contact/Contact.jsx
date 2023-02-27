import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import navtej from "../../assets/png/Maskgroup.png";
import twitter from "../../assets/png/twitter_circle.png";
import linkedin from "../../assets/png/linkedin.png";
import medium from "../../assets/png/Mediumicon.png";
import "./contact.scss";
import { useForm } from "antd/es/form/Form";

const Contact = () => {
  const [form] = useForm();
  const handleOnSubmit = (values) => {
    console.log(values);
    form.resetFields();
  };
  return (
    <div className="contact">
      <div className="container">
        <Row justify="space-between">
          <Col xxl={6} xl={6} lg={8} md={12} className="heading">
            <h1>contact.</h1>
            <p>Get in touch with me via social media or email</p>
            <div className="socialIcons">
              <Link to="https://twitter.com/CrafterInc" target="_blank">
                <div className="twitter commonClass">
                  <img src={twitter} alt="twitter" />
                  Twitter
                </div>
              </Link>
              <Link
                to="https://www.linkedin.com/company/crafter-inc/."
                target="_blank"
              >
                <div className="medium commonClass">
                  <img src={medium} alt="medium" />
                  Medium
                </div>
              </Link>
              <Link to="https://medium.com/@crafter-inc" target="_blank">
                <div className="linkedin commonClass">
                  <img src={linkedin} alt="linkedin" />
                  LinkedIn
                </div>
              </Link>
            </div>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} className="imageDiv">
            <img src={navtej} alt="navtej" />
          </Col>
        </Row>
      </div>
      <div className="contactForm">
        <div className="container">
          <h2>Send me an email</h2>
          <Form layout="vertical" form={form} onFinish={handleOnSubmit}>
            <div className="formdiv">
              <Row className="innerForm" justify="space-between">
                <Col xxl={11} xl={11} lg={11} md={11}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xxl={11} xl={11} lg={11} md={11}>
                  <Form.Item
                    label="Message"
                    name="message"
                    rules={[
                      {
                        required: true,
                        message: "Please enter message!",
                      },
                    ]}
                  >
                    <Input.TextArea rows={5} />
                  </Form.Item>
                </Col>
              </Row>
              <div className="sendEmailBtn">
                <Button htmlType="submit">Send email</Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
