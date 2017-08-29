import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';
import {
  RECEIVER_UPDATE,
  RECEIVER_FETCH_SUCCESS,
  RECEIVER_CREATE,
  RECEIVER_SAVE_SUCCESS,
} from './types';


export const receiverUpdate = ({ prop, value }) => {
  return {
    type: RECEIVER_UPDATE,
    payload: { prop, value }
  };
};

export const receiverFetch = () => {

return( dispatch ) => {
  firebase.database().ref(`/users/${currentUser.uid}/receiverboard`)
  .on('value', snapshot => {
    dispatch({ type: RECEIVER_FETCH_SUCCESS, payload: snapshot.val() });
  });
};

};

export const receiverCreate = ({weight,arrivetime,departair,arriveair,airplainname,oneline}) => {

  const { currentUser } = firebase.auth();

  return( dispatch ) => {
    firebase.database().ref(`/users/${currentUser.uid}/receiverboard`)
    .push({weight,arrivetime,departair,arriveair,airplainname,oneline})
    .then(() => {
      dispatch({ type: RECEIVER_CREATE});
      Actions.receiver_mypage({ type:'reset' });
    });
  };
};

export const receiverSave = ({weight,arrivetime,departair,arriveair,airplainname,oneline,uid}) => {

  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/receiverboard/${uid}`)
      .set({weight,arrivetime,departair,arriveair,airplainname,oneline})
      .then(() => {
        dispatch({ type: RECEIVER_SAVE_SUCCESS });
        Actions.receiver_mypage({ type: 'reset' });
      });
  };
};

export const receiverDelete = ({ uid }) => {

  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/receiverboard/${uid}`)
      .remove()
      .then(() => {
        Actions.receiver_mypage({ type: 'reset' });
      });
  };
};
