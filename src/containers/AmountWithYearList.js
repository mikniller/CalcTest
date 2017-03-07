import React, {Component} from 'react';

function renderAmountYears(amountYears, setYear, setValue, addYearAmount, deleteYearAmount,name,amountYearType) {
  
    if (amountYears.length > 0) {
        return amountYears.map((ay, index) => (
          <AmountWithYear
            name={name}
            key={ay.key}
            index={index}
            amountYear={ay}
            setYear={setYear}
            setValue={setValue}
            addYearAmount={addYearAmount}
            deleteYearAmount={deleteYearAmount}
            length={amountYears.length}
            amountYearType={amountYearType}
        />));
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
        this.props.setYear(e.target.value, this.props.index,this.props.amountYearType);
    }

    handleAmountChange(e) {
        this.props.setValue(e.target.value, this.props.index,this.props.amountYearType);
    }

    add(e) {
        this.props.addYearAmount(this.props.amountYearType);
    }

    delete(e) {
        this.props.deleteYearAmount(this.props.index,this.props.amountYearType);
    }

    render() {
        return (
            <div  className={this.props.index!=this.props.length - 1 ? "form-group-close form-group input-sm" : "form-group input-sm"}>
                <div className="col-lg-2 col-md-2 col-sm-2">
                    {this.props.index == 0 ? this.props.name : ''}
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                    <input placeholder="Angiv år..." value="2016" type="number" className="form-control input-sm" value={this.props.amountYear.year} onChange={this.handleYearChange}/></div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="input-group">
                        <input placeholder="Angiv værdi.." value="0" type="number" className="form-control input-sm" value={this.props.amountYear.amount} onChange={this.handleAmountChange}/>
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-sm btn-default" onClick={this.delete} disabled={this.props.index == 0}>
                                <span className="glyphicon glyphicon-minus"></span>
                            </button>
                            <button type="button" className="btn btn-sm btn-default" onClick={this.add} disabled={this.props.length - 1 != this.props.index}>
                                <span className="glyphicon glyphicon-plus"></span>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
};

export default class AmountWithYearList extends Component {
    render() {
        const ays = renderAmountYears(this.props.amountYears, this.props.setYear, this.props.setValue, this.props.addYearAmount, this.props.deleteYearAmount,this.props.groupName,this.props.amountYearType);
        return (
            <div >
                {ays}
            </div>
        );
    }
};


AmountWithYearList.propTypes = {
  amountYears:React.PropTypes.array.isRequired,
  groupName:React.PropTypes.string.isRequired,
  setYear:React.PropTypes.func.isRequired,
  setValue:React.PropTypes.func.isRequired,
  addYearAmount:React.PropTypes.func.isRequired,
  deleteYearAmount:React.PropTypes.func.isRequired,
  amountYearType:React.PropTypes.string.isRequired,
}
