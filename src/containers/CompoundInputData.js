import React, { Component } from 'react';  
import InterestInput from './InterestInput';
import YearInput from './YearInput';  
import AmountWithYearList from './AmountWithYearList';    
import PrincipalInput from './PrincipalInput';
import CFFITypeInput from '../components/CFFITypeInput';
import SubmitBtn from './SubmitBtn';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux'
import { setType } from '../actions'


 class CompoundInputData extends Component {  
    constructor(props) {
     super(props);
     this.setCFFIType = this.setCFFIType.bind(this);
  }

  setCFFIType(val) {
      this.props.setType(val)
  }

  render() {
    
    return ( 
        <form className="form-horizontal">
          <CFFITypeInput setType={this.setCFFIType} CFFIType={this.props.calcData.input.CFFIType}/>
          <InterestInput/>
          <YearInput yearLabel="Fra" isFrom = "true" /> 
          <YearInput yearLabel="Til" isTo = "true"/>
          <PrincipalInput/>
          <AmountWithYearList/>
          <SubmitBtn />
       </form>
    );
    }
}

function mapStateToProps(state) {
  return {
   calcData : state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setType: function(val) { dispatch(setType(val)); }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CompoundInputData);