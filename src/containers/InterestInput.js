import React, {Component} from 'react';  
import { connect } from 'react-redux';
import { setInterest } from '../actions'
import { FormGroup,Col,FormControl } from 'react-bootstrap';

class InterestInput extends Component {
  constructor(props) {
     super(props);
     this.handleInterestChange = this.handleInterestChange.bind(this);
  }
  
  handleInterestChange(e) {
    let val=e.target.value;
    if(val>100)val=100;
    if(val<0)val=0;
    this.props.setInterest(val);
  }

  render() {  
    return (
       <FormGroup controlId="formHorizontalRente">
        <Col  sm={2}>
          Rente
        </Col>
        <Col sm={4}>
          <FormControl type="number" placeholder="rente" value={this.props.interest}
            onChange={this.handleInterestChange}/>
        </Col>
      </FormGroup>
     )}
};

function mapStateToProps(state) {
  return {
   interest:state.input.interest
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setInterest: function(val) {
       dispatch(setInterest(val));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(InterestInput);

