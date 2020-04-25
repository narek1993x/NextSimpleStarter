import * as types from "./actionTypes";

export const setDeviceInfo = (deviceInfo) => {
  return {
    type: types.SET_DEVICE_INFO,
    deviceInfo,
  };
};
