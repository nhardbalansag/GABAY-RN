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

import { 
  Dimensions 
} from 'react-native';

import { styles } from '../asset/css/basestyle';

import LinearGradient from 'react-native-linear-gradient';

import VerificationCode from '../resource/svg/VerificationCode.svg'
import VerificationCode_Sub from '../resource/svg/VerificationCode_Sub.svg'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const window = Dimensions.get("window");
const screen = Dimensions.get("screen").height;
const screenwidth = Dimensions.get("screen").width;

const EnterVerificationCode = () => {
    return (
        <View>
            <StatusBar barStyle={"dark-content"} backgroundColor={"#FFFFFF"}/>
            <View style={[ {backgroundColor:'#F5F5F5', height:'100%'}]}>
                <ScrollView style={[{}]}>
                    <View style={[{height:windowHeight, display:'flex', justifyContent:'space-between'}]}>
                        <View style={[ styles.alignCenter, {marginTop:20, marginBottom:20}]}>
                            <View style={[{marginBottom:20, marginTop:30}]}>
                                <VerificationCode />
                            </View>
                            <View>
                                <VerificationCode_Sub/>
                            </View>
                            <View style={[styles.flexRow, styles.justifySpaceBetween, styles.alignCenter, {width:'100%', paddingHorizontal:17, marginTop:50}]}>
                                <TextInput
                                    style={[{
                                        paddingHorizontal:16,
                                        width:41,
                                        height:55,
                                        color:'rgba(0, 0, 0, 0.6)',
                                        borderRadius:10,
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
                                    placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
                                    keyboardType="phone-pad"
                                    maxLength={1}
                                />
                                <TextInput
                                    style={[{
                                        paddingHorizontal:16,
                                        width:41,
                                        height:55,
                                        color:'rgba(0, 0, 0, 0.6)',
                                        borderRadius:10,
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
                                    placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
                                    keyboardType="phone-pad"
                                    maxLength={1}
                                />
                                <TextInput
                                    style={[{
                                        paddingHorizontal:16,
                                        width:41,
                                        height:55,
                                        color:'rgba(0, 0, 0, 0.6)',
                                        borderRadius:10,
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
                                    placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
                                    keyboardType="phone-pad"
                                    maxLength={1}
                                />
                                <TextInput
                                    style={[{
                                        paddingHorizontal:16,
                                        width:41,
                                        height:55,
                                        color:'rgba(0, 0, 0, 0.6)',
                                        borderRadius:10,
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
                                    placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
                                    keyboardType="phone-pad"
                                    maxLength={1}
                                />
                                <TextInput
                                    style={[{
                                        paddingHorizontal:16,
                                        width:41,
                                        height:55,
                                        color:'rgba(0, 0, 0, 0.6)',
                                        borderRadius:10,
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
                                    placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
                                    keyboardType="phone-pad"
                                    maxLength={1}
                                />
                                <TextInput
                                    style={[{
                                        paddingHorizontal:16,
                                        width:41,
                                        height:55,
                                        color:'rgba(0, 0, 0, 0.6)',
                                        borderRadius:10,
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
                                    placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
                                    keyboardType="phone-pad"
                                    maxLength={1}
                                />
                            </View>
                        </View>
                        <View style={[{marginHorizontal:'17%', marginBottom:20}]}>
                            <View style={[styles.justifyCenter, styles.alignCenter]}>
                                <View>
                                    <TouchableOpacity>
                                        <View style={[{backgroundColor:'#16A9CF', height:55, width:(screenwidth - 32), borderRadius:15, justifyContent:'center'}]}>
                                            <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:22, fontSize:18, fontWeight:"700", color:'#FFFFFF', textAlign:'center'}]}>Verify</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.flexRow, {marginTop:30}]}>
                                    <View>
                                        <TouchableOpacity>
                                            <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:17.5, fontSize:14, fontWeight:"600", color:'#707070'}]}>Back to Log in.</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default EnterVerificationCode;
