import React, { Component } from 'react';  
 import ReactDOM  from 'react-dom';
import { connect } from 'react-redux';
import Highcharts from 'highcharts';
import HighStock from 'highcharts/highstock';
import Funnel from 'highcharts/modules/funnel';
import { testData } from '../reducers';

export default class Chart extends Component{
  constructor(props) {
     super(props);
  }

    // When the DOM is ready, create the chart.
    componentDidMount() {
      // Extend Highcharts with modules
      // Set container which the chart should render to.
        option2.series[0].data=this.props.chartData;
        this.chart = new HighStock.StockChart(
            this.props.container, 
            option2
        );
    }
   
     // Set container which the chart should render to.
    //Destroy chart before unmount.
    componentWillUnmount() {
      this.chart.destroy();
    }
    //Create the div which the chart will be rendered to.
    render() {
      if (typeof this.chart !== 'undefined') {
          this.chart.series[0].update({data:this.props.chartData});
          this.chart.redraw();
      }
      return React.createElement('div', { id: this.props.container });
    }
  };
 
var option2 = {
    chart : { animation:false },
    rangeSelector: {
      selected: 0,
      buttons: [{
        type: 'all',
        text: 'Alle år'
      }]
    },
    title: {
      text: 'Hovedstol'
    },
    tooltip: {
      style: {
        width: '200px'
      },
      valueDecimals: 4,
      shared: true
    },
    yAxis: {
      title: {
        text: 'Beløb',
     },
       opposite:false,
       gridLineDashStyle: 'longdash'
    },
    series: [{
      name: 'Beløb',
      data: [],
      id: 'dataseries'
    }],
}
