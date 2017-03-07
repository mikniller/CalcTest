import React, { Component } from 'react';
import InterestInput from './InterestInput';
import YearInput from './YearInput';
import AmountWithYearList from './AmountWithYearList';
import PrincipalInput from './PrincipalInput';
import CFFITypeInput from '../components/CFFITypeInput';
import SubmitBtn from './SubmitBtn';
import { connect } from 'react-redux'
import {setType, setAmountYearYear, setAmountYearValue, addYearAmount, deleteYearAmount} from '../actions'
import AppConstants from '../constants/AppConstants'


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
            <AmountWithYearList
              amountYears={this.props.calcData.input.interestSeries}
              groupName={this.props.calcData.selectedCffi.Interest}
              setValue={this.props.setValue}
              setYear={this.props.setYear}
              addYearAmount={this.props.addYearAmount}
              amountYearType={AppConstants.AMOUNT_YEAR_INTEREST}
              deleteYearAmount={this.props.deleteYearAmount} />



          <PrincipalInput/>
          {this.props.calcData.selectedCffi.AmountWithYearVisible &&
            <AmountWithYearList
              amountYears={this.props.calcData.input.amountYears}
              groupName={this.props.calcData.selectedCffi.Instalment}
              setValue={this.props.setValue}
              setYear={this.props.setYear}
              addYearAmount={this.props.addYearAmount}
              amountYearType={AppConstants.AMOUNT_YEAR_PRINCIPAL}
              deleteYearAmount={this.props.deleteYearAmount} />
          }
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
    setType: function(val) { dispatch(setType(val)); },
    setYear: function(year, index,amountYearType) { dispatch(setAmountYearYear(year, index,amountYearType)) },
    setValue: function(value, index,amountYearType) { dispatch(setAmountYearValue(value, index,amountYearType))},
    addYearAmount: function(amountYearType) { dispatch(addYearAmount(amountYearType)) },
    deleteYearAmount: function(index,amountYearType) { dispatch(deleteYearAmount(index,amountYearType)) }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CompoundInputData);
