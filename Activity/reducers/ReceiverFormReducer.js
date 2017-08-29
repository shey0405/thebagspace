import {
  RECEIVER_UPDATE,
  RECEIVER_CREATE,
  RECEIVER_SAVE_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  rcyear:'',
  rcmonth:'',
  rcday:'',
  rcspot:'',
  fhour:'',
  fminute:'',
  thour:'',
  tminute:'',
  items:'',
  itemlink:'',
  options:'',
  price:''

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVER_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case RECEIVER_CREATE:
      return INITIAL_STATE;
    case RECEIVER_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
