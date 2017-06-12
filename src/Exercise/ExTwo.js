import React, { Component } from 'react';
import './ExTwo.css';

var Note = React.createClass(
  {
    render(){
      return <p> {this.props.children} </p>
    }
  }
);
var List = React.createClass({
  add(){
    this.state.array.push("Node js", "Reacjs");
    this.setState(this.state);
  },
  getInitialState(){
    return {
      array: ["Hello", "Hi", "PhuongLe"]};
  },
    render(){
      return(
        <div>
          <button onClick={this.add}> Them </button>
          {
            this.state.array.map(function(chuoi, index){
              return <Note key={index}>{chuoi}</Note>
            })
          }
        </div>
      )
    }
});

var MangAnh = React.createClass(
  {
    render(){
      return(
        <div>
          <img src={this.props.src}/>
          <p> {this.props.children} </p>
        </div>
      )
    }
  }
)
var HinhAnh = React.createClass(
  {
    add(){
    this.state.arrayHinh.push(
        {srcHinh: "images/1.png", noiDung: "Me Chao"},
        {srcHinh: "images/2.png", noiDung: "He Chao"}
    );
    this.setState(this.state);
    },
    addTop(){
      this.state.arrayHinh.unshift(
        {srcHinh: "images/1.png", noiDung: "Me Chao"},
        {srcHinh: "images/2.png", noiDung: "He Chao"}
      );
        this.setState(this.state);
    },
    getInitialState(){
      return{arrayHinh: [
        {srcHinh: "images/4.png", noiDung: "Xin Chao"},
        {srcHinh: "images/5.png", noiDung: "Ni Hao"},
        {srcHinh: "images/6.png", noiDung: "Cap Chao"}
      ]};
    },
    render(){
      return(
        <div>
          <button onClick = {this.add}> Add Pic </button>
          <button onClick = {this.addTop}> Add Top </button>
          {
            this.state.arrayHinh.map(function(chuoi, index){
              return <MangAnh key={index} src={chuoi.srcHinh}>{chuoi.noiDung}</MangAnh>
            })
          }
        </div>
      )
    }
  }
)
class ExerciseTwo extends Component {
  render() {
    return (
      <div className="App">
      <h1>Ex 18,19 render HTML from array String, render HTML from array Ojects</h1>
        <List/>
        <HinhAnh/>
      </div>
    );
  }
}

export default ExerciseTwo;
