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


import CheckBox from '@react-native-community/checkbox';

import { styles } from '../asset/css/basestyle';

import LinearGradient from 'react-native-linear-gradient';

import HowcanGabayguideyou_ from '../resource/svg/HowcanGabayguideyou_.svg'
import Selectupto3goals from '../resource/svg/Selectupto3goals.svg'

import { RadioButton } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const window = Dimensions.get("window");
const screen = Dimensions.get("screen").height;
const screenwidth = Dimensions.get("screen").width; 

const OnboardingQuestion = () => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <ScrollView>
            <StatusBar barStyle={"dark-content"} backgroundColor={"#FFFFFF"}/>
            <View style={[ {backgroundColor:'#F5F5F5', paddingHorizontal:17, height:'100%'}]}>
                <View style={[ styles.alignFlexStart, {marginTop:68}]}>
                    <View style={[{marginBottom:10}]}>
                        <HowcanGabayguideyou_ />
                    </View>
                    <View>
                        <Selectupto3goals/>
                    </View>
                </View>
                <View style={[{width:'100%', marginTop:30}]}>
                    <View style={[{marginVertical:5}]}>
                        <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={[styles.alignCenter, styles.flexRow, {borderRadius:15},  {paddingVertical: 10, paddingHorizontal:10}]} colors={['#0091B6', '#19AF79']}>
                            <View style={[{marginRight:15}]}>
                                <View style={[{
                                    backgroundColor:'#FFFFFF', 
                                    shadowOpacity: 0.5, 
                                    shadowRadius: 3,
                                    shadowOffset: {
                                        height: 0,
                                        width: 0,
                                    },
                                    elevation: 10
                                }]}>
                                    <CheckBox
                                        // lineWidth={1}
                                        disabled={false}
                                        onCheckColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        onFillColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        onTintColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        tintColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }]}}
                                        
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    />
                                </View>
                            </View>
                            <View>
                                {/* <Text style={[{color:'#343434', fontWeight:'500', fontSize:15}]}>Work on difficult feelings</Text> */}
                                <Text style={[{color:'#FFFFFF', fontWeight:'500', fontSize:15}]}>Work on difficult feelings</Text>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={[{marginVertical:5}]}>
                        <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={[styles.alignCenter, styles.flexRow, {borderRadius:15},  {paddingVertical: 10, paddingHorizontal:10}]} colors={['#0091B6', '#19AF79']}>
                            <View style={[{marginRight:15}]}>
                                <View style={[{
                                    backgroundColor:'#FFFFFF', 
                                    shadowOpacity: 0.5, 
                                    shadowRadius: 3,
                                    shadowOffset: {
                                        height: 0,
                                        width: 0,
                                    },
                                    elevation: 10
                                }]}>
                                    <CheckBox
                                        // lineWidth={1}
                                        disabled={false}
                                        onCheckColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        onFillColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        onTintColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        tintColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }]}}
                                        
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    />
                                </View>
                            </View>
                            <View>
                                {/* <Text style={[{color:'#343434', fontWeight:'500', fontSize:15}]}>Work on difficult feelings</Text> */}
                                <Text style={[{color:'#FFFFFF', fontWeight:'500', fontSize:15}]}>Work on difficult feelings</Text>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={[{marginVertical:5}]}>
                        <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={[styles.alignCenter, styles.flexRow, {borderRadius:15},  {paddingVertical: 10, paddingHorizontal:10}]} colors={['#F5F5F5', '#F5F5F5']}>
                            <View style={[{marginRight:15}]}>
                                <View style={[{
                                    backgroundColor:'#FFFFFF', 
                                    shadowOpacity: 0.5, 
                                    shadowRadius: 3,
                                    shadowOffset: {
                                        height: 0,
                                        width: 0,
                                    },
                                    elevation: 10
                                }]}>
                                    <CheckBox
                                        // lineWidth={1}
                                        disabled={false}
                                        onCheckColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        onFillColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        onTintColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        tintColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }]}}
                                        
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    />
                                </View>
                            </View>
                            <View>
                                {/* <Text style={[{color:'#343434', fontWeight:'500', fontSize:15}]}>Work on difficult feelings</Text> */}
                                <Text style={[{color:'#343434', fontWeight:'500', fontSize:15}]}>Work on difficult feelings</Text>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={[{marginVertical:5}]}>
                        <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={[styles.alignCenter, styles.flexRow, {borderRadius:15},  {paddingVertical: 10, paddingHorizontal:10}]} colors={['#F5F5F5', '#F5F5F5']}>
                            <View style={[{marginRight:15}]}>
                                <View style={[{
                                    backgroundColor:'#FFFFFF', 
                                    shadowOpacity: 0.5, 
                                    shadowRadius: 3,
                                    shadowOffset: {
                                        height: 0,
                                        width: 0,
                                    },
                                    elevation: 10
                                }]}>
                                    <CheckBox
                                        // lineWidth={1}
                                        disabled={false}
                                        onCheckColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        onFillColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        onTintColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        tintColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }]}}
                                        
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    />
                                </View>
                            </View>
                            <View>
                                {/* <Text style={[{color:'#343434', fontWeight:'500', fontSize:15}]}>Work on difficult feelings</Text> */}
                                <Text style={[{color:'#343434', fontWeight:'500', fontSize:15}]}>Work on difficult feelings</Text>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={[{marginVertical:5}]}>
                        <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={[styles.alignCenter, styles.flexRow, {borderRadius:15},  {paddingVertical: 10, paddingHorizontal:10}]} colors={['#F5F5F5', '#F5F5F5']}>
                            <View style={[{marginRight:15}]}>
                                <View style={[{
                                    backgroundColor:'#FFFFFF', 
                                    shadowOpacity: 0.5, 
                                    shadowRadius: 3,
                                    shadowOffset: {
                                        height: 0,
                                        width: 0,
                                    },
                                    elevation: 10
                                }]}>
                                    <CheckBox
                                        // lineWidth={1}
                                        disabled={false}
                                        onCheckColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        onFillColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        onTintColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        tintColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }]}}
                                        
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    />
                                </View>
                            </View>
                            <View>
                                {/* <Text style={[{color:'#343434', fontWeight:'500', fontSize:15}]}>Work on difficult feelings</Text> */}
                                <Text style={[{color:'#343434', fontWeight:'500', fontSize:15}]}>Work on difficult feelings</Text>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={[{marginVertical:5}]}>
                        <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={[styles.alignCenter, styles.flexRow, {borderRadius:15},  {paddingVertical: 10, paddingHorizontal:10}]} colors={['#F5F5F5', '#F5F5F5']}>
                            <View style={[{marginRight:15}]}>
                                <View style={[{
                                    backgroundColor:'#FFFFFF', 
                                    shadowOpacity: 0.5, 
                                    shadowRadius: 3,
                                    shadowOffset: {
                                        height: 0,
                                        width: 0,
                                    },
                                    elevation: 10
                                }]}>
                                    <CheckBox
                                        // lineWidth={1}
                                        disabled={false}
                                        onCheckColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        onFillColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        onTintColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        tintColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }]}}
                                        
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    />
                                </View>
                            </View>
                            <View>
                                {/* <Text style={[{color:'#343434', fontWeight:'500', fontSize:15}]}>Work on difficult feelings</Text> */}
                                <Text style={[{color:'#343434', fontWeight:'500', fontSize:15}]}>Work on difficult feelings</Text>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={[{marginVertical:5}]}>
                        <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={[styles.alignCenter, styles.flexRow, {borderRadius:15},  {paddingVertical: 10, paddingHorizontal:10}]} colors={['#F5F5F5', '#F5F5F5']}>
                            <View style={[{marginRight:15}]}>
                                <View style={[{
                                    backgroundColor:'#FFFFFF', 
                                    shadowOpacity: 0.5, 
                                    shadowRadius: 3,
                                    shadowOffset: {
                                        height: 0,
                                        width: 0,
                                    },
                                    elevation: 10
                                }]}>
                                    <CheckBox
                                        // lineWidth={1}
                                        disabled={false}
                                        onCheckColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        onFillColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        onTintColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        tintColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }]}}
                                        
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    />
                                </View>
                            </View>
                            <View>
                                {/* <Text style={[{color:'#343434', fontWeight:'500', fontSize:15}]}>Work on difficult feelings</Text> */}
                                <Text style={[{color:'#343434', fontWeight:'500', fontSize:15}]}>Work on difficult feelings</Text>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={[{marginVertical:5}]}>
                        <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={[styles.alignCenter, styles.flexRow, {borderRadius:15},  {paddingVertical: 10, paddingHorizontal:10}]} colors={['#F5F5F5', '#F5F5F5']}>
                            <View style={[{marginRight:15}]}>
                                <View style={[{
                                    backgroundColor:'#FFFFFF', 
                                    shadowOpacity: 0.5, 
                                    shadowRadius: 3,
                                    shadowOffset: {
                                        height: 0,
                                        width: 0,
                                    },
                                    elevation: 10
                                }]}>
                                    <CheckBox
                                        // lineWidth={1}
                                        disabled={false}
                                        onCheckColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        onFillColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        onTintColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        tintColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }]}}
                                        
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    />
                                </View>
                            </View>
                            <View>
                                {/* <Text style={[{color:'#343434', fontWeight:'500', fontSize:15}]}>Work on difficult feelings</Text> */}
                                <Text style={[{color:'#343434', fontWeight:'500', fontSize:15}]}>Work on difficult feelings</Text>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={[{marginVertical:5}]}>
                        <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={[styles.alignCenter, styles.flexRow, {borderRadius:15},  {paddingVertical: 10, paddingHorizontal:10}]} colors={['#F5F5F5', '#F5F5F5']}>
                            <View style={[{marginRight:15}]}>
                                <View style={[{
                                    backgroundColor:'#FFFFFF', 
                                    shadowOpacity: 0.5, 
                                    shadowRadius: 3,
                                    shadowOffset: {
                                        height: 0,
                                        width: 0,
                                    },
                                    elevation: 10
                                }]}>
                                    <CheckBox
                                        // lineWidth={1}
                                        disabled={false}
                                        onCheckColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        onFillColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        onTintColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        tintColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }]}}
                                        
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    />
                                </View>
                            </View>
                            <View>
                                {/* <Text style={[{color:'#343434', fontWeight:'500', fontSize:15}]}>Work on difficult feelings</Text> */}
                                <Text style={[{color:'#343434', fontWeight:'500', fontSize:15}]}>Work on difficult feelings</Text>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={[{marginVertical:5}]}>
                        <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={[styles.alignCenter, styles.flexRow, {borderRadius:15},  {paddingVertical: 10, paddingHorizontal:10}]} colors={['#F5F5F5', '#F5F5F5']}>
                            <View style={[{marginRight:15}]}>
                                <View style={[{
                                    backgroundColor:'#FFFFFF', 
                                    shadowOpacity: 0.5, 
                                    shadowRadius: 3,
                                    shadowOffset: {
                                        height: 0,
                                        width: 0,
                                    },
                                    elevation: 10
                                }]}>
                                    <CheckBox
                                        // lineWidth={1}
                                        disabled={false}
                                        onCheckColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        onFillColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        onTintColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        tintColors={{ true: '#F15927', false: '#FFFFFF' }}
                                        style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }]}}
                                        
                                        value={toggleCheckBox}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    />
                                </View>
                            </View>
                            <View>
                                {/* <Text style={[{color:'#343434', fontWeight:'500', fontSize:15}]}>Work on difficult feelings</Text> */}
                                <Text style={[{color:'#343434', fontWeight:'500', fontSize:15}]}>Work on difficult feelings</Text>
                            </View>
                        </LinearGradient>
                    </View>
                </View>
                <View style={[{marginBottom:30}]}>
                    <View style={[styles.justifyCenter, styles.alignCenter]}>
                        <View>
                            <TouchableOpacity>
                                <View style={[{backgroundColor:'#16A9CF', height:55, width:(screenwidth - 32), borderRadius:15, justifyContent:'center'}]}>
                                    <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:22, fontSize:18, fontWeight:"700", color:'#FFFFFF', textAlign:'center'}]}>Submit</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View> 
                </View>
            </View>
        </ScrollView>
    );
};

export default OnboardingQuestion;
