import React, {Component}   from 'react';
 import {useState}  from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Link, Route, Redirect } from "react-router-dom";

import Admin from '../AdminPages/Admin';
import LoginAdmin from "../LoginPages/LoginAdmin";
import AdminPage from "./AdminPage";
import Signup from '../../Signup';
import UserPage from '../UserPages/UserPage';
import MapPage from '../MapPages/MapPage';
import PrivateRoute from '../AuthPages/PrivateRoute';
import StatisticPage from "../StatisticPages/StatisticPage";
import ChartsPage from "../StatisticPages/ChartsPage";
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
  HeatMapOutlined,
  FilterOutlined
} from '@ant-design/icons';

import '../../index.css';

import {YMaps, Map, Placemark, Clusterer, Polygon} from "react-yandex-maps";
import {SERVER_ADDRESS} from "../../constants"; // server adress



const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const points = [
  [55.737693, 37.723390],
  [55.744665, 37.491304],
  [55.636063, 37.566835],
  [55.865323, 37.599794],
  [55.741567, 37.960969]
]
const pointsTry = [
  {ltd:55.737693, lng: 55.737693},
  {ltd:55.737693, lng: 55.737693},
  {ltd:55.737693, lng: 55.737693}
]



export default class HomeAdmin extends Component {

  constructor(props){
    super(props);
    this.state ={
      accidentList:[
        [55.737693, 37.723390],
        [55.744665, 37.491304],
        [55.636063, 37.566835],
        [55.865323, 37.599794],
        [55.741567, 37.960969]
      ],
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
console.log("поинты ", pointsTry);
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
                 <Link to="/adminPage">Информация</Link>

                 </Menu.Item>

                 <Menu.Item key="2">Выйти</Menu.Item>
                 <Menu.Item key="3"></Menu.Item>
               </SubMenu>

               <SubMenu key="options" icon={<PieChartOutlined />} title="Данные">
                 <Menu.Item key="4" icon={<FilterOutlined> </FilterOutlined >}  >  <Link to="/statistic">Фильтр</Link></Menu.Item>
                  <Menu.Item key="5"icon={<PieChartOutlined />}><Link to="/charts">Статистика</Link></Menu.Item>
                 <Menu.Item key="6" icon={<DownloadOutlined />}>Импорт данных</Menu.Item>
                 <Menu.Item key="7"icon={<ToTopOutlined />}>Экспорт данных</Menu.Item>
               </SubMenu>
               <Menu.Item key="7" icon={<HeatMapOutlined />} >
               <Link to="/map">Карта</Link>
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
            >   <Route path="/adminPage" component={AdminPage} />
          
                <Route path="/map" component={MapPage} />
                <Route path="/statistic" component={StatisticPage} />
                  <Route path="/charts" component={ChartsPage} />
            </Content>

           </Router>
  </Layout>
  </div>
  );
}
}
