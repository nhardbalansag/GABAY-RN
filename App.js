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
import Welcome from './src/screen/Welcome';
import SetUpPasscode from './src/screen/SetUpPasscode'
import Terms from './src/screen/Terms'

const App = () => {
  return (
    <View> 
      <Terms/>
    </View>
  );
};

export default App;
