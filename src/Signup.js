import React, { useState, setState } from "react";
import { Link, Redirect } from 'react-router-dom';
import logoImg from "./TomAssSmile.jpg";
import { Card, Logo, Form } from './components/AuthPages/AuthForms';
import 'antd/dist/antd.css';
import {PageHeader, Button, Descriptions, Layout, List, Typography, Divider,  Input} from 'antd';
import axios from 'axios';
const { Header, Content, Footer, Sider } = Layout;

function Signup(props) {
const [name, setName] = useState("");
const [secondName, setSecondName] = useState("");
const [patronymic, setPatronymic] = useState("");
const [email, setEmail] = useState("");
const [login, setLogin] = useState("");
const [password, setPassword] = useState("");
const [userRoleID, setRoleId] = useState();
const [blocked, setBlocked] = useState();



function checkBody(){

  console.log(JSON.stringify({
    name:name,
    secondName:secondName,
    patronymic:patronymic,
    email:email,
    login:login,
    password:password,
    userRoleID:userRoleID,
    blocked:blocked,
  }) );
  console.log("ddd", this.state.name);
}
function  addUser() {

var dataJS = JSON.stringify({
  name:name,
  secondName:secondName,
  patronymic:patronymic,
  email:email,
  login:login,
  password:password,
  userRoleID:userRoleID,
  blocked:blocked,
});
console.log('addUser', dataJS);
   axios.post("http://localhost:1348/addUser", {
    name:name,
   secondName:secondName,
   patronymic:patronymic,
   email:email,
   login:login,
   password:password,
   userRoleID:userRoleID,
   blocked:blocked,})
   .then(response => {
        console.log("res", response);
   })
       .catch((error) => {
           console.warn('error',error);
       })
}


  return (
    <Card>
      <Logo src={logoImg} />
        <Input type="name" placeholder="Имя" style={{ padding: 20 }}
        value={name}
        onChange={e => {
            setName(e.target.value);
          }}/>
          <b style={{ padding: 5 }}/>
        <Input type="secondName" placeholder="Фамилия" style={{ padding: 20 }}
          value={secondName}
        onChange={e => {
            setSecondName(e.target.value);
          }}/>
        <b style={{ padding: 5 }}/>
        <Input type="patronymic" placeholder="Отчество" style={{ padding: 20 }}
          value={patronymic}
        onChange={e => {
            setPatronymic(e.target.value);
          }}/>
        <b style={{ padding: 5 }}/>
        <Input type="email" placeholder="Email" style={{ padding: 20 }}
          value={email}
        onChange={e => {
            setEmail(e.target.value);
          }}/>
          <b style={{ padding: 5 }}/>
        <Input type="login" placeholder="Логин" style={{ padding: 20 }}
          value={login}
        onChange={e => {
            setLogin(e.target.value);
          }}/>
          <b style={{ padding: 5 }}/>
        <Input type="password" placeholder="Пароль" style={{ padding: 20 }}
          value={password}
        onChange={e => {
            setPassword(e.target.value);
          }}/>
          <b style={{ padding: 5 }}/>
        <Input type="roleId" placeholder="Роль" style={{ padding: 20 }}
          value={userRoleID}
        onChange={e => {
            setRoleId(e.target.value);
          }}/>
          <b style={{ padding: 5 }}/>
        <Input type="blocked" placeholder="Заблокирован" style={{ padding: 20 }}
          value={blocked}
        onChange={e => {
            setBlocked(e.target.value);
          }}/>
          <b style={{ padding: 5 }}/>
          <Layout>

        <Link to="/adminPage"><Button size='large' onClick = {addUser}>Добавить пользователя</Button></Link>
          </Layout>
            <Layout>
      <Link to="/adminPage">Назад</Link>
      </Layout>

    </Card>
  );
}

export default Signup;
