import React, {Component}   from 'react';
 import {useState}  from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Admin from '../AdminPages/Admin';
import HomeAdmin from '../AdminPages/HomeAdmin';
import Login from "../LoginPages/Login";
import LoginAdmin from "../LoginPages/LoginAdmin";
import Home from "../UserPages/Home";
import Signup from '../../Signup';
import UserPage from '../UserPages/UserPage';
import MapPage from '../MapPages/MapPage';
import PrivateRoute from '../AuthPages/PrivateRoute';
import { AuthContext } from "../AuthPages/auth";

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import 'antd/dist/antd.css';
import {PageHeader, Button, Descriptions, Layout, Menu } from 'antd';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  DownloadOutlined,
  ToTopOutlined,
  HeatMapOutlined
} from '@ant-design/icons';

import '../../index.css';

import {YMaps, Map, Placemark, Clusterer, Polygon} from "react-yandex-maps";
import {SERVER_ADDRESS} from "../../constants"; // server adress

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



export default class HomeNoAuth extends Component {

  constructor(props){
    super(props);
    this.state ={
      open: false,
      collapsed: true,
    };
    this.loadAccidentList = this.loadAccidentList.bind(this);
  }

  toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };

    onCollapse = collapsed => {
       console.log(collapsed);
       this.setState({ collapsed });
     };

  componentDidMount() {
        this.loadAccidentList();

    }

    loadAccidentList(){
        fetch(`${SERVER_ADDRESS}/user`, {
            method: 'POST',
        }).then(res => {
            this.setState({accidentList: JSON.parse(res._bodyText)});
            console.log("kek zbs");
        })
            .catch((error) => {
                console.warn('error',error);
            })
    }

render(){

  console.log("ssssssssss", this.state.accidentList);
  return(
  <div>
    <Layout style={{ minHeight: "10vh" }}>
     <Router>
     <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
             <div className="logo" />
             <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
               <SubMenu key="userProfile" icon={<UserOutlined />} title="Профиль">
                 <Menu.Item key="1">
                 <Link to="/login">Войти</Link>
                 </Menu.Item>
               </SubMenu>
               <Menu.Item key="2" icon={<HeatMapOutlined />} >
               <Link to="/mapNoAuth">Карта</Link>
               </Menu.Item>
             </Menu>
           </Sider>

            <Content
              className="site-layout-background"
              style={{
                left:"auto", right: "auto",  bottom: "auto",
                position: "relative",
                width: "100vw",
                height: "100vh"
              }}
            >
              <Route exact path="/" component={MapPage} />
              <Route path="/login" component={Login} />
              <Route path="/loginAdmin" component={LoginAdmin} />
                <Route path="/homeAdmin" component={HomeAdmin} />
              <Route path="/mapNoAuth" component={MapPage} />
              <Route path="/home" component={Home} />
            </Content>

           </Router>
  </Layout>
  </div>
  );
}
}
