import React, { Component } from 'react'
import { render } from "react-dom"
import { HomePage } from './HomePage'

// export default class App extends Component {
//     constructor(props){
//         super(props)
//     }

//     render(){
//         return (<h1>Testing React Code</h1>)
//     } 
// }
export const App  = (props)=>{
    return(
        <div className="center">
            <HomePage/>
        </div>
        
    )
}
const appDiv = document.getElementById("app")
render(<App/>, appDiv)
