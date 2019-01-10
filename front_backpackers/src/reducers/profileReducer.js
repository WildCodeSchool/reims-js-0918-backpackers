import { VIEW_PROFILE, VIEW_PROFILE_ACTIVITY } from "../actions/actionTypes";

const profileReducer = (previousState = {}, action) => {
  switch (action.type) {
    case VIEW_PROFILE:
      return action.profile;
    case VIEW_PROFILE_ACTIVITY:
      return [{ ...action.profile, activities: action.profileActivities }];
    default:
      return previousState;
  }
};

export default profileReducer;
