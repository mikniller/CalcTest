import React from 'react';  
import { setPrincipal } from '../actions'
import { connect } from 'react-redux'
import { FormGroup,Col,FormControl } from 'react-bootstrap';

const PrincipalInput = React.createClass({
  handleChange: function(e) {
    this.props.setPrincipal(e.target.value)
  },
  render: function() {
    return (
        <FormGroup> 
        <Col  sm={2}>
            Hovedstol
        </Col>
        <Col sm={4}>
          <FormControl type="number" placeholder="beløb" value={this.props.principal}
            onChange={this.handleChange}/>
        </Col>
      </FormGroup>
        );
    }
});

function mapStateToProps(state) {
  return {
   principal:state.calculationData.input.principal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPrincipal: function(val) { dispatch(setPrincipal(val)); }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(PrincipalInput);

