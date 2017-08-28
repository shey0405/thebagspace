import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';
import {
  RECEIVE_Y,
  RECEIVE_M,
  RECEIVE_D,
  RECEIVE_SPOT,
  TIME_FROM_H,
  TIME_FROM_M,
  TIME_TO_H,
  TIME_TO_M,
  ITEM_NAME,
  ITEM_LINK,
  ITEM_OPTION,
  ITEM_PRICE,
} from './types';

export const Receive_Y = (text) => {
  return {
    type: RECEIVE_Y,
    payload: text
  };
};

export const Receive_M = (text) => {
  return {
    type: RECEIVE_M,
    payload: text
  };
};

export const Receive_D = (text) => {
  return {
    type: RECEIVE_D,
    payload: text
  };
};

export const Receive_Spot = (text) => {
  return {
    type: RECEIVE_SPOT,
    payload: text
  };
};

export const Time_From_H = (text) => {
  return {
    type: TIME_FROM_H,
    payload: text
  };
};

export const Time_From_M = (text) => {
  return {
    type: TIME_FROM_M,
    payload: text
  };
};

export const Time_To_H = (text) => {
  return {
    type: TIME_TO_H,
    payload: text
  };
};

export const Time_To_M = (text) => {
  return {
    type: TIME_TO_M,
    payload: text
  };
};

export const Item_Name = (text) => {
  return {
    type: ITEM_NAME,
    payload: text
  };
};

export const ITEM_LINK = (text) => {
  return {
    type: ITEM_LINK,
    payload: text
  };
};

export const Item_Option = (text) => {
  return {
    type: ITEM_OPTION,
    payload: text
  };
};

export const Item_Price = (text) => {
  return {
    type: ITEM_PRICE,
    payload: text
  };
};
