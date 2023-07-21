import React, { Component } from 'react'

class Navbar extends Component{
    render(){
        return <div>navbar</div>
    }
}

function Swiper(){
    return <div>Swiper</div>
}

const Tabbar = ()=><div>tabbar</div>
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>

        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}
