import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setAmountYearYear, setAmountYearValue, addYearAmount, deleteYearAmount} from '../actions'

function renderAmountYears(amountYears, setYear, setValue, addYearAmount, deleteYearAmount,cffiType) {
    if (amountYears.length > 0) {
        return amountYears.map((ay, index) => (<AmountWithYear CFFIType={cffiType} key={ay.key} index={index} amountYear={ay} setYear={setYear} setValue={setValue} addYearAmount={addYearAmount} deleteYearAmount={deleteYearAmount} length={amountYears.length}/>));
    } else
        return [];
    }

class AmountWithYear extends Component {
    constructor(props) {
        super(props);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.add = this.add.bind(this);
        this.delete = this.delete.bind(this);
    }

    handleYearChange(e) {
        this.props.setYear(e.target.value, this.props.index);
    }

    handleAmountChange(e) {
        this.props.setValue(e.target.value, this.props.index);
    }

    add(e) {
        this.props.addYearAmount();
    }

    delete(e) {
        this.props.deleteYearAmount(this.props.index);
    }

    render() {
        return (
            <div className="form-group">
                <div className="col-lg-2 col-md-2 col-sm-2">
                    {this.props.index == 0 ? this.props.CFFIType.Instalment : ''}
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <input placeholder="Angiv år..." value="2016" type="number" className="form-control" value={this.props.amountYear.year} onChange={this.handleYearChange}/></div>
                <div className="col-lg-5 col-md-5 col-sm-5">
                    <span className="input-group">
                        <input placeholder="Angiv værdi.." value="1000" type="number" className="form-control" value={this.props.amountYear.amount} onChange={this.handleAmountChange}/>
                        <span className="input-group-addon">
                            <button type="button" className="btn btn-xs btn-warning" onClick={this.delete} disabled={this.props.index == 0}>
                                <span className="glyphicon glyphicon-minus"></span>
                            </button>
                            <button type="button" className="btn btn-xs btn-primary" onClick={this.add} disabled={this.props.length - 1 != this.props.index}>
                                <span className="glyphicon glyphicon-plus"></span>
                            </button>
                        </span>
                    </span>
                </div>
            </div>
        )
    }
};

class AmountWithYearList extends Component {
    render() {
        const ays = renderAmountYears(this.props.amountYears, this.props.setYear, this.props.setValue, this.props.addYearAmount, this.props.deleteYearAmount,this.props.CFFIType);
        return (
            <div >
                {ays}
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {amountYears: state.input.amountYears,CFFIType: state.selectedCffi};
}

function mapDispatchToProps(dispatch) {
    return {
        setYear: function(year, index) {
            dispatch(setAmountYearYear(year, index))
        },
        setValue: function(value, index) {
            dispatch(setAmountYearValue(value, index))
        },
        addYearAmount: function() {
            dispatch(addYearAmount())
        },
        deleteYearAmount: function(index) {
            dispatch(deleteYearAmount(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AmountWithYearList);
