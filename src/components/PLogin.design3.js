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
  StyleProvider
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
  Text
   } from 'react-native'
import {Actions} from 'react-native-router-flux';
import  {loginUser,UpdateLoginPage} from '../actions'; 
import {connect} from 'react-redux';
import {UserA as User}  from '../sampleData';
import {colors} from '../themes/style1';
import TextInputwithIcon from './common/TextInputwithIcon';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { google, facebook, twitter, tumblr } from 'react-native-simple-auth';
import {ProvidersSecerts} from '../data/webAPIConfig';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/FontAwesome';



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

              <View style = {{flex:1}}>
            
                <LinearGradient colors={['#ffffff',colors.main]} style={{height:Dimensions.get('window').height-StatusBar.currentHeight,alignItems:'center'}}>
                {/* ['#373b44','#73c8a9'] */}
                {/* ['#abbaab','#ffffff'] */}
                {/* ['#73c8a9','#ffffff'] */}
              <View style = {{flex:2,alignItems:'center'}}>
                <Image 
                          source={require('../../Images/plant-match-logo-400-png.png')}
                             resizeMode='stretch'
                           style={{height:Dimensions.get('window').height * 0.3, width : Dimensions.get('window').height * 0.3}}
                  /> 
                  <Text style={{color:colors.main,fontFamily:'Roboto_medium',fontSize:25}}>
                     SIGN IN
                  </Text>
                
                <View>
                  <TextInputwithIcon 
                                    
                                    width = {Dimensions.get('window').width*2/3}
                                    height = {Dimensions.get('window').height*1/10}
                                    backgroundColor = 'transparent'
                                    IconName = 'ios-at-outline'
                                    placeholder = '@email'
                                    value = {this.props.email}
                                    onChangeText = {text=>this.props.UpdateLoginPage({prop : 'email' , value : text})}
                                  />
                  <View style = {{borderBottomColor:'gray',borderBottomWidth:1}}/>


                    <TextInputwithIcon 
                                    
                                    width = {Dimensions.get('window').width*2/3}
                                    height = {Dimensions.get('window').height*1/10}
                                    backgroundColor = 'transparent'
                                    IconName = 'md-unlock'
                                    placeholder = 'password'
                                    isPassword = {true}
                                    value = {this.props.password}
                                    onChangeText = {text=>this.props.UpdateLoginPage({prop : 'password' , value : text})}
                                  />
                    </View>
            
                   <TouchableOpacity  style = {styles.ButtonLogin}
                           onPress = {()=>
                            {
                             //this.loginUserlocal();
                              this.props.loginUser();
                              Actions.PMain();     
                            }
                            }
                      >
                        <Text style={{color:colors.white,fontSize:20}}> {'LOGIN'} </Text>
                    </TouchableOpacity>    

                </View>
                  
                  {/* <View style = {{justifyContent:'center',alignItems:'center'}}> */}
                  
                     
                    <View style={{flex:1}}>
                      <TouchableOpacity 
                                   style = {styles.fButtonLogin}
                                   onPress = {this.facebookLogin}
                                   >
                                    <Icon style = {styles.SocialIconStyle} name='facebook-f'/>
                                    <Text style = {styles.SocialTextStyle}> {'Login with Facebook'} </Text>
                       </TouchableOpacity>

                       <TouchableOpacity 
                          style = {styles.gButtonLogin}
                          onPress = {this.googleLogin}
                        > 
                            <Icon style = {styles.SocialIconStyle} name='google-plus'/>
                            <Text style = {styles.SocialTextStyle}> {'Login with Google'} </Text>
                          
                      </TouchableOpacity>

                      <TouchableOpacity 
                          style = {styles.ButtonSignup}
                         // onPress = {this.googleLogin}
                        > 
                            <Text style = {styles.SocialTextStyle}> {'Create an Account'} </Text>
                          
                      </TouchableOpacity>

              


                     </View>

   
                  {/* </View> */}

                  </LinearGradient>

                
                {/* <View style = {{borderBottomWidth:1,borderColor:'black'}}/> */}

                {/* <View style = {{flex:1,backgroundColor:colors.white}}>
                </View> */}
              </View>


              //  <View style = {{flex:1,backgroundColor:'white'}}>
              //    <View>
              //         <Image 
              //             source={require('../../Images/loginLogo.png')}
              //                resizeMode='stretch'
              //             style={{height:Dimensions.get('window').height * 0.3, width : undefined}}
              //         />
              //     </View>
                         
              //     <View style = {{justifyContent: 'space-around',margin:10}}> 
              //         <View>
              //             <Text style = {styles.SignInLabelFont}>
              //                  {'Sign In'}
              //                      </Text>
                            

                                  // <TextInputwithIcon 
                                    
                                  //   width = {Dimensions.get('window').width-10}
                                  //   height = {Dimensions.get('window').height*1/10}
                                  //   IconName = 'ios-at-outline'
                                  //   placeholder = 'Email or Username'
                                  //   value = {this.props.email}
                                  //   onChangeText = {text=>this.props.UpdateLoginPage({prop : 'email' , value : text})}
                                  // />
                                  // <View style = {{borderBottomColor:'gray',borderBottomWidth:1}}/>
                                  
              //                     <TextInputwithIcon 
                                    
              //                       width = {Dimensions.get('window').width-10}
              //                       height = {Dimensions.get('window').height*1/10}
              //                       IconName = 'md-unlock'
              //                       placeholder = 'Password'
              //                       isPassword = {true}
              //                       value = {this.props.password}
              //                       onChangeText = {text=>this.props.UpdateLoginPage({prop : 'password' , value : text})}
              //                     />
              //                     <Text style = {{alignSelf:'center',color:'red',fontSize:14}}>{this.props.errorMessage}</Text>

              //                     {/* <InputGroup style={{marginBottom:10}} boarderType='round'>
              //                     <Icon style= {styles.Iconstyle} name='ios-at-outline'/>   
              //                       <Input style={{color:"#000"}}
              //                         placeholder='Email or Username'
              //                         placeholderTextColor="gray"
              //                        />
              //                     </InputGroup> */}

              //                     {/* <InputGroup style={{marginBottom:10}} boarderType='round'>
              //                     <Icon style= {styles.Iconstyle} name='ios-unlock'/>
              //                       <Input style={{color:"#000"}}
              //                         placeholder='Password' 
              //                         secureTextEntry={true}
              //                         placeholderTextColor="gray"
              //                       />
              //                      </InputGroup> */}
                    
              //                   <TouchableOpacity  style = {styles.ButtonLogin}
              //                     onPress = {()=>
              //                       {
              //                         //this.loginUserlocal();
              //                         this.props.loginUser();
              //                         Actions.PMain();     
              //                       }
              //                     }
              //                     >
              //                       <Text style = {styles.LoginButtonText}> {'LOGIN'} </Text>
              //                   </TouchableOpacity>       
  
              //                  </View>
              //                </View>



              //              <View style = {{flex:1}} > 
              //                 <View style = {{flex:1}}>
              //                 </View>
              //                   <View>
              //                      <Text style = {styles.OrFont}> {'Sign in with'} </Text>

                                //   <TouchableOpacity 
                                //    style = {styles.fButtonLogin}
                                //    onPress = {this.facebookLogin}
                                //    >
                                //  <View style = {{flex:1}}>
                                //  <Icon style = {styles.SocialIconStyle} name='logo-facebook'/>
                                //   </View>
                                //     <View style = {{flex:5,alignItems:'center',justifyContent:'center'}}>
                                //        <Text style = {styles.SocialTextStyle}> {'LOGIN WITH FACEBOOK'} </Text>
                                //     </View>
                                //   </TouchableOpacity>

                                //    <TouchableOpacity 
                                //     style = {styles.gButtonLogin}
                                //     onPress = {this.googleLogin}
                                //     > 
                                //   <View style = {{flex:1}}>
                                //   <Icon style = {styles.SocialIconStyle} name='logo-googleplus'/>
                                //     </View>
                                //     <View style = {{flex:5,alignItems:'center',justifyContent:'center'}}>
                                //        <Text style = {styles.SocialTextStyle}> {'LOGIN WITH Google'} </Text>
                                //     </View>
                                //   </TouchableOpacity>

              //                     <View style = {{flexDirection: 'row', margin:10,justifyContent:'space-between',alignItems:'center'}}> 
                               
              //                       <TouchableOpacity>
              //                        <Text style={{color: 'gray',textDecorationLine:'underline'}}>
              //                         { " Don't have an account ? "}
              //                     </Text>
              //                     </TouchableOpacity>       
                                
              //                     <TouchableOpacity>
              //                           <Text style={{color: 'gray',textDecorationLine:'underline'}}>
              //                         { " Forgot Password ?"}
              //                       </Text>
              //                     </TouchableOpacity>
              //                   </View>
              //                      </View> 
              //              </View>

                             

              //         </View>


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
       justifyContent: 'center',
       alignItems:'center',
       width : Dimensions.get('window').width * 0.3, 
       height : 50,
       borderRadius : 10,
       borderWidth:1,
       borderColor : 'gray', 
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
       justifyContent: 'center',
       flexDirection : 'row',
       backgroundColor : 'rgba(59,89,152,0.9)',
       width : Dimensions.get('window').width * 2/3,
       height : 50,
       borderRadius : 10,
      //  shadowColor : '#000',
      //    shadowOffset : {width : 0 , height : 2},
      //    shadowOpacity : 0.1,
      //    shadowRadius : 2,
       
    }
    ,gButtonLogin : {
      alignItems:'center', 
      marginTop:10,
       alignSelf : 'center',
      justifyContent: 'center',
       flexDirection : 'row',
       backgroundColor : 'rgba(211,72,54,0.9)',
       width : Dimensions.get('window').width * 2/3,
       height : 50,
       borderRadius : 10,
     
    },
    ButtonSignup : {
      alignItems:'center', 
      marginTop:10,
       alignSelf : 'center',
      justifyContent: 'center',
       flexDirection : 'row',
       backgroundColor : 'transparent',
       width : Dimensions.get('window').width * 2/3,
       height : 50,
       borderRadius : 10,
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
      color:'white',
      fontSize:16,
      alignSelf:'center',
      marginLeft:20
    },
    SocialIconStyle : {
      color:'white',
      marginLeft:10,
     // alignSelf : 'flex-start',
     fontSize:24
    },
    LoginButtonText :{
        alignSelf:'center',
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