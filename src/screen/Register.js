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
  Image,
  Modal,
  FlatList,
} from 'react-native';

import { 
  Dimensions 
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

import CheckBox from '@react-native-community/checkbox';

import { styles, custom } from '../asset/css/basestyle';

import GABAY_small from '../resource/svg/GABAY_small.svg'
import Imreadyandwilling from '../resource/svg/Imreadyandwilling.svg'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Register = () => {

    const [checked, setChecked] = React.useState(false);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ]);

    const HeaderComponent = () =>{
        return(
            <View style={[{marginLeft:18}]}>
                <View style={[styles.flexRow, styles.alignCenter, {marginTop:40}]}>
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
        )
    }

    const FooterComponentAsBody = () =>{
        return(
            <View style={[{paddingVertical:16, paddingHorizontal:17}]}>
                <View style={[styles.mB1]}>
                    <TextInput
                        style={[{
                            paddingHorizontal:16,
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
                        placeholder="First Name"
                        placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
                        keyboardType="text"
                    />
                </View>
                <View style={[styles.mB1]}>
                    <TextInput
                        style={[{
                            paddingHorizontal:16,
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
                        placeholder="Last Name"
                        placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
                        keyboardType="text"
                    />
                </View>
                <View style={[styles.mB1]}>
                    <DropDownPicker
                        style={{
                            paddingHorizontal:16,
                            height:55,
                            borderRadius:15,
                            borderColor:'transparent',
                            borderTopEndRadius:15,
                            borderTopStartRadius:15,
                            backgroundColor:'#FFFFFF',
                            shadowOpacity: 0.5,
                            shadowRadius: 3,
                            shadowOffset: {
                                height: 0,
                                width: 0,
                            },
                            elevation: 2
                        }}
                        textStyle={{
                            fontStyle:'normal', 
                            textfontFamily:'Quicksand-Bold',
                            color:'black'
                        }}
                        dropDownContainerStyle={{borderColor:'transparent',}}
                        placeholder="Select pronouns"
                        open={open}
                        value={value}
                        items={items}
                        dropDownDirection={'BOTTOM'}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </View>
                <View style={[styles.mB1]}>
                    <DropDownPicker
                        style={{
                            paddingHorizontal:16,
                            height:55,
                            borderRadius:15,
                            borderColor:'transparent',
                            borderTopEndRadius:15,
                            borderTopStartRadius:15,
                            backgroundColor:'#FFFFFF',
                            shadowOpacity: 0.5,
                            shadowRadius: 3,
                            shadowOffset: {
                                height: 0,
                                width: 0,
                            },
                            elevation: 2
                        }}
                        textStyle={{
                            fontStyle:'normal', 
                            textfontFamily:'Quicksand-Bold',
                            color:'black'
                        }}
                        dropDownContainerStyle={{borderColor:'transparent',}}
                        placeholder="Select age group"
                        open={open}
                        value={value}
                        items={items}
                        dropDownDirection={'BOTTOM'}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </View>
                <View style={[styles.mB1]}>
                    <TextInput
                        style={[{
                            paddingHorizontal:16,
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
                        placeholder="Email"
                        placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
                        keyboardType="text"
                    />
                </View>
                <View style={[styles.mB1]}>
                    <TextInput
                        style={[{
                            paddingHorizontal:16,
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
                <View style={[styles.mB1]}>
                    <TextInput
                        style={[{
                            paddingHorizontal:16,
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
                        placeholder="Confirm Password"
                        placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
                        keyboardType="text"
                        secureTextEntry
                    />
                </View>
                <View style={[styles.mB1]}>
                    <DropDownPicker
                        style={{
                            paddingHorizontal:16,
                            height:55,
                            borderRadius:15,
                            borderColor:'transparent',
                            borderTopEndRadius:15,
                            borderTopStartRadius:15,
                            backgroundColor:'#FFFFFF',
                            shadowOpacity: 0.5,
                            shadowRadius: 3,
                            shadowOffset: {
                                height: 0,
                                width: 0,
                            },
                            elevation: 2
                        }}
                        textStyle={{
                            fontStyle:'normal', 
                            textfontFamily:'Quicksand-Bold',
                            color:'black'
                        }}
                        dropDownContainerStyle={{borderColor:'transparent',}}
                        placeholder="Select Prefered Language"
                        open={open}
                        value={value}
                        items={items}
                        dropDownDirection={'BOTTOM'}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </View>
                <View style={[styles.flexRow, styles.alignCenter, {marginTop:20}]}>
                    <View style={[{marginRight:10}]}>
                        <CheckBox
                            lineWidth={1}
                            disabled={false}
                            value={true}
                            //    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                    </View>
                    <View>
                        <View style={[styles.flexRow, styles.alignCenter]}>
                            <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:15, fontSize:14, fontWeight:"600", color:'rgba(0, 0, 0, 0.6)'}]}>
                                I agree to the 
                            </Text>
                            <TouchableOpacity>
                                <Text style={[{marginHorizontal: 5,fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:15, fontSize:14, fontWeight:"600", color:'#16C3CF'}]}>
                                    Terms and Conditions
                                </Text>
                            </TouchableOpacity>
                            <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:15, fontSize:14, fontWeight:"600", color:'rgba(0, 0, 0, 0.6)'}]}>
                                and
                            </Text>
                        </View>
                        <View style={[styles.flexRow, styles.alignCenterm, {marginTop:5}]}>
                            <TouchableOpacity>
                                <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:15, fontSize:14, fontWeight:"600", color:'#16C3CF'}]}>
                                    Privacy Policy
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={[{marginTop:30}]}>
                    <TouchableOpacity>
                        <View style={[{backgroundColor:'#16A9CF', height:55, borderRadius:15, justifyContent:'center'}]}>
                            <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:22, fontSize:18, fontWeight:"700", color:'#FFFFFF', textAlign:'center'}]}>I’m able</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[{marginBottom:150, marginTop:30}, styles.justifyCenter, styles.alignFlexEnd, styles.flexRow]}>
                    <View>
                        <Text style={[{fontStyle:'normal', textfontFamily:'Quicksand-Bold', lineHeight:15, fontSize:14, fontWeight:"500", color:'rgba(0, 0, 0, 0.6)'}]}>
                            Have an account?
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={[{marginHorizontal: 5,fontStyle:'normal', textfontFamily:'Quicksand-Bold', fontSize:20, fontWeight:"700", color:'#343434'}]}>
                                Log in.
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View>
            <StatusBar barStyle={"dark-content"} backgroundColor={"#FFFFFF"}/>
            <ImageBackground style = {[{height:windowHeight}]} source={require('../resource/jpg/banig2.jpg')} resizeMode="cover"> 
                {HeaderComponent()}
                <View style={[{backgroundColor:'#F8F8F8', height:windowHeight, borderTopStartRadius:30, borderTopEndRadius:30, marginTop:55, paddingTop:30}]}>
                    <FlatList
                        ListFooterComponent={FooterComponentAsBody()}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

export default Register;

