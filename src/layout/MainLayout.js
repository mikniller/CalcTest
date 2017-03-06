import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import HeaderNavigation from './HeaderNavigation';
import CompoundInputData from '../containers/CompoundInputData';
import Chart from '../components/Chart';
import TableData from '../components/TableData';
import { Panel,Row,Grid,Col,PageHeader,Button} from 'react-bootstrap';

class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        graphOpen: true,
        tableOpen:false
    };
    }

    render() {
        return (
            <div>
                <HeaderNavigation/>
                <div className="container body-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">Input</div>
                                <div className="panel-body">
                                    <CompoundInputData/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="panel panel-default">
                                <div className="panel-heading">Resultat</div>
                                <div className="panel-body">
                                    <Button
                                        bsStyle={this.state.graphOpen
                                        ? 'primary'
                                        : 'default'}
                                        onClick={() => this.setState({
                                        graphOpen: !this.state.graphOpen,
                                        tableOpen: this.state.graphOpen
                                    })}>
                                        Graph
                                    </Button>
                                    <Button
                                        bsStyle={this.state.tableOpen
                                        ? 'primary'
                                        : 'default'}
                                        onClick={() => this.setState({
                                        tableOpen: !this.state.tableOpen,
                                        graphOpen: this.state.tableOpen
                                    })}>
                                        Tabel
                                    </Button>

                                    <Panel collapsible expanded={this.state.graphOpen}>
                                        <Chart container="ChartDiv" chartData={this.props.calculationData.data}/>
                                    </Panel>
                                    <Panel collapsible expanded={this.state.tableOpen}>
                                        <TableData/>
                                    </Panel>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <hr/>
                <footer className="footer">
                <div className="container">
                    <span className="text-muted">Schantz A/S 2017</span>
                </div>
                    
                </footer>
            </div>
        );
    }
}

MainLayout.propTypes = {
    calculationData: PropTypes.object.isRequired
};

function mapStateToProps(state) {

    return {calculationData: state};
}

export default connect(mapStateToProps)(MainLayout);