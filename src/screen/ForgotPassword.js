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
  ScrollView
} from 'react-native';

// import { TextInput } from 'react-native-paper';

import { 
  Dimensions 
} from 'react-native';

import { styles } from '../asset/css/basestyle';

import ForgottenPassword from '../resource/svg/ForgottenPassword.svg'
import ForgotPasswordSub from '../resource/svg/enteryouremail.svg'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const window = Dimensions.get("window");
const screen = Dimensions.get("screen").height;
const screenwidth = Dimensions.get("screen").width;

const ForgotPassword = () => {
    return (
        <View>
            <StatusBar barStyle={"dark-content"} backgroundColor={"#FFFFFF"}/>
            <View style={[ {backgroundColor:'#FFFFFF', paddingHorizontal:17, height:'100%'}]}>
                <View style={[ styles.alignFlexStart, {marginTop:68}]}>
                    <View style={[{marginBottom:10}]}>
                        <ForgottenPassword/>
                    </View>
                    <View>
                        <ForgotPasswordSub/>
                    </View>
                </View>
                <View style={[{marginTop:50, marginHorizontal:16}]}>
                    <View style={[styles.justifyCenter, styles.alignCenter]}>
                    {/* login form input */}
                        <View>
                            <View style={[styles.mB1]}>
                                <TextInput
                                    style={[{
                                        paddingHorizontal:16,
                                        width:(screenwidth - 32),
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
                                    placeholder="Email"
                                    placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
                                    keyboardType="text"
                                />
                            </View>
                        </View>
                    </View>
                    <View style={[styles.justifyCenter, styles.alignCenter, {marginTop:'100%'}]}>
                        <View>
                            <TouchableOpacity>
                                <View style={[{backgroundColor:'#16A9CF', height:55, width:(screenwidth - 32), borderRadius:15, justifyContent:'center'}]}>
                                    <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:22, fontSize:18, fontWeight:"700", color:'#FFFFFF', textAlign:'center'}]}>Reset Password</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ForgotPassword;
