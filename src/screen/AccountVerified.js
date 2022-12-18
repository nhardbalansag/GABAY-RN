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

import LinearGradient from 'react-native-linear-gradient';

import AccountVerifiedSVG from '../resource/svg/AccountVerified.svg'
import CheckConfirmJoin_SubSVG from '../resource/svg/CheckConfirmJoin_Sub.svg'
import AccountVerifiedCheckLogo from '../resource/svg/AccountVerifiedCheckLogo.svg'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const window = Dimensions.get("window");
const screen = Dimensions.get("screen").height;
const screenwidth = Dimensions.get("screen").width;

const AccountVerified = () => {
    return (
        <View>
            <StatusBar barStyle={"dark-content"} backgroundColor={"#FFFFFF"}/>
            <View style={[ {backgroundColor:'#F5F5F5', height:'100%'}]}>
                <ScrollView style={[{}]}>
                    <View style={[styles.alignCenter, styles.justifyCenter, {marginTop:100}]}>
                        <View>
                            <LinearGradient 
                                colors={['rgba(22, 169, 207, 0.05)', 'rgba(18, 167, 139, 0.05)']}
                                start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} 
                                style={[
                                    styles.alignCenter, styles.justifyCenter, styles.flexRow, 
                                    {borderRadius:120, height:256, width:256},  
                                    {paddingVertical: 26, paddingHorizontal:26}, 
                                ]} 
                            >
                                <View style={[{backgroundColor:'rgba(22, 169, 207, 0.15)', height:202.53, width:202.53, borderRadius:100},styles.alignCenter, styles.justifyCenter, styles.flexRow,]}>
                                    <LinearGradient 
                                        start={{ x: 100, y: 0 }} end={{ x: 0, y: 100 }} 
                                        style={[styles.alignCenter, styles.justifyCenter, styles.flexRow, {borderRadius:100, height:144.2, width:144.2},  {paddingVertical: 40, paddingHorizontal:40}]} 
                                        colors={['#0091B6', '#19AF79']}>
                                        <AccountVerifiedCheckLogo/>
                                    </LinearGradient>
                                </View>
                            </LinearGradient>
                        </View>
                    </View>
                    <View style={[ styles.alignCenter, {marginTop:20, marginBottom:20}]}>
                        <View style={[{marginBottom:30}]}>
                            <AccountVerifiedSVG />
                        </View>
                    </View>
                    <View>
                        <View style={[styles.justifyCenter, styles.alignCenter]}>
                            <View>
                                <TouchableOpacity>
                                    <View style={[{backgroundColor:'#16A9CF', height:55, width:(screenwidth - 32), borderRadius:15, justifyContent:'center'}]}>
                                        <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:22, fontSize:18, fontWeight:"700", color:'#FFFFFF', textAlign:'center'}]}>Complete Registration</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default AccountVerified;
