/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  Image
} from 'react-native';

// import { TextInput } from 'react-native-paper';

import { 
  Dimensions 
} from 'react-native';

import { styles, custom } from '../asset/css/basestyle';

import GABAY from '../resource/svg/GABAY.svg'
import SubText from '../resource/svg/yourguideagainstdepressionandanxiety.svg'

import Rectangle68 from '../resource/svg/Rectangle68.svg'
import GABAY_small from '../resource/svg/GABAY_small.svg'
import Imreadyandwilling from '../resource/svg/Imreadyandwilling.svg'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Register = () => {
  return (
    <ScrollView> 
      <StatusBar barStyle={"dark-content"} backgroundColor={"#FFFFFF"}/>
        <ImageBackground style = {[{height:windowHeight}]} source={require('../resource/jpg/banig2.jpg')} resizeMode="cover"> 
            <View style={[{marginLeft:18}]}>
                <View style={[styles.flexRow, styles.alignCenter, {marginTop:20}]}>
                    <Image
                        source={require('../resource/png/MHPHLogoWhite1.png')}
                        resizeMode={'contain'}
                        style={[{marginRight:10 }]}
                    />
                    <GABAY_small/>
                </View>
                <View style={[{marginTop:15}]}>
                    <Imreadyandwilling />
                </View>
            </View>
            <View style={[{backgroundColor:'#F8F8F8', height:windowHeight, borderTopStartRadius:30, borderTopEndRadius:30, marginTop:20}]}>
                <View style={[{paddingVertical:16, paddingHorizontal:17}]}>
                    <View style={[styles.mB1]}>
                        <TextInput
                            style={[{
                                paddingHorizontal:16,
                                width:328,
                                height:55,
                                color:'rgba(0, 0, 0, 0.6)',
                                borderRadius:15,
                                borderTopEndRadius:15,
                                borderTopStartRadius:15,
                                backgroundColor:'#FFFFFF',
                                shadowOpacity: 0.5,
                                shadowRadius: 3,
                                fontStyle:'normal', 
                                textfontFamily:'Quicksand-Bold',
                                shadowOffset: {
                                    height: 0,
                                    width: 0,
                                },
                                elevation: 2
                            }]}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            outlineColor="red"
                            placeholder="First Name"
                            placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
                            keyboardType="text"
                        />
                    </View>
                </View>
            </View>
        </ImageBackground>
    </ScrollView>
  );
};

export default Register;
