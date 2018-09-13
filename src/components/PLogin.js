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
  Container,
  Content,
  StyleProvider,
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
  Textinput,
  NetInfo } from 'react-native'
import {Actions} from 'react-native-router-flux';
import  {loginUser,
  UpdateLoginPage,
  loginUserWithFacebook,
  loginUserWithGoogle,
  UpdateAppState} from '../actions'; 
import {connect} from 'react-redux';
import {UserA as User}  from '../sampleData';
import {colors} from '../themes/style1';
import TextInputwithIcon from './common/TextInputwithIcon';
//import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {isValidEmail} from '../helpers'
import Spinner from './common/Spinner';
import OfflineNotice from './common/OfflineNotice';


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

      handleConnectivityChange = isConnected => {
        if (isConnected) {
          this.props.UpdateAppState({prop:'isConnectedToInternet',value:isConnected});
       // this.setState({ isConnected });
       } else {
        // this.setState({ isConnected });
        this.props.UpdateAppState({prop:'isConnectedToInternet',value:isConnected});
        }
      };

        componentDidMount() {
              NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
          }

          componentWillUnmount() {
            NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
         }
        
   

    render(){
     if (!this.state.isReady) {
          return <View />;
      }
    return (
      
           
        <LinearGradient colors={colors.mainGradient} style={{flex:1,height:Dimensions.get('window').height-StatusBar.currentHeight,alignItems:'center',justifyContent:'space-around'}}>
        {/* #BBD2C5   #ddefbb */}
         {(this.props.loading == true)?<Spinner/>:

        <View style={{alignItems:'center'}}>


                 <OfflineNotice/>
                
                  <Image 
                          source={require('../../Images/plant-match-logo-png-med1000.png')}
                             resizeMode='stretch'
                           style={{height:Dimensions.get('window').height * 0.3, width : Dimensions.get('window').height * 0.33}}
                  /> 
                <View>
                  <TextInputwithIcon 
                                    
                   width = {Dimensions.get('window').width*2/3}
                   height = {Dimensions.get('window').height*1/10}
                   IconName = 'ios-at-outline'
                   IconColor = {this.props.validEmail?null:'red'}
                   placeholder = 'Email'
                   value = {this.props.email}
                   onChangeText = { text=>this.props.UpdateLoginPage({prop : 'email' , value : text})
                  }
                   />
                    <View style = {{borderBottomColor:'gray',borderBottomWidth:1}}/>
                                  
                    <TextInputwithIcon 
                      width = {Dimensions.get('window').width*2/3}
                      height = {Dimensions.get('window').height*1/10}
                      IconName = 'md-unlock'
                      placeholder = 'Password'
                      isPassword = {true}
                      value = {this.props.password}
                      onChangeText = {text=>this.props.UpdateLoginPage({prop : 'password' , value : text})}
                    />
                     <Text style = {{alignSelf:'center',
                     color:colors.vimto,
                     textAlign:'center',
                     fontSize:14,
                     width:Dimensions.get('window').width*2/3}}>{this.props.errorMessage}</Text>

 
                     <TouchableOpacity  style = {styles.ButtonSignup}
                      // disabled = {!this.state.validEmail}
                      onPress = {()=>
                      {
                        if(!isValidEmail(this.props.email))
                        {
                          this.props.UpdateLoginPage({prop :"validEmail" , value : false})
                          return this.props.UpdateLoginPage({prop :'errorMessage' , value : 'please enter valid email'})
                        }
                          else
                        {
                          this.props.UpdateLoginPage({prop :"validEmail" , value : true})
                          this.props.loginUser(this.props.email,this.props.password);
                      
                        }
                      }
                      }
                      >
                                    
                      <Text style = {styles.LoginButtonText}> {'LOGIN'} </Text>
                      </TouchableOpacity>       
  
                      </View>



                      <View style = {{flex:1,alignItems:'center'}} > 
                            <View style ={{flex:1}}/>
                                   <Text style = {styles.OrFont}> {'OR'} </Text>

                         <TouchableOpacity 
                                    style = {styles.fButtonLogin}
                                    onPress = {this.props.loginUserWithFacebook.bind(this)}
                                   >
                                    <Icon style = {styles.SocialIconStyle} name='facebook-f'/>
                                    <Text style = {styles.SocialTextStyle}> {'Login with Facebook'} </Text>
                       </TouchableOpacity>  

                       <TouchableOpacity 
                          style = {styles.gButtonLogin}
                          onPress = {this.props.loginUserWithGoogle.bind(this)}
                        > 
                            <Icon style = {styles.SocialIconStyle} name='google-plus'/>
                            <Text style = {styles.SocialTextStyle}> {'Login with Google'} </Text>
                          
                      </TouchableOpacity>
                        
                      <View style = {{flexDirection: 'row', width:Dimensions.get('window').width -10 ,margin:10,justifyContent:'space-between',alignItems:'center'}}> 
                           <TouchableOpacity
                                onPress = {()=>{Actions.PSignUp({onBack: () => console.log('custom back callback') });}}
                             >
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

                             

                     </View>}
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
        justifyContent: 'center',
        flexDirection : 'row',
        backgroundColor : 'rgba(59,89,152,1)',
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
        backgroundColor : colors.vimto,
       // 'rgba(211,72,54,0.9)'
        width : Dimensions.get('window').width * 2/3,
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
   const {email,password,errorMessage,loading,validEmail,validPassword} = state.default.LoginForm ;

   return ( {email,password,errorMessage,loading,validEmail,validPassword});
}
export default connect (mapStateToProps,{loginUser,UpdateLoginPage,loginUserWithFacebook,loginUserWithGoogle,UpdateAppState})(PLogin);