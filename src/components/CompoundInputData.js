import React, { Component } from 'react';  
import InterestInput from './InterestInput';
import YearInput from './YearInput';  
import AmountWithYearList from './AmountWithYearList';    
import PrincipalInput from './PrincipalInput';
import CFFITypeInput from './CFFITypeInput';
import { Form } from 'react-bootstrap';


export default class CompoundInputData extends Component {  
render() {
    return ( 
       
        <Form horizontal>
        
          <CFFITypeInput/>
    <InterestInput/>
    <YearInput yearLabel="Fra" isFrom = "true" /> 
    <YearInput yearLabel="Til" isTo = "true"/>
    <PrincipalInput/>
    <AmountWithYearList/>
    </Form>
    
    );
    }
}