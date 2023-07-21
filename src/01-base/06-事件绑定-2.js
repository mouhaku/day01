import React, { Component } from 'react'

export default class App extends Component {
    a = 100;
  render() {
    return (
      <div>
        <input />
        <button onClick={()=>{
            console.log("click","如果处理逻辑过多，不推荐这种写法",this.a)
        }}>add1</button>

        <button onClick={this.handleClick2.bind(this)}>add2-不推荐这种写法</button>
        <button onClick={this.handleClick3}>add3-推荐</button>
        <button onClick={ ()=>{
            this.handleClick4()//比较推荐
        }}>add4-比较推荐-传参</button>
      </div>
    )
  }

  handleClick2(){
    console.log("click2",this.a)
  }

  handleClick3 = (evt)=>{
    console.log("click3",this.a,evt.target)
  }

  handleClick4 = ()=>{
    console.log("click4",this.a)
  }
}
