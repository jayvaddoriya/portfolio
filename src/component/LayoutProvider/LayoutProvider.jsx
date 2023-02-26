import { Content } from "antd/es/layout/layout";
import React from "react";
import { Outlet } from "react-router-dom";
import "../../styles/globle.scss";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/NavBar";

const LayoutProvider = () => {
  return (
    <>
      <Navbar />
      <Content style={{ background: "#fff" }}>
        <Outlet />
      </Content>
      <Footer />
    </>
  );
};

export default LayoutProvider;
