import React, {Component}   from 'react';
 import {useState}  from 'react';

import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from './components/UserPages/Home';
import HomeNoAuth from './components/HomePages/HomeNoAuth';
import Admin from "./components/AdminPages/Admin";
import HomeAdmin from "./components/AdminPages/HomeAdmin";
import EditPage from "./components/AdminPages/EditPage";
import StatisticPage from "./components/StatisticPages/StatisticPage";
import ChartsPage from "./components/StatisticPages/ChartsPage";
import MapPage from "./components/MapPages/MapPage";
import Login from "./components/LoginPages/Login";
import LoginAdmin from "./components/LoginPages/LoginAdmin";
import Signup from './Signup';
import Test from './Test';
import UserPage from './components/UserPages/UserPage';
import AdmCon from './components/UserPages/AdmCon';
import ManagerPage from './components/UserPages/ManagerPage';
import AdminPage from './components/AdminPages/AdminPage';
import PrivateRoute from './components/AuthPages/PrivateRoute';
import { AuthContext } from "./components/AuthPages/auth";

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

import './index.css';
import {SERVER_ADDRESS} from "./constants"; // server adress

const { Header, Content, Footer, Sider } = Layout;

function App(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
    console.log("Local data", data);
  }
//const theme = useTheme();
/*   kek(props){
  const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
}*/


/*
tokenCheck(props){
      const [authTokens, setAuthTokens] = useState();

      const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
      }
    }

  constructor(props){
    super(props);
    this.state ={
      open: false,
      collapsed: true,
      isLoginIn: false,
    };
    this.loadAccidentList = this.loadAccidentList.bind(this);
    //this.drawerState = this.drawerState.bind(this);

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
*/
/*
    drawerState(props){
      const [open, setOpen] = useState(false);
      const classes = useStyles();
     const theme = useTheme();
    }
*/

  /*  tokenCheck(props){
        const [authTokens, setAuthTokens] = useState();

        const setTokens = (data) => {
          localStorage.setItem("tokens", JSON.stringify(data));
          setAuthTokens(data);
        }
      }


      <div>
          <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
         <Button label="Hello World!" />

         <Router>
              <div>
              <ul>
               <li>
                 <Link to="/">Home Page</Link>
               </li>
               <li>
                 <Link to="/admin">Admin Page</Link>
               </li>
             </ul>
              <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Signup} />
                  <PrivateRoute path="/admin" component={Admin} />
              </div>
            </Router>
             </AuthContext.Provider>
      </div> */


      /*<AppBar
      position="static">
       <Toolbar>
      <Typography variant="h6" noWrap>
               Persistent drawer-
             </Typography>
             <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={()=>this.setState({open: true})}
              >
              <MenuIcon />
             </IconButton>
           </Toolbar>
      </AppBar>
      <Drawer
            width = {10000}
            variant="persistent"
            anchor="left"
            open={this.state.open}
          >
          <div >
             <IconButton onClick={()=>this.setState({open: false})}>

             </IconButton>
           </div>
      <Button variant="contained" color="primary">HIIIIIIIIIIIIII</Button>
      </Drawer> */


  return(
  <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
  <div>
  <Layout style={{ minHeight: "10vh" }}>
  <Content
    className="site-layout-background"

  >
   <Router>
           <Layout className="site-layout">
           <Sider width={0}/>


      <Route exact path="/" component={HomeNoAuth} />
      <Route path="/admCon" component={AdmCon} />
      <Route path="/home" component={Home} />
      <Route path="/homeAdmin" component={HomeAdmin} />
      <Route path="/userPage" component={UserPage} />
      <Route path="/managerPage" component={ManagerPage} />
      <Route path="/signup" component={Signup} />
      <Route path="/adminPage" component={AdminPage} />
      <Route path="/admin" component={Admin} />
      <Route path="/map" component={MapPage} />
      <Route path="/editPage" component={EditPage} />
      <Route path="/login" component={Login} />
      <Route path="/loginAdmin" component={LoginAdmin} />
      <Route path="/statistic" component={StatisticPage} />
        <Route path="/charts" component={ChartsPage} />
          <Route path="/test" component={Test} />
 </Layout>
   </Router>
   </Content>
</Layout>
  </div>
    </AuthContext.Provider>
  );

}
export default App;
