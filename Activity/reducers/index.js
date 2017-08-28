import { combineReducers } from 'redux';
import ReceiverBoardReducer from './ReceiverBoard';
import CarrierBoardReducer from './CarrierBoard';

export default combineReducers({
  receiverboard: ReceiverBoardReducer,
  carrierboard: CarrierBoardReducer
});
