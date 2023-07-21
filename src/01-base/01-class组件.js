// class Test {
//     constructor(){
//         this.a=1;
//     }

//     testa(){
//         console.log("testa")
//     }


// }

// class ChildTest extends Test{
//     testb(){
//         console.log("testb")
//     }
// }


// var obj = new ChildTest()
// obj.testa()
// obj.testb()
// console.log(obj.a)

import React from "react";
class App extends React.Component{
    render(){
        return <div>
            hello react Component
            <ul>
                <li>11111111</li>
                <li>22222222</li>
            </ul>
        </div>
    }
}

export default App