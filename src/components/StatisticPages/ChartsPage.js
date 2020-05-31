import React, {Component}   from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../../index.css';
import axios from 'axios';
import { Layout, Menu, Breadcrumb, Input, Col, Row,Button, Select, InputNumber, DatePicker, AutoComplete, Cascader, TimePicker } from 'antd';
import {YMaps, Map, Placemark, Clusterer, Polygon} from "react-yandex-maps";
import { Card, Logo, Form ,  } from '../AuthPages/AuthForms';
import {VictoryArea, VictoryChart,VictoryLine, VictoryTheme, VictoryLegend} from "victory";
const { Header, Content, Footer } = Layout;



export default class ChartsPage extends Component{

  constructor(props){
    super(props);
    this.state ={
      countM:'',
      countIj:'',

      countAccident:[
        { x: "Декабрь", y: 1 },
        { x: "Январь", y: 2 },
        { x: "Февраль", y: 3 },
        { x: "Март", y: 4 },
        { x: "Апрель", y: 5 }
        ],

      countAccidentHour:[
                  { x: "0:00", y: 2 },
                  { x: "1:00", y: 3 },
                  { x: "2:00", y: 5 },
                  { x: "3:00", y: 4 },
                  { x: "4:00", y: 6 },
                  { x: "5:00", y: 2 },
                  { x: "6:00", y: 3 },
                  { x: "7:00", y: 5 },
                  { x: "8:00", y: 4 },
                  { x: "9:00", y: 6 },
                  { x: "10:00", y: 2 },
                  { x: "11:00", y: 3 },
                  { x: "12:00", y: 5 },
                  { x: "13:00", y: 4 },
                  { x: "14:00", y: 6 },
                  { x: "15:00", y: 2 },
                  { x: "16:00", y: 3 },
                  { x: "17:00", y: 5 },
                  { x: "18:00", y: 4 },
                  { x: "19:00", y: 6 },
                  { x: "20:00", y: 3 },
                  { x: "21:00", y: 5 },
                  { x: "22:00", y: 4 },
                  { x: "23:00", y: 6 },

                ],
      countInjured:[
                  { x: "Декабрь", y: 2 },
                  { x: "Январь", y: 3 },
                  { x: "Февраль", y: 5 },
                  { x: "Март", y: 4 },
                  { x: "Апрель", y: 6 }
                  ],
      stolk:[
                  { x: "Декабрь", y: 50 },
                  { x: "Январь", y: 60 },
                  { x: "Февраль", y: 70 },
                  { x: "Март", y: 80 },
                  { x: "Апрель", y: 100 }
                ],
      pesh:[
                      { x: "Декабрь", y: 40 },
                      { x: "Январь", y: 40 },
                      { x: "Февраль", y: 40 },
                      { x: "Март", y: 40 },
                      { x: "Апрель", y: 40 }
                    ],
                    prep:[
                          { x: "Декабрь", y: 30 },
                          { x: "Январь", y: 30 },
                          { x: "Февраль", y: 30 },
                          { x: "Март", y: 30 },
                          { x: "Апрель", y: 30 }
                        ],
                         opr:[
                              { x: "Декабрь", y: 25 },
                              { x: "Январь", y: 25 },
                              { x: "Февраль", y: 25 },
                              { x: "Март", y: 25 },
                              { x: "Апрель", y: 25 }
                            ],
                            pad:[
                                  { x: "Декабрь", y: 20 },
                                  { x: "Январь", y: 20 },
                                  { x: "Февраль", y: 20 },
                                  { x: "Март", y: 20 },
                                  { x: "Апрель", y: 20 }
                                ],
                                sto:[
                                      { x: "Декабрь", y: 15 },
                                      { x: "Январь", y: 15 },
                                      { x: "Февраль", y: 15 },
                                      { x: "Март", y: 15 },
                                      { x: "Апрель", y: 15 }
                                    ],
                                    szd:[
                                          { x: "Декабрь", y: 10 },
                                          { x: "Январь", y: 10 },
                                          { x: "Февраль", y: 10 },
                                          { x: "Март", y: 10 },
                                          { x: "Апрель", y: 10 }
                                        ],
                                         vel:[
                                              { x: "Декабрь", y: 5 },
                                              { x: "Январь", y: 5 },
                                              { x: "Февраль", y: 5 },
                                              { x: "Март", y: 5 },
                                              { x: "Апрель", y: 5 }
                                            ],

      open: false,
      collapsed: true,

    };
     this.loadStat = this.loadStat.bind(this);
   this.loadMounthCountChart = this.loadMounthCountChart.bind(this);
   this.loadInjuredCountChart = this.loadInjuredCountChart.bind(this);
   this.loadHourCountChart = this.loadHourCountChart.bind(this);
    this.loadStolkCountChart = this.loadStolkCountChart.bind(this);
     this.loadPeshCountChart = this.loadPeshCountChart.bind(this);
      this.loadPrepCountChart = this.loadPrepCountChart.bind(this);
       this.loadStoCountChart = this.loadStoCountChart.bind(this);
        this.loadSVelCountChart = this.loadSVelCountChart.bind(this);

  }
  componentDidMount(props){
  // this.loadMounthCountChart(props);
//   this.loadInjuredCountChart(props);
//   this.loadHourCountChart(props);
//   this.loadStolkCountChart(props);
//   this.loadPeshCountChart(props);
//   this.loadPrepCountChart(props);
//   this.loadStoCountChart(props);
//   this.loadSVelCountChart(props);
  }

  loadStat(props){
   this.loadMounthCountChart(props);
   this.loadInjuredCountChart(props);
  this.loadHourCountChart(props);
  this.loadStolkCountChart(props); 
  this.loadPeshCountChart(props);
  this.loadPrepCountChart(props);
  this.loadStoCountChart(props);
  this.loadSVelCountChart(props);
  }

  loadMounthCountChart(props){
    this.loadMounthCountChartDecember();
    this.loadMounthCountChartJanuary();
    this.loadMounthCountChartFebrary();
    this.loadMounthCountChartMarch();
    this.loadMounthCountChartApril();
  }

loadInjuredCountChart(props){
this.loadMounthInjuredCountChartDecember();
this.loadMounthInjuredCountChartJanuary();
this.loadMounthInjuredCountChartFebrary();
this.loadMounthInjuredCountChartMarch();
this.loadMounthInjuredCountChartApril();
}

  // load AccidentMounthChart fuctions
  loadMounthCountChartDecember(props){
    var yY = 0;

    axios.get("http://localhost:1348/MounthCountDecember", {

        mode: 'no-cors',
        bodyUsed: true,
        headers: {
          'Content-Type': 'application/json',
    },
    }).then(res => {
      this.state.countM = res.data;
      console.log("countM",this.state.countM.map(itemcount =>(
        yY=itemcount.Data
      )));
      console.log("До обновы",this.state.countAccident[0].y);

    let newArray = [...this.state.countAccident]
    console.log("newArray1",newArray)
    newArray[0] = {...newArray[0], y: yY}
    console.log("newArray2",newArray)
    this.setState({
countAccident: newArray,
});
console.log("newArray2",this.state.countAccident)
        console.log("Posle обновы",this.state.countAccident[0].y);
    })
        .catch((error) => {
            console.warn('error',error);
        })

  }
  loadMounthCountChartJanuary(props){
    var yY = 0;

  axios.get("http://localhost:1348/MounthCountJanuary", {

      mode: 'no-cors',
      bodyUsed: true,
      headers: {
        'Content-Type': 'application/json',
  },
  }).then(res => {
    this.state.countM = res.data;
    console.log("countM",this.state.countM.map(itemcount =>(
      yY=itemcount.Data
    )));
    console.log("До обновы",this.state.countAccident[3].y);

  let newArray = [...this.state.countAccident]
  console.log("newArray1",newArray)
  newArray[1] = {...newArray[1], y: yY}
  console.log("newArray2",newArray)
  this.setState({
countAccident: newArray,
});
console.log("newArray2",this.state.countAccident)
      console.log("Posle обновы",this.state.countAccident);
  })
      .catch((error) => {
          console.warn('error',error);
      })}
  loadMounthCountChartFebrary(props){
    var yY = 0;

  axios.get("http://localhost:1348/MounthCountFebrary", {

      mode: 'no-cors',
      bodyUsed: true,
      headers: {
        'Content-Type': 'application/json',
  },
  }).then(res => {
    this.state.countM = res.data;
    console.log("countM",this.state.countM.map(itemcount =>(
      yY=itemcount.Data
    )));
    console.log("До обновы",this.state.countAccident[3].y);

  let newArray = [...this.state.countAccident]
  console.log("newArray1",newArray)
  newArray[2] = {...newArray[2], y: yY}
  console.log("newArray2",newArray)
  this.setState({
countAccident: newArray,
});
console.log("newArray2",this.state.countAccident)
      console.log("Posle обновы",this.state.countAccident);
  })
      .catch((error) => {
          console.warn('error',error);
      })}
  loadMounthCountChartMarch(props){
    var yY = 0;

  axios.get("http://localhost:1348/MounthCountMarch", {

      mode: 'no-cors',
      bodyUsed: true,
      headers: {
        'Content-Type': 'application/json',
  },
  }).then(res => {
    this.state.countM = res.data;
    console.log("countM",this.state.countM.map(itemcount =>(
      yY=itemcount.Data
    )));
    console.log("До обновы",this.state.countAccident[3].y);

  let newArray = [...this.state.countAccident]
  console.log("newArray1",newArray)
  newArray[3] = {...newArray[3], y: yY}
  console.log("newArray2",newArray)
  this.setState({
countAccident: newArray,
});
console.log("newArray2",this.state.countAccident)
      console.log("Posle обновы",this.state.countAccident);
  })
      .catch((error) => {
          console.warn('error',error);
      })}
  loadMounthCountChartApril(props){
    var yY = 0;

  axios.get("http://localhost:1348/MounthCountApril", {

      mode: 'no-cors',
      bodyUsed: true,
      headers: {
        'Content-Type': 'application/json',
  },
  }).then(res => {
    this.state.countM = res.data;
    console.log("countM",this.state.countM.map(itemcount =>(
      yY=itemcount.Data
    )));
    console.log("До обновы",this.state.countAccident[3].y);

  let newArray = [...this.state.countAccident]
  console.log("newArray1",newArray)
  newArray[4] = {...newArray[4], y: yY}
  console.log("newArray2",newArray)
  this.setState({
countAccident: newArray,
});
console.log("newArray2",this.state.countAccident)
      console.log("Posle обновы",this.state.countAccident);
  })
      .catch((error) => {
          console.warn('error',error);
      })}


// load Injured functions
  loadMounthInjuredCountChartDecember(props){
  var yY = 0;

  axios.get("http://localhost:1348/MounthCountInjuredDecember", {

      mode: 'no-cors',
      bodyUsed: true,
      headers: {
        'Content-Type': 'application/json',
  },
  }).then(res => {
    this.state.countM = res.data;
    console.log("countM",this.state.countM.map(itemcount =>(
      yY=itemcount.Injured
    )));
    console.log("До обновы",this.state.countInjured[0].y);

  let newArray = [...this.state.countInjured]
  console.log("newArray1",newArray)
  newArray[0] = {...newArray[0], y: yY}
  console.log("newArray2",newArray)
  this.setState({
countInjured: newArray,
});
console.log("newArray2",this.state.countAccident)
      console.log("Posle обновы",this.state.countInjured[0].y);
  })
      .catch((error) => {
          console.warn('error',error);
      })

}
  loadMounthInjuredCountChartJanuary(props){
  var yY = 0;
  axios.get("http://localhost:1348/MounthCountInjuredJanuary", {

      mode: 'no-cors',
      bodyUsed: true,
      headers: {
        'Content-Type': 'application/json',
  },
  }).then(res => {
    this.state.countM = res.data;
   console.log("countM",this.state.countM.map(itemcount =>(
      yY=itemcount.Injured
    )));
  //  console.log("До обновы",this.state.countAccident[3].y);

  let newArray = [...this.state.countInjured]
//console.log("newArray1",newArray)
  newArray[1] = {...newArray[1], y: yY}
  //console.log("newArray2",newArray)
  this.setState({
countInjured: newArray,
});
//console.log("newArray2",this.state.countAccident)
    //  console.log("Posle обновы",this.state.countAccident);
  })
      .catch((error) => {
          console.warn('error',error);
      })}
  loadMounthInjuredCountChartFebrary(props){
  var yY = 0;
  axios.get("http://localhost:1348/MounthCountInjuredFebrary", {

      mode: 'no-cors',
      bodyUsed: true,
      headers: {
        'Content-Type': 'application/json',
  },
  }).then(res => {
    this.state.countM = res.data;
    console.log("countM",this.state.countM.map(itemcount =>(
      yY=itemcount.Injured
    )));
  //  console.log("До обновы",this.state.countAccident[3].y);
  let newArray = [...this.state.countInjured]
//  console.log("newArray1",newArray)
  newArray[2] = {...newArray[2], y: yY}
//  console.log("newArray2",newArray)
  this.setState({
countInjured: newArray,
});
//console.log("newArray2",this.state.countAccident)
//      console.log("Posle обновы",this.state.countAccident);
  })
      .catch((error) => {
          console.warn('error',error);
      })}
  loadMounthInjuredCountChartMarch(props){
    var yY = 0;
    axios.get("http://localhost:1348/MounthCountInjuredMarch", {

      mode: 'no-cors',
      bodyUsed: true,
      headers: {
        'Content-Type': 'application/json',
  },
  }).then(res => {
    this.state.countM = res.data;
    console.log("countM",this.state.countM.map(itemcount =>(
      yY=itemcount.Injured
    )));
  //  console.log("До обновы",this.state.countAccident[3].y);

  let newArray = [...this.state.countInjured]
//  console.log("newArray1",newArray)
  newArray[3] = {...newArray[3], y: yY}
//  console.log("newArray2",newArray)
  this.setState({
countInjured: newArray,
});
//console.log("newArray2",this.state.countAccident)
      //console.log("Posle обновы",this.state.countAccident);
  })
      .catch((error) => {
          console.warn('error',error);
      })}
  loadMounthInjuredCountChartApril(props){
    var yY = 0;
    axios.get("http://localhost:1348/MounthCountInjuredApril", {

      mode: 'no-cors',
      bodyUsed: true,
      headers: {
        'Content-Type': 'application/json',
  },
  }).then(res => {
    this.state.countM = res.data;
    console.log("countM",this.state.countM.map(itemcount =>(
      yY=itemcount.Injured
    )));
  //  console.log("До обновы",this.state.countAccident[3].y);

  let newArray = [...this.state.countInjured]
//  console.log("newArray1",newArray)
  newArray[4] = {...newArray[4], y: yY}
//  console.log("newArray2",newArray)
  this.setState({
countInjured: newArray,
});
//console.log("newArray2",this.state.countAccident)
    //  console.log("Posle обновы",this.state.countAccident);
  })
      .catch((error) => {
          console.warn('error',error);
      })}

loadHourCountChart(){
  this.loadHourCountChart0();
  this.loadHourCountChart1();
  this.loadHourCountChart2();
  this.loadHourCountChart3();
  this.loadHourCountChart4();
  this.loadHourCountChart5();
  this.loadHourCountChart6();
  this.loadHourCountChart7();
  this.loadHourCountChart8();
  this.loadHourCountChart9();
  this.loadHourCountChart10();
  this.loadHourCountChart11();
  this.loadHourCountChart12();
  this.loadHourCountChart13();
  this.loadHourCountChart14();
  this.loadHourCountChart15();
  this.loadHourCountChart16();
  this.loadHourCountChart17();
  this.loadHourCountChart18();
  this.loadHourCountChart19();
  this.loadHourCountChart20();
  this.loadHourCountChart21();
  this.loadHourCountChart22();
  this.loadHourCountChart23();
}
// hour
loadHourCountChart0(props){
  var yY = 0;

axios.get("http://localhost:1348/countAccidentHour0", {

    mode: 'no-cors',
    bodyUsed: true,
    headers: {
      'Content-Type': 'application/json',
},
}).then(res => {
  this.state.countM = res.data;
  console.log("countM",this.state.countM.map(itemcount =>(
    yY=itemcount.Hour
  )));
  console.log("До обновы",this.state.countAccidentHour[0].y);

let newArray = [...this.state.countAccidentHour]
console.log("newArray1",newArray)
newArray[0] = {...newArray[0], y: yY}
console.log("newArray2",newArray)
this.setState({
countAccidentHour: newArray,
});
console.log("newArray2",this.state.countAccidentHour)
    console.log("Posle обновы",this.state.countAccidentHour[0].y);
})
    .catch((error) => {
        console.warn('error',error);
    })}
loadHourCountChart1(props){
  var yY = 0;

    axios.get("http://localhost:1348/countAccidentHour1", {

        mode: 'no-cors',
        bodyUsed: true,
        headers: {
          'Content-Type': 'application/json',
    },
    }).then(res => {
      this.state.countM = res.data;
      console.log("countM",this.state.countM.map(itemcount =>(
        yY=itemcount.Hour
      )));
    //  console.log("До обновы",this.state.countAccidentHour[0].y);

    let newArray = [...this.state.countAccidentHour]
  //  console.log("newArray1",newArray)
    newArray[1] = {...newArray[1], y: yY}
  //  console.log("newArray2",newArray)
    this.setState({
    countAccidentHour: newArray,
    });
  //  console.log("newArray2",this.state.countAccidentHour)
    //    console.log("Posle обновы",this.state.countAccidentHour[0].y);
    })
        .catch((error) => {
            console.warn('error',error);
        })}
loadHourCountChart2(props){
          var yY = 0;

            axios.get("http://localhost:1348/countAccidentHour2", {

                mode: 'no-cors',
                bodyUsed: true,
                headers: {
                  'Content-Type': 'application/json',
            },
            }).then(res => {
              this.state.countM = res.data;
              console.log("countM",this.state.countM.map(itemcount =>(
                yY=itemcount.Hour
              )));
            //  console.log("До обновы",this.state.countAccidentHour[0].y);

            let newArray = [...this.state.countAccidentHour]
          //  console.log("newArray1",newArray)
            newArray[2] = {...newArray[2], y: yY}
          //  console.log("newArray2",newArray)
            this.setState({
            countAccidentHour: newArray,
            });
          //  console.log("newArray2",this.state.countAccidentHour)
            //    console.log("Posle обновы",this.state.countAccidentHour[0].y);
            })
                .catch((error) => {
                    console.warn('error',error);
                })}
loadHourCountChart3(props){
                  var yY = 0;

                    axios.get("http://localhost:1348/countAccidentHour3", {

                        mode: 'no-cors',
                        bodyUsed: true,
                        headers: {
                          'Content-Type': 'application/json',
                    },
                    }).then(res => {
                      this.state.countM = res.data;
                      console.log("countM",this.state.countM.map(itemcount =>(
                        yY=itemcount.Hour
                      )));
                    //  console.log("До обновы",this.state.countAccidentHour[0].y);

                    let newArray = [...this.state.countAccidentHour]
                  //  console.log("newArray1",newArray)
                    newArray[3] = {...newArray[3], y: yY}
                  //  console.log("newArray2",newArray)
                    this.setState({
                    countAccidentHour: newArray,
                    });
                  //  console.log("newArray2",this.state.countAccidentHour)
                    //    console.log("Posle обновы",this.state.countAccidentHour[0].y);
                    })
                        .catch((error) => {
                            console.warn('error',error);
                        })}
loadHourCountChart4(props){
                          var yY = 0;

                            axios.get("http://localhost:1348/countAccidentHour4", {

                                mode: 'no-cors',
                                bodyUsed: true,
                                headers: {
                                  'Content-Type': 'application/json',
                            },
                            }).then(res => {
                              this.state.countM = res.data;
                              console.log("countM",this.state.countM.map(itemcount =>(
                                yY=itemcount.Hour
                              )));
                            //  console.log("До обновы",this.state.countAccidentHour[0].y);

                            let newArray = [...this.state.countAccidentHour]
                          //  console.log("newArray1",newArray)
                            newArray[4] = {...newArray[4], y: yY}
                          //  console.log("newArray2",newArray)
                            this.setState({
                            countAccidentHour: newArray,
                            });
                          //  console.log("newArray2",this.state.countAccidentHour)
                            //    console.log("Posle обновы",this.state.countAccidentHour[0].y);
                            })
                                .catch((error) => {
                                    console.warn('error',error);
                                })}
loadHourCountChart5(props){
                                  var yY = 0;

                                    axios.get("http://localhost:1348/countAccidentHour5", {

                                        mode: 'no-cors',
                                        bodyUsed: true,
                                        headers: {
                                          'Content-Type': 'application/json',
                                    },
                                    }).then(res => {
                                      this.state.countM = res.data;
                                      console.log("countM",this.state.countM.map(itemcount =>(
                                        yY=itemcount.Hour
                                      )));
                                    //  console.log("До обновы",this.state.countAccidentHour[0].y);

                                    let newArray = [...this.state.countAccidentHour]
                                  //  console.log("newArray1",newArray)
                                    newArray[5] = {...newArray[5], y: yY}
                                  //  console.log("newArray2",newArray)
                                    this.setState({
                                    countAccidentHour: newArray,
                                    });
                                  //  console.log("newArray2",this.state.countAccidentHour)
                                    //    console.log("Posle обновы",this.state.countAccidentHour[0].y);
                                    })
                                        .catch((error) => {
                                            console.warn('error',error);
                                        })}
loadHourCountChart6(props){
                                          var yY = 0;

                                            axios.get("http://localhost:1348/countAccidentHour6", {

                                                mode: 'no-cors',
                                                bodyUsed: true,
                                                headers: {
                                                  'Content-Type': 'application/json',
                                            },
                                            }).then(res => {
                                              this.state.countM = res.data;
                                              console.log("countM",this.state.countM.map(itemcount =>(
                                                yY=itemcount.Hour
                                              )));
                                            //  console.log("До обновы",this.state.countAccidentHour[0].y);

                                            let newArray = [...this.state.countAccidentHour]
                                          //  console.log("newArray1",newArray)
                                            newArray[6] = {...newArray[6], y: yY}
                                          //  console.log("newArray2",newArray)
                                            this.setState({
                                            countAccidentHour: newArray,
                                            });
                                          //  console.log("newArray2",this.state.countAccidentHour)
                                            //    console.log("Posle обновы",this.state.countAccidentHour[0].y);
                                            })
                                                .catch((error) => {
                                                    console.warn('error',error);
                                                })}
loadHourCountChart7(props){
                                                  var yY = 0;

                                                    axios.get("http://localhost:1348/countAccidentHour7", {

                                                        mode: 'no-cors',
                                                        bodyUsed: true,
                                                        headers: {
                                                          'Content-Type': 'application/json',
                                                    },
                                                    }).then(res => {
                                                      this.state.countM = res.data;
                                                      console.log("countM",this.state.countM.map(itemcount =>(
                                                        yY=itemcount.Hour
                                                      )));
                                                    //  console.log("До обновы",this.state.countAccidentHour[0].y);

                                                    let newArray = [...this.state.countAccidentHour]
                                                  //  console.log("newArray1",newArray)
                                                    newArray[7] = {...newArray[7], y: yY}
                                                  //  console.log("newArray2",newArray)
                                                    this.setState({
                                                    countAccidentHour: newArray,
                                                    });
                                                  //  console.log("newArray2",this.state.countAccidentHour)
                                                    //    console.log("Posle обновы",this.state.countAccidentHour[0].y);
                                                    })
                                                        .catch((error) => {
                                                            console.warn('error',error);
                                                        })}
loadHourCountChart8(props){
                                                          var yY = 0;

                                                            axios.get("http://localhost:1348/countAccidentHour8", {

                                                                mode: 'no-cors',
                                                                bodyUsed: true,
                                                                headers: {
                                                                  'Content-Type': 'application/json',
                                                            },
                                                            }).then(res => {
                                                              this.state.countM = res.data;
                                                              console.log("countM",this.state.countM.map(itemcount =>(
                                                                yY=itemcount.Hour
                                                              )));
                                                            //  console.log("До обновы",this.state.countAccidentHour[0].y);

                                                            let newArray = [...this.state.countAccidentHour]
                                                          //  console.log("newArray1",newArray)
                                                            newArray[8] = {...newArray[8], y: yY}
                                                          //  console.log("newArray2",newArray)
                                                            this.setState({
                                                            countAccidentHour: newArray,
                                                            });
                                                          //  console.log("newArray2",this.state.countAccidentHour)
                                                            //    console.log("Posle обновы",this.state.countAccidentHour[0].y);
                                                            })
                                                                .catch((error) => {
                                                                    console.warn('error',error);
                                                                })}
loadHourCountChart9(props){
                                                                  var yY = 0;

                                                                    axios.get("http://localhost:1348/countAccidentHour9", {

                                                                        mode: 'no-cors',
                                                                        bodyUsed: true,
                                                                        headers: {
                                                                          'Content-Type': 'application/json',
                                                                    },
                                                                    }).then(res => {
                                                                      this.state.countM = res.data;
                                                                      console.log("countM",this.state.countM.map(itemcount =>(
                                                                        yY=itemcount.Hour
                                                                      )));
                                                                    //  console.log("До обновы",this.state.countAccidentHour[0].y);

                                                                    let newArray = [...this.state.countAccidentHour]
                                                                  //  console.log("newArray1",newArray)
                                                                    newArray[9] = {...newArray[9], y: yY}
                                                                  //  console.log("newArray2",newArray)
                                                                    this.setState({
                                                                    countAccidentHour: newArray,
                                                                    });
                                                                  //  console.log("newArray2",this.state.countAccidentHour)
                                                                    //    console.log("Posle обновы",this.state.countAccidentHour[0].y);
                                                                    })
                                                                        .catch((error) => {
                                                                            console.warn('error',error);
                                                                        })}
loadHourCountChart10(props){
                                                                          var yY = 0;

                                                                            axios.get("http://localhost:1348/countAccidentHour10", {

                                                                                mode: 'no-cors',
                                                                                bodyUsed: true,
                                                                                headers: {
                                                                                  'Content-Type': 'application/json',
                                                                            },
                                                                            }).then(res => {
                                                                              this.state.countM = res.data;
                                                                              console.log("countM",this.state.countM.map(itemcount =>(
                                                                                yY=itemcount.Hour
                                                                              )));
                                                                            //  console.log("До обновы",this.state.countAccidentHour[0].y);

                                                                            let newArray = [...this.state.countAccidentHour]
                                                                          //  console.log("newArray1",newArray)
                                                                            newArray[10] = {...newArray[10], y: yY}
                                                                          //  console.log("newArray2",newArray)
                                                                            this.setState({
                                                                            countAccidentHour: newArray,
                                                                            });
                                                                          //  console.log("newArray2",this.state.countAccidentHour)
                                                                            //    console.log("Posle обновы",this.state.countAccidentHour[0].y);
                                                                            })
                                                                                .catch((error) => {
                                                                                    console.warn('error',error);
                                                                                })}
loadHourCountChart11(props){
                                                                                  var yY = 0;

                                                                                    axios.get("http://localhost:1348/countAccidentHour11", {

                                                                                        mode: 'no-cors',
                                                                                        bodyUsed: true,
                                                                                        headers: {
                                                                                          'Content-Type': 'application/json',
                                                                                    },
                                                                                    }).then(res => {
                                                                                      this.state.countM = res.data;
                                                                                      console.log("countM",this.state.countM.map(itemcount =>(
                                                                                        yY=itemcount.Hour
                                                                                      )));
                                                                                    //  console.log("До обновы",this.state.countAccidentHour[0].y);

                                                                                    let newArray = [...this.state.countAccidentHour]
                                                                                  //  console.log("newArray1",newArray)
                                                                                    newArray[11] = {...newArray[11], y: yY}
                                                                                  //  console.log("newArray2",newArray)
                                                                                    this.setState({
                                                                                    countAccidentHour: newArray,
                                                                                    });
                                                                                  //  console.log("newArray2",this.state.countAccidentHour)
                                                                                    //    console.log("Posle обновы",this.state.countAccidentHour[0].y);
                                                                                    })
                                                                                        .catch((error) => {
                                                                                            console.warn('error',error);
                                                                                        })}
loadHourCountChart12(props){
                                                                                          var yY = 0;

                                                                                            axios.get("http://localhost:1348/countAccidentHour12", {

                                                                                                mode: 'no-cors',
                                                                                                bodyUsed: true,
                                                                                                headers: {
                                                                                                  'Content-Type': 'application/json',
                                                                                            },
                                                                                            }).then(res => {
                                                                                              this.state.countM = res.data;
                                                                                              console.log("countM",this.state.countM.map(itemcount =>(
                                                                                                yY=itemcount.Hour
                                                                                              )));
                                                                                            //  console.log("До обновы",this.state.countAccidentHour[0].y);

                                                                                            let newArray = [...this.state.countAccidentHour]
                                                                                          //  console.log("newArray1",newArray)
                                                                                            newArray[12] = {...newArray[12], y: yY}
                                                                                          //  console.log("newArray2",newArray)
                                                                                            this.setState({
                                                                                            countAccidentHour: newArray,
                                                                                            });
                                                                                          //  console.log("newArray2",this.state.countAccidentHour)
                                                                                            //    console.log("Posle обновы",this.state.countAccidentHour[0].y);
                                                                                            })
                                                                                                .catch((error) => {
                                                                                                    console.warn('error',error);
                                                                                                })}
loadHourCountChart13(props){
                                                                                                  var yY = 0;

                                                                                                    axios.get("http://localhost:1348/countAccidentHour13", {

                                                                                                        mode: 'no-cors',
                                                                                                        bodyUsed: true,
                                                                                                        headers: {
                                                                                                          'Content-Type': 'application/json',
                                                                                                    },
                                                                                                    }).then(res => {
                                                                                                      this.state.countM = res.data;
                                                                                                      console.log("countM",this.state.countM.map(itemcount =>(
                                                                                                        yY=itemcount.Hour
                                                                                                      )));
                                                                                                    //  console.log("До обновы",this.state.countAccidentHour[0].y);

                                                                                                    let newArray = [...this.state.countAccidentHour]
                                                                                                  //  console.log("newArray1",newArray)
                                                                                                    newArray[13] = {...newArray[13], y: yY}
                                                                                                  //  console.log("newArray2",newArray)
                                                                                                    this.setState({
                                                                                                    countAccidentHour: newArray,
                                                                                                    });
                                                                                                  //  console.log("newArray2",this.state.countAccidentHour)
                                                                                                    //    console.log("Posle обновы",this.state.countAccidentHour[0].y);
                                                                                                    })
                                                                                                        .catch((error) => {
                                                                                                            console.warn('error',error);
                                                                                                        })}
loadHourCountChart14(props){
                                                                                                          var yY = 0;

                                                                                                            axios.get("http://localhost:1348/countAccidentHour14", {

                                                                                                                mode: 'no-cors',
                                                                                                                bodyUsed: true,
                                                                                                                headers: {
                                                                                                                  'Content-Type': 'application/json',
                                                                                                            },
                                                                                                            }).then(res => {
                                                                                                              this.state.countM = res.data;
                                                                                                              console.log("countM",this.state.countM.map(itemcount =>(
                                                                                                                yY=itemcount.Hour
                                                                                                              )));
                                                                                                            //  console.log("До обновы",this.state.countAccidentHour[0].y);

                                                                                                            let newArray = [...this.state.countAccidentHour]
                                                                                                          //  console.log("newArray1",newArray)
                                                                                                            newArray[14] = {...newArray[14], y: yY}
                                                                                                          //  console.log("newArray2",newArray)
                                                                                                            this.setState({
                                                                                                            countAccidentHour: newArray,
                                                                                                            });
                                                                                                          //  console.log("newArray2",this.state.countAccidentHour)
                                                                                                            //    console.log("Posle обновы",this.state.countAccidentHour[0].y);
                                                                                                            })
                                                                                                                .catch((error) => {
                                                                                                                    console.warn('error',error);
                                                                                                                })}
loadHourCountChart15(props){
                                                                                                                  var yY = 0;

                                                                                                                    axios.get("http://localhost:1348/countAccidentHour15", {

                                                                                                                        mode: 'no-cors',
                                                                                                                        bodyUsed: true,
                                                                                                                        headers: {
                                                                                                                          'Content-Type': 'application/json',
                                                                                                                    },
                                                                                                                    }).then(res => {
                                                                                                                      this.state.countM = res.data;
                                                                                                                      console.log("countM",this.state.countM.map(itemcount =>(
                                                                                                                        yY=itemcount.Hour
                                                                                                                      )));
                                                                                                                    //  console.log("До обновы",this.state.countAccidentHour[0].y);

                                                                                                                    let newArray = [...this.state.countAccidentHour]
                                                                                                                  //  console.log("newArray1",newArray)
                                                                                                                    newArray[15] = {...newArray[15], y: yY}
                                                                                                                  //  console.log("newArray2",newArray)
                                                                                                                    this.setState({
                                                                                                                    countAccidentHour: newArray,
                                                                                                                    });
                                                                                                                  //  console.log("newArray2",this.state.countAccidentHour)
                                                                                                                    //    console.log("Posle обновы",this.state.countAccidentHour[0].y);
                                                                                                                    })
                                                                                                                        .catch((error) => {
                                                                                                                            console.warn('error',error);
                                                                                                                        })}
loadHourCountChart16(props){
                                                                                                                          var yY = 0;

                                                                                                                        axios.get("http://localhost:1348/countAccidentHour16", {

                                                                                                                            mode: 'no-cors',
                                                                                                                            bodyUsed: true,
                                                                                                                            headers: {
                                                                                                                              'Content-Type': 'application/json',
                                                                                                                        },
                                                                                                                        }).then(res => {
                                                                                                                          this.state.countM = res.data;
                                                                                                                          console.log("countM",this.state.countM.map(itemcount =>(
                                                                                                                            yY=itemcount.Hour
                                                                                                                          )));
                                                                                                                          console.log("До обновы",this.state.countAccidentHour[0].y);

                                                                                                                        let newArray = [...this.state.countAccidentHour]
                                                                                                                        console.log("newArray1",newArray)
                                                                                                                        newArray[16] = {...newArray[16], y: yY}
                                                                                                                        console.log("newArray2",newArray)
                                                                                                                        this.setState({
                                                                                                                        countAccidentHour: newArray,
                                                                                                                        });
                                                                                                                        console.log("newArray2",this.state.countAccidentHour)
                                                                                                                            console.log("Posle обновы",this.state.countAccidentHour[0].y);
                                                                                                                        })
                                                                                                                            .catch((error) => {
                                                                                                                                console.warn('error',error);
                                                                                                                            })}
loadHourCountChart17(props){
                                                                                                                              var yY = 0;

                                                                                                                            axios.get("http://localhost:1348/countAccidentHour17", {

                                                                                                                                mode: 'no-cors',
                                                                                                                                bodyUsed: true,
                                                                                                                                headers: {
                                                                                                                                  'Content-Type': 'application/json',
                                                                                                                            },
                                                                                                                            }).then(res => {
                                                                                                                              this.state.countM = res.data;
                                                                                                                              console.log("countM",this.state.countM.map(itemcount =>(
                                                                                                                                yY=itemcount.Hour
                                                                                                                              )));
                                                                                                                              console.log("До обновы",this.state.countAccidentHour[0].y);

                                                                                                                            let newArray = [...this.state.countAccidentHour]
                                                                                                                            console.log("newArray1",newArray)
                                                                                                                            newArray[17] = {...newArray[17], y: yY}
                                                                                                                            console.log("newArray2",newArray)
                                                                                                                            this.setState({
                                                                                                                            countAccidentHour: newArray,
                                                                                                                            });
                                                                                                                            console.log("newArray2",this.state.countAccidentHour)
                                                                                                                                console.log("Posle обновы",this.state.countAccidentHour[0].y);
                                                                                                                            })
                                                                                                                                .catch((error) => {
                                                                                                                                    console.warn('error',error);
                                                                                                                                })}
loadHourCountChart18(props){
                                                                                                                                  var yY = 0;

                                                                                                                                axios.get("http://localhost:1348/countAccidentHour18", {

                                                                                                                                    mode: 'no-cors',
                                                                                                                                    bodyUsed: true,
                                                                                                                                    headers: {
                                                                                                                                      'Content-Type': 'application/json',
                                                                                                                                },
                                                                                                                                }).then(res => {
                                                                                                                                  this.state.countM = res.data;
                                                                                                                                  console.log("countM",this.state.countM.map(itemcount =>(
                                                                                                                                    yY=itemcount.Hour
                                                                                                                                  )));
                                                                                                                                  console.log("До обновы",this.state.countAccidentHour[0].y);

                                                                                                                                let newArray = [...this.state.countAccidentHour]
                                                                                                                                console.log("newArray1",newArray)
                                                                                                                                newArray[18] = {...newArray[18], y: yY}
                                                                                                                                console.log("newArray2",newArray)
                                                                                                                                this.setState({
                                                                                                                                countAccidentHour: newArray,
                                                                                                                                });
                                                                                                                                console.log("newArray2",this.state.countAccidentHour)
                                                                                                                                    console.log("Posle обновы",this.state.countAccidentHour[0].y);
                                                                                                                                })
                                                                                                                                    .catch((error) => {
                                                                                                                                        console.warn('error',error);
                                                                                                                                    })}
loadHourCountChart19(props){
                                                                                                                                      var yY = 0;

                                                                                                                                    axios.get("http://localhost:1348/countAccidentHour19", {

                                                                                                                                        mode: 'no-cors',
                                                                                                                                        bodyUsed: true,
                                                                                                                                        headers: {
                                                                                                                                          'Content-Type': 'application/json',
                                                                                                                                    },
                                                                                                                                    }).then(res => {
                                                                                                                                      this.state.countM = res.data;
                                                                                                                                      console.log("countM",this.state.countM.map(itemcount =>(
                                                                                                                                        yY=itemcount.Hour
                                                                                                                                      )));
                                                                                                                                      console.log("До обновы",this.state.countAccidentHour[0].y);

                                                                                                                                    let newArray = [...this.state.countAccidentHour]
                                                                                                                                    console.log("newArray1",newArray)
                                                                                                                                    newArray[19] = {...newArray[19], y: yY}
                                                                                                                                    console.log("newArray2",newArray)
                                                                                                                                    this.setState({
                                                                                                                                    countAccidentHour: newArray,
                                                                                                                                    });
                                                                                                                                    console.log("newArray2",this.state.countAccidentHour)
                                                                                                                                        console.log("Posle обновы",this.state.countAccidentHour[0].y);
                                                                                                                                    })
                                                                                                                                        .catch((error) => {
                                                                                                                                            console.warn('error',error);
                                                                                                                                        })}
loadHourCountChart20(props){
                                                                                                                                          var yY = 0;

                                                                                                                                        axios.get("http://localhost:1348/countAccidentHour20", {

                                                                                                                                            mode: 'no-cors',
                                                                                                                                            bodyUsed: true,
                                                                                                                                            headers: {
                                                                                                                                              'Content-Type': 'application/json',
                                                                                                                                        },
                                                                                                                                        }).then(res => {
                                                                                                                                          this.state.countM = res.data;
                                                                                                                                          console.log("countM",this.state.countM.map(itemcount =>(
                                                                                                                                            yY=itemcount.Hour
                                                                                                                                          )));
                                                                                                                                          console.log("До обновы",this.state.countAccidentHour[0].y);

                                                                                                                                        let newArray = [...this.state.countAccidentHour]
                                                                                                                                        console.log("newArray1",newArray)
                                                                                                                                        newArray[20] = {...newArray[20], y: yY}
                                                                                                                                        console.log("newArray2",newArray)
                                                                                                                                        this.setState({
                                                                                                                                        countAccidentHour: newArray,
                                                                                                                                        });
                                                                                                                                        console.log("newArray2",this.state.countAccidentHour)
                                                                                                                                            console.log("Posle обновы",this.state.countAccidentHour[0].y);
                                                                                                                                        })
                                                                                                                                            .catch((error) => {
                                                                                                                                                console.warn('error',error);
                                                                                                                                            })}
loadHourCountChart21(props){
                                                                                                                                              var yY = 0;

                                                                                                                                            axios.get("http://localhost:1348/countAccidentHour21", {

                                                                                                                                                mode: 'no-cors',
                                                                                                                                                bodyUsed: true,
                                                                                                                                                headers: {
                                                                                                                                                  'Content-Type': 'application/json',
                                                                                                                                            },
                                                                                                                                            }).then(res => {
                                                                                                                                              this.state.countM = res.data;
                                                                                                                                              console.log("countM",this.state.countM.map(itemcount =>(
                                                                                                                                                yY=itemcount.Hour
                                                                                                                                              )));
                                                                                                                                              console.log("До обновы",this.state.countAccidentHour[0].y);

                                                                                                                                            let newArray = [...this.state.countAccidentHour]
                                                                                                                                            console.log("newArray1",newArray)
                                                                                                                                            newArray[21] = {...newArray[21], y: yY}
                                                                                                                                            console.log("newArray2",newArray)
                                                                                                                                            this.setState({
                                                                                                                                            countAccidentHour: newArray,
                                                                                                                                            });
                                                                                                                                            console.log("newArray2",this.state.countAccidentHour)
                                                                                                                                                console.log("Posle обновы",this.state.countAccidentHour[0].y);
                                                                                                                                            })
                                                                                                                                                .catch((error) => {
                                                                                                                                                    console.warn('error',error);
                                                                                                                                                })}
loadHourCountChart22(props){
                                                                                                                                                  var yY = 0;

                                                                                                                                                axios.get("http://localhost:1348/countAccidentHour22", {

                                                                                                                                                    mode: 'no-cors',
                                                                                                                                                    bodyUsed: true,
                                                                                                                                                    headers: {
                                                                                                                                                      'Content-Type': 'application/json',
                                                                                                                                                },
                                                                                                                                                }).then(res => {
                                                                                                                                                  this.state.countM = res.data;
                                                                                                                                                  console.log("countM",this.state.countM.map(itemcount =>(
                                                                                                                                                    yY=itemcount.Hour
                                                                                                                                                  )));
                                                                                                                                                  console.log("До обновы",this.state.countAccidentHour[0].y);

                                                                                                                                                let newArray = [...this.state.countAccidentHour]
                                                                                                                                                console.log("newArray1",newArray)
                                                                                                                                                newArray[22] = {...newArray[22], y: yY}
                                                                                                                                                console.log("newArray2",newArray)
                                                                                                                                                this.setState({
                                                                                                                                                countAccidentHour: newArray,
                                                                                                                                                });
                                                                                                                                                console.log("newArray2",this.state.countAccidentHour)
                                                                                                                                                    console.log("Posle обновы",this.state.countAccidentHour[0].y);
                                                                                                                                                })
                                                                                                                                                    .catch((error) => {
                                                                                                                                                        console.warn('error',error);
                                                                                                                                                    })}
loadHourCountChart23(props){
                                                                                                                                                      var yY = 0;

                                                                                                                                                    axios.get("http://localhost:1348/countAccidentHour23", {

                                                                                                                                                        mode: 'no-cors',
                                                                                                                                                        bodyUsed: true,
                                                                                                                                                        headers: {
                                                                                                                                                          'Content-Type': 'application/json',
                                                                                                                                                    },
                                                                                                                                                    }).then(res => {
                                                                                                                                                      this.state.countM = res.data;
                                                                                                                                                      console.log("countM",this.state.countM.map(itemcount =>(
                                                                                                                                                        yY=itemcount.Hour
                                                                                                                                                      )));
                                                                                                                                                      console.log("До обновы",this.state.countAccidentHour[0].y);

                                                                                                                                                    let newArray = [...this.state.countAccidentHour]
                                                                                                                                                    console.log("newArray1",newArray)
                                                                                                                                                    newArray[23] = {...newArray[23], y: yY}
                                                                                                                                                    console.log("newArray2",newArray)
                                                                                                                                                    this.setState({
                                                                                                                                                    countAccidentHour: newArray,
                                                                                                                                                    });
                                                                                                                                                    console.log("newArray2",this.state.countAccidentHour)
                                                                                                                                                        console.log("Posle обновы",this.state.countAccidentHour[0].y);
                                                                                                                                                    })
                                                                                                                                                        .catch((error) => {
                                                                                                                                                            console.warn('error',error);
                                                                                                                                                        })}

// 4 chart

loadStolkCountChart(props){
this.loadStolkCountChartDecember(props)
this.loadStolkCountChartJanuary(props)
this.loadStolkCountChartFebrary(props)
this.loadStolkCountChartMarch(props)
this.loadStolkCountChartApril(props)
}
loadPeshCountChart(props){
  this.loadPeshCountChartDecember(props)
  this.loadPeshCountChartJanuary(props)
  this.loadPeshCountChartFebrary(props)
  this.loadPeshCountChartMarch(props)
  this.loadPeshCountChartApril(props)
}
loadPrepCountChart(props){
  this.loadPrepCountChartDecember(props)
  this.loadPrepCountChartJanuary(props)
  this.loadPrepCountChartFebrary(props)
  this.loadPrepCountChartMarch(props)
  this.loadPrepCountChartApril(props)
}
loadStoCountChart(props){
  this.loadStoCountChartDecember(props)
  this.loadStoCountChartJanuary(props)
  this.loadStoCountChartFebrary(props)
  this.loadStoCountChartMarch(props)
  this.loadStoCountChartApril(props)
}
loadSVelCountChart(props){
  this.loadSVelCountChartDecember(props)
  this.loadSVelCountChartJanuary(props)
  this.loadSVelCountChartFebrary(props)
  this.loadSVelCountChartMarch(props)
  this.loadSVelCountChartApril(props)
}


loadStolkCountChartDecember(props){
  var yY = 0;

axios.get("http://localhost:1348/countStolkDecember", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
},
}).then(res => {
this.state.countM = res.data;
console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Stolk
)));
console.log("До обновы",this.state.stolk[0].y);

let newArray = [...this.state.stolk]
console.log("newArray1",newArray)
newArray[0] = {...newArray[0], y: yY}
console.log("newArray2",newArray)
this.setState({
stolk: newArray,
});
console.log("newArray2",this.state.stolk)
  console.log("Posle обновы",this.state.stolk[0].y);
})
  .catch((error) => {
      console.warn('error',error);
  })}
loadStolkCountChartJanuary(props){
  var yY = 0;

  axios.get("http://localhost:1348/countStolkJanuary", {

    mode: 'no-cors',
    bodyUsed: true,
    headers: {
      'Content-Type': 'application/json',
  },
  }).then(res => {
  this.state.countM = res.data;
  console.log("countM",this.state.countM.map(itemcount =>(
    yY=itemcount.Stolk
  )));
  console.log("До обновы",this.state.stolk[0].y);

  let newArray = [...this.state.stolk]
  //console.log("newArray1",newArray)
  newArray[1] = {...newArray[1], y: yY}
//  console.log("newArray2",newArray)
  this.setState({
  stolk: newArray,
  });
//  console.log("newArray2",this.state.stolk)
  //  console.log("Posle обновы",this.state.stolk[0].y);
  })
    .catch((error) => {
        console.warn('error',error);
    })
}
loadStolkCountChartFebrary(props){
  var yY = 0;

  axios.get("http://localhost:1348/countStolkFebrary", {

    mode: 'no-cors',
    bodyUsed: true,
    headers: {
      'Content-Type': 'application/json',
  },
  }).then(res => {
  this.state.countM = res.data;
  console.log("countM",this.state.countM.map(itemcount =>(
    yY=itemcount.Stolk
  )));
  console.log("До обновы",this.state.stolk[0].y);

  let newArray = [...this.state.stolk]
  //console.log("newArray1",newArray)
  newArray[2] = {...newArray[2], y: yY}
//  console.log("newArray2",newArray)
  this.setState({
  stolk: newArray,
  });
//  console.log("newArray2",this.state.stolk)
  //  console.log("Posle обновы",this.state.stolk[0].y);
  })
    .catch((error) => {
        console.warn('error',error);
    })
}
loadStolkCountChartMarch(props){
  var yY = 0;

  axios.get("http://localhost:1348/countStolkMarch", {

    mode: 'no-cors',
    bodyUsed: true,
    headers: {
      'Content-Type': 'application/json',
  },
  }).then(res => {
  this.state.countM = res.data;
  console.log("countM",this.state.countM.map(itemcount =>(
    yY=itemcount.Stolk
  )));
  console.log("До обновы",this.state.stolk[0].y);

  let newArray = [...this.state.stolk]
  //console.log("newArray1",newArray)
  newArray[3] = {...newArray[3], y: yY}
//  console.log("newArray2",newArray)
  this.setState({
  stolk: newArray,
  });
//  console.log("newArray2",this.state.stolk)
  //  console.log("Posle обновы",this.state.stolk[0].y);
  })
    .catch((error) => {
        console.warn('error',error);
    })
}
loadStolkCountChartApril(props){
  var yY = 0;

  axios.get("http://localhost:1348/countStolkApril", {

    mode: 'no-cors',
    bodyUsed: true,
    headers: {
      'Content-Type': 'application/json',
  },
  }).then(res => {
  this.state.countM = res.data;
  console.log("countM",this.state.countM.map(itemcount =>(
    yY=itemcount.Stolk
  )));
  console.log("До обновы",this.state.stolk[0].y);

  let newArray = [...this.state.stolk]
  //console.log("newArray1",newArray)
  newArray[4] = {...newArray[4], y: yY}
//  console.log("newArray2",newArray)
  this.setState({
  stolk: newArray,
  });
//  console.log("newArray2",this.state.stolk)
  //  console.log("Posle обновы",this.state.stolk[0].y);
  })
    .catch((error) => {
        console.warn('error',error);
    })
}
loadPeshCountChartDecember(props){
  var yY = 0;

axios.get("http://localhost:1348/countPeshDecember", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
},
}).then(res => {
this.state.countM = res.data;
console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Pesh
)));
console.log("До обновы",this.state.pesh[0].y);

let newArray = [...this.state.pesh]
console.log("newArray1",newArray)
newArray[0] = {...newArray[0], y: yY}
console.log("newArray2",newArray)
this.setState({
pesh: newArray,
});
console.log("newArray2",this.state.pesh)
  console.log("Posle обновы",this.state.pesh[0].y);
})
  .catch((error) => {
      console.warn('error',error);
  })
}
loadPeshCountChartJanuary(props){
  var yY = 0;

axios.get("http://localhost:1348/countPeshJanuary", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
},
}).then(res => {
this.state.countM = res.data;
console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Pesh
)));
//console.log("До обновы",this.state.pesh[0].y);

let newArray = [...this.state.pesh]
//console.log("newArray1",newArray)
newArray[1] = {...newArray[1], y: yY}
//console.log("newArray2",newArray)
this.setState({
pesh: newArray,
});
//console.log("newArray2",this.state.pesh)
//  console.log("Posle обновы",this.state.pesh[0].y);
})
  .catch((error) => {
      console.warn('error',error);
  })
}
loadPeshCountChartFebrary(props){
  var yY = 0;

axios.get("http://localhost:1348/countPeshFebrary", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
},
}).then(res => {
this.state.countM = res.data;
console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Pesh
)));
//console.log("До обновы",this.state.pesh[0].y);

let newArray = [...this.state.pesh]
//console.log("newArray1",newArray)
newArray[2] = {...newArray[2], y: yY}
//console.log("newArray2",newArray)
this.setState({
pesh: newArray,
});
//console.log("newArray2",this.state.pesh)
//  console.log("Posle обновы",this.state.pesh[0].y);
})
  .catch((error) => {
      console.warn('error',error);
  })
}
loadPeshCountChartMarch(props){
  var yY = 0;

axios.get("http://localhost:1348/countPeshMarch", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
},
}).then(res => {
this.state.countM = res.data;
console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Pesh
)));
//console.log("До обновы",this.state.pesh[0].y);

let newArray = [...this.state.pesh]
//console.log("newArray1",newArray)
newArray[3] = {...newArray[3], y: yY}
//console.log("newArray2",newArray)
this.setState({
pesh: newArray,
});
//console.log("newArray2",this.state.pesh)
//  console.log("Posle обновы",this.state.pesh[0].y);
})
  .catch((error) => {
      console.warn('error',error);
  })
}
loadPeshCountChartApril(props){
  var yY = 0;

axios.get("http://localhost:1348/countPeshApril", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
},
}).then(res => {
this.state.countM = res.data;
console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Pesh
)));
//console.log("До обновы",this.state.pesh[0].y);

let newArray = [...this.state.pesh]
//console.log("newArray1",newArray)
newArray[4] = {...newArray[4], y: yY}
//console.log("newArray2",newArray)
this.setState({
pesh: newArray,
});
//console.log("newArray2",this.state.pesh)
//  console.log("Posle обновы",this.state.pesh[0].y);
})
  .catch((error) => {
      console.warn('error',error);
  })
}
loadPrepCountChartDecember(props){
  var yY = 0;

  axios.get("http://localhost:1348/countPrepDecember", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
  },
  }).then(res => {
  this.state.countM = res.data;
  console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Prep
  )));
  console.log("До обновы",this.state.prep[0].y);

  let newArray = [...this.state.prep]
  console.log("newArray1",newArray)
  newArray[0] = {...newArray[0], y: yY}
  console.log("newArray2",newArray)
  this.setState({
  prep: newArray,
  });
  console.log("newArray2",this.state.prep)
  console.log("Posle обновы",this.state.prep[0].y);
  })
  .catch((error) => {
      console.warn('error',error);
  })
}
loadPrepCountChartJanuary(props){
  var yY = 0;

  axios.get("http://localhost:1348/countPrepJanuary", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
  },
  }).then(res => {
  this.state.countM = res.data;
  console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Prep
  )));
  //console.log("До обновы",this.state.prep[0].y);

  let newArray = [...this.state.prep]
//  console.log("newArray1",newArray)
  newArray[1] = {...newArray[1], y: yY}
  //console.log("newArray2",newArray)
  this.setState({
  prep: newArray,
  });
//  console.log("newArray2",this.state.prep)
  //console.log("Posle обновы",this.state.prep[0].y);
  })
  .catch((error) => {
      console.warn('error',error);
  })
}
loadPrepCountChartFebrary(props){
  var yY = 0;

  axios.get("http://localhost:1348/countPrepFebrary", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
  },
  }).then(res => {
  this.state.countM = res.data;
  console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Prep
  )));
  //console.log("До обновы",this.state.prep[0].y);

  let newArray = [...this.state.prep]
//  console.log("newArray1",newArray)
  newArray[2] = {...newArray[2], y: yY}
  //console.log("newArray2",newArray)
  this.setState({
  prep: newArray,
  });
//  console.log("newArray2",this.state.prep)
  //console.log("Posle обновы",this.state.prep[0].y);
  })
  .catch((error) => {
      console.warn('error',error);
  })
}
loadPrepCountChartMarch(props){
  var yY = 0;

  axios.get("http://localhost:1348/countPrepMarch", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
  },
  }).then(res => {
  this.state.countM = res.data;
  console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Prep
  )));
  //console.log("До обновы",this.state.prep[0].y);

  let newArray = [...this.state.prep]
//  console.log("newArray1",newArray)
  newArray[3] = {...newArray[3], y: yY}
  //console.log("newArray2",newArray)
  this.setState({
  prep: newArray,
  });
//  console.log("newArray2",this.state.prep)
  //console.log("Posle обновы",this.state.prep[0].y);
  })
  .catch((error) => {
      console.warn('error',error);
  })
}
loadPrepCountChartApril(props){
  var yY = 0;

  axios.get("http://localhost:1348/countPrepApril", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
  },
  }).then(res => {
  this.state.countM = res.data;
  console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Prep
  )));
  //console.log("До обновы",this.state.pesh[0].y);

  let newArray = [...this.state.prep]
//  console.log("newArray1",newArray)
  newArray[4] = {...newArray[4], y: yY}
  //console.log("newArray2",newArray)
  this.setState({
  prep: newArray,
  });
//  console.log("newArray2",this.state.prep)
  //console.log("Posle обновы",this.state.prep[0].y);
  })
  .catch((error) => {
      console.warn('error',error);
  })
}
loadStoCountChartDecember(props){
  var yY = 0;

  axios.get("http://localhost:1348/countStoDecember", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
  },
  }).then(res => {
  this.state.countM = res.data;
  console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Sto
  )));
  console.log("До обновы",this.state.sto[0].y);

  let newArray = [...this.state.sto]
  console.log("newArray1",newArray)
  newArray[0] = {...newArray[0], y: yY}
  console.log("newArray2",newArray)
  this.setState({
  sto: newArray,
  });
  console.log("newArray2",this.state.sto)
  console.log("Posle обновы",this.state.sto[0].y);
  })
  .catch((error) => {
      console.warn('error',error);
  })
}
loadStoCountChartJanuary(props){
  var yY = 0;

  axios.get("http://localhost:1348/countStoJanuary", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
  },
  }).then(res => {
  this.state.countM = res.data;
  console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Sto
  )));
//  console.log("До обновы",this.state.sto[0].y);

  let newArray = [...this.state.sto]
//  console.log("newArray1",newArray)
  newArray[1] = {...newArray[1], y: yY}
//  console.log("newArray2",newArray)
  this.setState({
  sto: newArray,
  });
//  console.log("newArray2",this.state.sto)
  //console.log("Posle обновы",this.state.sto[0].y);
  })
  .catch((error) => {
      console.warn('error',error);
  })
}
loadStoCountChartFebrary(props){
  var yY = 0;

  axios.get("http://localhost:1348/countStoFebrary", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
  },
  }).then(res => {
  this.state.countM = res.data;
  console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Sto
  )));
//  console.log("До обновы",this.state.sto[0].y);

  let newArray = [...this.state.sto]
//  console.log("newArray1",newArray)
  newArray[2] = {...newArray[2], y: yY}
//  console.log("newArray2",newArray)
  this.setState({
  sto: newArray,
  });
//  console.log("newArray2",this.state.sto)
  //console.log("Posle обновы",this.state.sto[0].y);
  })
  .catch((error) => {
      console.warn('error',error);
  })
}
loadStoCountChartMarch(props){
  var yY = 0;

  axios.get("http://localhost:1348/countStoMarch", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
  },
  }).then(res => {
  this.state.countM = res.data;
  console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Sto
  )));
//  console.log("До обновы",this.state.sto[0].y);

  let newArray = [...this.state.sto]
//  console.log("newArray1",newArray)
  newArray[3] = {...newArray[3], y: yY}
//  console.log("newArray2",newArray)
  this.setState({
  sto: newArray,
  });
//  console.log("newArray2",this.state.sto)
  //console.log("Posle обновы",this.state.sto[0].y);
  })
  .catch((error) => {
      console.warn('error',error);
  })
}
loadStoCountChartApril(props){
  var yY = 0;

  axios.get("http://localhost:1348/countStoApril", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
  },
  }).then(res => {
  this.state.countM = res.data;
  console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Sto
  )));
//  console.log("До обновы",this.state.sto[0].y);

  let newArray = [...this.state.sto]
//  console.log("newArray1",newArray)
  newArray[4] = {...newArray[4], y: yY}
//  console.log("newArray2",newArray)
  this.setState({
  sto: newArray,
  });
//  console.log("newArray2",this.state.sto)
  //console.log("Posle обновы",this.state.sto[0].y);
  })
  .catch((error) => {
      console.warn('error',error);
  })
}
loadSVelCountChartDecember(props){
  var yY = 0;

  axios.get("http://localhost:1348/countVelDecember", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
  },
  }).then(res => {
  this.state.countM = res.data;
  console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Vel
  )));
  console.log("До обновы",this.state.vel[0].y);

  let newArray = [...this.state.vel]
  console.log("newArray1",newArray)
  newArray[0] = {...newArray[0], y: yY}
  console.log("newArray2",newArray)
  this.setState({
  vel: newArray,
  });
  console.log("newArray2",this.state.vel)
  console.log("Posle обновы",this.state.vel[0].y);
  })
  .catch((error) => {
      console.warn('error',error);
  })
}
loadSVelCountChartJanuary(props){
  var yY = 0;

  axios.get("http://localhost:1348/countVelJanuary", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
  },
  }).then(res => {
  this.state.countM = res.data;
  console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Vel
  )));
  //console.log("До обновы",this.state.vel[0].y);

  let newArray = [...this.state.vel]
//  console.log("newArray1",newArray)
  newArray[1] = {...newArray[1], y: yY}
//  console.log("newArray2",newArray)
  this.setState({
  vel: newArray,
  });
  //console.log("newArray2",this.state.vel)
  //console.log("Posle обновы",this.state.vel[0].y);
  })
  .catch((error) => {
      console.warn('error',error);
  })
}
loadSVelCountChartFebrary(props){
  var yY = 0;

  axios.get("http://localhost:1348/countVelFebrary", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
  },
  }).then(res => {
  this.state.countM = res.data;
  console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Vel
  )));
  //console.log("До обновы",this.state.vel[0].y);

  let newArray = [...this.state.vel]
//  console.log("newArray1",newArray)
  newArray[2] = {...newArray[2], y: yY}
//  console.log("newArray2",newArray)
  this.setState({
  vel: newArray,
  });
  //console.log("newArray2",this.state.vel)
  //console.log("Posle обновы",this.state.vel[0].y);
  })
  .catch((error) => {
      console.warn('error',error);
  })
}
loadSVelCountChartMarch(props){
  var yY = 0;

  axios.get("http://localhost:1348/countVelMarch", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
  },
  }).then(res => {
  this.state.countM = res.data;
  console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Vel
  )));
  //console.log("До обновы",this.state.vel[0].y);

  let newArray = [...this.state.vel]
//  console.log("newArray1",newArray)
  newArray[3] = {...newArray[3], y: yY}
//  console.log("newArray2",newArray)
  this.setState({
  vel: newArray,
  });
  //console.log("newArray2",this.state.vel)
  //console.log("Posle обновы",this.state.vel[0].y);
  })
  .catch((error) => {
      console.warn('error',error);
  })
}
loadSVelCountChartApril(props){
  var yY = 0;

  axios.get("http://localhost:1348/countVelApril", {

  mode: 'no-cors',
  bodyUsed: true,
  headers: {
    'Content-Type': 'application/json',
  },
  }).then(res => {
  this.state.countM = res.data;
  console.log("countM",this.state.countM.map(itemcount =>(
  yY=itemcount.Vel
  )));
  //console.log("До обновы",this.state.vel[0].y);

  let newArray = [...this.state.vel]
//  console.log("newArray1",newArray)
  newArray[4] = {...newArray[4], y: yY}
//  console.log("newArray2",newArray)
  this.setState({
  vel: newArray,
  });
  //console.log("newArray2",this.state.vel)
  //console.log("Posle обновы",this.state.vel[0].y);
  })
  .catch((error) => {
      console.warn('error',error);
  })
}




//const listCheck = JSON.parse(this.state.countAccident)
render (){
  console.log(this.loadMounthCountChart)
return(
  <Layout className="layout">
    <Header>

      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Content>
      <div className="site-layout-content">
      <br />
      <Input.Group compact>
        <Input style={{ width: '34%' }} placeholder="Тип аварии" />
        <Input style={{ width: '33%' }} placeholder= 'От' />
          <Input style={{ width: '33%' }} placeholder= 'До' />
      </Input.Group>
      <Input.Group compact>
    <Input style={{ width: '12%' }} placeholder= 'От' />
    <Input style={{ width: '12%' }} placeholder= 'До' />

     <Input style={{ width: '12%' }} placeholder="Количество ТС" />
      <Input style={{ width: '12%' }} placeholder="Участники" />
       <Input style={{ width: '12%' }} placeholder="Смертей" />
        <Input style={{ width: '12%' }} placeholder="Погода" />
        <Input style={{ width: '12%' }} placeholder="Освещение" />
          <Input style={{ width: '12%' }} placeholder="Состояние дороги" />
          <Button onClick = {this.loadStat} >ОК</Button>
   </Input.Group>

      <br />
      </div>
        </Content>
        <div>
        <Content   style={{
            left:"auto", right: "auto",  bottom: "auto",
            position: "static",
            width: "100%",
            height: "100%"
          }}>
        <VictoryChart

          width={1000}
          height={200}
        >
        <VictoryLegend x={50} y={25}
  	title="Распределение по месяцам"
    orientation="horizontal"
    gutter={10}
    style={{ border: { stroke: "black" }, title: {fontSize: 10 } }}
    data={[
    ]}
  />
          <VictoryLine
            style={{ data: { stroke: "#c43a31" },
      parent: { border: "1px solid #ccc"} }}

            data={this.state.countAccident}
          />
        </VictoryChart>

          </Content>
          <Content   style={{
              left:"auto", right: "auto",  bottom: "auto",
              position: "static",
              width: "100%",
              height: "100%"
            }}>
          <VictoryChart

            width={2000}
            height={550}
            padding={{left: 30,bottom:110, top:30}}
          >
          <VictoryLegend x={0} y={475}
      title="Распределение по типам"
      orientation="horizontal"
      gutter={10}
      style={{ border: { stroke: "black" }, title: {fontSize: 15 } }}
      data={[
        {name: "Столкновение", symbol:{fill: '#ed4e4e'}},
        {name: "Наезд на пешехода", symbol:{fill: '#794eed'}},
        {name: "Наезд на препятствие", symbol:{fill: '#4eedd0'}},
        {name: "Наезд на стоящее ТС", symbol:{fill: '#6b2000'}},
        {name: "Наезд на велосипедиста", symbol:{fill: '#1b9e86'}},
      ]}

    />
            <VictoryLine
            style={{ data: { stroke: "#ed4e4e", strokeWidth: "5"  },
      parent: { border: "10px solid #ccc"} }}
              data={this.state.stolk}
            />
            <VictoryLine
            style={{ data: { stroke: "#794eed" },
      parent: { border: "1px solid #ccc"} }}
              data={this.state.pesh}
            />
            <VictoryLine
            style={{ data: { stroke: "#4eedd0" },
      parent: { border: "1px solid #ccc"} }}
              data={this.state.prep}
            />


            <VictoryLine
            style={{ data: { stroke: "#6b2000" },
      parent: { border: "1px solid #ccc"} }}
              data={this.state.sto}
            />

            <VictoryLine
            style={{ data: { stroke: "#1b9e86" },
      parent: { border: "1px solid #ccc"} }}
              data={this.state.vel}
            />
          </VictoryChart>

            </Content>
            <Content   style={{
                left:"auto", right: "auto",  bottom: "auto",
                position: "static",
                width: "100%",
                height: "100%"
              }}>
            <VictoryChart

              width={1000}
              height={200}
            >
            <VictoryLegend x={50} y={25}
        title="Распределение в течение дня"
        orientation="horizontal"
        gutter={10}
        style={{ border: { stroke: "black" }, title: {fontSize: 10 } }}
        data={[
        ]}
      />
              <VictoryLine
              style={{ data: { stroke: "#c43a31" },
        parent: { border: "1px solid #ccc"} }}
                data={this.state.countAccidentHour}
              />
            </VictoryChart>

              </Content>
              <Content   style={{
                  left:"auto", right: "auto",  bottom: "auto",
                  position: "static",
                  width: "100%",
                  height: "100%"
                }}>
              <VictoryChart

                width={1000}
                height={200}
              >
              <VictoryLegend x={50} y={25}
          title="Распределение по пострадавшим"
          orientation="horizontal"
          gutter={10}
          style={{ border: { stroke: "black" }, title: {fontSize: 10 } }}
          data={[
          ]}
        />
        <VictoryLine
        style={{ data: { stroke: "#c43a31" },
  parent: { border: "1px solid #ccc"} }}
          data={this.state.countInjured}
        />
              </VictoryChart>

                </Content>

          </div>
    </Content>

  </Layout>

);
}
}
//----old---
/*
data={[
  {name: "Столкновение", symbol:{fill: '#ed4e4e'}},
  {name: "Наезд на пешехода", symbol:{fill: '#794eed'}},
  {name: "Наезд на препятствие", symbol:{fill: '#4eedd0'}},
  {name: "Опрокидывание", symbol:{fill: '#c3ed4e'}},
  {name: "Падение пассажира", symbol:{fill: '#edc04e'}},
  {name: "Наезд на стоящее ТС", symbol:{fill: '#6b2000'}},
  {name: "Съезд с дороги", symbol:{fill: '#9e1b91'}},
  {name: "Наезд на велосипедиста", symbol:{fill: '#1b9e86'}},
]}


<VictoryLine
style={{ data: { stroke: "#ed4e4e", strokeWidth: "5"  },
parent: { border: "10px solid #ccc"} }}
  data={this.state.stolk}
/>
<VictoryLine
style={{ data: { stroke: "#794eed" },
parent: { border: "1px solid #ccc"} }}
  data={this.state.pesh}
/>
<VictoryLine
style={{ data: { stroke: "#4eedd0" },
parent: { border: "1px solid #ccc"} }}
  data={this.state.prep}
/>
<VictoryLine
style={{ data: { stroke: "#c3ed4e" },
parent: { border: "1px solid #ccc"} }}
  data={this.state.opr}
/>
<VictoryLine
style={{ data: { stroke: "#edc04e" },
parent: { border: "1px solid #ccc"} }}
  data={this.state.pad}
/>
<VictoryLine
style={{ data: { stroke: "#6b2000" },
parent: { border: "1px solid #ccc"} }}
  data={this.state.sto}
/>
<VictoryLine
style={{ data: { stroke: "#9e1b91" },
parent: { border: "1px solid #ccc"} }}
  data={this.state.szd}
/>
<VictoryLine
style={{ data: { stroke: "#1b9e86" },
parent: { border: "1px solid #ccc"} }}
  data={this.state.vel}
/>



*/
