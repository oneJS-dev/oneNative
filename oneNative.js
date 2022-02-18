import {BaseComponent, Component, readFlavor} from '@onejs-dev/onecore';
import {ActivityIndicator as activityIndicator, Button as button, FlatList as flatList, Image as image, 
    ImageBackground as imageBackground, KeyboardAvoidingView as keyboardAvoidingView, Modal as modal, 
    Pressable as pressable, RefreshControl as refreshControl, ScrollView as scrollView, SectionList as sectionList, 
    StatusBar as statusBar, Switch as RNSwitch, Text as text, TextInput as textInput, TouchableHighlight as touchableHighlight, 
    TouchableOpacity as touchableOpacity, TouchableWithoutFeedback as touchableWithoutFeedback, View as view, 
    VirtualizedList as virtualizedList, DrawerLayoutAndroid as drawerLayoutAndroid, 
    TouchableNativeFeedback as touchableNativeFeedback, InputAccessoryView as inputAccessoryView, 
    SafeAreaView as safeAreaView} from 'react-native';

// import { View as RNView, Text, Button, TextInput, Switch, TouchableOpacity} from './oneNative.js';
import { Platform, Animated, Easing } from 'react-native';
import React from 'react';
// import { BaseComponent, } from '@onejs-dev/onecore';
import { NativeRouter, useLocation, useMatch, useNavigate} from "react-router-native";//https://v5.reactrouter.com/native/guides/quick-start

import {LinearGradient} from 'expo-linear-gradient';


import DateTimePicker from '@react-native-community/datetimepicker';//https://github.com/react-native-datetimepicker/datetimepicker
import Slider from '@react-native-community/slider';
import RNPickerSelect from 'react-native-picker-select';

import Svg, {SvgXml} from 'react-native-svg';

import {AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons} from '@expo/vector-icons'; 

import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';//To be able to fetch Icon svg file

export const ActivityIndicator = BaseComponent('ActivityIndicator', false, activityIndicator);
export const Button = BaseComponent('Button', false, button);
export const FlatList = BaseComponent('FlatList', false, flatList);
export const Image = BaseComponent('Image', false, image);
export const ImageBackground = BaseComponent('ImageBackground', true, imageBackground);
export const KeyboardAvoidingView = BaseComponent('KeyboardAvoidingView', true, keyboardAvoidingView);
export const Modal = BaseComponent('Modal', true, modal);
export const Pressable = BaseComponent('Pressable', true, pressable);
export const RefreshControl = BaseComponent('RefreshControl', false, refreshControl);
export const ScrollView = BaseComponent('ScrollView', true, scrollView);
export const SectionList = BaseComponent('SectionList', false, sectionList);
export const StatusBar = BaseComponent('StatusBar', false, statusBar);
export const Switch = BaseComponent('Switch', false, RNSwitch);
export const Text = BaseComponent('Text', true, text);
export const TextInput = BaseComponent('TextInput', false, textInput);
export const TouchableHighlight = BaseComponent('TouchableHighlight', true, touchableHighlight);
export const TouchableOpacity = BaseComponent('TouchableOpacity', true, touchableOpacity);
export const TouchableWithoutFeedback = BaseComponent('TouchableWithoutFeedback', true, touchableWithoutFeedback);
export const RNView = BaseComponent('View', true, view);
export const VirtualizedList = BaseComponent('VirtualizedList', false, virtualizedList);
export const DrawerLayoutAndroid = BaseComponent('DrawerLayoutAndroid', true, drawerLayoutAndroid);
export const TouchableNativeFeedback = BaseComponent('TouchableNativeFeedback', true, touchableNativeFeedback);
export const InputAccessoryView = BaseComponent('InputAccessoryView', true, inputAccessoryView);
export const SafeAreaView = BaseComponent('SafeAreaView', true, safeAreaView);



const IconAntDesign = BaseComponent('AntDesign', false, AntDesign);
const IconEntypo = BaseComponent('Entypo', false, Entypo);
const IconEvilIcons = BaseComponent('EvilIcons', false, EvilIcons);
const IconFeather = BaseComponent('Feather', false, Feather);
const IconFontAwesome = BaseComponent('FontAwesome', false, FontAwesome);
const IconFontAwesome5 = BaseComponent('FontAwesome5', false, FontAwesome5);
const IconFontisto = BaseComponent('Fontisto', false, Fontisto);
const IconIonicons = BaseComponent('Ionicons', false, Ionicons);
const IconMaterialCommunityIcons = BaseComponent('MaterialCommunityIcons', false, MaterialCommunityIcons);
const IconMaterialIcons = BaseComponent('MaterialIcons', false, MaterialIcons);
const IconOcticons = BaseComponent('Octicons', false, Octicons);
const IconSimpleLineIcons = BaseComponent('SimpleLineIcons', false, SimpleLineIcons);

const ListPicker = BaseComponent('RNPickerSelect', false, RNPickerSelect);  //https://github.com/lawnstarter/react-native-picker-select
const DTPicker = BaseComponent('DateTimePicker', false, DateTimePicker);    //https://github.com/react-native-datetimepicker/datetimepicker
const SliderPicker = BaseComponent('Slider', false, Slider);                //https://github.com/callstack/react-native-slider/tree/main/src
const AnimatedView = BaseComponent('Animated.View', true, Animated.View);

const Gradient = BaseComponent('LinearGradient', true, LinearGradient);
const svg = BaseComponent('Svg', true, Svg);
// const use = BaseComponent('Use', false, Use);
// const circle = BaseComponent('Circle', false, Circle);
// const rect = BaseComponent('Rect', false, Rect);
// const SvgRef = BaseComponent('SvgUri', false, SvgUri);
const Xml = BaseComponent('SvgXml', false, SvgXml);
// const defs = BaseComponent('Defs', true, Defs);
// const svgGradient = BaseComponent('Defs', true, SvgGradient);
// const stop = BaseComponent('Stop', false, Stop);
// const ellipse = BaseComponent('Ellipse', false, Ellipse);

//iconFamily values: AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons
export const IconFont = ({family='Ionicons', ...attributes}) => { 
    if(family === 'AntDesign') return IconAntDesign(attributes);
    else if(family === 'Entypo') return IconEntypo(attributes);
    else if(family === 'EvilIcons') return IconEvilIcons(attributes);
    else if(family === 'Feather') return IconFeather(attributes);
    else if(family === 'FontAwesome') return IconFontAwesome(attributes);
    else if(family === 'FontAwesome5') return IconFontAwesome5(attributes);
    else if(family === 'Fontisto') return IconFontisto(attributes);
    else if(family === 'MaterialCommunityIcons') return IconMaterialCommunityIcons(attributes);
    else if(family === 'MaterialIcons') return IconMaterialIcons(attributes);
    else if(family === 'Octicons') return IconOcticons(attributes);
    else if(family === 'SimpleLineIcons') return IconSimpleLineIcons(attributes);
    else return IconIonicons(attributes);
}

//Create generate gradient

//The purpose of this module is to generate ios shadows equivalent to the ones generated with Android 'elevation' property
export const generateShadow = (elevation, os='android') => {//min elevation 0, max elevation 24. Remove os as input and use internally
    if(!elevation) return {};
    if(typeof elevation !== 'number') {console.error('generateShadow: elevation must be a number.'); return {};}
    if(os === 'android') return {elevation: elevation};
    else if (os === 'ios') return {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: elevationn / 2,
        },
        shadowOpacity: 0.01739 * elevation + 0.1626,//[1-24] => [0.18, 0.58]
        shadowRadius: 0.6956 * elevation + 0.3043,//[1-24] => [1, 16]
    }
    else if(os === 'web') return {//https://ethercreative.github.io/react-native-shadow-generator/
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px ' + Math.ceil(10 / 24 * elevation + 1) + 'px ' + Math.floor(14 / 24 * elevation + 1) + 'px ' + Math.ceil(7 / 24 * elevation) + 'px, ' +
                   +'rgba(0, 0, 0, 0.2) 0px ' + Math.round(elevation) + 'px ' + Math.ceil(38 / 24 * elevation) + 'px ' + Math.round(3 / 24 * elevation) + 'px, ' +
                   +'rgba(0, 0, 0, 0.2) 0px ' + Math.round(9 / 24 * elevation) + 'px ' + Math.floor(44 / 24 * elevation) + 'px ' + Math.round(8 / 24 * elevation) + 'px'
    }
    return {};
}
/* Things to do:
- Create input
//reset: It is a button that resets the form
//search: Exactly as text input but may be styled differently

  'button', 'checkbox', ,  'email',  'hidden', 'number', 'password',   'reset', 'search', 'submit', 'tel', 'text',  'url', 'week'];
non native: 'color', 'date', 'datetime-local', 'file',  'image', 'month', 'radio', 'range', 'time',
- Create view with routing and animations
- Create unit tests

Document picker and image picker from expo

*/
//Inputs on Web missing on native: week, month, reset, button, hidden, search, color, radio, submit
    /*
        Native Web onChange: When the element loses focus after its value was changed, but not committed.
        React onChange: Whenever a form field is changed, the event is fired. Works the same as web's 'onInput' event.
        TextInput onChange: Callback that is called when the text input's text changes. 
            ({ nativeEvent: { eventCount, target, text} }) => void
        TextInput onChangeText: Callback that is called when the text input's text changes. Changed text is
            passed as a single string argument to the callback handler.
        Switch onChange: Invoked when the user tries to change the value of the switch. Receives the change 
            event as an argument. If you want to only receive the new value, use onValueChange instead.
        Switch onValueChange: Invoked when the user tries to change the value of the switch. Receives the 
            new value as an argument. If you want to instead receive an event, use onChange.
        TODO: Add swipe card input for Native and Web
    */
    /* 
    (android only) 'autoComplete' specifies autocomplete hints for the system, so it can provide autofill. On Android, 
        the system will always attempt to offer autofill by using heuristics to identify the type of content. 
        To disable autocomplete, set autoComplete to off. Possible values for autoComplete are:
        birthdate-day, birthdate-full, birthdate-month, birthdate-year, cc-csc, cc-exp, cc-exp-day, cc-exp-month, 
        cc-exp-year, cc-number, email, gender, name, name-family, name-given, name-middle, name-middle-initial, 
        name-prefix, name-suffix, password, password-new, postal-address, postal-address-country, postal-address-extended, 
        postal-address-extended-postal-code, postal-address-locality, postal-address-region, postal-code, street-address, 
        sms-otp, tel, tel-country-code, tel-national, tel-device, username, username-new, off

    (ios only) 'textContentType' specifies autocomplete hints for the system, so it can provide autofill. Options: 
        none, URL, addressCity, addressCityAndState, addressState, countryName, creditCardNumber, emailAddress, 
        familyName, fullStreetAddress, givenName, jobTitle, location, middleName, name, namePrefix, nameSuffix, 
        nickname, organizationName, postalCode, streetAddressLine1, streetAddressLine2, sublocality, telephoneNumber, 
        username, password, newPassword, oneTimeCode 
    */
export const mergeStyles = (...styles) => {
    //Array merge
    // let finalStyle = [];
    // styles?.forEach(style => {
    //     if(Array.isArray(style)) finalStyle = [...finalStyle, ...style];
    //     else if(style && typeof style === 'object') finalStyle.push(style);
    // });
    // return finalStyle;
    //Object merge
    let finalStyle = {};
    styles?.forEach((style) => {
        if(Array.isArray(style)) style.forEach(styleObj => {if(styleObj && typeof styleObj === 'object') finalStyle = {...finalStyle, ...styleObj};});
         else if(style && typeof style === 'object') finalStyle = {...finalStyle, ...style};
    });
    return finalStyle;
}

export const Input = ({type, flavor=readFlavor('default'), ...attributes}={}) => {   
    if(attributes['onChange']) {//Set a consistent behaviour for onChange attribute
        if(type === 'checkbox' || type === 'range' || type === 'list' || type === 'date' || type === 'time' || type === 'datetime') {//Non-TextInputs
            attributes['onValueChange'] = attributes['onChange'];
        }
        else {//TextInput
            attributes['onChangeText'] = attributes['onChange'];
            let flavorStyle = {
                color: flavor?.textColor ?? '#333',
                fontSize: flavor?.textSize ?? 16,
                fontFamily: flavor?.textFamily ?? undefined,
                fontWeight: flavor?.textWeight ?? 'normal',
                backgroundColor: flavor?.backgroundColor ?? 'transparent',
                borderColor: flavor?.borderColor ?? 'none',
                borderWidth: flavor?.borderWidth ?? 0,
                borderRadius: flavor?.radius ?? 0,
                paddingLeft: 10,
                ...generateShadow(flavor?.elevation ?? 0)                
            }
            attributes['style'] = mergeStyles(flavorStyle, attributes['style']);    
        }
        delete attributes['onChange'];
    }
    if(!type || type === 'text') {//Regular TextInput
        return TextInput(attributes);
    } 
    //Standard RN TextInput-s
    else if(type === 'number') return TextInput({keyboardType: 'numeric', textContentType: 'newPassword', ...attributes});
    else if(type === 'email') return TextInput({keyboardType: 'email-address', autoComplete: 'email', textContentType: 'emailAddress', ...attributes});
    else if(type === 'url') return TextInput({keyboardType: 'url', textContentType: 'URL', ...attributes});
    else if(type === 'tel') return TextInput({keyboardType: 'phone-pad', autoComplete: 'tel', textContentType: 'telephoneNumber', ...attributes});
    /*(ios only) paswordRules: 
        When using textContentType as newPassword on iOS we can let the OS know the minimum requirements of the 
        password so that it can generate one that will satisfy them.
    */
    else if(type === 'password') return TextInput({autoComplete: 'password', textContentType: 'password', secureTextEntry: true, ...attributes});
    else if(type === 'new-password') return TextInput({autoComplete: 'password-new', textContentType: 'newPassword', secureTextEntry: true, ...attributes});//TODO: Insert validations
  
    /*
    RN multiline: It is important to note that this aligns the text to the top on iOS, and centers it on Android. 
    Use with textAlignVertical set to 'top' for the same behavior in both platforms.
    (android only) numberOfLines: Sets the number of lines for a TextInput
    */
    else if(type === 'textarea'){
        let textAreaStyle = {textAlignVertical: 'top'};
        if(attributes['style'] == null) attributes['style'] = textAreaStyle;
        else if(Array.isArray(attributes['style'])) attributes['style'].unshift(textAreaStyle);
        else if(typeof attributes['style'] === 'object') attributes['style'] = {...textAreaStyle, ...attributes['style']}; 
        return TextInput({multiline: true, numberOfLines: (attributes['numberOfLines'] ? attributes['numberOfLines'] : 5), ...attributes});
    } 

    //Button Input: It can use same properties as View
    else if(type === 'button') {
        const buttonTextStyle = {
            backgroundColor: 'transparent',
            color: flavor?.primaryColor ?? 'blue',
            fontSize: flavor?.textSize ?? 16,
            fontFamily: flavor?.textFamily ?? undefined,
            fontWeight: flavor?.textWeight ?? 'normal',
            textAlign: 'center',
            textAlignVertical: 'center',
        }
        const buttonLayoutStyle = {
            height: 40,    
        }
        attributes['style'] = mergeStyles(buttonLayoutStyle, attributes['style']);    
        if(flavor) attributes['flavor'] = flavor; 
        const onPress = attributes['onPress'] ?? (attributes['onClick'] ?? undefined);
        delete attributes['onPress'];
        delete attributes['onClick'];

        const title = attributes['title'] ?? '';//Title String
        delete attributes['title'];
        const Icon = attributes['Icon'] ?? null;//Icon element. TODO: Replace this with icon and folder
        delete attributes['Icon'];
        const content = attributes['content'] ?? {x: 'center', y: 'center', direction: 'row'};//Positions Title and Icon
        delete attributes['content'];
        if(attributes['link']) {//Link to change current url
            attributes['url'] = {link: attributes['link']};
            delete attributes['link'];
            return View({content: content, ...attributes})([Text({style: buttonTextStyle})(title)]);//Insert icon
        }
        return TouchableOpacity({onPress: onPress})(View({content: content, ...attributes})([Text({style: buttonTextStyle})(title)]))
        //Note: elevation/shadow does not work well with TouchableOpacity, opacity is inconsistent when pressed 
    }

    /*
    Checkbox uses RN Switch:
    <Switch trackColor={{ false: 'grey', true: 'blue' }} thumbColor={isEnabled ? 'yellow' : "white"} ios_backgroundColor='black' onValueChange={toggleSwitch} value={isEnabled}/>
    */
    else if(type === 'checkbox'){
        let trackColor = {'false': '#999', 'true': flavor?.primaryColor ?? 'blue'};
        let ios_backgroundColor = '#999'; //Equivalent to 'false' trackColor
        let thumbColor = "#f1f1f1";
        return Switch({trackColor: trackColor, ios_backgroundColor: ios_backgroundColor, thumbColor: thumbColor, ...attributes});
    } 

    /*
    Slider: https://github.com/callstack/react-native-slider/tree/main/src
    onValueChange: Callback continuously called while the user is dragging the slider. No 'onChange' callback.
    JSX Example:
        <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
        />
    */
    else if(type === 'range') { 
        if(attributes['min']) {
            attributes['minimumValue'] = attributes['min'];
            delete attributes['min'];
        }
        if(attributes['max']) {
            attributes['maximumValue'] = attributes['max'];
            delete attributes['max'];
        }
        minimumTrackTintColor = flavor?.primaryColor ?? 'blue';
        maximumTrackTintColor="#666";
        thumbTintColor = '#f1f1f1';
        return SliderPicker({minimumTrackTintColor: minimumTrackTintColor, maximumTrackTintColor: maximumTrackTintColor, thumbTintColor: thumbTintColor, ...attributes});
    }
    
    /*RNPickerSelect: https://github.com/lawnstarter/react-native-picker-select
    Each item in the items array should be in the following format:
        {label: 'Orange', value: 'orange', key: 'orange', color: 'orange', inputLabel: 'Orange!'}
        - label and value are required
        - key, color, and inputLabel are optional
        - key will be set to equal label if not included
        - value can be any data type
        - If inputLabel exists, the TextInput will display that value instead of the label

    There is no onChange function, only onValueChange.

    JSX Example:
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
    */
    else if(type === 'list') {        
        let commonListStyle = {
            color: flavor?.textColor ?? '#333',
            fontSize: flavor?.textSize ?? 16,
            fontFamily: flavor?.textFamily ?? undefined,
            fontWeight: flavor?.textWeight ?? 'normal',
            backgroundColor: flavor?.backgroundColor ?? 'transparent',
            borderColor: flavor?.borderColor ?? 'none',
            borderWidth: flavor?.borderWidth ?? 0,
            borderRadius: flavor?.radius ?? 0,
            // textDecorationLines: 'none',
            paddingLeft: 10
        }
        let listStyle = {inputAndroid: commonListStyle, inputIos: commonListStyle};
        attributes['style'] = mergeStyles(listStyle, attributes['style']);
        // if(attributes['style'] == null) attributes['style'] = listStyle;
        // else if(Array.isArray(attributes['style'])) attributes['style'].unshift(listStyle);
        // else if(typeof attributes['style'] === 'object') attributes['style'] = {...listStyle, ...attributes['style']};
        if(attributes['options']) {//To make it consistent with web
            attributes['items'] = attributes['options'];
            delete attributes['options'];
        }
        //useNativeAndroidPickerStyle: setting this flag to false will mimic the default iOS presentation where a tappable TextInput is displayed.
        return ListPicker({useNativeAndroidPickerStyle: false, Icon: ()=>IconFont({name: "chevron-down", size: 24, color: "#999"}), ...attributes});
    }

    /*
    DateTimePicker: https://github.com/react-native-datetimepicker/datetimepicker
    mode: "date" (default for iOS and Android and Windows), "time", "datetime" (iOS only), "countdown" (iOS only)
    onChange: Date change handler. This is called when the user changes the date or time in the UI. It receives the event and the date as parameters
    maximumDate: Defines the maximum date that can be selected. Note that on Android, this only works for date mode because TimePicker does not support this.
    minimumDate: Defines the minimum date that can be selected. Note that on Android, this only works for date mode because TimePicker does not support this.
    */    
    else if(type === 'date') return DTPicker({mode: 'date', ...attributes});
    else if(type === 'time') return DTPicker({mode: 'time', ...attributes});
    else if(type === 'datetime') return DTPicker({mode: 'datetime', ...attributes})
    //@TODO: else if(type === 'image')
    //@TODO else if(type === 'file')
}

 /*POSITION CONTENT*/
const positionContent = (content) => {
    // console.log('position content called')
    let direction = 'row';
    let alignment = ['top', 'left'];
    let longitudinal = 'flex-start';//Positioning in the content direction
    let transversal = 'flex-start'; //Positioning in the cross direction, perpendicular to the content
    let overflow = 'flex-start';    //Positioning of the different rows and columns of content that overflow how are they aligned to each other.
    let finalStyle = {};
    if(content) {
        //v, h, direction wrap, reverse, 
        if(typeof content === 'object') {
            direction = content.direction;
            alignment = [content.y, content.x];
        }
        else if(typeof content === 'string') {
            if(content.includes('column')) direction = 'column';
            if(content.includes('-')) alignment = content.split(' ').filter(item => {return item.includes('-')})[0];
            alignment = alignment.split('-');
        }
        longitudinal = direction === 'row' ? alignment[1] : alignment[0]; //in the content direction
        transversal = direction === 'row' ? alignment[0] : alignment[1];  

        //Options for longitudinal alignment in CSS (justify-content): flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right
        //Options for longitudinal alignment in oneJS: left, center, right (for rows). top, center, bottom (for cols). space, distribute (for both)
        if(longitudinal === 'center') longitudinal = longitudinal;
        else if(longitudinal === 'bottom' || longitudinal === 'right') longitudinal = 'flex-end';
        else if(longitudinal === 'distribute') longitudinal = 'space-around';
        else if(longitudinal === 'space') longitudinal = 'space-between';
        else longitudinal = 'flex-start';       

        //Options for transversal alignemnt in CSS (align-items): stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end
        //Options for transversal alignment in oneJS: left, center, right (for cols). top, center, bottom (for rows). stretch?
        //Options for transversal alignment of the contet overflow in CSS (align-content): flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline
        //These options are also used to align the content overflow:
        if(transversal === 'center') {transversal = transversal; overflow = 'center';}
        else if(transversal === 'bottom' || transversal === 'right') {transversal = 'flex-end'; overflow = 'flex-end';}
        else if(transversal === 'distribute') {transversal = 'center'; overflow = 'space-around';}
        else if(transversal === 'space') {transversal = 'center'; overflow = 'space-between';}
        else if(transversal === 'stretch') {transversal = 'stretch'; overflow = 'stretch';} //Stretch: If the transversal dimension is not known, stretches the element. To be able to stretch the element 'align-content' also needs to be set to stretch.
        else {transversal = 'flex-start'; overflow = 'flex-start';}           
    }
    /* Due to the fact that this styling takes place just after the initial render, the component flickers changing to the new position.
    This could be solved if insted we do this on every loop and return it as a slyle class to be added (like content-class). The id could be the content */ 
    //Uncomment
    // component.style['flex-direction'] = direction;       //Row or column
    // component.style['justify-content'] = longitudinal;   //Longinutinal alignment of the items
    // component.style['align-items'] = transversal;        //Transversal alignment of the items
    // component.style['align-content'] = overflow;         //Content overflow alignment of the items 
    // if(expand) component.style['flex-grow'] = expand; //Expand with the force indicated (e.g.: expand: 5)

    
    finalStyle = {flexDirection: direction, justifyContent: longitudinal, alignItems: transversal, alignContent: overflow}; 
    return finalStyle;

    // component.style['justify-content'] = 'center';   //Longinutinal alignment of the items
    // component.style['align-items'] = 'center';        //Transversal alignment of the items
    //Standard CSS can further be used to complement these properties.    
    // if(attributes['id']) console.log(attributes['id'])
    // console.log('direction:' + direction + ' longitudinal: ' + longitudinal + ' transversal: ' + transversal)
}
//import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
//if (props.source) {
    //   const source = resolveAssetSource(props.source) || {};
    //   this.fetchSVGData(source.uri);
    // }

export const generateGradient = ({colors, angle=0, locations, svg=false}) => {
    if(!colors || !Array.isArray(colors) || colors.length < 2) {console.error('generateGradient: "colors" array must contain at least two items');return}
    if(!locations) locations = colors.map((color, index) => +(index / (colors.length - 1)).toFixed(2));
    else if(locations && locations.length !== colors.length) {console.error('generateGradient: "colors" and "locations" arrays must be the same length.');return}

    // if(ONESPECIFICS.os === 'web' && !svg) return 'linear-gradient(' + (90 - angle) + 'deg, ' + colors.join(', ') + ')';//Following the trigonometric circle where the first color is in the origin on the rest in the direction of the angle

    const a = angle * Math.PI / 180;//Input angle is in degrees need to convert to radians
    const k = Math.ceil(Math.sin(45 * Math.PI / 180) * 10000) / 10000;//Sin(45) = cos(45). Rounding up to avoid obtaining x and y greater than 1.
    const start = {x: Math.cos(a) > 0 ? 0 : 1, y: Math.sin(a) > 0 ? 1 : 0};
    const end = {
        x: Math.abs(Math.cos(a)) < k ? +Math.abs(start.x - Math.abs(Math.cos(a))/k).toFixed(2) : Math.abs(start.x - 1),
        y: Math.abs(Math.sin(a)) < k ? +Math.abs(start.y - Math.abs(Math.sin(a))/k).toFixed(2) : Math.abs(start.y - 1)
    };
    //start.x + end.x = 1 and start.y + end.y = 1
    if(start.x + end.x !== 1) {const dif = start.x - end.x; start.x = 0.5 + dif / 2; end.x = 0.5 - dif / 2}; //Reposition to the center
    if(start.y + end.y !== 1) {const dif = start.y - end.y; start.y = 0.5 + dif / 2; end.y = 0.5 - dif / 2}; //Reposition to the center
    // if(svg) return '<Svg style="display:block;width:0;height:0;"><Defs><LinearGradient id="oneJS" x1="' + start.x * 100 + '%" y1="' + start.y * 100 + '%" x2="' + end.x * 100 + '%" y2="' + end.y * 100 + '%" >' + 
    //                 locations.map((location, index) => '<Stop offset="' + location * 100 + '%" style="stop-color:' + colors[index] + ';" />') + '</LinearGradient></Defs></Svg>';
    if(svg) return '<defs><linearGradient id="gradient" x1="' + start.x + '" y1="' + start.y + '" x2="' + end.x + '" y2="' + end.y + '">' + 
                    locations.map((location, index) => '<stop offset="' + location + '" stop-color="' + colors[index] + '" />').join('') + '</linearGradient></defs>';
    return {colors: colors, locations: locations, start: start, end: end};    
}

//https://thenounproject.com/
export const Icon = Component('Icon', false, ({icon = 'iosClose', iconFont = [], folder='.', raised, size=32, flavor, ...attributes}={}) => {
    let selectedIcon = iconFont[icon];
    size = size === 'large'? 64 : size === 'small'? 16 : size;
    let padding = Math.floor(parseInt(size) / 4);

    if(flavor?.primaryGradient) {
        // selectedIcon = selectedIcon + readGradient(flavor?.primaryGradient);
    }
    let mainStyle = {
        width: size, 
        height: size,
        fill:  'blue', //our change to implement cool gradients for icons
        backgroundColor: 'pink',
        // transitionDuration: 0.4,
    }
    if(raised) {
        mainStyle = {...mainStyle, ...{
            background: flavor?.backgroundColor ?? 'blue',
            border: flavor?.border ?? 'none',
            borderRadius: flavor?.radius ?? '0px',
            boxShadow: flavor?.shadow ?? 'none',
            padding: padding,
        }};
    }

    if(attributes['style']) {mainStyle = {...mainStyle, ...attributes['style']}; delete attributes['style'];}
    //on native we can implement the same with expo svg package
    // icon = 'ios-add';
    // console.log('MY ICONNNNN')
    //console.log(folder + '/' + icon + '.svg#' + icon)
    // console.log(require('./assets/add.svg'));
    // let path = require('add.svg');
    // let mySVG = fetchSvgData(path);
    // console.log(mySVG);
    //return svg({style: {width: 50, height: 50, backgroundColor: 'pink'}})(Text()(myIcon));
    // return  svg({height:"50%", width:"50%", viewBox:"0 0 100 100"})([
    //   circle({cx:"50", cy:"50", r:"45", stroke:"blue", strokeWidth:"2.5", fill:"green"}),
    //   rect({x:"15", y:"15", width:"70", height:"70", stroke:"red", strokeWidth:"2", fill:"yellow"}),
    //   use({href: './icons/ios-add.svg#ios-add'})
    // ]);

    const grad = generateGradient({colors: ['red', 'green'], angle: 90, svg: true});

    const [svgXml, setSvgXml] = React.useState(null);
    React.useEffect(() => {
        const fetchSvgData = async (uri) => {
            if(!uri) return;
            const source = resolveAssetSource(uri) || {};
            // console.log('SOURCEEE');
            // console.log(source)
            let responseXML = null, error = null;
            try {
                const myGradient = '<defs><linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="yellow" /><stop offset="1" stop-color="blue" /></linearGradient></defs>';
                const response = await fetch(source.uri);
                responseXML = await response.text();
                responseString = '`' + responseXML + '`';
                const final = responseXML.replace('>', '>'+grad);
                setSvgXml(final);
                // setSvgXml(responseString); 
                console.log('RESPONSE');
                console.log(myGradient);
                console.log(grad);
            } 
            catch(error) {console.error("fetchSvgData: SVG not found.", e);}
            // return responseXML;
        }
        // fetchSvgData(require('add.svg')); 
    }, [])

    // return View({style: {width: 50, height: 50, backgroundColor: 'pink'}})(Text()(svgXml));
    // return Xml({xml: svgXml, style: {fill: 'pink', width: 40, height: 40}});

    const myxml = `
    <svg id="gradient">
  <defs>
      <linearGradient
        id="gradient"
        x1="0"
        y1="0"
        x2="8.46631"
        y2="37.3364"
        gradient-units="userSpaceOnUse">
        <stop offset="0" stop-color="yellow" />
        <stop offset="1" stop-color="orange" />
      </linearGradient>
    </defs></svg>
  <svg width="32" height="32" viewBox="0 0 32 32">

    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      fill="url(#gradient)"
      d="M4 0C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H28C30.2091 32 32 30.2091 32 28V4C32 1.79086 30.2091 0 28 0H4ZM17 6C17 5.44772 17.4477 5 18 5H20C20.5523 5 21 5.44772 21 6V25C21 25.5523 20.5523 26 20 26H18C17.4477 26 17 25.5523 17 25V6ZM12 11C11.4477 11 11 11.4477 11 12V25C11 25.5523 11.4477 26 12 26H14C14.5523 26 15 25.5523 15 25V12C15 11.4477 14.5523 11 14 11H12ZM6 18C5.44772 18 5 18.4477 5 19V25C5 25.5523 5.44772 26 6 26H8C8.55228 26 9 25.5523 9 25V19C9 18.4477 8.55228 18 8 18H6ZM24 14C23.4477 14 23 14.4477 23 15V25C23 25.5523 23.4477 26 24 26H26C26.5523 26 27 25.5523 27 25V15C27 14.4477 26.5523 14 26 14H24Z"
    />
    
  </svg>
  

`;
    const myGradient = `<svg>
    <defs>
      <linearGradient
        id="gradient"
        x1="0"
        y1="0"
        x2="8.46631"
        y2="37.3364"
        gradient-units="userSpaceOnUse">
        <stop offset="0" stop-color="yellow" />
        <stop offset="1" stop-color="orange" />
      </linearGradient>
    </defs>
    <svg>`;

    const final = myxml + myGradient;
console.log('TYPEEE: ' + final);

    return View({style: {width: 150, height: 300, content: {v: 'bottom', h: 'right'}, backgroundColor: 'pink'}})([
        // svg({height: 150, width: 300})([
        //     defs({height: 10})(svgGradient({id:'gloo', x1: '0', y1:'0', x2:'1', y2:'1'})([
        //             stop({offset:"0", stopColor:"blue", stopOpacity:"1"}), 
        //             stop({offset:"1", stopColor:"red", stopOpacity:"1"})])
        //     ),
        //     ellipse({cx:"150", cy:"75", rx:"85", ry:"55", fill:"url(#gloo)"})
        // ]),
        Xml({ xml: svgXml ?? '<svg></svg>', style: {fill: 'url(#gradient)', width: 40, height: 40}}),
        Xml({xml:myxml, width:"100%", height:"100%"}),
        Xml({ xml: svgXml ?? '<svg></svg>', style: {fill: 'url(#gradient)', width: 40, height: 40}}),
        // Xml({ xml: grad ?? '<svg></svg>', style: { width: 20, height: 20}}),
        
    ]);
    // return Image({source: require('./assets/ios-add.svg')});
   // return SvgRef({ heigth: 50, width: 50, uri:'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'});//works
    //return View({style: {width: 50, height: 50, backgroundColor: 'pink'}})(SvgRef({ heigth: 50, width: 50, source: require('./assets/add.svg'), style: {fill: 'pink'}}));  
    icon = 'ios-add';
    //return svg({style: mainStyle, flavor: flavor, ...attributes})(use({width: size , height: size, href: path + '#ios-add'}));
    // return View({style: mainStyle, flavor: flavor, dangerouslySetInnerHTML:{__html: selectedIcon}, ...attributes})();
});

/*
Easing: 
    Predefined animations: bounce, ease, elastic(),
    Standard functions: linear, quad, cubic,
    Additional functions: bezier(), circle, sin, exp,
*/
const animations = {//In order for transform animations to work we need position absolute, but it is still working for some. https://www.w3schools.com/js/js_htmldom_animate.asp
    //Working for position relative and static
    'none': {keyframes: {}, options: {duration: 0}},
    'appear': {style: {display: 'flex'}},
    'disappear': {style: {display: 'none'}},
    'fade-in': {keyframes: {opacity: [0,1]}, options: {duration: 300, easing: Easing.ease}},
    'fade-in-left': {keyframes: {opacity: [0,1], transform: [{translateX: [-100, 0]}]}, options: {duration: 300, easing: Easing.ease}},
    'fade-in-right': {keyframes: {opacity: [0,1], transform: [{translateX: [100, 0]}]}, options: {duration: 300, easing: Easing.ease}},
    'fade-out': {keyframes: {opacity: [1, 0], display: ['flex', 'none']}, options: {duration: 300, easing: Easing.ease}},
    'fade-out-left': {keyframes: {opacity: [1,0], transform: [{translateX: [0, -100]}]}, options: {duration: 300, easing: Easing.ease}},
    'fade-out-right': {keyframes: {opacity: [1,0], transform: [{translateX: [0, 100]}]}, options: {duration: 300, easing: Easing.ease}},
    'slide-in-left': {keyframes: {transform: [{translateX: [-100, 0]}]}, options: {duration: 300, easing: Easing.ease}},
    'slide-in-right': {keyframes: {transform: [{translateX: [100, 0]}]}, options: {duration: 300, easing: Easing.ease}},
    'slide-in-up': {keyframes: {transform: [{translateY: [-100, 0]}]}, options: {duration: 300, easing: Easing.ease}},
    'slide-in-down': {keyframes: {transform: [{translateY: [100, 0]}]}, options: {duration: 300, easing: Easing.ease}},
    'slide-out-left': {keyframes: {transform: [{translateX: [0, -100]}]}, options: {duration: 300, easing: Easing.ease}},
    'slide-out-right': {keyframes: {transform: [{translateX: [0, 100]}]}, options: {duration: 300, easing: Easing.ease}},
    'slide-out-up': {keyframes: {transform: [{translateY: [0, -100]}]}, options: {duration: 300, easing: Easing.ease}},
    'slide-out-down': {keyframes: {transform: [{translateY: [0, 100]}]}, options: {duration: 300, easing: Easing.ease}},
    'expand': {keyframes: {transform: [{scale: [0, 1]}]}, options: {duration: 300, easing: Easing.bounce}},
    'shrink': {keyframes: {transform: [{scale: [1, 0]}]}, options: {duration: 300, easing: Easing.bounce}},
    'vertical-expand': {keyframes: {transform: [{scaleY: [0, 1]}]}, options: {duration: 300, easing: Easing.ease}},
    'vertical-shrink': {keyframes: {transform: [{scaleY: [1, 0]}]}, options: {duration: 300, easing: Easing.ease}},
    'horizontal-expand': {keyframes: {transform: [{scaleX: [0, 1]}]}, options: {duration: 300, easing: Easing.ease}},
    'horizontal-shrink': {keyframes: {transform: [{scaleX: [1, 0]}]}, options: {duration: 300, easing: Easing.ease}},
};

//animation: {visible: ['fadeIn', 'fadeout'], selected: ['']}
//keyframes: [{opacity: 0, scale: 0}, {opacity: 1, scale: 1}] //Option A
//keyframes: {opacity: [0, 1], scale: [0, 1]}                 //Option B
    //Animations should go inside the ONEJS object, or onespecifics

/*
Transform Properties:
perspective, rotate, rotateX, rotateY, rotateZ, scale, scaleX, scaleY, translateX, translateY, skewX, skewY
*/
//Animations work different than on the web. On the web by calling animate the API automatically interpolates the styles provided by the
// keyframes and applies them to the element.
//On native, defines how a value changes from 0 to 1. This change of value is then used to interpolate style values that are applied to the element
const animate = (animation, property, animatedValue, setSelectedKeyframes, isVisible, setIsVisible) => (newValue) => {
    let selectedAnimation = {}; //Default for visible 
    //Check the animation is formatted correctly
    if(Array.isArray(animation)) {
        try{selectedAnimation = newValue ? animation[0] : animation[1];}
        catch(error) {console.error("animation should be in this format: ['in-animation', 'out-animation']"); return;}
    }
    else if(animation && typeof animation === 'object') {
        try{selectedAnimation = animation instanceof Map ? animation[newValue] : undefined;}
        catch(error) {console.error('No animation set for ' + newValue); return;}
    }    
    else {console.error('animation should be an Array or Map: ' + animation); return;}

    if(typeof selectedAnimation === 'string') {//If is a string, take it from the predesigned animations
        selectedAnimation = animations[selectedAnimation];
        if(!selectedAnimation) {console.warn('No such animation: ' + selectedAnimation); return;}
    } 
    if(property === 'visible' && newValue) setIsVisible(true);//To display in animation
    if(property === 'visible' && !newValue && !isVisible) return;//To avoid initial out animation
    setSelectedKeyframes(selectedAnimation.keyframes);//The keyframes that will be used for the interpolation
    animatedValue.setValue(0);//Animation is set to always flow from 0 to 1
    let options = {toValue: 1, useNativeDriver: true, ...selectedAnimation.options};
    let completedCallback = (property, newValue) => ({result}) => {
        if(property === 'visible' && !newValue) setIsVisible(false);//To hide element after out animation
    }
    Animated.timing(animatedValue, options).start(completedCallback(property, newValue));
}
//Generates the style to be interpolated based on the current animation keyframes and animated value
const getAnimationStyle  = (animatedValue, keyframes) => {
    if(!keyframes) return {};
    let animatedStyle = {};
    Object.entries(keyframes).forEach(([key, value]) => {
        if(typeof value[0] === 'number')
            animatedStyle[key] = animatedValue.interpolate({inputRange: [0, 1], outputRange: value});
        else if(typeof value[0] === 'object') {//Required for transform property (array of objects)
            animatedStyle[key] = [];
            value.forEach((item, index) => {
                Object.entries(item).forEach(([subkey, subvalue]) => {
                    animatedStyle[key][index] = {[subkey]: animatedValue.interpolate({inputRange: [0, 1], outputRange: subvalue})};
                });
            })
        }
    });
    return animatedStyle;
}

//No default flavor inherited
export const View = Component('myView', true, ({flavor, content="top-left", expand=0, wrap=true, reverse, visible=true, selected, active, url, onActiveChange=()=>{}, onVisibleChange=()=>{}, animation, ...attributes}={}) => structure => {
    //Url module: Implemented with React Router //https://v5.reactrouter.com/native/guides/quick-start
    let activeUrlMatches;
    let visibleUrlMatches; 
    let linkUrlRedirect;
    let onPress;
    if(url) {
        if(url.active) {
            activeUrlMatches = useMatch(url.active);
            React.useEffect(() => {
                if(activeUrlMatches) onActiveChange(true);
                else onActiveChange(false);
            }, [activeUrlMatches]);
        }
        if(url.visible) {
            visibleUrlMatches = useMatch(url.visible);
            React.useEffect(() => {
                if(visibleUrlMatches) onVisibleChange(true);
                else onVisibleChange(false);
            }, [visibleUrlMatches]);
        }
        if(url.link) {
            linkUrlRedirect = useNavigate();
            onPress = (event) => {linkUrlRedirect(url.link);}
        }
    }

    //Animations module
    let animatedValue;
    let selectedKeyframes;
    let setSelectedKeyframes
    let isVisible;
    let setIsVisible;
    let animatedStyle = {};
    let internalOnPropertyChange = {}
    let exeternalOnPropertyChange;    
    let finalOnPropertyChange;

    if(animation) {
        animatedValue = React.useRef(new Animated.Value(0)).current;
        [selectedKeyframes, setSelectedKeyframes] = React.useState({});
        [isVisible, setIsVisible] = React.useState(false);
        
        animatedStyle = getAnimationStyle(animatedValue, selectedKeyframes);

        internalOnPropertyChange = {}
        if(animation && typeof animation === 'object') {
            Object.entries(animation).forEach(([property, value]) => { 
                if(value) internalOnPropertyChange[property] = animate(value, property, animatedValue, setSelectedKeyframes, isVisible, setIsVisible); 
            })
        }
        exeternalOnPropertyChange = attributes['onPropertyChange'];    
        finalOnPropertyChange = exeternalOnPropertyChange ? {...internalOnPropertyChange, ...exeternalOnPropertyChange} : internalOnPropertyChange;//Compose internal and external onPropertyChange
        delete attributes['onPropertyChange'];
    }

    //Final Style
    const positionStyle = positionContent(content);
    const outerStyle = {//Outer style for the border when there is a gradient
        borderColor: flavor?.borderColor ?? 'none',
        borderWidth: flavor?.borderWidth ?? 0,
        borderRadius: flavor?.radius ?? 0,
        flexGrow: expand ?? 0,
        ...generateShadow(flavor?.elevation ?? 0),
    }
    const innerStyle = {//Inner style for the View when there is a gradient
        backgroundColor: flavor?.backgroundGradient ? 'transparent' : (flavor?.backgroundColor ?? 'transparent'),
        borderRadius: flavor?.radius ?? 0,
        flexGrow: expand ?? 0,
    }
    const finalStyle = {
        ...innerStyle,
        ...positionStyle,
        ...animatedStyle
    }  
    attributes['style'] = flavor?.backgroundGradient ? mergeStyles(finalStyle, attributes['style']) : mergeStyles(finalStyle, outerStyle, attributes['style']);
    // console.log('STYLEE');
    // console.log(flavor);
    // console.log(attributes['style']);

    //Final Structure
    let finalStructure;
    // if(flavor?.backgroundGradient) structure = Gradient({...flavor.backgroundGradient, style: {flex: 1, ...outerStyle}})(structure);//In case of backgroundGradient

    if(animation) {//In case of animation
        if(animation.visible) finalStructure = AnimatedView({visible: visible, selected: selected, active: active, onPropertyChange: finalOnPropertyChange, ...attributes})(isVisible ? structure : null);
        else finalStructure = AnimatedView({visible: visible, selected: selected, active: active, onPropertyChange: finalOnPropertyChange, ...attributes})(visible ? structure : null) ;
    }
    else finalStructure = RNView({visible: visible, selected: selected, active: active, ...attributes})(visible ? structure : null);
    
    if(flavor?.backgroundGradient) finalStructure = Gradient({...flavor.backgroundGradient, style: outerStyle})(finalStructure);//In case of backgroundGradient
    if(url && url.link) finalStructure = TouchableOpacity({onPress: onPress})(finalStructure);//In case of url links
    
    return finalStructure;
});