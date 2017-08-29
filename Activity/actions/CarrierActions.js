import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';
import {
  CARRIER_UPDATE,
  CARRIER_FETCH_SUCCESS,
  CARRIER_CREATE,
  CARRIER_SAVE_SUCCESS,
} from './types';


export const carrierUpdate = ({ prop, value }) => {
  return {
    type: CARRIER_UPDATE,
    payload: { prop, value }
  };
};

export const carrierFetch = () => {

return( dispatch ) => {
  firebase.database().ref(`/users/${currentUser.uid}/carrierboard`)
  .on('value', snapshot => {
    dispatch({ type: CARRIER_FETCH_SUCCESS, payload: snapshot.val() });
  });
};

};

export const carrierCreate = ({weight,arrivetime,departair,arriveair,airplainname,oneline}) => {

  const { currentUser } = firebase.auth();

  return( dispatch ) => {
    firebase.database().ref(`/users/${currentUser.uid}/carrierboard`)
    .push({weight,arrivetime,departair,arriveair,airplainname,oneline})
    .then(() => {
      dispatch({ type: CARRIER_CREATE});
      Actions.carrier_mypage({ type:'reset' });
    });
  };
};

export const carrierSave = ({weight,arrivetime,departair,arriveair,airplainname,oneline,uid}) => {

  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/carrierboard/${uid}`)
      .set({weight,arrivetime,departair,arriveair,airplainname,oneline})
      .then(() => {
        dispatch({ type: CARRIER_SAVE_SUCCESS });
        Actions.carrier_mypage({ type: 'reset' });
      });
  };
};

export const carrierDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/carrierboard/${uid}`)
      .remove()
      .then(() => {
        Actions.carrier_mypage({ type: 'reset' });
      });
  };
};
