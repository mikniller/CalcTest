import React, { Component } from 'react';  
import { FormGroup,Col,FormControl } from 'react-bootstrap';

export default class CFFITypeInput extends Component {
  constructor(props) {
     super(props);
     this.handleChange = this.handleChange.bind(this);
     this.state = {CFFIType:props.CFFIType, setType:props.setType  }
  }
  
  handleChange(e) {
    this.state.setType(e.target.value)
  }

  render() {
    return (
        <FormGroup> 
        <Col  sm={2}>
            Type
        </Col>
        <Col sm={4}>
          <FormControl componentClass="select" placeholder="CFFI type"  onChange={this.handleChange} value={this.state.CFFIType}>
            <option value="1">Indtægter</option>
            <option value="2">Formue med opsparing</option>
            <option value="3">Fynske bank Indtægter</option>
          </FormControl>
        </Col>
      </FormGroup>
        );
    }
};

