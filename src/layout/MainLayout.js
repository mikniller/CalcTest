import React, { Component,PropTypes } from 'react';  
import { connect } from 'react-redux';
import HeaderNavigation from './HeaderNavigation';
import IncomeInput from "../containers/IncomeInput"
import { Modal, ModalManager, Effect } from 'react-dynamic-modal';
import Chart from '../components/chart';
import TableData from '../components/TableData';

class MainLayout extends React.Component {
    constructor(...args) {
        super(...args);
    }

    openModal() {
        ModalManager.open(<IncomeInput text="halløj" onRequestClose={() => true} panelType="panel-primary" />);
    }

    render() {
        return (
            <div>
                <HeaderNavigation />
                <div className="container">
                    <div className="row content">
                    <div className="col-sm-4 col-md-4 chartabs">
                       <ul className="nav nav-pills">
                                <li className="active">
                                    <a href="#0a" data-toggle="tab">Input</a>
                                </li>
                            </ul>
                            <div className="tab-content clearfix">
                                <div className="tab-pane active" id="0a">
                                        
                                </div>
                            </div>


                    </div>
                        <div className="col-sm-8 col-md-8 chartabs">
                            <ul className="nav nav-pills">
                                <li className="active">
                                    <a href="#1a" data-toggle="tab">Graph</a>
                                </li>
                                <li>
                                    <a href="#2a" data-toggle="tab">Table</a>
                                </li>
                            </ul>
                            <div className="tab-content clearfix">
                                <div className="tab-pane active" id="1a">
                                        <Chart container="ChartDiv"  chartData={this.props.calculationData.data}/>
                                </div>
                                <div className="tab-pane" id="2a">
                                      <TableData tableData={this.props.calculationData.data}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

MainLayout.propTypes = {
  calculationData:PropTypes.object.isRequired
};

function mapStateToProps(state) {

  return {
   calculationData:state.calculationData
  };
}



export default connect(mapStateToProps)(MainLayout);