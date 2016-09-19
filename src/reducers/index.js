

export const calculationData = {
    input : {
      CFFIType:1,
      from:2016,
      to:2016,
      principal:1000,
      interest:4,
      amountYears : [{amount:1000,year:2016, key:990},{amount:2000,year:2017, key:991}]
    },
    data : []
}



export default function yearReducer(state = {calculationData}, action) {
  
  var newState = state;
  switch (action.type) {
    case 'SET_FROM' :
      newState = Object.assign({}, state);
      newState.calculationData.input.from=action.year;
      break;
     case 'SET_TO' :
      newState = Object.assign({}, state);
      newState.calculationData.input.to=action.year;
      break;  
     case 'SET_INTEREST' :
      newState = Object.assign({}, state);
      newState.calculationData.input.interest=action.interest;
      break;  
     case 'SET_PRINCIPAL' :
      newState = Object.assign({}, state);
      newState.calculationData.input.principal=action.principal;
      break;  
     case 'SET_AMOUNTYEAR_YEAR' :
       newState = Object.assign({}, state);
        newState.calculationData.input.amountYears=newState.calculationData.input.amountYears.slice();
       newState.calculationData.input.amountYears[action.index].year=action.year;
       break;
     case 'SET_AMOUNTYEAR_VALUE' :
       newState = Object.assign({}, state);
       newState.calculationData.input.amountYears=newState.calculationData.input.amountYears.slice();
       newState.calculationData.input.amountYears[action.index].amount=action.amount;
       break; 
     case 'ADD_AMOUNTYEAR' :
        newState = Object.assign({}, state);
        let idx = state.calculationData.input.amountYears.length;
        let prev = newState.calculationData.input.amountYears[idx-1];
        newState.calculationData.input.amountYears=newState.calculationData.input.amountYears.slice();
        newState.calculationData.input.amountYears.push({amount:prev.amount, year : prev.year+1, key:99+idx });
        break;
     case 'DELETE_AMOUNTYEAR' :
       newState = Object.assign({}, state);
       newState.calculationData.input.amountYears=newState.calculationData.input.amountYears.slice();
       newState.calculationData.input.amountYears.splice(action.index,1);
       break;
     case 'SET_TYPE' :
        newState = Object.assign({}, state);
        newState.calculationData.input.CFFIType=action.CFFIType;
        break;
    case "UPDATE_DATA":

       newState = Object.assign({}, state);
       newState.calculationData.data = action.data;
       var ret = [];
        action.data.map(function(item) {
          ret.push([Date.UTC(item.Year,1,1),item.Amount]);
       });
       newState.calculationData.data = ret;
       break;        
  }
 /* console.log(newState);
  console.log(state);*/
return newState;

}






