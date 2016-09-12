import React, { Component } from 'react';  
 import ReactDOM  from 'react-dom';
import { connect } from 'react-redux';
import Highcharts from 'highcharts';
import HighStock from 'highcharts/highstock';
import Funnel from 'highcharts/modules/funnel';
import { testData } from '../reducers';

/* export default class Chart extends Component {  
render() {
    return ( <div className='chart'><h1>Resultat</h1>
    </div> );
    }
} */



const Chart= React.createClass({
    // When the DOM is ready, create the chart.
    componentDidMount: function() {
      // Extend Highcharts with modules
      // Set container which the chart should render to.
        option2.series[0].data=this.props.testData;
        this.chart = new HighStock.StockChart(
            this.props.container, 
            option2
        );
        
        
    },
  
     // Set container which the chart should render to.
    //Destroy chart before unmount.
    componentWillUnmount: function() {
      this.chart.destroy();
    },
    //Create the div which the chart will be rendered to.
    render: function() {
      if (typeof this.chart !== 'undefined') {
          this.chart.series[0].update({data:this.props.testData});
         this.chart.redraw();
      }
         
         return React.createElement('div', { id: this.props.container });
    }
  });
 




// Create and render element
var options = {
 
  
    chart: {
      type: 'funnel',
      marginRight: 100
    },
    title: {
      text: 'React example',
      x: -50
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b> ({point.y:,.0f})',
          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
          softConnector: true
        },
        neckWidth: '30%',
        neckHeight: '25%'

        //-- Other available options
        // height: pixels or percent
        // width: pixels or percent
      }
    },
    legend: {
      enabled: false
    },
    series: [{
      name: 'Unique users',
      data: [
        ['Website visits', 15654],
        ['Downloads', 4064],
        ['Requested price list', 1987],
        ['Invoice sent', 976],
        ['Finalized', 846]
      ]
    }]
 
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
      // the event marker flags
    }],
   
  
}


function mapStateToProps(state) {
  return {
   testData:state.calculationData.data
  };
}

export default connect(mapStateToProps)(Chart);
