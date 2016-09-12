import React from 'react';  
import { setFrom, setTo } from '../actions'
import { connect } from 'react-redux'
import { FormGroup,Col,FormControl } from 'react-bootstrap';
const YearInput = React.createClass({
  
  getValue: function() {
    return this.props.isFrom ? this.props.from :this.props.to 
  },
  handleYearChange: function(e) {
      if (this.props.isFrom) 
        this.props.setFrom(e.target.value);
      else this.props.setTo(e.target.value); 
  },
  render: function() {
    return ( 
 <FormGroup controlId="formHorizontalYear">
        <Col  sm={2}>
          {this.props.yearLabel}
        </Col>
        <Col sm={4}>
          <FormControl type="number" placeholder="år" value={this.getValue()}
            onChange={this.handleYearChange}/>
        </Col>
      </FormGroup>
        );
    }
});

function mapStateToProps(state) {
  return {
   from:state.calculationData.input.from,
   to:state.calculationData.input.to
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setFrom: function(val) { dispatch(setFrom(val)); },
    setTo: function(val) { dispatch(setTo(val)) }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(YearInput);