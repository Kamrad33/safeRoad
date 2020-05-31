import React, {Component}   from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import '../../index.css';
import { Layout, Menu, Breadcrumb, Button, Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader, TimePicker } from 'antd';
import {YMaps, Map, Placemark, Clusterer, Polygon} from "react-yandex-maps";
import { Card, Logo, Form } from '../AuthPages/AuthForms';
import axios from 'axios';
const { Header, Content, Footer } = Layout;

export default class StatisticPage extends Component{
  constructor(props){
    super(props);
    this.state ={
      typeFilter:'',
      dateFromFilter:'',
      dateToFilter:'',
      timeFromFilter:'',
      timeToFilter:'',
      veichlesFilter:'',
      participantsFilter:'',
      deathsFilter:'',
      weatherFilter:'',
      lightFilter:'',
      roadStateFilter:'',

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
        axios.post("http://localhost:1348/accidentListFiltred", {
        type:this.state.typeFilter,
        dateFrom:this.state.dateFromFilter,
        dateTo:this.state.dateToFilter,
        timeFrom:this.state.timeFromFilter,
        timeTo:this.state.timeToFilter,
        veichles:this.state.veichlesFilter,
        participants:this.state.participantsFilter,
        deaths:this.state.deathsFilter,
        weather:this.state.weatherFilter,
        light:this.state.lightFilter,
        roadState:this.state.roadStateFilter,
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
    checkF(props){
      console.log('check', this.state.typeFilter);
    }
    render(){
return(
  <Layout className="layout">
    <Header>

      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Content>
      <div className="site-layout-content">
      <br />
      <Input.Group compact>
        <Input style={{ width: '34%' }} placeholder="Тип аварии"
        value={this.state.typeFilter}
        onChange={(typeFilter) => {
            this.setState({typeFilter: typeFilter.target.value});
          }}/>
        <Input style={{ width: '33%' }} placeholder= 'От' value={this.state.dateFromFilter}
        onChange={(dateFromFilter) => {
            this.setState({dateFromFilter: dateFromFilter.target.value});
          }}/>
          <Input style={{ width: '33%' }} placeholder= 'До' value={this.state.dateToFilter}
          onChange={(dateToFilter) => {
              this.setState({dateToFilter: dateToFilter.target.value});
            }}/>
      </Input.Group>
      <Input.Group compact>
    <Input style={{ width: '12%' }} placeholder= 'От' value={this.state.timeFromFilter}
    onChange={(timeFromFilter) => {
        this.setState({timeFromFilter: timeFromFilter.target.value});
      }}/>
    <Input style={{ width: '12%' }} placeholder= 'До' value={this.state.timeToFilter}
    onChange={(timeToFilter) => {
        this.setState({timeToFilter: timeToFilter.target.value});
      }}/>

     <Input style={{ width: '12%' }} placeholder="Количество ТС" value={this.state.veichlesFilter}
     onChange={(veichlesFilter) => {
         this.setState({veichlesFilter: veichlesFilter.target.value});
       }}/>
      <Input style={{ width: '12%' }} placeholder="Участники" value={this.state.participantsFilter}
      onChange={(participantsFilter) => {
          this.setState({participantsFilter: participantsFilter.target.value});
        }}/>
       <Input style={{ width: '12%' }} placeholder="Смертей" value={this.state.deathsFilter}
       onChange={(deathsFilter) => {
           this.setState({deathsFilter: deathsFilter.target.value});
         }}/>
        <Input style={{ width: '12%' }} placeholder="Погода" value={this.state.weatherFilter}
        onChange={(weatherFilter) => {
            this.setState({weatherFilter: weatherFilter.target.value});
          }}/>
        <Input style={{ width: '12%' }} placeholder="Освещение" value={this.state.lightFilter}
        onChange={(lightFilter) => {
            this.setState({lightFilter: lightFilter.target.value});
          }}/>

          <Input style={{ width: '12%' }} placeholder="Состояние дороги" value={this.state.roadStateFilter}
          onChange={(roadStateFilter) => {
              this.setState({roadStateFilter: roadStateFilter.target.value});
            }}/>
<Button onClick = {this.loadAccidentList}>ОК</Button>
   </Input.Group>

      <br />
      </div>
        </Content>
        <Content>
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
        </Map>

        </div>
          </Layout>
        </YMaps>
          </Content>
    </Content>

  </Layout>

);
}
}
