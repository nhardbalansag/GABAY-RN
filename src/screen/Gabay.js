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
  Text
} from 'react-native';

import { 
  Dimensions 
} from 'react-native';

import { styles } from '../asset/css/basestyle';

import GABAY from '../resource/svg/GABAY.svg'
import SubText from '../resource/svg/yourguideagainstdepressionandanxiety.svg'

import MHPHLogoIconColored from '../resource/svg/MHPHLogoIconColored.svg'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const App = () => {
  return (
    <View style={[]}> 
      <StatusBar hidden backgroundColor="transparent"/>
      <ImageBackground style = {[{height:windowHeight}]} source={require('../resource/png/Rectangle13534.png')} resizeMode="cover"> 
        <View style={[styles.flex2]}>
          <View style={[styles.justifyCenter, styles.alignCenter, styles.flex1]}>
            <View style={[styles.bgLight, styles.justifyCenter, styles.alignCenter, {borderRadius:65, width:180, height:180}]}>
              <MHPHLogoIconColored />
            </View>
          </View>
          <View style={[styles.flex1]}>
            <View style={[styles.flexCol, styles.justifyCenter, styles.alignCenter]}>
              <View style={[{marginBottom:20}]}>
                <GABAY/>
              </View>
              <View>
                <SubText/>
              </View>
            </View>
            <View style={[styles.justifyCenter, styles.alignCenter, styles.flex1]}>
              <View>
                <TouchableOpacity>
                    <View style={[{backgroundColor:'#FFFFFF', height:55, width:250, borderRadius:15, justifyContent:'center'}]}>
                      <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:22, fontSize:18, fontWeight:"700", color:'#16A9CF', textAlign:'center'}]}>I'm ready</Text>
                    </View>
                </TouchableOpacity>
              </View>
              <View style={[styles.flexRow, styles.mT1]}>
                <View style={[{width:126}]}>
                  <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:18, fontSize:14, fontWeight:"500", color:'#FFFFFF'}]}>Already signed up?</Text>
                </View>
                <View>
                  <TouchableOpacity>
                    <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:20, fontSize:16, fontWeight:"700", color:'#FFFFFF'}]}>Continue thriving.</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;
