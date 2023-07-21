import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
    a = 100;
    myref = React.createRef()

    state = {
        list: [{
            id: 1,
            mytext: "aa"
        },
        {
            id: 2,
            mytext: "bb"
        },
        {
            id: 3,
            mytext: "cc"
        }]
    }
    render() {
        return (
            <div>
                <input ref={this.myref} />
                {/* <button onClick={() => {
                    console.log("click", this.myref.current.value)
                }}>add1</button> */}
                <button onClick={this.handleClick2}>add2</button>
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id}>
                                {/* {item.mytext} */}

                                {/* 富文本展示 */}
                                <span dangerouslySetInnerHTML={
                                {
                                    __html:item.mytext
                                }
                                }></span>
                                {/* <button onClick={this.handleDelClick.bind(this,index)}>del</button> */}
                                <button onClick={() => this.handleDelClick(index)}>del</button>
                            </li>
                        )
                    }
                </ul>
                {/* {this.state.list.length===0?<div>暂无待办事项</div>:null} */}
                {/* {this.state.list.length===0 && <div>暂无代办事项</div>} */}
                <div className={this.state.list.length===0?'':'hidden'}>暂无待办事项</div>
            </div>
        )
    }
    handleClick2 = () => {
        console.log("click2", this.myref.current.value)

        //this.state.list.push(this.myref.current.value)

        let newlist = [...this.state.list]
        newlist.push({
            id: Math.random() * 1000000,
            mytext: this.myref.current.value
        })

        this.setState({
            list: newlist
        })

        //清空输入框
        this.myref.current.value = ""
    }

    handleDelClick(index) {
        console.log("del-click", index)

        let newlist = this.state.list.concat()

        newlist.splice(index, 1)

        this.setState({
            list: newlist
        })

    }
}


