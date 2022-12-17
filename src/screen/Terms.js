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
import TermsofUseandPrivacyPolicy from '../resource/svg/TermsofUseandPrivacyPolicy.svg'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Terms = () => {

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
                <View style={[styles.flexRow, styles.alignCenter, {marginTop:70}]}>
                    <TermsofUseandPrivacyPolicy/>
                </View>
            </View>
        )
    }

    const Terms = () =>{
        return(
            <View style={[{paddingHorizontal:22, paddingBottom:'60%'}]}>
                <View style={[{marginBottom:20}]}>
                    <Text style={[{color:'rgba(0, 0, 0, 0.6)', fontWeight:'700'}]}>Terms</Text>
                </View>
                <View>
                    <Text style={[{color:'rgba(0, 0, 0, 0.6)'}]}>
                        Condimentum vitae sapien pellentesque habitant morbi tristique senectus. 
                        Vestibulum sed arcu non odio. Dui nunc mattis enim ut tellus elementum sagittis. 
                        Ultricies integer quis auctor elit sed vulputate mi sit. Eget mauris pharetra et ultrices neque. 
                        Dui id ornare arcu odio ut sem nulla. Eu tincidunt tortor aliquam nulla facilisi cras. 
                        Adipiscing bibendum est ultricies integer quis auctor elit sed. Volutpat diam ut venenatis tellus in metus vulputate eu.

                        Ante in nibh mauris cursus mattis. Orci ac auctor augue mauris augue neque gravida. 
                        Enim diam vulputate ut pharetra sit. Ipsum consequat nisl vel pretium lectus. 
                        Scelerisque felis imperdiet proin fermentum leo vel orci porta non. 
                        Senectus et netus et malesuada fames ac. Faucibus et molestie ac feugiat. 

                        Condimentum vitae sapien pellentesque habitant morbi tristique senectus. 
                        Vestibulum sed arcu non odio. Dui nunc mattis enim ut tellus elementum sagittis. 
                        Ultricies integer quis auctor elit sed vulputate mi sit. 
                        Eget mauris pharetra et ultrices neque. Dui id ornare arcu odio ut sem nulla. 
                        Eu tincidunt tortor aliquam nulla facilisi cras. Adipiscing bibendum est ultricies integer quis auctor elit sed. Volutpat diam ut venenatis tellus in metus vulputate eu.

                        Ante in nibh mauris cursus mattis. 
                        Orci ac auctor augue mauris augue neque gravida. 
                        Enim diam vulputate ut pharetra sit. 
                        Ipsum consequat nisl vel pretium lectus. 
                        Scelerisque felis imperdiet proin fermentum leo vel orci porta non. 
                        Senectus et netus et malesuada fames ac. Faucibus et molestie ac feugiat. 
                    </Text>
                    <Text style={[{color:'rgba(0, 0, 0, 0.6)'}]}>
                        Condimentum vitae sapien pellentesque habitant morbi tristique senectus. 
                        Vestibulum sed arcu non odio. Dui nunc mattis enim ut tellus elementum sagittis. 
                        Ultricies integer quis auctor elit sed vulputate mi sit. Eget mauris pharetra et ultrices neque. 
                        Dui id ornare arcu odio ut sem nulla. Eu tincidunt tortor aliquam nulla facilisi cras. 
                        Adipiscing bibendum est ultricies integer quis auctor elit sed. Volutpat diam ut venenatis tellus in metus vulputate eu.

                        Ante in nibh mauris cursus mattis. Orci ac auctor augue mauris augue neque gravida. 
                        Enim diam vulputate ut pharetra sit. Ipsum consequat nisl vel pretium lectus. 
                        Scelerisque felis imperdiet proin fermentum leo vel orci porta non. 
                        Senectus et netus et malesuada fames ac. Faucibus et molestie ac feugiat. 

                        Condimentum vitae sapien pellentesque habitant morbi tristique senectus. 
                        Vestibulum sed arcu non odio. Dui nunc mattis enim ut tellus elementum sagittis. 
                        Ultricies integer quis auctor elit sed vulputate mi sit. 
                        Eget mauris pharetra et ultrices neque. Dui id ornare arcu odio ut sem nulla. 
                        Eu tincidunt tortor aliquam nulla facilisi cras. Adipiscing bibendum est ultricies integer quis auctor elit sed. Volutpat diam ut venenatis tellus in metus vulputate eu.

                        Ante in nibh mauris cursus mattis. 
                        Orci ac auctor augue mauris augue neque gravida. 
                        Enim diam vulputate ut pharetra sit. 
                        Ipsum consequat nisl vel pretium lectus. 
                        Scelerisque felis imperdiet proin fermentum leo vel orci porta non. 
                        Senectus et netus et malesuada fames ac. Faucibus et molestie ac feugiat. 
                    </Text>
                    <Text style={[{color:'rgba(0, 0, 0, 0.6)'}]}>
                        Condimentum vitae sapien pellentesque habitant morbi tristique senectus. 
                        Vestibulum sed arcu non odio. Dui nunc mattis enim ut tellus elementum sagittis. 
                        Ultricies integer quis auctor elit sed vulputate mi sit. Eget mauris pharetra et ultrices neque. 
                        Dui id ornare arcu odio ut sem nulla. Eu tincidunt tortor aliquam nulla facilisi cras. 
                        Adipiscing bibendum est ultricies integer quis auctor elit sed. Volutpat diam ut venenatis tellus in metus vulputate eu.

                        Ante in nibh mauris cursus mattis. Orci ac auctor augue mauris augue neque gravida. 
                        Enim diam vulputate ut pharetra sit. Ipsum consequat nisl vel pretium lectus. 
                        Scelerisque felis imperdiet proin fermentum leo vel orci porta non. 
                        Senectus et netus et malesuada fames ac. Faucibus et molestie ac feugiat. 

                        Condimentum vitae sapien pellentesque habitant morbi tristique senectus. 
                        Vestibulum sed arcu non odio. Dui nunc mattis enim ut tellus elementum sagittis. 
                        Ultricies integer quis auctor elit sed vulputate mi sit. 
                        Eget mauris pharetra et ultrices neque. Dui id ornare arcu odio ut sem nulla. 
                        Eu tincidunt tortor aliquam nulla facilisi cras. 
                        Adipiscing bibendum est ultricies integer quis auctor elit sed. 
                        Volutpat diam ut venenatis tellus in metus vulputate eu.

                        Ante in nibh mauris cursus mattis. 
                        Orci ac auctor augue mauris augue neque gravida. 
                        Enim diam vulputate ut pharetra sit. 
                        Ipsum consequat nisl vel pretium lectus. 
                        Scelerisque felis imperdiet proin fermentum leo vel orci porta non. 
                        Senectus et netus et malesuada fames ac. Faucibus et molestie ac feugiat. 
                    </Text>
                </View>
            </View>
        )
    }

    return (
        <View>
            <StatusBar barStyle={"dark-content"} backgroundColor={"#FFFFFF"}/>
            <ImageBackground style = {[{height:windowHeight}]} source={require('../resource/jpg/banig2.jpg')} resizeMode="cover"> 
                {HeaderComponent()}
                <View style={[{backgroundColor:'#F8F8F8', height:'100%', borderTopStartRadius:30, borderTopEndRadius:30, marginTop:45, paddingTop:30}]}>
                    <ScrollView>
                        {Terms()}
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Terms;

