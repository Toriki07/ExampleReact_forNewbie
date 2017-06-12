import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function getName(information) {
  alert(information);
}
var PhuongLe = React.createClass({
  laythongtin: function(){
    alert(123);
  },
  render: function(){
    return(
      <div>
      <h1 className= "mauvang">{this.props.ten} - {this.props.tuoi}</h1>
      <p>{this.props.children}</p>
      <button onClick={this.laythongtin}>Thong Tin</button>
      <button onClick={()=>{var str = this.props.ten +' '+ this.props.tuoi; getName(str)}}>Total Infro</button>
      <CourseReact/>
      </div>
    );
  }
});
var CourseReact = React.createClass({
  render: function() {
    return(
      <h3> Lap trinh ReactJS</h3>
    );
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Unit Component, Component in Component, Props, Button</h1> 
        <PhuongLe ten = "Le Hoang Phuong" tuoi = "25 year old">Male</PhuongLe>
        <PhuongLe ten = "Le Thi Yen Nhi" tuoi = "24 year old">Female</PhuongLe>
      </div>
    );
  }
}

export default App;
