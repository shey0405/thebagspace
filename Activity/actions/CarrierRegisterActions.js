import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';
import {
  WEIGHT_CHANGED,
  ARRIVE_CHANGED,
  KOREA_DEPART_AIR_CHANGED,
  ARRIVE_AIR_CHANGED,
  AIRPLAIN_NAME_CHANGED,
  ONELINE_INTRODUCE_CHANGED
} from './types';

export const weightChanged = (text) => {
  return {
    type: WEIGHT_CHANGED,
    payload: text
  };
};

export const arriveChanged = (text) => {
  return {
    type: ARRIVE_CHANGED,
    payload: text
  };
};

export const koreaDepartAirChanged = (text) => {
  return {
    type: KOREA_DEPART_AIR_CHANGED,
    payload: text
  };
};

export const arriveAirChanged = (text) => {
  return {
    type: ARRIVE_AIR_CHANGED,
    payload: text
  };
};

export const airplainNameChanged = (text) => {
  return {
    type: AIRPLAIN_NAME_CHANGED,
    payload: text
  };
};

export const onelineIntroduceChanged = (text) => {
  return {
    type: ONELINE_INTRODUCE_CHANGED,
    payload: text
  };
};
