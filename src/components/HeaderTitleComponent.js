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
  Text
} from 'react-native';

import { styles, custom } from '../asset/css/basestyle';

const ForgotPassword = (props) => {
  return (
    <View>
        <View>
            <Text style={[{fontFamily:'Quicksand-Bold', color:'#16A9CF'}]}>Forgot Password</Text>
        </View>
    </View>
  );
};

export default ForgotPassword;
