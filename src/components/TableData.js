import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import { connect } from 'react-redux';
import { testData } from '../reducers';
import { Table } from 'react-bootstrap';

function renderRows(testData,hideInstalment) {
    if (testData.length > 0) {
        return testData.map((td, index) => (
            <TableRow key={index}
              index={index}
              year={new Date(td[0]).getFullYear()}
              value={td[1].toFixed(2)}
              interest={td[2].toFixed(2)}
              instalment={td[3].toFixed(2)}
              showInstalment={hideInstalment}
              />
        ));
    }
    else return [];
}

class TableRow extends Component {
    render() {
        return (
         <tr>
            <td>{this.props.year}</td>
            <td>{this.props.value}</td>
            <td>{this.props.interest}</td>
              { this.props.showInstalment && <td>{this.props.instalment}</td> }

         </tr>);
    }
  };

class TableData extends Component{
    render() {
        const rows = renderRows(this.props.testData,this.props.CFFIType.AmountWithYearVisible);
        const {CFFIType} = this.props;
         return (
         <div>
         <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th>År</th>
                    <th>{CFFIType.Principal}</th>
                    <th>{CFFIType.Interest}</th>
                    { this.props.CFFIType.AmountWithYearVisible && <th>{CFFIType.Instalment}</th> }
                </tr>
            </thead>
            <tbody>
          { rows }
          </tbody>
          </Table>
         </div>);
    }
};

function mapStateToProps(state) {
  return {
   testData:state.data,
   CFFIType:state.selectedCffi
  };
}

export default connect(mapStateToProps)(TableData);
