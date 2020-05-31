import React, {Component}   from 'react';
 import {useState}  from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Admin from '../AdminPages/Admin';
import Login from "../LoginPages/Login";
import Signup from '../../Signup';
import UserPage from '../UserPages/UserPage';
import PrivateRoute from '../AuthPages/PrivateRoute';
import { AuthContext } from "../AuthPages/auth";
import axios from 'axios';
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



export default class MapPage extends Component {

  constructor(props){
    super(props);
    this.state ={

      accidentList:[ {
        latitude: 56.146733,
        longtitude: 40.37129,
        date: '1',
        time: '2',
        type: 'Столкновение',
        participants: '4',
        deaths: '5',
        injured: '6',
        weather: '7',
        light: '8',
        roadState: '',
      },

      {
        latitude: 56.167365,
        longtitude:40.483514,
        date: '1',
        time: '2',
        type: 'Наезд',
        participants: '4',
        deaths: '5',
        injured: '6',
        weather: '7',
        light: '8',
        roadState: '',
      },
      {
        latitude: 56.127967,
        longtitude: 40.402426,
        date: '1',
        time: '2',
        type: '3',
        participants: '4',
        deaths: '5',
        injured: '6',
        weather: '7',
        light: '8',
        roadState: '',
      },
      {
        latitude: 56.113823,
        longtitude: 40.343964,
        date: '1',
        time: '2',
        type: 'Наезд 2',
        participants: '4',
        deaths: '5',
        injured: '6',
        weather: '7',
        light: '8',
        roadState: '',
      },
      {
        latitude: 56.086303,
        longtitude: 40.218769,
        date: '1',
        time: '2',
        type: 'Падение',
        participants: '4',
        deaths: '5',
        injured: '6',
        weather: '7',
        light: '8',
        roadState: '',
      },

        ],

    /*  accidentList:[
        [56.146733, 40.37129, ''],
        [56.124479, 40.404242, ''],
        [56.122479, 40.407342, ''],
        [56.125479, 40.405242, ''],
        [56.126479, 40.407442, '']
      ], */
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
        axios.post("http://localhost:1348/accidentList", {
            method: 'POST',
            mode: 'no-cors',
            bodyUsed: true,
            headers: {
              'Content-Type': 'application/json',
        },
      }).then(res => {
            this.setState({accidentList: JSON.parse(JSON.stringify(res.data))});
            console.log("kek zbs",res.data);
        })
            .catch((error) => {
                console.warn('error',error);
            })
    }

render(){
//console.log("поинты ", pointsTry);
  //console.log("ssssssssss", this.state.accidentList);
  return(
  <div>
    <Layout style={{ minHeight: "10vh" }}>
     <Router>

            <Content
              className="site-layout-background"
              style={{
                left:"auto", right: "auto",  bottom: "auto",
                position: "relative",
                width: "100vw",
                height: "100vh"
              }}
            >


            <YMaps>
            <Layout>
            <div style={{ left:"auto", right: "auto",  bottom: "auto", position: "relative", width: "100vw", height: "100vh" }}>

            <Map
            defaultState={{
              center: [56.128479, 40.407242],
              zoom: 10,
              controls: ['zoomControl', 'fullscreenControl']
            }}
            modules= {['control.ZoomControl', 'control.FullscreenControl']}
            width = { '100%' }
            height = {'100%'}
            >
            <Clusterer
              options={{
                preset: 'islands#invertedVioletClusterIcons',
                groupByCoordinates: false,
              }}
            >
            {
              this.state.accidentList.map((coordinates, i) => (
                   <Placemark key = {i}
                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                    options={{ preset: 'islands#circleIcon', iconColor: 'red', hasBalloon: true, balloonContent: '<strong>greyish-brownish-maroon</strong> color'}}
                    properties={{
         hintContent: [coordinates.latitude, coordinates.longtitude, coordinates.type,],
         balloonContent: ['<div><strong>Описание:</strong></div>',
         "<div><strong>Координаты:</strong></div>", coordinates.latitude, coordinates.longtitude,
         "<div><strong>Дата:</strong></div>", coordinates.Date,
         "<div><strong>Время:</strong></div>", coordinates.Time,
         "<div><strong>Тип:</strong></div>", coordinates.Type,
         "<div><strong>Участников:</strong></div>", coordinates.Participants,
          "<div><strong>Смертей:</strong></div>", coordinates.Deaths,
            "<div><strong>Раненные:</strong></div>", coordinates.Injured,
            "<div><strong>Погода:</strong></div>", coordinates.Weather,
            "<div><strong>Освещение:</strong></div>", coordinates.Light,
              "<div><strong>Состояние дороги:</strong></div>", coordinates.RoadState,
       ] ,
       }}
                    geometry={[coordinates.latitude, coordinates.longtitude] }
                      >
                   {console.log("поинт и ключ ", coordinates, this.state.open)}
                    </Placemark>

                 ))}

            </Clusterer>

            <Polygon
                 geometry={[
                   [
                     [55.75, 37.8],
                     [55.8, 37.9],
                     [55.75, 38.0],
                     [55.7, 38.0],
                     [55.7, 37.8],
                   ],
                   [
                     [55.75, 37.82],
                     [55.75, 37.98],
                     [55.65, 37.9],
                   ],
                 ]}
                 options={{
                   fillColor: '#00FF00',
                   strokeColor: '#0000FF',
                   opacity: 0.5,
                   strokeWidth: 5,
                   strokeStyle: 'shortdash',
                 }}
               />

            </Map>

            </div>
              </Layout>
            </YMaps>
            </Content>

           </Router>
  </Layout>
  </div>
  );
}
}
