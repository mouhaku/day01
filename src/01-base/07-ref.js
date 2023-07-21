import React, { Component } from 'react'

export default class App extends Component {
    a = 100;
    myref = React.createRef()
    render() {
        return (
            <div>
                <input ref={this.myref} />
                <button onClick={() => {
                    console.log("click", this.myref.current.value)
                }}>add1</button>
                <button onClick={this.handleClick2.bind(this)}>add2</button>
                <button onClick={this.handleClick3}>click3</button>
            </div>
        )
    }
    handleClick2() {
        console.log("click2", this.myref.current.value)
    }

    handleClick3 = () => {
        console.log("click3", this.myref.current.value)
    }

}
