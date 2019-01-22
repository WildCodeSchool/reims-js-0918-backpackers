const removeLast = state => {
  state.pop();
  return state;
};

const prevPageReducer = (previousState = [], action) => {
  switch (action.type) {
    case "@@router/LOCATION_CHANGE":
      return action.payload.action === "PUSH"
        ? [...previousState, action.payload]
        : previousState.length > 0
        ? removeLast(previousState)
        : previousState;
    default:
      return previousState;
  }
};

export default prevPageReducer;
