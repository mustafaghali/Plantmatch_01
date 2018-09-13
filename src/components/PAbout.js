import React, { Component } from 'react';
import {Text,
        View,
        StatusBar,
        Image,
        TouchableOpacity,
        StyleSheet,
        Dimensions,
        Linking
    } from 'react-native'; 
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import PCustomPageHeader from './PCustomPageHeader';
import {AboutPlantmatch} from '../data/AppData';
import {Card,
        Icon,
        Thumbnail} from 'native-base';
import Communications from 'react-native-communications';
//View.PropTypes
class PAbout extends Component {

    render(){
        
        return (
            <View style = {{flex:1,alignItems:'center',backgroundColor:'white'}}>
               <PCustomPageHeader header = "About Plantmatch"/> 
               <Image       
                             style = {{ borderColor : 'gray',
                             borderWidth: 0,
                             width:200,  
                             height:200,  
                             alignItems:'center',
                             justifyContent:'flex-end'
                             }} 
                             resizeMode = "contain"
                              source={require('../../Images/plant-match-logo-png-med1000.png')}    
                             />
                <Text style = {{marginLeft:30,marginRight:30,color:'#4F5452'}}>{AboutPlantmatch}</Text>  
                <View style = {{flexDirection:'row',marginTop:20,alignItems:'center',justifyContent:'space-around'}}> 
                    <TouchableOpacity
                       style = {{...styles.SocialMediaButton,backgroundColor:'#3b5998'}}
                        onPress= {()=> {Linking.openURL('https://www.facebook.com/Plantmatch-162022027728416/')
                                  .catch(err => console.error('An error occurred opening facebook link', err));}}> 
                       <Icon name = 'logo-facebook' style = {styles.SocialMediaIcon}/>

                    </TouchableOpacity>

                     <TouchableOpacity
                       style = {{...styles.SocialMediaButton,backgroundColor:'#c32aa3'}}
                           onPress= {()=> {Linking.openURL('http://instagram.com/plantmatch')
                                  .catch(err => console.error('An error occurred opening instagram link', err));}}> 
                       <Icon name = 'logo-instagram' style = {styles.SocialMediaIcon}/>
                    </TouchableOpacity>

                     <TouchableOpacity
                       style = {{...styles.SocialMediaButton,backgroundColor:'#1da1f2'}}
                        onPress= {()=> {Linking.openURL('https://twitter.com/Adopt_a_Pot')
                                  .catch(err => console.error('An error occurred opening twitter link', err));}}>   
                       <Icon name = 'logo-twitter' style = {styles.SocialMediaIcon}/>
                    </TouchableOpacity>

                      <TouchableOpacity
                       style = {{...styles.SocialMediaButton,backgroundColor:'#A8A8A8'}}
                      onPress= {()=> {Linking.openURL('https://www.plantmatch.co/')
                                  .catch(err => console.error('An error occurred opening website link', err));}}>   
                       <Icon name = 'ios-globe-outline' style = {styles.SocialMediaIcon}/>
                    </TouchableOpacity>

                        </View>
                        <TouchableOpacity
                       style = {{
                         flexDirection:'row',
                         width:200,
                         marginTop:10,
                        alignItems:'center',
                        justifyContent:'center',
                       }}
                        onPress={() => Communications.phonecall('+249905705498', true)}
                        > 
                      <View style = {{width:20,height:20,borderRadius:10,borderWidth:1,borderColor:'gray',alignItems:'center',justifyContent:'center'}}> 
                       <Icon name = 'ios-call-outline' 
                       style = {{ 
                       color:'gray', 
                       fontSize:18,
                       }}/>
                       </View>
                        <Text style = {{color:'blue'}}> {'+249905705498'} </Text>             
                    </TouchableOpacity>

                     <TouchableOpacity
                       style = {{  
                        flexDirection:'row',   
                       width:200,
                        marginTop:5,  
                        alignItems:'center',
                        justifyContent:'center',
                      }}
                         onPress= {()=> {Linking.openURL('mailto:contactus@plantmatch.co')
                                  .catch(err => console.error('An error occurred opening info email link', err));}}>   
                       <View style = {{width:20,height:20,borderRadius:10,borderWidth:1,borderColor:'gray',alignItems:'center',justifyContent:'center'}}> 
                       <Icon name = 'ios-mail-outline' 
                       style = {{ 
                       color:'gray',
                      fontSize:18
                       }}/>
                       </View>
                      <Text style = {{color:'blue',textDecorationLine:'underline'}}> {'contactus@plantmatch.co'} </Text>         
                    </TouchableOpacity>

                     <TouchableOpacity
                       style = {{  
                       flexDirection:'row',
                       height:50,   
                       width:Dimensions.get('window').width-40,
                       marginTop:20,
                       alignItems:'center',
                       justifyContent:'space-between',
                       borderWidth : 1,
                        borderRadius : 2,
                        borderColor : '#ddd',
                        shadowColor : '#000',
                        shadowOffset : {width : 0 , height : 2},
                        shadowOpacity : 0.1,
                        shadowRadius : 1,
                        elevation : 1,
                        marginLeft : 5,   
                      }} 
                         onPress= {()=>{Actions.PTermsAndConditions();}}>   
                       <Text style = {{fontSize:16,marginLeft:18}}> {'Terms and Polices'} </Text>         
                       <Icon name = 'ios-arrow-forward-outline' 
                         style = {{ 
                          color:'gray', 
                          fontSize : 30,
                          marginRight:20
                       }}/>
                    </TouchableOpacity>


             </View>   
        );
    }
}

const styles = {
   
     SocialMediaButton : {    
        flexDirection:'row',
       justifyContent: 'center',   
       alignItems:'center',
       backgroundColor : '#0C6656',
       width : 40,
       height : 30,
       marginLeft:20,
       elevation : 1,
    },
    SocialMediaText : {
            marginLeft:5,
            color:'white'

    },
    SocialMediaIcon : {
            color:'white'

    },
}

export default PAbout; 