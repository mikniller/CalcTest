import ActionTypes from '../constants/ActionTypes'
import AppConstants from '../constants/AppConstants'
import { GetCFFIData } from '../constants/CFFIConstants'
import _ from 'lodash';

const inputData = {
    CFFIType: 1,
    from: 2016,
    to: 2056,
    principal: 300000,
    interestSeries: [{amount:2, year:2016,  key :_.uniqueId()},{amount:3, year:2017,  key :_.uniqueId()}],
    interest: 2,
    amountYears: [{
        amount: 1000,
        year: 2016,
        key :_.uniqueId()

    }, {
        amount: 5000,
        year: 2020,
        key :_.uniqueId()

    }]
};

const grafData = generateSomeData(2016,2056,300000,2);

function generateSomeData(from,to,principal,interest) {

  var inte = [];
  inte.push([Date.UTC(from, 1, 1),principal,0,0]);
  for (var i = from; i < to; i += 1) {
      var int = principal * interest/100;
      principal = principal +int;
      inte.push([Date.UTC(i, 1, 1),principal,int,0]);
  }
  return inte;

}


export const calculationData = {
    input: inputData,
    data: grafData,
    selectedCffi: GetCFFIData(inputData.CFFIType)
}



export default function yearReducer(state = calculationData, action) {
    let newState = state;
    switch (action.type) {

        case ActionTypes.SET_FROM:
            var inp = { ...state.input,from: Number(action.year) };
            newState = { ...state,input: inp};
            break;

        case ActionTypes.SET_TO:
            var inp = { ...state.input,to: Number(action.year) };
            newState = { ...state,input: inp};
            break;

        case ActionTypes.SET_INTEREST:
            var inp = { ...state.input,interest: Number(action.interest) };
            newState = { ...state,input: inp};
            break;

        case ActionTypes.SET_PRINCIPAL:
            var inp = { ...state.input,principal: Number(action.principal) };
            newState = { ...state,input: inp};
            break;

        case ActionTypes.SET_AMOUNTYEAR_YEAR:
            if(action.elementType==AppConstants.AMOUNT_YEAR_INTEREST) {
              let newIS=state.input.interestSeries.slice();
              newIS[action.index].year=Number(action.year);
              newState = { ...state,...state.input,interestSeries : newIS };
            }
            else if(action.elementType==AppConstants.AMOUNT_YEAR_PRINCIPAL) {
              let newAY=state.input.amountYears.slice();
              newAY[action.index].year=Number(action.year);
              newState = { ...state,...state.input,amountYears : newAY };
            }
            break;

        case ActionTypes.SET_AMOUNTYEAR_VALUE:
            if(action.elementType==AppConstants.AMOUNT_YEAR_INTEREST) {
              let newIS=state.input.interestSeries.slice();
              newIS[action.index].amount=Number(action.amount);
              newState = { ...state,...state.input,interestSeries : newIS };
            }
            else if(action.elementType==AppConstants.AMOUNT_YEAR_PRINCIPAL) {
              let newAY=state.input.amountYears.slice();
              newAY[action.index].amount=Number(action.amount);
              newState = { ...state,...state.input,amountYears : newAY };
            }
            break;

        case ActionTypes.ADD_AMOUNTYEAR:
            if(action.elementType==AppConstants.AMOUNT_YEAR_INTEREST) {
              let le = state.input.interestSeries[state.input.interestSeries.length-1];
              let newIS=state.input.interestSeries.slice();
              newIS.push({amount: le.amount, year:Number( le.year ) + 1,key:_.uniqueId() });
              var inp = { ...state.input,interestSeries : newIS };
            }
            else if(action.elementType==AppConstants.AMOUNT_YEAR_PRINCIPAL) {
              let le = state.input.amountYears[state.input.amountYears.length-1];
              let newAY=state.input.amountYears.slice();
              newAY.push({amount: le.amount, year:Number( le.year ) + 1,key:_.uniqueId() });
              var inp = { ...state.input,amountYears : newAY };
            }
            newState = { ...state,input: inp};
            break;

        case ActionTypes.DELETE_AMOUNTYEAR:
            if(action.elementType==AppConstants.AMOUNT_YEAR_INTEREST) {
              newState = { ...state,...state.input,interestSeries : state.input.interestSeries.splice(action.index, 1) };
            }
            else if(action.elementType==AppConstants.AMOUNT_YEAR_PRINCIPAL) {
                newState = { ...state,...state.input,amountYears : state.input.amountYears.splice(action.index, 1) };
            }
            break;

        case ActionTypes.SET_TYPE:
            var inp = { ...state.input, CFFIType: Number(action.CFFIType) };
            newState = { ...state, input: inp,selectedCffi: GetCFFIData(action.CFFIType)};

            break;
        case ActionTypes.UPDATE_DATA:
            var ret = [];
            action.data.map(function(item) {
                ret.push([Date.UTC(item.Year, 1, 1), item.Amount, item.Interest,item.Instalment]);
            });
            newState = { ...state, data: ret};
            break;
    }
    console.log('State changed',newState);
    return newState;

}
