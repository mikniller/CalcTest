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

const AmountWithYear =React.createClass({  
  handleYearChange : function(e) {
    this.props.setYear(e.target.value,this.props.index);
  
  },
  handleAmountChange : function(e) {
    this.props.setValue(e.target.value,this.props.index);
  },
  add : function(e) {
    this.props.addYearAmount();
  },
  delete : function(e) {
    this.props.deleteYearAmount(this.props.index);
  },
  
  
  render : function() {
    return ( 
        <FormGroup >  
        <Col  sm={2}>
            {this.props.index==0 ? 'Beløb' : ''}
        </Col>
        <Col sm={3}>
          <FormControl type="number" placeholder="Angiv år..." value={this.props.amountYear.year}
            onChange={this.handleYearChange}/>
        </Col>
         <Col sm={4}>
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
});


const AmountWithYearList =React.createClass({  
 render() {

        const ays = renderAmountYears(this.props.amountYears,this.props.setYear,this.props.setValue,this.props.addYearAmount,this.props.deleteYearAmount);

        return (
            <div   className={this.props.CFFIType!=2 ? 'hidden' : ''}>
                { ays }
            </div>
        );
    }
});


function mapStateToProps(state) {
  return {
   amountYears:state.calculationData.input.amountYears,
   CFFIType:state.calculationData.input.CFFIType
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


