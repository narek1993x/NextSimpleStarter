import * as types from "./actionTypes";
import { updateObject } from "../../helpers/utils";

const initialState = {
  deviceInfo: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DEVICE_INFO:
      return updateObject(state, { deviceInfo: action.deviceInfo });
    default:
      return state;
  }
};
