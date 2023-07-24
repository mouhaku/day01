import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {

  constructor() {
    super()

    this.state={
      cinemaList:[]
    }

    //axios 第三方的库，专门用于请求数据
    //axios.get("请求地址").then(res=>{}).catch(err=>{console.log(err)})

    //axios.get("https://m.maizuo.com/gateway?cityId=210100&ticketFlag=1&k=8994742").then(res=>{console.log(res)}).catch(err=>{console.log(err)})

    axios({
      url: "https://m.maizuo.com/gateway?cityId=210100&ticketFlag=1&k=8994742",
      method: "get",//不写请求方法，默认为get
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16901644872379467716558849","bc":"210100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res=>{console.log(res.data.data.cinemas)
    this.setState({
      cinemaList:res.data.data.cinemas
    })
    }).catch(err=>{console.log(err)})
  }
  render() {
    return (
      <div>
        <input onInput={this.handleInput}/>
        {
          this.state.cinemaList.map(item=>
            <dl key={item.cinemaId}>
              <dt>{item.name}</dt>
              <dd>{item.address}</dd>
            </dl>)
        }
      </div>
    )
  }

  handleInput=(event)=>{
    console.log("input",event.target.value)

    var newList = this.state.cinemaList.filter(item=>item.name.toUpperCase().includes(event.target.value.toUpperCase())||
    item.address.toUpperCase().includes(event.target.value.toUpperCase()))

    this.setState({
      cinemaList:newList
    })
  }
}


/*
filter
*/
