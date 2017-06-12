import React, { Component } from 'react';
import './ExOne.css';
var PhuongLe = React.createClass({
  addProducts (){
    this.state.totalProducts = parseInt(this.state.totalProducts) + 1;
    this.setState(this.state)
  },
  getInitialState(){
    return {totalProducts: this.props.totalProducts};
  },
  render: function(){
    return(
      <div>
      <button onClick={this.addProducts}>Hello {this.state.totalProducts}</button>
      </div>
    );
  }
});

var Com = React.createClass({
  add(){
    this.setState({num: this.state.num + 1});
  },
  getInitialState(){
    return{num: 0}
  },
  render(){
    return(
      <button onClick={this.add}>HELLO {this.state.num}</button>
    );
  }
});

var Album = React.createClass(
  {
    next(){
      this.setState({hinh: this.state.hinh == 7?7:this.state.hinh + 1});
    },
    back(){
      this.setState({hinh: this.state.hinh == 1?1:this.state.hinh - 1})
    },
    getInitialState(){
      return {hinh: 1};
    },
    render(){
      return(
        <div className = "div-album">
        <img src={"images/" + this.state.hinh + ".png"}/><br/>
        <button onClick = {this.next}>Next</button>
        <button onClick = {this.back}>Back</button>
        </div>
      );
    }
  }
);

var AutoChange = React.createClass(
  {
    changeIMG(){
      this.setState({hinh: (this.state.hinh % 7) + 1});
    },
    getInitialState(){
      return {hinh: 1};
    },
    render(){
      return(
        <div className = "div-album">
        <h3>when render done, then run setInterval (lifecycle)</h3>
        <img src={"images/" + this.state.hinh + ".png"}/>
        </div>
      );
    },
    componentDidMount(){
      setInterval(this.changeIMG, 1000);
    }
  }
);
class Exercise extends Component {
  render() {
    return (
      <div className="App">
      <h1>Ex 15-17 state and onClick, change pictures use onClick</h1>
        <PhuongLe ten = "Le Hoang Phuong" tuoi = "25 year old" totalProducts = "0">Male</PhuongLe>
        <Com/> <br/>
        <Album/>
        <AutoChange />
      </div>
    );
  }
}

export default Exercise;
