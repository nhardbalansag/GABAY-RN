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

import SetupPassCode from '../resource/svg/SetupPassCode.svg'
import SetupPassCodeSub from '../resource/svg/SetupPassCodeSub.svg'

import { RadioButton } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const window = Dimensions.get("window");
const screen = Dimensions.get("screen").height;
const screenwidth = Dimensions.get("screen").width;

const SetUpPasscode = () => {
    return (
        <View>
            <StatusBar barStyle={"dark-content"} backgroundColor={"#FFFFFF"}/>
            <View style={[ {backgroundColor:'#FFFFFF', paddingHorizontal:17, height:'100%'}]}>
                <View style={[ styles.alignFlexStart, {marginTop:68}]}>
                    <View style={[{marginBottom:10}]}>
                        <SetupPassCode />
                    </View>
                    <View>
                        <SetupPassCodeSub/>
                    </View>
                </View>
                <View style={[{marginTop:50, marginHorizontal:16}]}>
                    <View style={[styles.justifyCenter, styles.alignCenter]}>
                        <View style={[styles.justifyCenter, styles.alignCenter, styles.flexRow]}>
                            <RadioButton
                                disabled={true}
                                value="second"
                                status={ 'checked'}
                                // onPress={() => setChecked('second')}
                            />
                            <RadioButton
                                disabled={true}
                                value="second"
                                status={ 'unchecked'}
                                // onPress={() => setChecked('second')}
                            />
                            <RadioButton
                                disabled={true}
                                value="second"
                                status={ 'unchecked'}
                                // onPress={() => setChecked('second')}
                            />
                            <RadioButton
                                disabled={true}
                                value="second"
                                status={ 'unchecked'}
                                // onPress={() => setChecked('second')}
                            />
                        </View>
                    </View>
                    <View style={[styles.justifyCenter, styles.alignCenter, {marginTop:'100%'}]}>
                        <View style={[styles.justifyCenter, styles.alignCenter]}>
                            <View>
                                <TouchableOpacity>
                                    <View style={[{backgroundColor:'#16A9CF', height:55, width:(screenwidth - 32), borderRadius:15, justifyContent:'center'}]}>
                                        <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:22, fontSize:18, fontWeight:"700", color:'#FFFFFF', textAlign:'center'}]}>Save</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.flexRow, {marginTop:20}]}>
                                <View>
                                    <TouchableOpacity>
                                        <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:17.5, fontSize:16, fontWeight:"600", color:'#707070'}]}>Skip</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View> 
                    </View>
                </View>
            </View>
        </View>
    );
};

export default SetUpPasscode;
