import { CHANGE_FILTER } from "../constants/filterTypes";

export const changeInput = (value) => ({
  type: CHANGE_FILTER,
  payload: value
});
