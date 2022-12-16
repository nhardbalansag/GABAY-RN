/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
} from 'react-native';

import Login from './src/screen/Login'
import Gabay from './src/screen/Gabay'
import Register from './src/screen/Register'
import ForgotPassword from './src/screen/ForgotPassword';

const App = () => {
  return (
    <View> 
      <ForgotPassword/>
    </View>
  );
};

export default App;
