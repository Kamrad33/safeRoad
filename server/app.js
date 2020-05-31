const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const axios = require('axios');
const request = require('request');
//var http    = require('http');
var dataJS = require('./data.json')
const app = express();
//const urlencodedParser = bodyParser.urlencoded({extended: true});

const pool = mysql.createPool({

  host: "localhost",
  port:'3306',
  user: "root",
  database: "safe_city",
  password: "root"
});

pool.getConnection(function(error){
  if(error) console.log(error);
  else console.log("connected to data base");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
  //  res.setHeader('Content-Type', 'application/json; charset=UTF-8');
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.set("view engine", "hbs");

function getAccidentList(callback){
var rawData = {}
console.log('rawData:', rawData);
console.log('JSONData:', JSON.stringify(rawData));
request.post({
  url:'http://stat.gibdd.ru/dor/getDorFromReg',
  json: true,
  body: rawData,
}, function (error, response, body) {

  console.log('body:', body);
  console.log('error:', error);


  if (!error && response.statusCode == 200) {
    console.log('statusCode:', response && response.statusCode);
             result = body;
             console.log('result:', result);
             return callback(body, false);
         } else {
             return callback(null, error);
             console.error('error:', error);
         }
});
}
app.post('/getAccidentListTest', function (req,res,next){
  getAccidentList(function(err, data){
    if (err) return res.send(err);
    res.send(data);
  })
});


//var accidentData ={maptype: 1, region: 877, date: ["MONTHS:4.2020"], pok: 1};
var accidentData = {
  data: '{"date":["MONTHS:4.2020"],"ParReg":"17","order":{"type":"1","fieldName":"dat"},"reg":"17401","ind":"1","st":"1","en":"320"}'
};
console.log('accidentData',accidentData);
var jsStr = JSON.stringify(accidentData);
console.log('jsStr',jsStr);
var kek = '';
console.log('KEK',kek);
request({
    url: "http://stat.gibdd.ru/map/getDTPCardData",
    method: "POST",
    json: true,   // <--Very important!!!
    body: accidentData
}, function (error, response, body){
//   console.log('res',response.body);
   accidentDataJSON = JSON.stringify( response.body);
  //console.log('KEKA',kek);
  //  response.send(response);
});

app.post('/getAccidentList', function (req,res,next){
//  console.log('KEKA',kek);
    res.send(accidentDataJSON);
  });


//test request
app.post("/list", async function(req, res, next){
    pool.query("SELECT test.test FROM test", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});

// login
app.post("/userLogin", async function(req, res, next){
  if(!req.body) return res.sendStatus(400);
  const login =req.body.login;
  const password =req.body.password;
  const userRoleID =req.body.userRoleID;

    pool.query("SELECT user.id, user.name, user.secondName, user.patronymic, user.email, user.login, user.password, user.userRoleID, user.blocked FROM user where login=? and password =? and userRoleID = ? and blocked !=1 ", [login, password, userRoleID], function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// get user list
app.post("/userList", async function(req, res, next){
    pool.query("SELECT user.id, user.name, user.secondName, user.patronymic, user.email, user.login, user.password, user.userRoleID, user.blocked FROM user", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});

app.post("/adminList", async function(req, res, next){
    pool.query("SELECT user.id, user.name, user.secondName, user.patronymic, user.email, user.login, user.password, user.userRoleID, user.blocked FROM user where userRoleID=2", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
//add user to DB
app.post("/addUser",   function(req, res, next){
  if(!req.body) return res.sendStatus(400);
  const name =req.body.name;
  const secondName =req.body.secondName;
  const patronymic =req.body.patronymic;
  const email =req.body.email;
  const login =req.body.login;
  const password =req.body.password;
  const userRoleID =req.body.userRoleID;
  const blocked =req.body.blocked;
pool.query("INSERT INTO user (name, secondName, patronymic, email, login, password, userRoleID, blocked) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [name, secondName, patronymic, email, login, password, userRoleID, blocked], function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});

// geting id editing user, from bd и and send it to form
app.get("/editUserID", function(req, res, next){
  const id = req.query.id;
  pool.query("SELECT * FROM user WHERE id=?", [id], function(err, data) {
    if(err) return console.log(err);
     res.send(data);
  });
});
// get edited data and send it to db
app.post("/editUser",  function (req, res, next) {

  if(!req.body) return res.sendStatus(400);

  const id = req.body.id;
  const name =req.body.name;
  const secondName =req.body.secondName;
  const patronymic =req.body.patronymic;
  const email =req.body.email;
  const login =req.body.login;
  const password =req.body.password;
  const userRoleID =req.body.userRoleID;
  const blocked =req.body.blocked;
  pool.query("UPDATE user SET name=?, secondName=?, patronymic=?, email=?, login=?, password=?, userRoleID=?, blocked=? WHERE id=?",
  [name, secondName, patronymic, email, login, password, userRoleID, blocked,  id], function(err, data) {
    if(err) return console.log(err);
    res.send(data);
  });
});

// get accident list
app.post("/accidentList", async function(req, res, next){
    pool.query("SELECT accident.id, accident.latitude, accident.longtitude, accident.Date, accident.Time, accident.Type, accident.Veichles, accident.Participants, accident.Deaths, accident.Injured, accident.Weather, accident.Light, accident.RoadState, accident.District, accident.City, accident.Street  FROM accident", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});

// get filtred accident list
app.post("/accidentListFiltred", async function(req, res, next){
  if(!req.body) return res.sendStatus(400);

  const type =req.body.type;
  const dateFrom =req.body.dateFrom;
  const dateTo =req.body.dateTo;
  const timeFrom =req.body.timeFrom;
  const timeTo =req.body.timeTo;
  const veichles =req.body.veichles;
  const participants =req.body.participants;
  const deaths =req.body.deaths;
  const weather =req.body.weather;
  const light =req.body.light;
  const roadState =req.body.roadState;
    pool.query("SELECT * FROM accident where Type =? and Date >=? and Date <= ? and Time >= ? and Time <=? and Veichles =? and Participants =? and Deaths = ? and Weather = ? and light = ? and RoadState = ?",
    [type,
      dateFrom,
      dateTo,
      timeFrom,
      timeTo,
      veichles,
      participants,
      deaths,
      weather,
      light,
      roadState], function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});

// set Accident List

app.post("/setAccidentList",  function (req, res, next) {

  if(!req.body) return res.sendStatus(400);
  const latitude =req.body.latitude;
  const longtitude =req.body.longtitude;
  const date =req.body.date;
  const time =req.body.time;
  const type =req.body.type;
  const veichles =req.body.veichles;
  const participants =req.body.participants;
  const deaths =req.body.deaths;
  const injured =req.body.injured;
  const weather =req.body.weather;
  const light =req.body.light;
  const roadState =req.body.roadState;
  const district =req.body.district;
  const city =req.body.city;
  const street =req.body.street;
  const house =req.body.house;
  pool.query("INSERT INTO Accident (latitude,longtitude, date, time, type, veichles, participants, deaths, injured, weather, light, roadState, district, city, street, house ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
  [latitude,longtitude, date, time, type, veichles, participants, deaths, injured, weather, light, roadState, district, city, street, house], function(err, data) {
    if(err) return console.log(err);
    res.send(data);
  });
});

// count Accident MounthCountDecember

app.get("/MounthCountDecember", function(req, res, next){
    pool.query("SELECT count(*) as 'Data' FROM accident where accident.date='01.12.2019'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// count Accident MounthCountJanuary

app.get("/MounthCountJanuary", function(req, res, next){
    pool.query("SELECT count(*) as 'Data' FROM accident where accident.date='01.01.2020'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// count Accident MounthCountFebrary

app.get("/MounthCountFebrary", function(req, res, next){
    pool.query("SELECT count(*) as 'Data' FROM accident where accident.date='01.02.2020'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// count Accident MounthCountMarch

app.get("/MounthCountMarch", function(req, res, next){
    pool.query("SELECT count(*) as 'Data' FROM accident accident.date='01.03.2020'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// count Accident MounthCountApril

app.get("/MounthCountApril", function(req, res, next){
    pool.query("SELECT count(*) as 'Data' FROM accident where accident.date>='01.04.2020' and accident.date<='30.04.2020'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// count Injured MounthCountInjuredDecember
app.get("/MounthCountInjuredDecember", function(req, res, next){
    pool.query("SELECT count(*) as 'Injured' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});

// count Injured MounthCountInjuredJanuary

app.get("/MounthCountInjuredJanuary", function(req, res, next){
    pool.query("SELECT count(*) as 'Injured' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// count Injured MounthCountInjuredFebrary

app.get("/MounthCountInjuredFebrary", function(req, res, next){
    pool.query("SELECT count(*) as 'Injured' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// count Injured MounthCountInjuredtMarch

app.get("/MounthCountInjuredMarch", function(req, res, next){
    pool.query("SELECT sum(injured) as 'Injured' FROM accident where accident.date>='01.04.2020' and accident.date<='30.04.2020'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// count Injured MounthCountInjuredApril

app.get("/MounthCountInjuredApril", function(req, res, next){
    pool.query("SELECT sum(injured) as 'Injured' FROM accident where accident.date>='01.04.2020' and accident.date<='30.04.2020'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});

// count countAccidentHour0

app.get("/countAccidentHour0", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='0:00' and time <='0:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});

// count countAccidentHour1

app.get("/countAccidentHour1", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='1:00' and time <='1:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// count countAccidentHour2

app.get("/countAccidentHour2", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='2:00' and time <='2:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// count countAccidentHour3

app.get("/countAccidentHour3", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='3:00' and time <='3:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// count countAccidentHour4

app.get("/countAccidentHour4", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='4:00' and time <='4:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// count countAccidentHour5

app.get("/countAccidentHour5", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='5:00' and time <='5:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// count countAccidentHour6

app.get("/countAccidentHour6", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='6:00' and time <='6:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// count countAccidentHour7

app.get("/countAccidentHour7", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='7:00' and time <='7:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// count countAccidentHour7

// count countAccidentHour8

app.get("/countAccidentHour8", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='8:00' and time <='8:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// count countAccidentHour2

app.get("/countAccidentHour9", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='9:00' and time <='9:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// count countAccidentHour2

app.get("/countAccidentHour10", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='10:00' and time <='10:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// count countAccidentHour2

app.get("/countAccidentHour11", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='11:00' and time <='11:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// count countAccidentHour2

app.get("/countAccidentHour12", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='12:00' and time <='12:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
// count countAccidentHour2

app.get("/countAccidentHour13", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='13:00' and time <='13:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countAccidentHour14", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='14:00' and time <='14:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countAccidentHour15", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='15:00' and time <='15:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countAccidentHour16", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='16:00' and time <='16:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countAccidentHour17", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='17:00' and time <='17:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countAccidentHour18", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='18:00' and time <='18:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countAccidentHour19", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='19:00' and time <='19:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countAccidentHour20", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='20:00' and time <='20:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countAccidentHour21", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='21:00' and time <='21:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countAccidentHour22", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident where time >='22:00' and time <='22:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countAccidentHour23", function(req, res, next){
    pool.query("SELECT count(*) as 'Hour' FROM accident time >='23:00' and time <='23:59'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});


//===========STOLK===============

app.get("/countStolkDecember", function(req, res, next){
    pool.query("SELECT count(*) as 'Stolk' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});

app.get("/countStolkJanuary", function(req, res, next){
    pool.query("SELECT count(*) as 'Stolk' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countStolkFebrary", function(req, res, next){
    pool.query("SELECT count(*) as 'Stolk' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countStolkMarch", function(req, res, next){
    pool.query("SELECT count(*) as 'Stolk' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countStolkApril", function(req, res, next){
    pool.query("SELECT count(*) as 'Stolk' FROM accident where accident.date>='01.04.2020' and accident.date<='30.04.2020' and accident.type='Столкновение'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});

//===========PESH===============

app.get("/countPeshDecember", function(req, res, next){
    pool.query("SELECT count(*) as 'Pesh' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});

app.get("/countPeshJanuary", function(req, res, next){
    pool.query("SELECT count(*) as 'Pesh' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countPeshFebrary", function(req, res, next){
    pool.query("SELECT count(*) as 'Pesh' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countPeshMarch", function(req, res, next){
    pool.query("SELECT count(*) as 'Pesh' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countPeshApril", function(req, res, next){
    pool.query("SELECT count(*) as 'Pesh' FROM accident where accident.date>='01.04.2020' and accident.date<='30.04.2020' and accident.type='Наезд на пешехода'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});

//===========prep===============

app.get("/countPrepDecember", function(req, res, next){
    pool.query("SELECT count(*) as 'Prep' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});

app.get("/countPrepJanuary", function(req, res, next){
    pool.query("SELECT count(*) as 'Prep' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countPrepFebrary", function(req, res, next){
    pool.query("SELECT count(*) as 'Prep' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countPrepMarch", function(req, res, next){
    pool.query("SELECT count(*) as 'Prep' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countPrepApril", function(req, res, next){
    pool.query("SELECT count(*) as 'Prep' FROM accident where accident.date>='01.04.2020' and accident.date<='30.04.2020' and accident.type='Наезд на препятствие'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});

//===========Sto===============

app.get("/countStoDecember", function(req, res, next){
    pool.query("SELECT count(*) as 'Sto' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});

app.get("/countStoJanuary", function(req, res, next){
    pool.query("SELECT count(*) as 'Sto' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countStoFebrary", function(req, res, next){
    pool.query("SELECT count(*) as 'Sto' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countStoMarch", function(req, res, next){
    pool.query("SELECT count(*) as 'Sto' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countStoApril", function(req, res, next){
    pool.query("SELECT count(*) as 'Sto' FROM accident where accident.date>='01.04.2020' and accident.date<='30.04.2020' and accident.type='Наезд на стоящее ТС'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});

//===========Vel===============

app.get("/countVelDecember", function(req, res, next){
    pool.query("SELECT count(*) as 'Vel' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});

app.get("/countVelJanuary", function(req, res, next){
    pool.query("SELECT count(*) as 'Vel' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countVelFebrary", function(req, res, next){
    pool.query("SELECT count(*) as 'Vel' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countVelMarch", function(req, res, next){
    pool.query("SELECT count(*) as 'Vel' FROM accident where accident.id=1", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});
app.get("/countVelApril", function(req, res, next){
    pool.query("SELECT count(*) as 'Vel' FROM accident where accident.date>='01.04.2020' and accident.date<='30.04.2020' and accident.type='Наезд на велосипедиста'", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});

app.post("/addTest", function(req, res, next){
const test =req.body.test;
pool.query("INSERT INTO test (test) VALUES (?)", [test], function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});

// возвращаем форму для добавления данных

app.get("/try", function(req, res, next){
    pool.query("SELECT test.test FROM test where test.id=75", function(err, rows, fields) {
      if(err) return console.log(err);
      else{
            console.log(rows);
            res.send(rows);

        }
    });
});

// получаем отправленные данные и добавляем их в БД
app.post("/create",  function (req, res) {

    if(!req.body) return res.sendStatus(400);
    const test = req.body.name;

    pool.query("INSERT INTO test (test) VALUES (?)", [test], function(err, data) {
      if(err) return console.log(err);
      res.redirect("/");
    });
});

// получем id редактируемого пользователя, получаем его из бд и отправлям с формой редактирования
app.get("/edit/:id", function(req, res){
  const id = req.params.id;
  pool.query("SELECT * FROM test WHERE id=?", [id], function(err, data) {
    if(err) return console.log(err);
     res.render("edit.hbs", {
        test: data[0]
    });
  });
});
// получаем отредактированные данные и отправляем их в БД
app.post("/edit",  function (req, res) {

  if(!req.body) return res.sendStatus(400);
  const test = req.body.test;
  const id = req.body.id;

  pool.query("UPDATE test SET test=? WHERE id=?", [test,  id], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/");
  });
});

// получаем id удаляемого пользователя и удаляем его из бд
app.post("/delete/:id", function(req, res){

  const id = req.params.id;
  pool.query("DELETE FROM test WHERE id=?", [id], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/");
  });
});


app.listen(1348, function(){
  console.log("Сервер ожидает подключения...");
});
