
import React, { useState, setState, useEffect } from "react";
import { Link, Redirect } from 'react-router-dom';

import logoImg from "../../TomAssSmile.jpg";
import { Card, Logo, Form } from '../AuthPages/AuthForms';
import 'antd/dist/antd.css';
import {PageHeader, Button, Descriptions, Layout, List, Typography, Divider,  Input} from 'antd';
import axios from 'axios';
import AdminPage from './AdminPage';
import EditPage from './EditPage';
const { Header, Content, Footer, Sider } = Layout;

function dataPage(props){
  var gotUserDataArray = props.getUserId;
  console.log("dataPage", props.getUserId)
}
export default dataPage;
