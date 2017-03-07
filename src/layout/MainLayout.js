import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import HeaderNavigation from './HeaderNavigation';
import CompoundInputData from '../containers/CompoundInputData';
import Chart from '../components/Chart';
import StockChart from '../components/StockChart';
import TableData from '../components/TableData';


class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            graphOpen: true,
            tableOpen: false
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
                                <div className="panel-heading panel-heading-custom">Input</div>
                                <div className="panel-body">
                                    <CompoundInputData/>
                                </div>
                            </div>
                             <div className="panel panel-default">
                                <div className="panel-heading panel-heading-custom">Profil</div>
                                <div className="panel-body">
                                    <ul>
                                        <li>Alder : 25</li>
                                        <li>Pensionsalder : 67 (2059)</li>
                                        <li>Død : 77 (2069)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="panel panel-default">
                                <div className="panel-heading panel-heading-custom">Resultat

                                    <button onClick={() => this.setState({
                                        tableOpen: !this.state.tableOpen,
                                        graphOpen: this.state.tableOpen
                                    })} className={this.state.tableOpen
                                        ? 'primary btn btn-primary btn-sm pull-right'
                                        : 'default btn btn-default btn-sm pull-right'}>Tabel</button>
                                    <button onClick={() => this.setState({
                                        graphOpen: !this.state.graphOpen,
                                        tableOpen: this.state.graphOpen
                                    })} className={this.state.graphOpen
                                        ? 'primary btn btn-primary btn-sm pull-right'
                                        : 'default btn btn-default btn-sm pull-right'}>Graph</button>

                                </div>
                                <div className="panel-body">

                                    <div className={this.state.tableOpen
                                        ? 'collapse in'
                                        : 'collapse'}>
                                        <TableData/>
                                    </div>

                                    <div className={this.state.graphOpen
                                        ? 'collapse in'
                                        : 'collapse'}>
                                        <StockChart container="ChartDiv" selCFFI={this.props.calculationData.selectedCffi} chartData={this.props.calculationData.data}/>
                                    </div>

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
