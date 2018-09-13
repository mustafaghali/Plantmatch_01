import React, { Component } from 'react'

import {
  Button,
  Card,
  Left,
  Right,
  CardItem,
  InputGroup,
  Input,
  // Icon,
  View,
  Spinner,
  Container,
  Content,
  StyleProvider,
  Icon
} from 'native-base';
import { Alert,
  TextInput,
  ImageBackground, 
  StyleSheet, 
  Dimensions,
  Image,
  TouchableHighlight, 
  TouchableOpacity,
  StatusBar,
  Text,
  Textinput } from 'react-native'
import {Actions} from 'react-native-router-flux';
import  {loginUser,UpdateLoginPage} from '../actions'; 
import {connect} from 'react-redux';
import {UserA as User}  from '../sampleData';
import {colors} from '../themes/style1';
import TextInputwithIcon from './common/TextInputwithIcon';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { google, facebook, twitter, tumblr } from 'react-native-simple-auth';
import {ProvidersSecerts} from '../data/webAPIConfig';



class PLogin extends Component {

   constructor() {
         super();
         this.state = {
         isReady: true
         };
   }


   
//   async componentWillMount() {
//       //  await Expo.Font.loadAsync({
//       //      Ionicons: require("../../fonts/Ionicons.ttf"),     
//       //     });
//      this.setState({ isReady: true ,});
// }
        
   
     facebookLogin ()
     {
      facebook(ProvidersSecerts.facebook)
       .then((info) => {
         console.log(info);
        }).catch((error) => {
          console.log(error.description);
       });
     }

     googleLogin ()
     {
         google(ProvidersSecerts.google)
         .then((info) => {
           console.log(info);
          }).catch((error) => {
           // error.code
           // error.description
         });
       
        }


    render(){
     if (!this.state.isReady) {
          return <View />;
      }
    return (
    
               <View style = {{flex:1,backgroundColor:'white'}}>
                 <View>
                      <Image 
                          source={require('../../Images/loginLogo.png')}
                             resizeMode='stretch'
                          style={{height:Dimensions.get('window').height * 0.3, width : undefined}}
                      />
                  </View>
                         
                  <View style = {{justifyContent: 'space-around',margin:10}}> 
                      <View>
                          <Text style = {styles.SignInLabelFont}>
                               {'Sign In'}
                                   </Text>
                            

                                  <TextInputwithIcon 
                                    
                                    width = {Dimensions.get('window').width-10}
                                    height = {Dimensions.get('window').height*1/10}
                                    IconName = 'ios-at-outline'
                                    placeholder = 'Email or Username'
                                    value = {this.props.email}
                                    onChangeText = {text=>this.props.UpdateLoginPage({prop : 'email' , value : text})}
                                  />
                                  <View style = {{borderBottomColor:'gray',borderBottomWidth:1}}/>
                                  
                                  <TextInputwithIcon 
                                    
                                    width = {Dimensions.get('window').width-10}
                                    height = {Dimensions.get('window').height*1/10}
                                    IconName = 'md-unlock'
                                    placeholder = 'Password'
                                    isPassword = {true}
                                    value = {this.props.password}
                                    onChangeText = {text=>this.props.UpdateLoginPage({prop : 'password' , value : text})}
                                  />
                                  <Text style = {{alignSelf:'center',color:'red',fontSize:14}}>{this.props.errorMessage}</Text>

                                  {/* <InputGroup style={{marginBottom:10}} boarderType='round'>
                                  <Icon style= {styles.Iconstyle} name='ios-at-outline'/>   
                                    <Input style={{color:"#000"}}
                                      placeholder='Email or Username'
                                      placeholderTextColor="gray"
                                     />
                                  </InputGroup> */}

                                  {/* <InputGroup style={{marginBottom:10}} boarderType='round'>
                                  <Icon style= {styles.Iconstyle} name='ios-unlock'/>
                                    <Input style={{color:"#000"}}
                                      placeholder='Password' 
                                      secureTextEntry={true}
                                      placeholderTextColor="gray"
                                    />
                                   </InputGroup> */}
                    
                                <TouchableOpacity  style = {styles.ButtonLogin}
                                  onPress = {()=>
                                    {
                                      //this.loginUserlocal();
                                      this.props.loginUser();
                                      Actions.PMain();     
                                    }
                                  }
                                  >
                                    <Text style = {styles.LoginButtonText}> {'LOGIN'} </Text>
                                </TouchableOpacity>       
  
                               </View>
                             </View>



                           <View style = {{flex:1}} > 
                              <View style = {{flex:1}}>
                              </View>
                                <View>
                                   <Text style = {styles.OrFont}> {'Sign in with'} </Text>

                                  <TouchableOpacity 
                                   style = {styles.fButtonLogin}
                                   onPress = {this.facebookLogin}
                                   >
                                 <View style = {{flex:1}}>
                                 <Icon style = {styles.SocialIconStyle} name='logo-facebook'/>
                                  </View>
                                    <View style = {{flex:5,alignItems:'center',justifyContent:'center'}}>
                                       <Text style = {styles.SocialTextStyle}> {'LOGIN WITH FACEBOOK'} </Text>
                                    </View>
                                  </TouchableOpacity>

                                   <TouchableOpacity 
                                    style = {styles.gButtonLogin}
                                    onPress = {this.googleLogin}
                                    > 
                                  <View style = {{flex:1}}>
                                  <Icon style = {styles.SocialIconStyle} name='logo-googleplus'/>
                                    </View>
                                    <View style = {{flex:5,alignItems:'center',justifyContent:'center'}}>
                                       <Text style = {styles.SocialTextStyle}> {'LOGIN WITH Google'} </Text>
                                    </View>
                                  </TouchableOpacity>

                                  <View style = {{flexDirection: 'row', margin:10,justifyContent:'space-between',alignItems:'center'}}> 
                               
                                    <TouchableOpacity>
                                     <Text style={{color: 'gray',textDecorationLine:'underline'}}>
                                      { " Don't have an account ? "}
                                  </Text>
                                  </TouchableOpacity>       
                                
                                  <TouchableOpacity>
                                        <Text style={{color: 'gray',textDecorationLine:'underline'}}>
                                      { " Forgot Password ?"}
                                    </Text>
                                  </TouchableOpacity>
                                </View>
                                   </View> 
                           </View>

                             

                      </View>


    )

    };
}


const styles = StyleSheet.create({
    LoginImage : {
      flex:1,
      height: undefined,
       width: undefined
    }
    ,ButtonLogin : {
       alignSelf : 'center',
       justifyContent: 'center',
       alignItems:'center',
       width : Dimensions.get('window').width * 2/3,
       height : 40,
       borderRadius : 20,
       borderWidth:1,
       borderColor : colors.inputBlueBorder,
      //  shadowColor : '#000',
      //    shadowOffset : {width : 0 , height : 2},  
      //    shadowOpacity : 0.1,
      //    shadowRadius : 2,
         elevation : 1,
    }
   ,fButtonLogin : {
     alignItems:'center', 
           marginTop:10,
       alignSelf : 'center',
      // justifyContent: 'space-around',
       flexDirection : 'row',
       backgroundColor : '#3b5998',
       width : Dimensions.get('window').width * 2/3,
       height : 30,
       borderRadius : 20,
      //  shadowColor : '#000',
      //    shadowOffset : {width : 0 , height : 2},
      //    shadowOpacity : 0.1,
      //    shadowRadius : 2,
         elevation : 1,
    }
    ,gButtonLogin : {
      alignItems:'center', 
      marginTop:10,
       alignSelf : 'center',
      // justifyContent: 'space-around',
       flexDirection : 'row',
       backgroundColor : '#d34836',
       width : Dimensions.get('window').width * 2/3,
       height : 30,
       borderRadius : 20,
       elevation : 1,
    }
    ,CardContainer : {
      flex: 1
    }
    ,OrFont :{
       fontSize:16,
       alignSelf : 'center', 
       color: 'gray',
       marginTop:10,

    },
      SignInLabelFont :{
       fontSize:20,
       alignSelf : 'flex-start',
       color: 'gray'
    }
    ,Iconstyle :{
      color : 'black'
    },
    SocialTextStyle : {
      color:'white'
    },
    SocialIconStyle : {
      color:'white',
     alignSelf: 'center',
     marginLeft:10,
     //fontSize:25 
    },
    LoginButtonText :{
        color:'gray',
        fontSize:18,
        fontWeight:'900'
    }
}) 

 const mapStateToProps = (state)=>{
   const {email,password,errorMessage} = state.default.LoginForm ;

   return ( {email,password,errorMessage});
}
export default connect (mapStateToProps,{loginUser,UpdateLoginPage})(PLogin);