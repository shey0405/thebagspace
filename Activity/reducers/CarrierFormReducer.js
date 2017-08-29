import {
  CARRIER_UPDATE,
  CARRIER_CREATE,
  CARRIER_SAVE_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  emptyweight:'',
  praguearrival:'',
  airdepart:'',
  airarrival:'',
  airname:'',
  introduce:'',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARRIER_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CARRIER_CREATE:
      return INITIAL_STATE;
    case CARRIER_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
