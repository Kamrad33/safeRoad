import React, {Component, useEffect}   from 'react';
import {useState}  from 'react';
import UserPage from "./UserPage";
import AdmCon from "./AdmCon";
import { useAuth } from "../AuthPages/auth";
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Link, Route, Redirect } from "react-router-dom";

import 'antd/dist/antd.css';
import {PageHeader, Button, Descriptions, Layout} from 'antd';

const { Header, Footer, Sider, Content } = Layout;
function ManagerPage(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <div>
    <UserPage />
      <Router>
    <Content style={{padding:"30px", minHeight: "615px", background:"white"}}>
    <div>
    <Link to = '/admCon'>Связь с администратором</Link>

      <Route path="/admCon" component={AdmCon} />

    </div>
    <div>
    <a>Язык : {"Русский"}</a>
    </div>
    </Content>
    </Router>
    </div>
  );
}

export default ManagerPage;
