import React, { Component } from 'react'

export default class App extends Component {
    // state = {
    //     mytext: "收藏",
    //     myShow:true
    // }

    constructor() {
        super()
        this.state = {
            mytext: "收藏",
            myShow: true
        }
    }
    render() {
        return (
            <div>
                <h1>欢迎来到react开发</h1>
                <button onClick={() => {
                    this.setState({
                        myShow: !this.state.myShow
                    })

                }

                }>{this.state.myShow ? "收藏" : "取消收藏"}</button>
            </div>
        )
    }
}
