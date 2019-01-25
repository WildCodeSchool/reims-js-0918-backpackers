const prevPageReducer = (previousState = [], action) => {
  switch (action.type) {
    case "@@router/LOCATION_CHANGE":
      return action.payload.action === "PUSH"
        ? [...previousState, action.payload]
        : previousState.length > 0
        ? previousState.slice(0, -1)
        : previousState;
    default:
      return previousState;
  }
};

export default prevPageReducer;
