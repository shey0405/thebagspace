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
} from '../actions/types';

const INITIAL_STATE = {
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_Y:
      return
    case RECEIVE_M:
      return
    case RECEIVE_D:
      return
    case RECEIVE_SPOT:
      return
    case TIME_FROM_H:
      return
    case TIME_FROM_M:
      return
    case TIME_TO_H:
      return
    case TIME_TO_M:
      return
    case ITEM_NAME:
      return
    case ITEM_LINK:
      return
    case ITEM_OPTION:
      return
    case ITEM_PRICE:
      return      
    default:
      return state;
  }
};
