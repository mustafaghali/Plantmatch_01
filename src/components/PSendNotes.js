import React, { Component } from 'react';
import {Text,
        View,
        StatusBar,
        TouchableOpacity,
        StyleSheet,
        Dimensions,
        TextInput
    } from 'react-native'; 
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import PCustomPageHeader from './PCustomPageHeader';
import {AboutPlantmatch} from '../data/AppData';
import {Card,
        Icon,
        Thumbnail} from 'native-base';
class PSendNotes extends Component {
      constructor(props) {
    super(props);
    this.state = {
       NotesInput : ''
    }
    }
    render(){
        
        return (
            <View style = {{flex:1,alignItems:'center'}}>
               <PCustomPageHeader header = "Notes"/>
                <View style = {{width:Dimensions.get('window').width,backgroundColor: 'rgba(37,125,110, 0.2)',alignItems:'center'}}>
               <Text  style = {{marginTop:10,marginBottom:10,fontSize:18}}>{'Send your Suggestions and Feedback'}</Text>
               </View>
               <View style= {{flex:1,alignItems:'center'}}>
                <TextInput
                                  maxLength = {100}
                                  multiline
                                  placeholder =  {''}
                                  autoCorrect = {false}
                                  style = {styles.inputStyle}
                                  value = {this.state.NotesInput}   
                                  onChangeText =  {text => this.setState({NotesInput:text}) }
                                />
                  <TouchableOpacity  style = {styles.SubmitButton} 
                                onPress={()=> {Actions.refresh();}}  >  
                                    <Text style = {styles.SubmitButtonText}> {'Send'} </Text>         
                  </TouchableOpacity>  
                </View>    
             </View>   
        );
    }
}

const styles = {
     inputStyle: {
         color : '#000',
         paddingRight: 5,
         paddingLeft: 5,
         marginTop:30,
         fontSize: 18,
         lineHeight: 23,
         width:Dimensions.get('window').width - 40 ,
         height : Dimensions.get('window').height*1/3, 
         borderRadius : 20,
         borderWidth:1,
         borderColor:'#9CC8E1',
         color:'gray',
         backgroundColor:'white'
     },
     SubmitButton : {
       backgroundColor : 'white',
       marginTop:10,
       width:Dimensions.get('window').width - 40 ,        
       height : 50, 
       alignItems : 'center',
       justifyContent : 'center',
       borderColor : '#257D6E',
       borderWidth: 4,
      //  shadowColor : '#000',
      //    shadowOffset : {width : 0 , height : 2},
      //    shadowOpacity : 0.1,
      //    shadowRadius : 2,
         elevation : 1,
    },
      SubmitButtonText :{
       fontSize : 20,
        color:'#257D6E',
        alignSelf: 'center'
    }
}

export default PSendNotes; 