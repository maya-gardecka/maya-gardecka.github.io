import { getOneToolObject } from "./a_data.js";

const sts = {
  toolObj: null,
  toolKey: null,
  toolVal: null,
};

export function getToolKey() {
  return sts.toolKey;
}
export function getToolObject() {
  return sts.toolObj;
}
export function getToolVal() {
  return sts.toolVal;
}

export function updateToolStates(t_id) {
  sts.toolObj = getOneToolObject(t_id);
  sts.toolKey = t_id;
  sts.toolVal = getOneToolObject(t_id)[1];
}
