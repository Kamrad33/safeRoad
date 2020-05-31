import React, {Component, useState, setState}   from 'react';

import logoImg from "../../TomAssSmile.jpg";
import { Logo,  } from '../AuthPages/AuthForms';
import EditPage from './EditPage';
import UserPage from '../UserPages/UserPage';
import dataPage from './dataPage';
import jsFile from './jsFileData.json'
import Parser from '../Parser/Parser'
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import 'antd/dist/antd.css';
import {PageHeader, Button, Descriptions, Layout, List, Typography, Divider} from 'antd';
import axios from 'axios';

import { AuthContext } from "../AuthPages/auth";

const { Header, Footer, Sider, Content } = Layout;





export default class AdminPage extends Component {

  constructor(props) {
        super(props);

        this.state = {
          userDataRow: [
          ],
          accidentDataRow: [
          ],
            users: [
            {
            name: 'Petya',
            secondName: 'Pupkin',
            patronymic: 'Ivanovich',
            email: 'email@mail.ru',
            login: 'loginPetya123',
            password: 'pass123',
            userRoleID: '1',
            blocked: true,
        },],
        dataRequest: {
          date:["MONTHS:4.2020"],
          ParReg:"17",
          order:{
            type:"1",
            fieldName:"dat"
          },
          reg:"17401",
          ind:"1",
          st:"1",
          en:"16"
        },

        };
          this.loadUser = this.loadUser.bind(this);
              this.getUserId = this.getUserId.bind(this);
                  this.loadProfile = this.loadProfile.bind(this);
                this.updateStat = this.updateStat.bind(this);
this.getStat = this.getStat.bind(this);

}

componentDidMount(props) {

      this.loadUser(props);
      this.loadProfile(props);
      const getNameUrl =
  "map/getDTPCardData";
 console.log("dataRequest",   this.state.dataRequest);
  }

loadProfile(props){
   console.log("profile", props);

}
 getUserId(props){
   var userData = props
     console.log("userDataProps",   props);
      console.log("userDataData",   userData);
  axios.get("http://localhost:1348/editUserID", {

    params: {
      id: props
    }
  })
  .then(response => {
      console.log("resState",   props);
       console.log("res", response);
       console.log("res", JSON.stringify(response.data));
       userData = JSON.parse(JSON.stringify(response.data))
       this.setState({usersDataRow: JSON.parse(JSON.stringify(response.data))})
       console.log("UserDataRow", this.state.usersDataRow);
       console.log("resData", userData.map( res=>(
         console.log("mapp", res.ID)
       )));

  //    userData = JSON.stringify(response.data);
      // console.log("UserDataRow", userData);
      // console.log("UserDataProps", props);

  })
      .catch((error) => {
          console.warn('error',error);
      })

}


loadUser(){
    axios.post("http://192.168.1.50:1348/userList", {
        method: 'post',
        mode: 'no-cors',
        bodyUsed: true,
        headers: {
          'Content-Type': 'application/json',

      },
    }).then(res => {
       console.log(this.state.users);

      // console.log("state", JSON.stringify(this.state.users));
      //  console.log("res", res.data);

      this.setState({users: JSON.parse(JSON.stringify(res.data))});
              //console.log("parse", JSON.stringify(res.data));

    })
        .catch((error) => {
            console.warn('error',error);
        })
}

updateStat(props){
  var dataSet = {"date":["MONTHS:4.2020"],"ParReg":"17","order":{"type":"1","fieldName":"dat"},"reg":"17401","ind":"1","st":"1","en":"16"};
  //  var foo = JSON.stringify(dataSet);
  console.log("dataRequest",   this.state.dataRequest)

    console.log(JSON.parse(JSON.stringify(this.state.dataRequest)))
    axios.post("http://stat.gibdd.ru/map/getDTPCardData", {
      data: JSON.stringify(this.state.dataRequest),
      mode: 'no-cors',
      headers: {
      'Access-Control-Allow-Origin':'*',
      "Access-Control-Allow-Methods":"GET, PUT, POST, DELETE",
      "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization",

        'Content-Type': 'application/json',

    },

    })
    .then(response => {
       console.log('ахаха');

      // console.log("state", JSON.stringify(this.state.users));
      //  console.log("res", res.data);

      //this.setState({users: JSON.parse(JSON.stringify(res.data))});
              //console.log("parse", JSON.stringify(res.data));

    })
        .catch((error) => {
            console.warn('error',error);
        })
}

getStat(props){
  //var dataSet = {"date":["MONTHS:4.2020"],"ParReg":"17","order":{"type":"1","fieldName":"dat"},"reg":"17401","ind":"1","st":"1","en":"16"};
  //  var foo = JSON.stringify(dataSet);
    console.log(JSON.parse(JSON.stringify(jsFile)))

    axios.post("http://localhost:1348/getAccidentList", {
    //  data: dataSet,
    },
    )
    .then(response => {
       console.log('get', JSON.parse(JSON.stringify(response.data)) );
      // console.log("state", JSON.stringify(this.state.users));
      //  console.log("res", res.data);
      this.setState({accidentDataRow: JSON.stringify(response.data)});
      console.log('STAAAATE',this.state.accidentDataRow);


              //console.log("parse", JSON.stringify(res.data));
    })
        .catch((error) => {
            console.warn('error',error);
        })

}
render(){
  return(

  <div>
  <Layout>
  <UserPage />
  <Layout>

    <Content style={{padding:"30px", minHeight: "615px"}}>
    <Layout>
    <Header>
    <Link to="/Signup"><Button > Добавить пользователя</Button></Link>
      <Button onClick = {this.getStat}>Обновить данные</Button>
    </Header>

    <Content>
    <Divider orientation="left">Список пользователей</Divider>
    <Button onClick = {this.loadUser}>Загрузить пользователей</Button>
    <Content>
      <Parser parcerData= {this.state.accidentDataRow}/>
    <EditPage getUserId={this.state.usersDataRow}/>
    {
      this.state.users.map(item => (
        <List.Item>
        <Button onClick = {()=> this.getUserId(item.id)}>Редактировать</Button>

          <Typography.Text mark>

          </Typography.Text> <strong>ИМЯ:</strong> {item.name}, <strong>ФАМИЛИЯ:</strong> {item.secondName} <strong>ОТЧЕСТВО:</strong> {item.patronymic} <strong>EMAIL:</strong>{item.email} <strong>ЛОГИН:</strong> {item.login} <strong>ПАРОЛЬ:</strong> {item.password} <strong>РОЛЬ:</strong> {item.userRoleID} <strong>ЗАБЛОКИРОВАН:</strong> {item.blocked}

        </List.Item>

))}
    </Content>
    </Content>
    </Layout>
    </Content>
  <Footer>
  <div>
<a>Связь с администратором</a>
</div>
<div>
<a>Язык : {"Русский"}</a>
</div>
  </Footer>
</Layout>

  </Layout>
  </div>
);
}
}
