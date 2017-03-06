import ActionTypes from '../constants/ActionTypes'
import {
    GetCFFIData
} from '../constants/CFFIConstants'

const inputData = {
    CFFIType: 1,
    from: 2016,
    to: 2056,
    principal: 300000,
    interest: 2,
    amountYears: [{
        amount: 1000,
        year: 2016,
        key: 990
    }, {
        amount: 5000,
        year: 2020,
        key: 991
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
    var newState = Object.assign({}, state);
    switch (action.type) {
        case ActionTypes.SET_FROM:
            newState = Object.assign({}, state);
            newState.input.from = action.year;
            break;
        case ActionTypes.SET_TO:
            newState = Object.assign({}, state);
            newState.input.to = action.year;
            break;
        case ActionTypes.SET_INTEREST:
            newState = Object.assign({}, state);
            newState.input.interest = action.interest;
            break;
        case ActionTypes.SET_PRINCIPAL:
            newState = Object.assign({}, state);
            newState.input.principal = action.principal;
            break;
        case ActionTypes.SET_AMOUNTYEAR_YEAR:
            newState = Object.assign({}, state);
            newState.input.amountYears = newState.input.amountYears.slice();
            newState.input.amountYears[action.index].year = action.year;
            break;
        case ActionTypes.SET_AMOUNTYEAR_VALUE:
            newState = Object.assign({}, state);
            newState.input.amountYears = newState.input.amountYears.slice();
            newState.input.amountYears[action.index].amount = action.amount;
            break;
        case ActionTypes.ADD_AMOUNTYEAR:
            newState = Object.assign({}, state);
            let idx = state.input.amountYears.length;
            let prev = newState.input.amountYears[idx - 1];
            newState.input.amountYears = newState.input.amountYears.slice();
            newState.input.amountYears.push({
                amount: prev.amount,
                year: prev.year + 1,
                key: 99 + idx
            });
            break;
        case ActionTypes.DELETE_AMOUNTYEAR:
            newState = Object.assign({}, state);
            newState.input.amountYears = newState.input.amountYears.slice();
            newState.input.amountYears.splice(action.index, 1);
            break;
        case ActionTypes.SET_TYPE:
            console.log(state.input);
            var inp = { ...state.input,
                CFFIType: Number(action.CFFIType)
            };

            var newState = { ...state,
                input: inp,
                selectedCffi: GetCFFIData(action.CFFIType)
            };
            console.log(newState.input);
            break;
        case ActionTypes.UPDATE_DATA:

            newState = Object.assign({}, state);
            newState.data = action.data;
            var ret = [];
            action.data.map(function(item) {
                ret.push([Date.UTC(item.Year, 1, 1), item.Amount, item.Interest]);
            });
            newState.data = ret;
            break;
    }

    return newState;

}
