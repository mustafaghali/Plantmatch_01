import {  Dimensions,
    StatusBar
    } from 'react-native';


export const screen = {width:Dimensions.get('window').width,height:Dimensions.get('window').height-StatusBar.currentHeight}

