import React, { Component,PropTypes } from 'react';  
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import CompoundInputData from '../components/CompoundInputData';
import Chart from '../components/Chart';    

import * as AllActions from '../actions';
import { Panel,Row,Grid,Col,PageHeader,Button} from 'react-bootstrap';


class App extends Component {
   constructor(...args) {
      super(...args);
      this.state = {
        graphOpen: true,
        tableOpen:false
    };
  }

  
  render() {
    return (
    <Grid fluid>
      <Row className="show-grid">
      <Col sm={12} md={12} lg={12}>
        <PageHeader>Beregningskernen <small>Eksempel på CFFIer+CalculationStrategies</small></PageHeader>
      </Col>  

      <Col sm={4} md={4} lg={4}>
      <Panel header="Input data">
         <CompoundInputData />
       </Panel>
      </Col>
      <Col sm={8} md={8} lg={8}>
       <Panel header="Resultat">
         <Button bsStyle={this.state.graphOpen ? 'primary' : 'default'}  onClick={ ()=> this.setState({ graphOpen: !this.state.graphOpen,tableOpen:this.state.graphOpen })}>
          Graph
        </Button>
        <Button bsStyle={this.state.tableOpen ? 'primary' : 'default'} onClick={ ()=> this.setState({ tableOpen: !this.state.tableOpen, graphOpen:this.state.tableOpen })}>
          Tabel
        </Button>

        <Panel collapsible expanded={this.state.graphOpen}>
         <Chart container="ChartDiv"  />
        </Panel>
        <Panel collapsible expanded={this.state.tableOpen}>
            .......
        </Panel>




         
       </Panel>
      
      </Col>
      </Row>
      </Grid>
    );
  }
}

App.propTypes = {
  calculationData:PropTypes.object.isRequired
};

function mapStateToProps(state) {

  return {
   calculationData:state.calculationData
  };
}



export default connect(mapStateToProps)(App);