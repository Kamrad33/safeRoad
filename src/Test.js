import React, {Component, useState, setState} from "react";
import { Link, Redirect } from 'react-router-dom';
import {List, Typography, Layout} from 'antd';
import { Card, Logo, Form, Input, Button } from './components/AuthPages/AuthForms';
import axios from 'axios';

const { Header, Content, Footer, Sider } = Layout;

export default class Test extends Component {
  constructor(props) {
        super(props);

        this.state = {
            test: 'rrrr',
            users: [
            {test:'1'},
            {test:'2'}
          ]

        };
          this.loadUser = this.loadUser.bind(this);
}


  loadUser(){
      axios.post("http://192.168.1.50:1348/list", {
          method: 'post',
          mode: 'no-cors',
          bodyUsed: true,
          headers: {
            'Content-Type': 'application/json',

        },
      }).then(res => {
         console.log(this.state.users);

         console.log("state", JSON.stringify(this.state.users));
          console.log("res", res.data);

        this.setState({users: JSON.parse(JSON.stringify(res.data))});
                console.log("parse", JSON.stringify(res.data));

      })
          .catch((error) => {
              console.warn('error',error);
          })
  }

render(){
  return (
    <Content>

      <Button onClick = {this.loadUser}>test</Button>
      <Content>
      {
        this.state.users.map(item => (
          <List.Item>
            <Typography.Text mark>

            <Link to="/editPage"><Button>Редактировать</Button></Link>

            </Typography.Text> {item.test}
          </List.Item>
))}
      </Content>
    </Content>
  );
}
}
