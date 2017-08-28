import {
  WEIGHT_CHANGED,
  ARRIVE_CHANGED,
  KOREA_DEPART_AIR_CHANGED,
  ARRIVE_AIR_CHANGED,
  AIRPLAIN_NAME_CHANGED,
  ONELINE_INTRODUCE_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WEIGHT_CHANGED:
      return
    case ARRIVE_CHANGED:
      return
    case KOREA_DEPART_AIR_CHANGED:
      return
    case ARRIVE_AIR_CHANGED:
      return
    case AIRPLAIN_NAME_CHANGED:
      return
    default:
      return state;
  }
};
