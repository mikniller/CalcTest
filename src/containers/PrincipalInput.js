import React, {Component} from 'react';
import {setPrincipal} from '../actions'
import {connect} from 'react-redux'

class PrincipalInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.setPrincipal(e.target.value)
    }

    render() {
        const {CFFIType} = this.props;
        return (
            <div className="form-group input-sm">
                <div className="col-sm-2">{CFFIType.Principal}</div>
                <div className="col-sm-2">
                    <input placeholder="år" value={this.props.principal} onChange={this.handleChange} type="number" id="formHorizontalPrincipal" className="form-control input-sm"/>
                </div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {principal: state.input.principal, CFFIType: state.selectedCffi};
}

function mapDispatchToProps(dispatch) {
    return {
        setPrincipal: function(val) {
            dispatch(setPrincipal(val));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PrincipalInput);
