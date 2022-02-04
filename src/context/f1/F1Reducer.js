const f1Reducer = (state, action) => {
  switch (action.type) {
    case 'GET_DRIVERS':
      return {
        ...state,
        drivers: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default f1Reducer;
