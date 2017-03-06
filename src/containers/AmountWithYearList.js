import React, { Component } from 'react';  
import { connect } from 'react-redux';
import { Button,Glyphicon } from 'react-bootstrap';
import {setAmountYearYear, setAmountYearValue,addYearAmount,deleteYearAmount} from '../actions'
import { FormGroup,Col,FormControl,InputGroup } from 'react-bootstrap';

function renderAmountYears(amountYears, setYear,setValue,addYearAmount,deleteYearAmount) {
    if (amountYears.length > 0) {   
        return amountYears.map((ay, index) => (
            <AmountWithYear key={ay.key} 
              index={index} 
              amountYear={ay} 
              setYear={setYear} 
              setValue={setValue} 
              addYearAmount={addYearAmount}
              deleteYearAmount={deleteYearAmount}
              length={amountYears.length}
              />
        ));
    }
    else return [];
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
    this.props.setYear(e.target.value,this.props.index);
  }

  handleAmountChange(e) {
    this.props.setValue(e.target.value,this.props.index);
  }
  
  add(e) {
    this.props.addYearAmount();
  }
  
  delete(e) {
    this.props.deleteYearAmount(this.props.index);
  }
    
  render() {
    return ( 
        <FormGroup >  
        <Col  sm={2} md={2} lg={2}>
            {this.props.index==0 ? 'Beløb' : ''}
        </Col>
        <Col sm={3} md={3} lg={3}>
          <FormControl type="number" placeholder="Angiv år..." value={this.props.amountYear.year}
            onChange={this.handleYearChange}/>
        </Col>
         <Col sm={5} md={5} lg={5} >
          <InputGroup>
          <FormControl type="number" placeholder="Angiv værdi.." value={this.props.amountYear.amount}
            onChange={this.handleAmountChange}/>
          <InputGroup.Addon>
            <Button bsStyle="warning" bsSize="xsmall" onClick={this.delete} disabled={this.props.index==0}> 
               <Glyphicon glyph="minus" /> 
              </Button>
              
               <Button bsStyle="primary" bsSize="xsmall" onClick={this.add} disabled={this.props.length-1!=this.props.index }> 
               <Glyphicon glyph="plus" /> 
              </Button>
              </InputGroup.Addon>
               </InputGroup>

        </Col>
      </FormGroup>
  )
    }
};


class AmountWithYearList extends Component {  
 render() {
        const ays = renderAmountYears(this.props.amountYears,this.props.setYear,this.props.setValue,this.props.addYearAmount,this.props.deleteYearAmount);
        return (
            <div   className={this.props.CFFIType==1 ? 'hidden' : ''}>
                { ays }
            </div>
        );
    }
};


function mapStateToProps(state) {
  return {
   amountYears:state.input.amountYears,
   CFFIType:state.input.CFFIType
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setYear: function(year,index) { dispatch(setAmountYearYear(year,index))},
    setValue: function(value,index) { dispatch(setAmountYearValue(value,index))},
    addYearAmount: function() { dispatch(addYearAmount())},
    deleteYearAmount: function(index) { dispatch(deleteYearAmount(index))},
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(AmountWithYearList);



