import React, {Component, useState, setState}   from 'react';

import logoImg from "../../TomAssSmile.jpg";
import { Logo,  } from '../AuthPages/AuthForms';
import UserPage from '../UserPages/UserPage';

import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import 'antd/dist/antd.css';
import {PageHeader, Button, Descriptions, Layout, List, Typography, Divider} from 'antd';
import axios from 'axios';

import { AuthContext } from "../AuthPages/auth";

const { Header, Footer, Sider, Content } = Layout;





export default class AdmCon extends Component {

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



loadUser(){
    axios.post("http://192.168.1.50:1348/adminList", {
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



render(){
  return(

  <div>
  <Layout>

  <Layout>
    <Content style={{padding:"30px", minHeight: "615px"}}>
    <Layout>
    <Content>
    <Divider orientation="left">Админы</Divider>
    <Content>
    {
      this.state.users.map(item => (
        <List.Item>
          <Typography.Text mark>

          </Typography.Text> <strong>ИМЯ:</strong> {item.name}, <strong>ФАМИЛИЯ:</strong> {item.secondName} <strong>ОТЧЕСТВО:</strong> {item.patronymic} <strong>EMAIL:</strong>{item.email}

        </List.Item>

))}
    </Content>
    </Content>
    </Layout>
    </Content>

</Layout>

  </Layout>
  </div>
);
}
}
