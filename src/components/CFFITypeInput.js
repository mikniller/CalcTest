import React, {Component} from 'react';
import {connect} from 'react-redux'

class CFFITypeInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            CFFIType: props.CFFIType,
            setType: props.setType
        }
    }

    handleChange(e) {
        this.state.setType(e.target.value)
    }

    render() {
        return (
          <div className = "form-group input-sm" >
            <div className="col-sm-2" >Type</div>
            <div className = "col-sm-6">
              <select placeholder="CFFI type" className="form-control input-sm" onChange={this.handleChange} value={this.props.cffiType}>
              <option value="1">Indtægter</option>
              <option value="2">Formue med opsparing</option>
              <option value="3">AnnuitetsLån</option>
          </select></div></div >



        );
    }
};

function mapStateToProps(state) {
    return {cffiType: state.input.CFFIType};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CFFITypeInput);

<div className = "form-group" >
  <div className="col-sm-2" >Type</div>
  <div className = "col-sm-6">
    <select placeholder="CFFI type" className="form-control">
    <option selected="" value="1">Indtægter</option>
    <option value="2">Formue med opsparing</option>
    <option value="3">Lån</option>
</select></div></div >
