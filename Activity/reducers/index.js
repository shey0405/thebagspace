import { combineReducers } from 'redux';
import ReceiverFormReducer from './ReceiverFormReducer';
import CarrierFormReducer from './CarrierFormReducer';
import ReceiverReducer from './ReceiverReducer';
import CarrierReducer from './CarrierReducer';


export default combineReducers({
  receiverForm: ReceiverFormReducer,
  carrierForm: CarrierFormReducer,
  receivers: CarrierReducer,
  carriers: ReceiverReducer
});
