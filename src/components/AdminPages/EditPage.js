import React, { useState, setState, useEffect } from "react";
import { Link, Redirect } from 'react-router-dom';

import logoImg from "../../TomAssSmile.jpg";
import { Card, Logo, Form } from '../AuthPages/AuthForms';
import 'antd/dist/antd.css';
import {PageHeader, Button, Descriptions, Layout, List, Typography, Divider,  Input} from 'antd';
import axios from 'axios';
import AdminPage from './AdminPage';
import dataPage from './dataPage';
const { Header, Content, Footer, Sider } = Layout;


function EditPage(props) {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [userRoleID, setRoleId] = useState();
  const [blocked, setBlocked] = useState();
  const [count, setCount] = useState(0);

var gotUserData = props.getUserId;

console.log("dataPage", <dataPage/>)
var parsedUserData = [];
//var parsedUserData = JSON.stringify(gotUserData);


/*const userDataArray = parsedUserData.map((usDt) => usDt.ts1);
  console.log("userDataArray", userDataArray)
 console.log("gotUserData", gotUserData)
  console.log("parsedUserData", parsedUserData)
*/
function parseUser(){
  parsedUserData = gotUserData;
  console.log("parsedUserData123", parsedUserData)
  var userDataId = parsedUserData.map(item =>
    setId (item.ID),
)
  var userDataName = parsedUserData.map(item =>
    setName (item.Name),
)
var userSecondName = parsedUserData.map(item =>
setSecondName (item.SecondName),
);
var userPatronymic = parsedUserData.map(item =>
setPatronymic (item.Patronymic),)
var userEmail = parsedUserData.map(item =>
  setEmail (item.email),)
var userLogin = parsedUserData.map(item =>
  setLogin (item.Login),)
var userPassword = parsedUserData.map(item =>
  setPassword (item.Password),)
var userRoleId = parsedUserData.map(item =>
  setRoleId (item.UserRoleID),)
var userBlocked = parsedUserData.map(item =>
  setBlocked (item.Blocked),)
}

  function  editUser(props) {

  var dataJS = JSON.stringify({
    id:id,
    name:name,
    secondName:secondName,
    patronymic:patronymic,
    email:email,
    login:login,
    password:password,
    userRoleID:userRoleID,
    blocked:blocked,
  });
  console.log('edited', dataJS);
     axios.post("http://localhost:1348/editUser", {
     id:id,
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

      <Button size='large' onClick = {console.log( 'parse'), parseUser}>Выбрать пользователя</Button>
      <Button size='large' onClick = {editUser}>Изменить данные пользователя</Button>

        </Layout>
          <Layout>
  
    </Layout>
    </Card>
  );
}

export default EditPage;
