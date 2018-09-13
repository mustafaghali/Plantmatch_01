import React, { Component } from 'react';
import {Text,
        View,
        StatusBar,
        StyleSheet,
        ScrollView,
        Dimensions
    } from 'react-native'; 
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import PCustomPageHeader from './PCustomPageHeader';
import {Card,
        Icon,
        Thumbnail} from 'native-base';
import {TermsAndConditions} from '../data/AppData';


class PTermsAndConditions extends Component {

    render(){
        
        return (
            <View style = {{flex:1,alignItems:'center',backgroundColor:'white'}}> 
               <PCustomPageHeader header = "Terms and Condition"/> 
               <View style = {{width:Dimensions.get('window').width,alignItems:'center'}}>
               <Text  style = {{marginTop:10,marginBottom:10,fontSize:18}}>{'PLANTMATCH - TERMS OF SERVICE'}</Text>
               </View>
               <ScrollView>
               <Text style = {{color:'#4F5452',marginLeft:10,marginRight:10,textAlign:'center'}}>{TermsAndConditions}</Text>     
               </ScrollView>
             </View>   
        );
    }
}


export default PTermsAndConditions; 