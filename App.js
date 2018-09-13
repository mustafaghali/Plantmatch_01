import React from 'react';
import {AppRegistry} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Router from './src/router'; 
import {Provider} from 'react-redux';
import store from './src/reducers/configureStore';

export default class App extends React.Component {
  render() {
    return ( 
     <Provider store = {store}>
        <Router/>
     </Provider>       
    );
  }
}