import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setInterest } from '../actions'

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
      <div className="form-group">
          <div className="col-sm-2">{this.props.CFFIType.Interest}</div>
          <div className="col-sm-4">
              <input placeholder="år" value={this.props.interest} onChange={this.handleInterestChange} type="number" id="formHorizontalRente" className="form-control"/>
          </div>
      </div>
     )}
};

function mapStateToProps(state) {
  return {
   interest:state.input.interest,
   CFFIType:state.selectedCffi
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
