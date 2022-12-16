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

import { styles, custom } from '../asset/css/basestyle';

import GABAY from '../resource/svg/GABAY.svg'
import SubText from '../resource/svg/yourguideagainstdepressionandanxiety.svg'

import Rectangle68 from '../resource/svg/Rectangle68.svg'
import GABAYBlue from '../resource/svg/GABAYBlue.svg'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const window = Dimensions.get("window");
const screen = Dimensions.get("screen").height;
const screenwidth = Dimensions.get("screen").width;

const Login = () => {
  return (
    <View>
        <ScrollView> 
            <StatusBar barStyle={"dark-content"} backgroundColor={"#FFFFFF"}/>
            <View style={[ {backgroundColor:'#FFFFFF', height:screen}]}>
                <View style={[styles.justifyCenter, styles.alignCenter, {marginTop:68}]}>
                    <View>
                        <Rectangle68 />
                    </View>
                    <View>
                        <GABAYBlue />
                    </View>
                </View>
                <View style={[{marginTop:75, marginHorizontal:16}]}>
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
                            <View>
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
                                    placeholder="Password"
                                    placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
                                    keyboardType="text"
                                    secureTextEntry
                                />
                            </View>
                        </View>
                    </View>
                    <View style={[{marginTop:40}]}>
                        <View style={[styles.justifyCenter, styles.alignCenter]}>
                            <View>
                                <TouchableOpacity>
                                    <View style={[{backgroundColor:'#16A9CF', height:55, width:(screenwidth - 32), borderRadius:15, justifyContent:'center'}]}>
                                        <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:22, fontSize:18, fontWeight:"700", color:'#FFFFFF', textAlign:'center'}]}>Let's go</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.flexRow, {marginTop:30}]}>
                                <View>
                                    <TouchableOpacity>
                                        <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:17.5, fontSize:14, fontWeight:"600", color:'#707070'}]}>Forgot Password</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.flexRow, styles.mT1, styles.justifyCenter, styles.alignCenter, {marginTop:50}]}>
                            <View style={[{width:126}]}>
                                <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:18, fontSize:14, fontWeight:"500", color:'rgba(0, 0, 0, 0.6)'}]}>Already signed up?</Text>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:20, fontSize:16, fontWeight:"700", color:'rgba(52, 52, 52, 1)'}]}>Continue thriving.</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    </View>
    
  );
};

export default Login;
