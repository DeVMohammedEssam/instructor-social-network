import React, { Component } from 'react'
import ReactDOM from "react-dom"
import Chart from "chart.js"

export default class AnalysisCard extends Component {
  constructor(props){
    super(props)
  }
 
  render() {
    return (
     <div className="card">
        <div className="card__analysis">
          <p className="card__analysis__title">{this.props.title}</p>
          <i className={this.props.icon}></i>
          <p className="card__analysis__data">{this.props.data}</p>
      
        
        </div>
     </div>
    )
  }
}
