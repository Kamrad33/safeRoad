import React, { useState, setState } from "react";
import { BrowserRouter as Router, Link, Route, Redirect } from "react-router-dom";
import axios from 'axios';
import logoImg from "../../TomAssSmile.jpg";
import { Card, Logo, Form, Input, Button, Error } from '../AuthPages/AuthForms';
import { useAuth } from "../AuthPages/auth";
import {SERVER_ADDRESS} from "../../constants";

function LoginAdmin(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [test, setTest] = useState("123");
  const { setAuthTokens } = useAuth();
  var userRoleData ='';

  function postLogin() {
    axios.post("http://localhost:1348/userLogin",    {
                login:login,
                password:password,
                userRoleID: 2
    })
    .then(res =>{
      console.log("loginLength",JSON.stringify(res.data));

      if (res.data.length > 0){
      setAuthTokens(res.data);
      setLoggedIn(true);
    } else {
      setIsError(true);
      console.log("логин", login);
    }
    })
    .catch((error)=>{
      setIsError(true);
      console.warn('error',error);
    })
  }

  if (isLoggedIn) {
    return (<Redirect to="/homeAdmin" />);
  }


  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input
          type="login"
          value={login}
          onChange={e => {
            setLogin(e.target.value);
          }}
          placeholder="Логин"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="Пароль"
        />
        <Button onClick={postLogin}>Войти</Button>
      </Form>
        <Link to="/login">Назад</Link>
        { isError &&<Error>Логин или пароль неправильные  ! {login}</Error> }
    </Card>
  );
}

export default LoginAdmin;
