import { CHANGE_FILTER } from "../constants/filterTypes";

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter
});
