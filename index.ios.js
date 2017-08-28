import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './Activity/reducers/index.js';
import Router from './Activity/Router';
import { AppRegistry } from 'react-native'

class App extends Component {

  componentWillMount(){
  firebase.initializeApp({
  apiKey: "AIzaSyA4b5r73Cwwg8tKKsQGOe4KjUvk77X_VQQ",
  authDomain: "bagspace-ef2b4.firebaseapp.com",
  databaseURL: "https://bagspace-ef2b4.firebaseio.com",
  projectId: "bagspace-ef2b4",
  storageBucket: "bagspace-ef2b4.appspot.com",
  messagingSenderId: "432604043005"
  });

  }

  render() {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

      return (
        <Provider store={store}>
          <Router />
        </Provider>
      );
    }

}

AppRegistry.registerComponent('bagspace', () => App);
