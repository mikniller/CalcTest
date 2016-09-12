export const setFrom = (year) => {
  return {
    type: 'SET_FROM',
    year
  }
}

export const setTo = (year) => {
  return {
    type: 'SET_TO',
    year
  }
}

export const setInterest = (interest) => {
  return {
    type: 'SET_INTEREST',
    interest
  }
}

export const setPrincipal = (principal) => {
  return {
    type: 'SET_PRINCIPAL',
    principal
  }
}

export const setAmountYearYear = (year,index) => {
  return {
    type: 'SET_AMOUNTYEAR_YEAR',
    year,
    index
  }
}

export const setAmountYearValue = (amount,index) => {
  return {
    type: 'SET_AMOUNTYEAR_VALUE',
    amount,
    index
  
  }
}

export const addYearAmount = () => {
  return {
    type: 'ADD_AMOUNTYEAR'
  }
}

export const deleteYearAmount = (index) => {
  return {
    type: 'DELETE_AMOUNTYEAR',
    index
  
  }
}

export const setType = (CFFIType) => {
  return {
    type: 'SET_TYPE',
    CFFIType
  
  }
}