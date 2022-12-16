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
  Image,
  TouchableOpacity,
  Text,
  ScrollView
} from 'react-native';

import { 
  Dimensions 
} from 'react-native';

import { styles } from '../asset/css/basestyle';

import Vector17 from '../resource/png/Vector17.png'
import HelloSabrina from '../resource/svg/HelloSabrina.svg'
import WelcomeTitle from  '../resource/svg/WelcomeTitle.svg'
import Welcomesubs from '../resource/svg/welcomesubs.svg'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const screenwidth = Dimensions.get("screen").width;               

const Welcome = () => {
  return (
    <ScrollView>
        <View style={[{backgroundColor:'#F8F8F8', height:windowHeight}]}> 
        <StatusBar barStyle={"dark-content"} backgroundColor={"#FFFFFF"}/>
        <ImageBackground style = {[{justifyContent:'flex-end', resizeMode: "stretch", flex: 1}]} source={Vector17} resizeMode="cover">
            <View style={[{paddingHorizontal:17}]}>
                <View style={[{marginBottom:10}]}>
                    <HelloSabrina/>
                </View>
                <View style={[{marginBottom:20}]}>
                    <WelcomeTitle/>
                </View>
            </View>
        </ImageBackground>
        <View style={[{paddingHorizontal:17, marginBottom:50}]}>
            <View style={[{marginBottom:30}]}>
                <Welcomesubs/>
            </View>
            <View style={[styles.justifyCenter, styles.alignCenter]}>
                <View>
                    <TouchableOpacity>
                        <View style={[{backgroundColor:'#16A9CF', height:55, width:(screenwidth - 32), borderRadius:15, justifyContent:'center'}]}>
                            <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:22, fontSize:18, fontWeight:"700", color:'#FFFFFF', textAlign:'center'}]}>Let's go</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.flexRow, {marginTop:20}]}>
                    <View>
                        <TouchableOpacity>
                            <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:17.5, fontSize:16, fontWeight:"700", color:'#707070'}]}>Set up Pass Code</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>                           
        </View>
    </View>
    </ScrollView>
  );
};

export default Welcome;
