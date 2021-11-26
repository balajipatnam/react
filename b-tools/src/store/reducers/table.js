let initState = {
  loading: false,
  companies: [],
};

export const tableReducer = (state = initState, actions) => {
  switch (actions.type) {
    case 'SET_LOADING': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'RESET_LOADING': {
      return {
        ...state,
        loading: false,
      };
    }
    case 'STORE_COMPANIES': {
      return {
        ...state,
        companies: actions.value,
      };
    }
    default: {
      return { ...state };
    }
  }
};
