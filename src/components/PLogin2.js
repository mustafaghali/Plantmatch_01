// import React, { Component } from 'react'

// import {
//   Button,
//   Card,
//   Left,
//   Right,
//   CardItem,
//   InputGroup,
//   Input,
//   Icon,
//   View,
//   Spinner,
//   Container,
//   Content,
//   StyleProvider,
//   Text
// } from 'native-base';
// import Expo from 'expo';
// import KeyboardSpacer from 'react-native-keyboard-spacer';
// import { Alert,
//   TextInput,
//   ImageBackground, 
//   StyleSheet, 
//   Dimensions,
//   Image,
//   TouchableHighlight, 
//   TouchableOpacity,
//   StatusBar } from 'react-native'
// import {Actions} from 'react-native-router-flux';
// import  {loginUser,UpdateCurrentUserInfo} from '../actions';
// import {connect} from 'react-redux';
// import {UserA as User}  from '../sampleData';




// class PLogin extends Component {

//    constructor() {
//          super();
//          this.state = {
//          isReady: false
//          };
//    }

//   async componentWillMount() {
//       this.setState({ isReady: true });
// }

//     loginUserlocal = () => {   
//     _.each(User,(value,prop) => {
//           this.props.UpdateCurrentUserInfo({prop,value})         
//         });
//        };

//     render(){
//      if (!this.state.isReady) {
//           return <Expo.AppLoading />;
//       }
//     return (
    
//                <View style = {{flex:1,marginTop:StatusBar.currentHeight}}>
//                       <Image 
//                           source={require('../../Images/loginLogo.png')}
//                           style={{height:Dimensions.get('window').height * 1/3, width : undefined}}
//                       />
                         
//                           <Card style = {{flex:4, justifyContent: 'space-around'}}>
//                                <CardItem style = {{flexDirection :'column'}}>

//                                    <Text style = {styles.SignInLabelFont}>
//                                      {'Sign In'}
//                                    </Text>
                            
//                                   <InputGroup style={{marginBottom:10}} boarderType='round'>
//                                     <Icon style= {styles.Iconstyle} name='ios-at-outline'/>
//                                     <Input style={{color:"#000"}}
//                                       placeholder='Email or Username'
//                                       placeholderTextColor="gray"
//                                      />
//                                    {/* <KeyboardSpacer/> */}
//                                   </InputGroup>

//                                   <InputGroup style={{marginBottom:10}} boarderType='round'>
//                                     <Icon style= {styles.Iconstyle} name='ios-unlock'/>
//                                     <Input style={{color:"#000"}}
//                                       placeholder='Password'
//                                       secureTextEntry={true}
//                                       placeholderTextColor="gray"
//                                     />
//                                     {/* <KeyboardSpacer/> */}
//                                    </InputGroup>
                                 
//                                </CardItem>

//                                <CardItem>
//                                   <TouchableOpacity  style = {styles.ButtonLogin}
//                                   onPress = {()=>
//                                     {
//                                       //this.loginUserlocal();
//                                       this.props.loginUser();
//                                       Actions.PMain();
//                                     }
//                                   }
//                                   >
//                                     <Text style = {styles.LoginButtonText}> {'LOGIN'} </Text>
//                                   </TouchableOpacity>       
  
//                                </CardItem>
//                              </Card>



//                            <Text style = {styles.OrFont}> {'or sign in with'} </Text>



//                            <Card style = {{ flex:3}}>
//                               <CardItem style = {{flex :1,flexDirection : 'column'}}>
//                                 <View style = {{ flex: 4, justifyContent: 'space-around'}}>

//                                   <TouchableOpacity  style = {styles.fButtonLogin}>
//                                     <Icon style = {styles.SocialIconStyle} name='logo-facebook'/>
//                                     <Text style = {styles.SocialIconStyle}> {'LOGIN WITH FACEBOOK'} </Text>
//                                   </TouchableOpacity>

//                                    <TouchableOpacity  style = {styles.gButtonLogin}>
//                                     <Icon style = {styles.SocialIconStyle} name='logo-googleplus'/>
//                                     <Text style = {styles.SocialIconStyle}> {'LOGIN WITH Google'} </Text>
//                                   </TouchableOpacity>
//                                 </View>

//                                  <View style = {{flex:1 , flexDirection: 'row', marginBottom:5}}>
//                                   <Left>
//                                     <TouchableOpacity>
//                                      <Text style={{fontSize:15,color: 'blue',textDecorationLine:'underline'}}>
//                                       { " Don't have an account ? "}
//                                   </Text>
//                                   </TouchableOpacity>
//                                   </Left>
                                  
                                  
//                                   <Right>
//                                       <TouchableOpacity>
//                                         <Text style={{fontSize:15,color: 'blue',textDecorationLine:'underline'}}>
//                                       { " Forgot Password ?"}
//                                     </Text>
//                                   </TouchableOpacity>
//                                   </Right>
//                                   </View>
//                               </CardItem>
//                            </Card>

                             

//                       </View>


//     )

//     };
// }


// const styles = StyleSheet.create({
//     LoginImage : {
//       flex:1,
//       height: undefined,
//        width: undefined
//     }
//     ,ButtonLogin : {
//        flex: 1,
//        alignSelf : 'center',
//        justifyContent: 'space-around',
//        flexDirection : 'row',
//        backgroundColor : '#339933',
//        width : undefined,
//        height : Dimensions.get('window').height * 1/18,
//         borderRadius : 20,
//       //  shadowColor : '#000',
//       //    shadowOffset : {width : 0 , height : 2},
//       //    shadowOpacity : 0.1,
//       //    shadowRadius : 2,
//          elevation : 1,
//     }
//    ,fButtonLogin : {
//        alignSelf : 'center',
//        justifyContent: 'space-around',
//        flexDirection : 'row',
//        backgroundColor : '#3b5998',
//        width : Dimensions.get('window').width * 2/3,
//        height : Dimensions.get('window').height * 1/18,
//        borderRadius : 20,
//       //  shadowColor : '#000',
//       //    shadowOffset : {width : 0 , height : 2},
//       //    shadowOpacity : 0.1,
//       //    shadowRadius : 2,
//          elevation : 1,
//     }
//     ,gButtonLogin : {
//        alignSelf : 'center',
//        justifyContent: 'space-around',
//        flexDirection : 'row',
//        backgroundColor : '#d34836',
//        width : Dimensions.get('window').width * 2/3,
//        height : Dimensions.get('window').height * 1/18,
//        borderRadius : 20,
//        elevation : 1,
//     }
//     ,CardContainer : {
//       flex: 1
//     }
//     ,OrFont :{
//        fontSize:20,
//        alignSelf : 'center',
//        color: 'green'
//     },
//       SignInLabelFont :{
//        fontSize:20,
//        alignSelf : 'flex-start',
//        color: 'green'
//     }
//     ,Iconstyle :{
//       color : 'black'
//     },
//     SocialIconStyle : {
//       color:'white',
//      alignSelf: 'center'
//     },
//     LoginButtonText :{
//         color:'white',
//      alignSelf: 'center'
//     }
// }) 

// // const mapStateToProps = (state)=>{
// //    const {} = state.default.PlantAddFrom ;

// //    return ({

// //    });
// // }
// export default connect (null,{loginUser,UpdateCurrentUserInfo})(PLogin);