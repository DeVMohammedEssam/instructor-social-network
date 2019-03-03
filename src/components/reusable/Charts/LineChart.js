import React, { Component } from 'react'
import ReactDOM from "react-dom"
import Chart from "chart.js"

export default class LineChart extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.tooltips.enabled = false;
    Chart.defaults.scale.gridLines.display = false;

  let el = ReactDOM.findDOMNode(this.refs.chart).getContext("2d");;
var chart = new Chart(el, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
        labels: this.props.labels,
        datasets: [{
           backgroundColor:"#2F567D",
            data: this.props.data,
        }],
         options: {
         
    }
    }

    // Configuration options go here

});
  }
  render() {
    return (
      <div className="chart-block">
        <p className="chart-block__header">
          {this.props.header}
        </p>
        <p className="chart-block__desc">
           {this.props.description}
        </p>
        <canvas ref="chart">
          
        </canvas>
      </div>
      
    )
  }
}
