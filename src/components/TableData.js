import React, { Component } from 'react';  
import ReactDOM  from 'react-dom';
import { connect } from 'react-redux';
import { testData } from '../reducers';
import { Table } from 'react-bootstrap';

function renderRows(testData) {
    if (testData.length > 0) {   
        return testData.map((td, index) => (
            <TableRow key={index} 
              index={index} 
              year={new Date(td[0]).getFullYear()}
              value={td[1]} 
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
         </tr>);
    }
  };

class TableData extends Component{
    render() {
        const rows = renderRows(this.props.testData);
         return (
         <div>
         <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th>Tidspunkt</th>
                    <th>Værdi</th>
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
   testData:state.calculationData.data
  };
}

export default connect(mapStateToProps)(TableData);