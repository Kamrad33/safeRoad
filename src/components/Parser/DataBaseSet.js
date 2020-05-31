import React, { useState, setState, useEffect } from "react";

import logoImg from "../../TomAssSmile.jpg";
import { Logo,  } from '../AuthPages/AuthForms';
import Parser from '../Parser/Parser'
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import 'antd/dist/antd.css';
import {PageHeader, Button, Descriptions, Layout, List, Typography, Divider} from 'antd';
import axios from 'axios';

import { AuthContext } from "../AuthPages/auth";

function DataBaseSet(props) {


const  [latitudeState, latitudeStateSet]= useState([])
const  [longtitudeState, longtitudeStateSet]= useState([])
const  [dateState, dateStateSet]= useState([])
const  [timeState, timeStateSet]= useState([]);
const  [typeState, typeStateSet]= useState([])
const  [veichlesState, veichlesStateSet]= useState([]);
const  [participantsState, participantsStateSet]= useState([]);
const  [deathsState, deathsStateSet]= useState([]);
const  [injuredState, injuredStateSet]= useState([]);
const  [weatherState, weatherStateSet]= useState([]);
const  [lightState, lightStateSet]= useState([]);
const  [roadStateState, roadStateStateSet]= useState([]);
const  [districtState, districtStateSet]= useState([]);
const  [cityState, cityStateSet]= useState([]);
const  [streetState, streetStateSet]= useState([]);
const  [houseState, houseStateSet]= useState([]);
const [array , setArray]=useState([]);
let latitudeStateRef = latitudeState;
let longtitudeStateRef = longtitudeState;
let dateStateRef = dateState;
let timeStateRef = timeState;
let typeStateRef = typeState;
let veichlesStateRef = veichlesState;
let participantsStateRef = participantsState;
let deathsStateRef = deathsState;
let injuredStateRef = injuredState;
let weatherStateRef = weatherState;
let lightStateRef = lightState;
let roadStateStateRef = roadStateState;
let districtStateRef = districtState;
let cityStateRef = cityState;
let streetStateRef = streetState;
let houseStateRef = houseState;
let arrRef = array;

  function hel(props, i){

    latitudeStateSet(latitudeStateRef.push(parseFloat(props.infoDtp["COORD_W"])))
    longtitudeStateSet(longtitudeStateRef.push(parseFloat(props.infoDtp["COORD_L"])))
    dateStateSet(dateStateRef.push(props.date))
    timeStateSet(timeStateRef.push(props.Time))
    typeStateSet(typeStateRef.push(props.DTP_V))
    veichlesStateSet(veichlesStateRef.push(props.K_TS))
    participantsStateSet(participantsStateRef.push(props.K_UCH))
    deathsStateSet(deathsStateRef.push(props.POG))
    injuredStateSet(injuredStateRef.push(props.RAN))
    weatherStateSet(weatherStateRef.push(props.infoDtp["s_pog"][0]))
    lightStateSet(lightStateRef.push(props.infoDtp["osv"]))
    roadStateStateSet(roadStateStateRef.push(props.infoDtp["s_pch"]))
    districtStateSet(districtStateRef.push(props.District))
    cityStateSet(cityStateRef.push(props.infoDtp["n_p"]))
    streetStateSet(streetStateRef.push(props.infoDtp["street"]))
    houseStateSet(houseStateRef.push(props.infoDtp["house"]))
    setArray( arrRef.push(props.infoDtp["s_pog"]))
    return(
    //  console.log("item", props.infoDtp["COORD_W"]),
    console.log("latitudeStateRef", latitudeState[i]),
    console.log("longtitudeStateRef", longtitudeStateRef[i]),
    console.log("dateStateRef", dateStateRef[i]),
    console.log("timeState", timeState[i]),
    console.log("typeState", typeState[i]),
    console.log("veichlesState", veichlesState[i]),
    console.log("participantsState", participantsState[i]),
    console.log("deathsState", deathsState[i]),
    console.log("injuredState", injuredState[i]),
    console.log("weatherState", weatherState[i]),
    console.log("lightState", lightState[i]),
    console.log("roadStateState", roadStateState[i]),
    console.log("districtState", districtState[i]),
    console.log("cityState", cityState[i]),
    console.log("streetState", streetState[i]),
    console.log("houseState", houseState[i]),
    console.log("_________________________________", parseFloat(props.infoDtp["COORD_W"])),
    axios.post("http://localhost:1348/setAccidentList", {

      latitude:latitudeState[i],
      longtitude:longtitudeStateRef[i],
      date:dateState[i],
      time:timeState[i],
      type:typeState[i],
      veichles:veichlesState[i],
      participants:participantsState[i],
      deaths:deathsState[i],
      injured:injuredState[i],
      weather:weatherState[i],
      light:lightState[i],
      roadState:roadStateState[i],
      district:districtState[i],
      city:cityState[i],
      street:streetState[i],
      house:houseState[i],
    })
    .then(response => {
         console.log("res", response);
    })
        .catch((error) => {
            console.warn('error',error);
        })
  )


  }
  var gotSqlData = props.dataSetJSON;
  console.log('thisSQL',gotSqlData)
var parsedSQLData = [];
var targetSQLDataRow = [];
  function parseData1(){
    parsedSQLData = gotSqlData;
    console.log("parsedUserDataBefore", parsedSQLData)
    var tabRegName = Object.keys(parsedSQLData).map((keyName, i) =>
    //  console.log("parsedSQLDataAfter", parsedSQLData["tab"]),
      targetSQLDataRow = parsedSQLData["tab"]
  )
  console.log("targetSQLDataRow", targetSQLDataRow)
  }




 function  parseTargetData(props){

  var targetLatitude = '';
  var targetLongtitude = '';
  var targetDate = '';
  var targetTime = '';
  var targetType ='';
  var targetVeichles ='';
  var targetParticipants ='';
  var targetDeaths ='';
  var targetInjured ='';
  var targetWeather ='';
  var targetLight ='';
  var targetRoadState ='';
  var targetDistrict ='';
  var targetCity ='';
  var targetStreet ='';
  var targetHouse ='';

  var targetInfo = '';
  var rowWeather = '';



targetSQLDataRow.map((item, i) =>
    (
      console.log('I:', item),
      hel(item, i),
      console.log('array:', array),
      typeStateSet (item.DTP_V),
      console.log("bez", item.DTP_V),
      districtStateSet (item.District),
      veichlesStateSet  (item.K_TS),
      participantsStateSet (item.K_UCH),
      deathsStateSet (item.POG),
      injuredStateSet (item.RAN),
      timeStateSet (item.Time),
      dateStateSet (item.date),
      targetInfo = Object.keys(item.infoDtp).map((keyName,i) =>
      (
        latitudeStateSet (item.infoDtp["COORD_W"]),


        longtitudeStateSet (item.infoDtp["COORD_L"]),

        houseStateSet (item.infoDtp["house"]),
        streetStateSet  (item.infoDtp["street"]),
        cityStateSet  (item.infoDtp["n_p"]),
        roadStateStateSet (item.infoDtp["s_pch"]),
        lightStateSet  (item.infoDtp["osv"]),
        rowWeather = item.infoDtp["s_pog"].map(item => (
          weatherStateSet (item)
        ))
      ),
    )
  //  targetTime = targetSQLDataRow["tab"],
    //targetDate = targetSQLDataRow["tab"],
  /*  latitudeStateSet(targetLatitude),
    console.log("targetLatitude", latitudeState),
    longtitudeStateSet(targetLongtitude),
    console.log("targetLongtitude", longtitudeState),
    dateStateSet(targetDate),
    console.log("targetDate", dateState),
    timeStateSet(targetTime),
    console.log("targetTime", timeState),
    typeStateSet(targetType),
    console.log("targetType", typeState),
    veichlesStateSet(targetVeichles),
    console.log("targetVeichles", veichlesState),
    participantsStateSet(targetParticipants),
    console.log("targetParticipants", participantsState),
    deathsStateSet(targetDeaths),
    console.log("targetDeaths", deathsState),
    injuredStateSet(targetInjured),
    console.log("targetInjured", injuredState),
    weatherStateSet(targetWeather),
    console.log("targetWeather", weatherState),
    lightStateSet(targetLight),
    console.log("targetLight", lightState),
    roadStateStateSet(targetRoadState),
    console.log("targetRoadState", roadStateState),
    districtStateSet(targetDistrict),
    console.log("targetDistrict", districtState),
    cityStateSet(targetCity),
    console.log("targetCity", cityState),
    streetStateSet(targetStreet),
    console.log("targetStreet", streetState),
    houseStateSet(targetHouse),
    console.log("targetHouse", houseState),

    console.log("targetInfo", targetInfo),*/




  )
);

console.log("bez", latitudeState);
console.log("bez", longtitudeState);
console.log("bez", dateState);
console.log("bez", timeState);
console.log("bez", typeState);
console.log("bez", veichlesState);
console.log("bez", participantsState);
console.log("bez", deathsState);


}

function getSql(props){
  console.log("array", array);
  console.log("bez", latitudeState);
  console.log("bez", longtitudeState);
  console.log("bez", dateState);
  console.log("bez", timeState);
  console.log("bez", typeState);
  console.log("bez", veichlesState);
  console.log("bez", participantsState);
  console.log("bez", deathsState);
  axios.post("http://localhost:1348/setAccidentList", {
    latitude:latitudeState,
    longtitude:longtitudeState,
    date:dateState,
    time:timeState,
    type:typeState,
    veichles:veichlesState,
    participants:participantsState,
    deaths:deathsState,
    injured:injuredState,
    weather:weatherState,
    light:lightState,
    roadState:roadStateState,
    district:districtState,
    city:cityState,
    street:streetState,
    house:houseState,
  })
  .then(response => {
       console.log("res", response);
  })
      .catch((error) => {
          console.warn('error',error);
      })

}


        //  console.log('thisSQL',props.dataSetJSON)
    return( <div>
        <Button onClick = {parseData1}>DATA</Button>
        <Button onClick = {parseTargetData}>Target</Button>
        <Button onClick = {getSql}>Send</Button>
        </div>

    )

}
export default DataBaseSet;
