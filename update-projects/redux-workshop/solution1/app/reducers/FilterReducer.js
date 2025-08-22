import { CHANGE_FILTER, ALL } from "../constants/filterTypes";

export default (state = ALL, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};
