import React, { Component } from 'react'

import {
  Button,
  Card,
  Left,
  Right,
  CardItem,
  InputGroup,
  Input,
  View,
  Container,
  Content,
  StyleProvider,
} from 'native-base';
import { Alert,
  TextInput,
  ImageBackground, 
  StyleSheet, 
  Image,
  TouchableHighlight,  
  TouchableOpacity,
  Text,
  Textinput,
  BackHandler  } from 'react-native' 
import {Actions} from 'react-native-router-flux';
import  {signUpUser,
  UpdateSignUpPage,
  SignUpPageResetValidators,
  signUpUserWithFacebook,
  signUpUserWithGoogle
} from '../actions'; 
import {connect} from 'react-redux';
import {UserA as User}  from '../sampleData';
import {colors} from '../themes/style1';
import TextInputwithIcon from './common/TextInputwithIcon';
import { google, facebook, twitter, tumblr } from 'react-native-simple-auth';
import {ProvidersSecerts} from '../APIs/webAPIConfig';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {isValidEmail,isValidUserName,isStrongPassword} from '../helpers'
import {screen} from '../AppConfigs';
import Spinner from './common/Spinner';



class PSignUP extends Component {

   constructor() {
         super();
         this.state = {
         isReady: true, 
         }
   }

   componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid()) // Listen for the hardware back button on Android to be pressed
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid()) // Remove listener
  }

  backAndroid () {
   // console.log('abeeeeeeeeeeeet'); // Return to previous screen
    return true // Needed so BackHandler knows that you are overriding the default action and that it should not close the app
  }
  

   
//   async componentWillMount() {
//       //  await Expo.Font.loadAsync({
//       //      Ionicons: require("../../fonts/Ionicons.ttf"),     
//       //     });
//      this.setState({ isReady: true ,});
// }
        

    render(){
     if (!this.state.isReady) {
          return <View />;
      }
    return (
                 
        <LinearGradient colors={['#F6F9F5','#BBD2C5']} style={{height:screen.height,width:screen.width}}>
          {(this.props.loading == true)?<Spinner/>:
          <View style={{flex:1,alignItems:'center',justifyContent:'space-between'}}>
              <View style = {{justifyContent: 'space-around',margin:10}}> 
                                  <TextInputwithIcon 
                                    width = {screen.width*2/3}
                                    height = {screen.height*1/10}
                                    IconName = 'md-person'
                                    IconColor = {this.props.validUserName?null:'red'}
                                    placeholder = 'User Name'
                                    value = {this.props.userName}
                                    onChangeText = {text=>this.props.UpdateSignUpPage({prop : 'userName' , value : text})}
                                  />

                                  <View style = {{borderBottomColor:'gray',borderBottomWidth:1}}/>

                                  <TextInputwithIcon 
                                    
                                    width = {screen.width*2/3}
                                    height = {screen.height*1/10}
                                    IconName = 'ios-at-outline'
                                    IconColor = {this.props.validEmail?null:'red'}
                                    placeholder = 'Email'
                                    value = {this.props.email}
                                    onChangeText = {text=> this.props.UpdateSignUpPage({prop : 'email' , value : text})}
                                  />
                                  <View style = {{borderBottomColor:'gray',borderBottomWidth:1}}/>
                                  
                                  <TextInputwithIcon 
                                    
                                    width = {screen.width*2/3}
                                    height = {screen.height*1/10}
                                    IconName = 'md-unlock'
                                    IconColor = {this.props.validPassword?null:'red'}
                                    placeholder = 'Password'
                                    isPassword = {true}
                                    value = {this.props.password}
                                    onChangeText = {text=>this.props.UpdateSignUpPage({prop : 'password' , value : text})}
                                  />

                                  <View style = {{borderBottomColor:'gray',borderBottomWidth:1}}/>
                                  
                                  <TextInputwithIcon 
                                    
                                    width = {screen.width*2/3}
                                    height = {screen.height*1/10}
                                    IconName = 'md-unlock'
                                    IconColor = {this.props.passwordsMatch?null:'red'}
                                    placeholder = 'Confirm Password'
                                    isPassword = {true}
                                    value = {this.props.confirmPassword}
                                    onChangeText = {text=>this.props.UpdateSignUpPage({prop : 'confirmPassword' , value : text})}
                                  />
                                  <Text style = {{
                                  alignSelf:'center',
                                  color:colors.vimto,
                                  fontSize:14,width:screen.width*2/3,
                                  textAlign:'center'
                                  }}>
                                  {this.props.errorMessage}
                                  </Text>

                                  <Text style = {{flexDirection:'row',alignSelf:'center'}}>By tapping "CREATE ACCOUNT" you agree  </Text>
                                  <View style = {{flexDirection:'row',alignSelf:'center'}}>
                                  <Text> to the </Text>
                                  <TouchableOpacity
                                   onPress = {()=>{Actions.PTermsAndConditions2();}}
                                  >
                                    <Text style = {{color:'blue',textDecorationLine:'underline'}}>Terms and Conditions</Text>
                                    </TouchableOpacity>
                                  </View>
                                <TouchableOpacity  style = {styles.ButtonSignup}
                                  onPress = {()=>
                                    {
                                      this.props.SignUpPageResetValidators();

                                      if (!isValidUserName(this.props.userName))
                                      {   
                                        this.props.UpdateSignUpPage({prop :"validUserName" , value : false})
                                       
                                        if(/(.*?[.\s_]{2,}.*)$/i.test(this.props.userName))
                                           this.props.UpdateSignUpPage({prop :'errorMessage' , value : 'user name doesn\'t allow two consecutive spaces dots or underscores'})
                                        else if(this.props.userName.length<6)
                                          this.props.UpdateSignUpPage({prop :'errorMessage' , value : 'user name must be at least 6 characters long'})
                                        else if(this.props.userName.endsWith(' ') || this.props.userName.endsWith('.'))
                                          this.props.UpdateSignUpPage({prop :'errorMessage' , value : 'user name must end with a character or digit'})
                                        else if (this.props.userName.startsWith(' ') || this.props.userName.startsWith('.'))
                                          this.props.UpdateSignUpPage({prop :'errorMessage' , value : 'user name must start with  a character'});
                                        else if (/(.*?[^a-zA-Z0-9\s.].*)$/i.test(this.props.userName))
                                          this.props.UpdateSignUpPage({prop :'errorMessage' , value : 'user can\'t contain special characters'});
                                        else
                                          this.props.UpdateSignUpPage({prop :'errorMessage' , value : 'invalid username !'});
                                      }
                                      else if(!isValidEmail(this.props.email))
                                      {
                                         this.props.UpdateSignUpPage({prop :"validEmail" , value : false})
                                         this.props.UpdateSignUpPage({prop :'errorMessage' , value : 'please enter valid email'})
                                      }
                                      else if (!isStrongPassword(this.props.password)) 
                                      {
                                        this.props.UpdateSignUpPage({prop : 'validPassword' , value : false})
                                        // if(this.props.password <6)
                                        // this.props.UpdateSignUpPage({prop : 'errorMessage' , value : 'your password is week'})

                                        this.props.UpdateSignUpPage({prop : 'errorMessage' , value : 'password must be at least 6 characters and include both numbers and letters or case senstive letters'})
                                      }
                                      else if (this.props.password != this.props.confirmPassword)
                                      {
                                        this.props.UpdateSignUpPage({prop : 'passwordsMatch' , value : false})
                                        this.props.UpdateSignUpPage({prop : 'errorMessage' , value : 'your passwords don\'t match'})
                                      }
                                      else
                                      {
                                        this.props.UpdateSignUpPage({prop : 'errorMessage' , value : ''})
                                        this.props.signUpUser({username:this.props.userName,email:this.props.email,password:this.props.password});
                                      }
                                    }
                                  }
                                  >
                                    <Text style = {styles.LoginButtonText}> {'CREATE ACCOUNT'} </Text>
                                </TouchableOpacity>       
  
                               {/* </View> */}
                             </View>
                     
                             <View style = {{alignItems:'center'}}>
                                  <Text style = {styles.OrFont}> {'OR'} </Text>

                                  <TouchableOpacity 
                                   style = {styles.fButtonLogin}
                                   onPress = {this.props.signUpUserWithFacebook.bind(this) 
                                   }                                   >
                                    <Icon style = {styles.SocialIconStyle} name='facebook-f'/>
                                    <Text style = {styles.SocialTextStyle}> {'Sign up with Facebook'} </Text>
                                 </TouchableOpacity>

                                    <TouchableOpacity 
                                      style = {styles.gButtonLogin}
                                      onPress = {this.props.signUpUserWithGoogle.bind(this)}
                                      > 
                                        <Icon style = {styles.SocialIconStyle} name='google-plus'/>
                                        <Text style = {styles.SocialTextStyle}> {'Sign up with Google'} </Text>
                          
                                        </TouchableOpacity>

                                  <TouchableOpacity
                                     style ={{margin:10}}
                                     onPress = {()=>{Actions.pop()}}
                                     >
                                     <Text style={{color: 'gray',textDecorationLine:'underline'}}>
                                     { " already have an account ? "}
                                     </Text>
                                     </TouchableOpacity>       
                                
                                     </View> 
                                </View> }   
                      

                    </LinearGradient>

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
       width : screen.width * 2/3,
       height : 40,
       borderRadius : 20,
       borderWidth:1,
       elevation : 1,
    }
    ,fButtonLogin : {
      alignItems:'center', 
            marginTop:10,
        alignSelf : 'center',
        justifyContent: 'center',
        flexDirection : 'row',
        backgroundColor : 'rgba(59,89,152,1)',
        width : screen.width * 2/3,
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
        backgroundColor : 'rgba(211,72,54,1)',
        width : screen.width * 2/3,
        height : 50,
        borderRadius : 10,
      
     }
    ,
    ButtonSignup : {
      alignItems:'center', 
      marginTop:10,
       alignSelf : 'center',
      justifyContent: 'center',
       flexDirection : 'row',
       backgroundColor : 'rgb(227, 234, 225)',
       width : screen.width * 2/3,
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
       //alignSelf : '',
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
    CrateTextStyle:{
      color:'gray',
      fontSize:16,
      alignSelf:'center',
     
    },
    SocialIconStyle : {
      color:'white',
      marginLeft:10,
     // alignSelf : 'flex-start',
     fontSize:24
    },
    LoginButtonText :{
        color:'gray',
         fontSize:16,
        // fontWeight:'900'
    }
}) 

 const mapStateToProps = (state)=>{
   const {email,password,confirmPassword,userName,
    errorMessage,validEmail,validPassword,passwordsMatch,validUserName,loading} = state.default.SignUpForm ;

   return {email,password,confirmPassword,userName,errorMessage,validEmail,
    validPassword,passwordsMatch,validUserName,loading} ;
}

export default connect (mapStateToProps, {signUpUser,UpdateSignUpPage,SignUpPageResetValidators, signUpUserWithFacebook,signUpUserWithGoogle})(PSignUP);