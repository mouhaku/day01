import React, { Component } from 'react'

export default class App extends Component {
    state={
        list:[{
          id:1,
          text:"1111"
        },
        {
          id:2,
          text:"2222"
        },
        {
          id:3,
          text:"3333"
        },
        {
          id:4,
          text:4444
        }]
    }
  render() {
    return (
      <div>
        <ul>
            {
                this.state.list.map((item,index)=><li key={index}>{item.text}--{index}</li>)
            }
        </ul>
      </div>
    )
  }
}

/*
为了列表的复用和重排，设置key值，提高性能

理想key，item.id

不涉及到列表的增加删除、重排，设置成索引值没问题
*/