import ActionTypes from '../constants/ActionTypes'

export const setFrom = (year) => {
  return {
  type:ActionTypes.SET_FROM,
    year
  }
}

export const setTo = (year) => {
  return {
  type:ActionTypes.SET_TO,
    year
  }
}

export const setInterest = (interest) => {
  return {
  type:ActionTypes.SET_INTEREST,
    interest
  }
}

export const setPrincipal = (principal) => {
  return {
  type:ActionTypes.SET_PRINCIPAL,
    principal
  }
}

export const setAmountYearYear = (year,index) => {
  return {
  type:ActionTypes.SET_AMOUNTYEAR_YEAR,
    year,
    index
  }
}

export const setAmountYearValue = (amount,index) => {
  return {
  type:ActionTypes.SET_AMOUNTYEAR_VALUE,
    amount,
    index

  }
}

export const addYearAmount = () => {
  return {
  type:ActionTypes.ADD_AMOUNTYEAR
  }
}

export const deleteYearAmount = (index) => {
  return {
  type:ActionTypes.DELETE_AMOUNTYEAR,
    index

  }
}

export const setType = (CFFIType) => {
  return {
  type:ActionTypes.SET_TYPE,
    CFFIType

  }
}




export const toogleFetchStatus = (fetching) => {
  return {
  type:ActionTypes.TOGGLE_STATUS,
    fetching
  }
}

export const updateData = (data) => {
  return {
  type:ActionTypes.UPDATE_DATA,
    data
  }
}
