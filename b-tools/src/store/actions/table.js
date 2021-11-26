export function setLoader() {
  return {
    type: 'SET_LOADING',
  };
}

export function resetLoader() {
  return {
    type: 'RESET_LOADING',
  };
}

export function storeCompanies(companies) {
  return {
    type: 'STORE_COMPANIES',
    value: companies,
  };
}
