import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
  render() {
    var myname = "meng"
    var obj_color = {
        backgroundColor:"pink",
        fontSize:"30px",
        fontColor:"blue"
        
    }
    return (
      <div>
        {10+20}-{myname}
        {10>20?"aaa":"bbb"}
        <div style={obj_color}>这是{obj_color.backgroundColor}</div>
        <div className="active">cccccccccccccccccccccc</div>
        <div id='myapp'>dddddddddddddddddddddd</div>

        <label htmlFor="username">用户名:</label>
        <input type='text' id='username'/>
      </div>
    )
  }
}
