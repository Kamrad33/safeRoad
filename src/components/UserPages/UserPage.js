import React, {Component, useEffect}   from 'react';
import {useState}  from 'react';
import { useAuth } from "../AuthPages/auth";
import logoImg from "../../TomAssSmile.jpg";
import { Logo,  } from '../AuthPages/AuthForms';

import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Link, Route, Redirect } from "react-router-dom";

import 'antd/dist/antd.css';
import {PageHeader, Button, Descriptions, Layout} from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const userDataPage = localStorage.getItem("tokens");
var parsedUserData ='';

function UserPage(props) {
  useEffect(() => {
    parsedUserData = JSON.parse(userDataPage);
  loadInfo();
     });
     const { setAuthTokens } = useAuth();
  const [userName, setUserName] = useState("");
  const [userLogin, setUserLogin] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userStatus, setUserStatus] = useState("");
  const [logged, setLogged] = useState(true);
  function loadInfo(props){
  parsedUserData.map((item, i) =>(
      console.log(item),

    setUserName(item.name),
    setUserLogin(item.login),
    setUserEmail(item.email),
    setUserStatus(item.blocked)

  ))
}
function logOut() {
 setAuthTokens();
 setLogged(false)
//return  (<Redirect to="/home" />);
}
if (!logged) {
  return (<Redirect to="/" />);
}

  return <div>
  <Layout>

  <Layout>

  <Layout style={{padding:"30px", background: "white"}}>
    <Sider><Logo src={logoImg} />
    <Layout style={{padding:"50px", background: "white"}}>  <Link to = "/"><Button onClick={logOut}>Выйти</Button></Link>  </Layout>
    </Sider>
    <Content style={{padding:"20px", background: "white"}}>
    <Descriptions size="large" column={1}>
        <Descriptions.Item label="Имя">{userName}</Descriptions.Item>
        <Descriptions.Item label="Логин">
          {userLogin}
        </Descriptions.Item>
        <Descriptions.Item label="E-mail">{userEmail}</Descriptions.Item>
        <Descriptions.Item label="Статус">{userStatus}</Descriptions.Item>
      </Descriptions>
    </Content>
  </Layout>
    <Content style={{padding:"30px", minHeight: "0px", background: "white"}}></Content>
</Layout>
  </Layout>
  </div>
}

export default UserPage;
