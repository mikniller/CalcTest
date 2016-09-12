import React from 'react';  
import { setType } from '../actions'
import { connect } from 'react-redux'
import { FormGroup,Col,FormControl } from 'react-bootstrap';

const CFFITypeInput = React.createClass({
  handleChange: function(e) {
    this.props.setType(e.target.value)
  },
  render: function() {
    return (
        <FormGroup> 
        <Col  sm={2}>
            Type
        </Col>
        <Col sm={4}>

      <FormControl componentClass="select" placeholder="CFFI type"  onChange={this.handleChange} value={this.props.CFFIType}>
        <option value="1">Indtægter</option>
        <option value="2">Formue med opsparing</option>
        <option value="3">Fynske bank Indtægter</option>
      </FormControl>

     
        </Col>
      </FormGroup>
        );
    }
});

function mapStateToProps(state) {
  return {
   CFFIType:state.calculationData.input.CFFIType
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setType: function(val) { dispatch(setType(val)); }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CFFITypeInput);

