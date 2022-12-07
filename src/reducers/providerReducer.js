const initialState = {
  providerData: []
};

const providerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_PROVIDER_SCHEDULE':
      console.log('in provider submit reducer');
      return {
        ...state,
        providerData: [
          ...state.providerData,
          action.payload
        ]
      }
    default:
      return state;
  }
}

export default providerReducer;