import React, {Component} from 'react';
import {setFrom, setTo} from '../actions'
import {connect} from 'react-redux'

class YearInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFrom: props.isFrom
        }
        this.getValue = this.getValue.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);

    }

    getValue() {
        return this.state.isFrom
            ? this.props.from
            : this.props.to
    }

    handleYearChange(e) {
        if (this.state.isFrom)
            this.props.setFrom(e.target.value);
        else
            this.props.setTo(e.target.value);
        }

    render() {
        return (
          <div className = "form-group input-sm">
            <div className="col-sm-2">  {this.props.yearLabel}</div>
            <div className = "col-sm-4">
              <input placeholder="år"  value={this.getValue()} onChange={this.handleYearChange} type="number" id="formHorizontalYear" className="form-control input-sm" />
              </div>
           </div>
        );
    }
};

function mapStateToProps(state) {
    return {from: state.input.from, to: state.input.to};
}

function mapDispatchToProps(dispatch) {
    return {
        setFrom: function(val) {
            dispatch(setFrom(val));
        },
        setTo: function(val) {
            dispatch(setTo(val))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(YearInput);
