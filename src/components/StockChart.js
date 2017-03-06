import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import {
    connect
} from 'react-redux';
import Highcharts from 'highcharts';
import HighStock from 'highcharts/highstock';
import {
    testData
} from '../reducers';




export default class StockChart extends Component {
    constructor(props) {
        super(props);
    }

    preparePrincipal(data) {
        var prin = [];
        var dataLength = data.length;
        for (var i = 0; i < dataLength; i += 1) {
            prin.push([
                data[i][0], // the date
                data[i][1], // principal
            ]);
        }
        return prin;
    }

    prepareInterest(data) {
        var inte = [];
        var dataLength = data.length;
        for (var i = 0; i < dataLength; i += 1) {
            inte.push([
                data[i][0], // the date
                data[i][2], // principal
            ]);
        }
        return inte;
    }

    // When the DOM is ready, create the chart.
    componentDidMount() {
      console.log(this.props);
        // Extend Highcharts with modules
        // Set container which the chart should render to.
        option2.series[0].data = this.preparePrincipal(this.props.chartData);
        option2.series[1].data = this.prepareInterest(this.props.chartData);

        option2.series[0].name = this.props.selCFFI.Principal;
        option2.series[1].name = this.props.selCFFI.Interest;
        option2.yAxis[0].title.text = this.props.selCFFI.Principal;
        option2.yAxis[1].title.text = this.props.selCFFI.Interest;
        option2.title.text = this.props.selCFFI.Principal;


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
            this.chart.series[0].update({
                data: this.props.chartData
            });
            this.chart.redraw();
        }
        return React.createElement('div', {
            id: this.props.container
        });
    }
};

var option2 = {
    chart: {
        animation: true
    },
    rangeSelector: {
        selected: 0,
        buttons: []
    },
    title: {
        text: 'Hovedstol'
    },
    tooltip: {
        style: {
            width: '200px'
        },
        valueDecimals: 4,
        split: true
    },
    navigator: {
           enabled: false
       },
    yAxis: [{
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: 'Beløb',
            },
            opposite: false,
            gridLineDashStyle: 'longdash',
            height: '60%',
            lineWidth: 2
        },
        {
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: 'Rente',
            },
            opposite: false,
            gridLineDashStyle: 'longdash',
            height: '35%',
            top: '65%',
            offset: 0,
            lineWidth: 2
        }
    ],

    series: [{
            name: 'Beløb',
            //          type: 'area',
            marker: {
                enabled: true,
                radius: 3
            },
            shadow: true,
            data: [],
            id: 'dataseries',
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
            }
        }, {
            id: 'column',
            name: 'Rente',
            marker: {
                enabled: true,
                radius: 3
            },
            shadow: true,
            //      type:'column',
            data: [],
            yAxis: 1,
        }


    ],
}
