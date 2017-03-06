

export const calculationData = {
    input : {
      CFFIType:1,
      from:2016,
      to:2026,
      principal:10000,
      interest:4,
      amountYears : [{amount:1000,year:2016, key:990},{amount:5000,year:2020, key:991}]
    },
    data : [
      [Date.UTC(2017,1,1),10000,0],
      [Date.UTC(2018,1,1),10100,0],
      [Date.UTC(2019,1,1),10200,0],
    ]
}



export default function yearReducer(state = calculationData, action) {
  
  var newState = Object.assign({}, state);
  switch (action.type) {
    case 'SET_FROM' :
      newState = Object.assign({}, state);
      newState.input.from=action.year;
      break;
     case 'SET_TO' :
      newState = Object.assign({}, state);
      newState.input.to=action.year;
      break;  
     case 'SET_INTEREST' :
      newState = Object.assign({}, state);
      newState.input.interest=action.interest;
      break;  
     case 'SET_PRINCIPAL' :
      newState = Object.assign({}, state);
      newState.input.principal=action.principal;
      break;  
     case 'SET_AMOUNTYEAR_YEAR' :
       newState = Object.assign({}, state);
        newState.input.amountYears=newState.input.amountYears.slice();
       newState.input.amountYears[action.index].year=action.year;
       break;
     case 'SET_AMOUNTYEAR_VALUE' :
       newState = Object.assign({}, state);
       newState.input.amountYears=newState.input.amountYears.slice();
       newState.input.amountYears[action.index].amount=action.amount;
       break; 
     case 'ADD_AMOUNTYEAR' :
        newState = Object.assign({}, state);
        let idx = state.input.amountYears.length;
        let prev = newState.input.amountYears[idx-1];
        newState.input.amountYears=newState.input.amountYears.slice();
        newState.input.amountYears.push({amount:prev.amount, year : prev.year+1, key:99+idx });
        break;
     case 'DELETE_AMOUNTYEAR' :
       newState = Object.assign({}, state);
       newState.input.amountYears=newState.input.amountYears.slice();
       newState.input.amountYears.splice(action.index,1);
       break;
     case 'SET_TYPE' :
        console.log(state.input);
        var inp = {...state.input,CFFIType:Number(action.CFFIType) };
        var newState =  {...state,input : inp};
        console.log(newState.input);
        break;
    case "UPDATE_DATA":

       newState = Object.assign({}, state);
       newState.data = action.data;
       var ret = [];
        action.data.map(function(item) {
          ret.push([Date.UTC(item.Year,1,1),item.Amount,item.Interest]);
       });
       newState.data = ret;
       break;  
  }
  
return newState;

}






