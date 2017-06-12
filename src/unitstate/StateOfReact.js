import React, { Component } from 'react';

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
      <h1 className= "mauvang">{this.props.ten} - {this.props.tuoi}</h1>
      <p>{this.props.children}</p>
      <div>Buy: {this.state.totalProducts} items</div>
      <button onClick={this.addProducts}>Buy</button>
      </div>
    );
  }
});

var InputTag = React.createClass(
  {
    show(){
      var text = this.refs.txt.value;
      alert(text);
    },
    render(){
      return(
        <div>
        <select ref="sl">
          <option value = "S">Size S</option>
          <option value = "M">Size M</option>
          <option value = "L">Size L</option>
        </select>
        <input type="text" ref="txt"/>
        <button onClick = {this.show}>Hien Thi</button>
        </div>
      )
    }
  }
)

class UnitState extends Component {
  render() {
    return (
      <div className="App">
      <h1>Unit State, Ref, </h1>
        <InputTag/>
        <PhuongLe ten = "Le Hoang Phuong" tuoi = "25 year old" totalProducts = "10">Male</PhuongLe>
        <PhuongLe ten = "Le Thi Yen Nhi" tuoi = "24 year old" totalProducts = "20">Female</PhuongLe>
      </div>
    );
  }
}

export default UnitState;
