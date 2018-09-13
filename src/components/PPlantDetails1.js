// import React, { Component } from 'react'; 
// import {Text,
//     View,
//     Image,
//     StyleSheet,
//     Dimensions,
//     TouchableOpacity,
//     ImageBackground,
//     ScrollView,
//     StatusBar,
//     Linking,
//     Share,} from 'react-native';  
// import {Actions, DefaultRenderer} from 'react-native-router-flux';
// import PlantCard from './PlantCard';
// import PSwiper from './PSwiper';
// import PCustomImage from './PCustomImage';
// import {Card,
//         CardItem,
//         Icon,
//         List,
//         ListItem,
//         Thumbnail,
//         Fab,
//         Button,
//         Text as NText} from 'native-base';
// import {connect} from 'react-redux';
// import {setIndexOfSwiperImage} from '../actions';
// import StarRating from 'react-native-star-rating';
// import Bar from 'react-native-bar-collapsible';
// import {MapView} from 'expo';
// import {ImagesUrls} from '../sampleData';
// import PCustomPageHeader from './PCustomPageHeader';
// import {colors} from '../themes/style1';
// import Communications from 'react-native-communications';   


// class PPlantDetails extends Component { 

//     constructor(){
//          super();
//           this.state = {
//           isReady: true,
//           activeFab : false,
//           likedByCurrentUser : false
//          };

//     }    
    
//    async componentWillMount() {   
//     //     await Expo.Font.loadAsync({
//     //       juice_itc: require("../../fonts/BellMT.ttf"),   
//     //     });
//     // this.setState({ isReady: true ,});
//        this.setState({likedByCurrentUser:this.props.Plant.likedByCurrentUser});
//      } 
 

//    renderLikeButton (){
//     //  return      
//     //   <View style = {{flex:1,
//     //                        marginLeft:10,
//     //                        backgroundColor:((this.state.likedByCurrentUser==true)?colors.inputBlueBorder:colors.white),
//     //                        borderColor:colors.inputBlueBorder,   
//     //                        borderWidth:1,
//     //                       flexDirection:'row',
//     //                       alignItems:'center',
//     //                       justifyContent:'center',
//     //                       width:Dimensions.get('window').width*0.3,
//     //                        height:45,     
//     //                       }}>   
//     //                        <Icon name="md-thumbs-up" style = {{color:((this.state.likedByCurrentUser==true)?colors.white:colors.inputBlueBorder)}}/>    
//     //                          <Text style = {{color:((this.state.likedByCurrentUser==true)?colors.white:'gray'),fontSize:18,fontWeight:'900',marginLeft:15}}>{((this.state.likedByCurrentUser==true)?'Liked':'Like')}</Text>
//     //    </View>
                        
//      if (!this.state.likedByCurrentUser)         
//        return  <View style = {{flex:1,
//                            marginLeft:10,
//                            backgroundColor:colors.white,
//                            borderColor:colors.inputBlueBorder,
//                            borderWidth:1,
//                           flexDirection:'row',
//                           alignItems:'center',
//                           justifyContent:'center',
//                           width:Dimensions.get('window').width*0.3,
//                            height:45,     
//                           }}>   
//                            <Icon name="md-thumbs-up" style = {{color:colors.inputBlueBorder}}/>    
//                              <Text style = {{color:'gray',fontSize:18,fontWeight:'900',marginLeft:15}}>{'Like'}</Text>
//                            </View>
        
//       return  <View style = {{flex:1,   
//                            marginLeft:10,
//                            backgroundColor:colors.inputBlueBorder,
//                            borderColor:colors.inputBlueBorder,
//                            borderWidth:1,
//                           flexDirection:'row',
//                           alignItems:'center',
//                           justifyContent:'center',
//                           width:Dimensions.get('window').width*0.3,
//                            height:45,     
//                           }}>   
//                            <Icon name="md-thumbs-up" style = {{color:colors.white}}/>    
//                              <Text style = {{color:colors.white,fontSize:18,fontWeight:'900',marginLeft:15}}>{'Liked'}</Text>
//                            </View>

      
//    }

//    renderTransactionThumbnail(transactionType){
//             if(transactionType == 'Swapping')
//                 {
//                     return  <Thumbnail small style = {{ borderColor : 'gray',borderWidth: 1}} 
//                                                           source =  {require('../../Images/money1.png')}/>
//                 }
//                 else if(transactionType == 'Adoption')
//                 return  <Thumbnail small style = {{ borderColor : 'gray',borderWidth: 1}} 
//                                                           source =  {require('../../Images/adoption.png')}/>
//                 }

//    renderSwiperImages(){
//       return ImagesUrls.map((url,index)=><View key = {index} style={styles.slide}> 
//             <ImageBackground resizeMode='stretch' style={styles.image} source= {{uri : url}} >  
//              <TouchableOpacity onPress = {()=> { Actions.PFullScreenSwiper({ImagesUrls:ImagesUrls});}}>
//                <View style= {{borderWidth:2,borderColor:'#d69113',width:40,height:40,alignItems:'center',justifyContent:'center'}}> 
//                 <Icon name = {'ios-expand'} style = {{fontSize:30, fontWeight: 'bold',color:'#d69113'}}/>  
//                </View>  
//             </TouchableOpacity>
//             </ImageBackground>
//           </View>)
//    }
            
//     render(){
//         const {commonName,speciesName ,latinName,size,quantity,transactionType,city,country,
//           views,likes,username,useremail,discription,
//           userRating,userphoto_uri,latitude,userphone,formattedAddress,
//            longitude} = this.props.Plant; 
//           if (!this.state.isReady) {  
//            return <Expo.AppLoading />;
//       }
//         //  
//      return (  
//       <View style = {{flex:1,alignItems:'center',justifyContent:'center',marginTop : StatusBar.currentHeight}}>
//        <PCustomPageHeader header = "Plant Details"/>
//         <ScrollView style={{flex:1}}> 
//          <View style = {{flex:1}}>
//          <View style = {{width:undefined,height : Dimensions.get('window').height*4/5}}>
//             <Card style = {{marginTop:0}}>
//                <View style = {{flex:1}}>  
//                  <View style ={styles.SwiperWrapper}  >
//                   <PSwiper>
//                       { this.renderSwiperImages()}
//                   </PSwiper> 
//                  </View>
//                  <View  style = {{alignItems:'stretch'}}>
//                    <View style = {{flexDirection : 'row',alignSelf:'center'}}>
//                     <Text style = {{fontSize:40,color:'gray'}}>{commonName}</Text> 
//                     </View>
//                    <View style = {{flexDirection : 'row',alignContent:'stretch',justifyContent:'space-between',backgroundColor:'white'}}>  
                     
//                      <View style = {{flexDirection:'row',alignItems: 'center',justifyContent:'center',marginLeft:5}} >
//                        <Icon active name="md-thumbs-up" style ={{color:'#0C6656'}} /> 
//                        <Text style = {{marginLeft:5,color:'#4082E8'}}>{likes +' Likes'}</Text>          
//                     </View>

//                      <View  style = {{flexDirection:'row',alignItems: 'center'}} >
//                         <Icon active name="md-eye" style ={{color:'#0C6656'}}/>
//                         <Text style = {{marginLeft:5,color:'#4082E8'}}>{views + ' Views'}</Text>
//                       </View>
//                      <View  style = {{flexDirection:'row',alignItems: 'center',marginRight:5}} >
//                        <Icon active name="md-clock" style ={{color:'#0C6656'}}/>
//                       <Text style = {{fontSize:14,marginLeft:5,color:'gray'}}>{'11h ago'}</Text>
//                     </View>
//                   </View> 
//                  </View>
//                 </View>
//             </Card>
//           </View>

//             <Card style = {{marginTop : 20}}>
//               <View style = {{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
//                 <View style = {{flex:1.5}}>
//                   <ListItem itemDivider>
//                     <View style = {{flex:1,justifyContent:'center',alignItems:'center', flexDirection:'row'}}>
//                       <Icon name = {'md-person'} style = {{fontSize:24, fontWeight: 'bold',color:'#d69113'}}/>
//                       <Text style = {{fontSize:16, color:'gray',marginLeft:10}}>{'Posted by'}</Text>
//                     </View>
//                   </ListItem>                     
//                   <ListItem style = {{alignItems:'center'}} >
//                     <TouchableOpacity style = {{flex:1,justifyContent:'center',alignItems:'center'}}
//                      onPress = {()=>Actions.PUserAProfile()}>
//                       <Thumbnail square source={{uri:userphoto_uri}} />
//                       <Text style = {{fontSize:12, color:'#0C6656',marginRight:10}}>{username}</Text>
//                       <StarRating
//                       containerStyle = {{alignSelf:'center'}}
//                       starSize = {20}
//                       disabled={true}
//                       emptyStar={'ios-star-outline'}
//                       fullStar={'ios-star'}
//                       halfStar={'ios-star-half'}
//                       iconSet={'Ionicons'}
//                       maxStars={5}
//                       rating={userRating} 
//                       selectedStar={(rating) => this.onStarRatingPress(rating)}
//                       fullStarColor={'#E08E1E'}
//                       />
//                     </TouchableOpacity>
//                              </ListItem>
//                             </View>

//                         {/* <View style={{  borderLeftColor: 'gray', borderLeftWidth : 1,}}/>    */}
//                             <View style = {{flex:1,marginLeft:10}}>   
//                              <ListItem itemDivider>
//                                <View style = {{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
//                                 <Icon name = {'md-repeat'} style = {{fontSize:24, fontWeight: 'bold',color:'#d69113'}}/>
//                                  <Text style = {{fontSize:16, color:'gray',marginLeft:10}}>{'For'}</Text>
//                                </View>
//                             </ListItem>                    
//                               <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
//                                  {this.renderTransactionThumbnail(transactionType)} 
//                                 <Text style = {{fontSize:14, color:'#0C6656'}}>{transactionType}</Text> 
//                               </View>
//                              </View>
//                         {/* <View style={{  borderLeftColor: 'gray', borderLeftWidth : 1,}}/>    */}

//                             <View style = {{flex:1,marginLeft:10}}>
//                              <ListItem itemDivider>
//                                <View style = {{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
//                                 <Icon name = {'md-pin'} style = {{fontSize:24, fontWeight: 'bold',color:'#d69113'}}/>
//                                  <Text style = {{fontSize:16, color:'gray',marginLeft:10}}>{'In'}</Text>
//                                </View>
//                             </ListItem>                    
//                               <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
//                                 <Text style = {{fontSize:14, color:'#0C6656'}}>{city+', '+country}</Text>
//                               </View>
//                              </View>

//                             </View>
//                       </Card> 

//                       <Card style = {{marginTop : 20}}>
//                         <Bar
//                           style = {{backgroundColor: colors.main}}
//                           titleStyle={{ color: 'white',fontSize:20 }}  
//                            iconStyle = {{color:'white',marginLeft:20}}  
//                            title='Plant info Sheet'
//                            collapsible={true}
//                            showOnStart={true}
//                            iconCollapsed='chevron-right'
//                            iconOpened='chevron-down'
//                        >
//                         <CardItem >
//                       <View style = {{flex:1}}> 
//                          <List>
                            
//                              <ListItem itemDivider> 
//                                 <Icon name = {'ios-leaf'} style = {{fontSize:24, fontWeight: 'bold',color:'#d69113'}}/>
//                                  <Text style = {{fontSize:16, color:'gray',marginLeft:10}}>{'Common name'}</Text>
//                             </ListItem>                    
//                             <ListItem style = {{alignItems:'center'}} >
//                                 <Text style = {{fontSize:16, color:'#0C6656',marginRight:10}}>{commonName}</Text>
//                             </ListItem>

//                             <ListItem itemDivider>
//                                 <Icon name = {'ios-rose'} style = {{fontSize:24, fontWeight: 'bold',color:'#d69113'}}/>
//                                  <Text style = {{fontSize:16, color:'gray',marginLeft:10}}>{'Species Name'}</Text>
//                             </ListItem>                    
//                             <ListItem style = {{alignItems:'center'}} >
//                                 <Text style = {{fontSize:16, color:'#0C6656',marginRight:10}}>{speciesName }</Text>
//                             </ListItem> 

//                             <ListItem itemDivider>
//                                 <Icon name = {'ios-flower'} style = {{fontSize:24, fontWeight: 'bold',color:'#d69113'}}/>
//                                  <Text style = {{fontSize:16, color:'gray',marginLeft:10}}>{'Latin Species Name'}</Text>
//                             </ListItem>                    
//                             <ListItem style = {{alignItems:'center'}} >
//                                 <Text style = {{fontSize:16, color:'#0C6656',marginRight:10}}>{latinName }</Text>
//                             </ListItem>

//                             <ListItem itemDivider>
//                                 <Icon name = {'md-clipboard'} style = {{fontSize:24, fontWeight: 'bold',color:'#d69113'}}/> 
//                                   <Text style = {{fontSize:16, color:'gray',marginLeft:10}}>{'Discription'}</Text>
//                             </ListItem>                    
//                             <ListItem style = {{alignItems:'center'}} >
//                                 <Text style = {{fontSize:14, color:'#0C6656',marginRight:10}}>{discription}
//                                </Text>     
//                             </ListItem>
//                         </List>
//                         <View style = {{flex:1,flexDirection:'row',marginTop:20,alignItems:'center',justifyContent:'center'}}> 
//                          <TouchableOpacity
//                            onPress = {
//                              ()=>{
//                                this.setState({likedByCurrentUser:!this.state.likedByCurrentUser});
//                              }  
//                            }
//                          >   
//                            {this.renderLikeButton()}   
//                          </TouchableOpacity>  

//                           <TouchableOpacity
//                            onPress = {()=>Share.share({
//                             message: `Hi \n Have a look at ${commonName} Plant at http://plantmatch.co`,   
//                             url: 'http://plantmatch.co',
//                             title: 'Plantmatch '
                            
//                             }, {// Android only:
//                                 dialogTitle: 'Share the Plant with your friends',
//                                 // iOS only:
//                                  excludedActivityTypes: [
//                                    'com.apple.UIKit.activity.PostToTwitter'     
//                                    ]
//                                 })}    
//                          >
//                          <View style = {{flex:1,
//                            marginLeft:10,
//                            backgroundColor:colors.white,
//                            borderColor:colors.inputBlueBorder,
//                            borderWidth:1,
//                           flexDirection:'row',
//                           alignItems:'center',
//                           justifyContent:'center',
//                           width:Dimensions.get('window').width*0.3,
//                            height:45,     
//                           }}>   
//                            <Icon name="md-share" style = {{color:colors.inputBlueBorder}}/>    
//                              <Text style = {{color:'gray',fontSize:18,fontWeight:'900',marginLeft:15}}>{'Share'}</Text>
//                            </View>
//                          </TouchableOpacity>
                        
//                         </View>
//                       </View>
//                     </CardItem>
//                        </Bar>  
//             </Card> 
           
//                         <View style = {{flex:1}}>
                         
//                                 </View> 

//                 <Card style = {{marginTop : 20}}>  
//                           <View style = {{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
//                             {/* <View style = {{flex:1}}>
//                             <ListItem itemDivider>
//                                <View style = {{flex:1,justifyContent:'center',flexDirection:'row'}}>
//                                <Icon name = {'md-timer'} style = {{fontSize:30, fontWeight: 'bold',color:'#d69113'}}/> 
//                                   <Text style = {{fontSize:20, color:'gray',marginLeft:10}}>{'Age'}</Text>
//                                </View>
//                             </ListItem>  

//                             <ListItem style = {{alignItems:'center'}} >
//                               <View style = {{flex:1,alignItems:'center'}}>
//                                 <Text style = {{fontSize:20, color:'#0C6656',marginRight:10}}>{'20'} </Text>     
//                               </View>
//                             </ListItem>
//                             </View> */}

//                             <View style = {{flex:1}}> 
//                              <ListItem itemDivider>
//                                 <View style = {{flex:1,justifyContent:'center',flexDirection:'row'}}>
//                                 <Icon name = {'ios-archive'} style = {{fontSize:24, fontWeight: 'bold',color:'#d69113'}}/>
//                                  <Text style = {{fontSize:16, color:'gray',marginLeft:10}}>{'Quantity '}</Text>
//                                 <Text style = {{fontSize:16, color:'#0C6656'}}>{quantity}</Text>
//                               </View>
//                             </ListItem>                    

//                                {/* <View style = {{flex:1,alignItems:'center'}}>
                               
//                                 </View> */}
      
//                              </View>

//                              <View style = {{flex:1,marginLeft:20}}> 
//                              <ListItem itemDivider>
//                                 <View style = {{flex:1,justifyContent:'center',flexDirection:'row'}}>
//                                 <Icon name = {'md-code'} style = {{fontSize:24, fontWeight: 'bold',color:'#d69113'}}/>
//                                  <Text style = {{fontSize:16, color:'gray',marginLeft:10}}>{'Size '}</Text>
//                                  <Text style = {{fontSize:16, color:'#0C6656'}}>{size}</Text>

//                               </View>
//                             </ListItem>                    
                            
//                                {/* <View style = {{flex:1,alignItems:'center'}}>
//                                 </View> */}
//                              </View>
//                             </View>

//                             <ListItem itemDivider style = {{marginTop:10}}>
//                                 <View style = {{flex:1,justifyContent:'center',flexDirection:'row'}}>
//                                 <Icon name = {'md-locate'} style = {{fontSize:24, fontWeight: 'bold',color:'#d69113'}}/>
//                                  <Text style = {{fontSize:16, color:'gray',marginLeft:10}}>{'Plant Location'}</Text>
//                               </View>
//                             </ListItem>    
                            
//                             <View  style = {{width:Dimensions.get('window').width-10,height:Dimensions.get('window').height*0.4,alignItems:'center',justifyContent:'center'}}>
//                                  <Text style = {{fontSize:16, color:'#0C6656'}}>{formattedAddress}</Text>
//                                <MapView
//                                   style = {{width:Dimensions.get('window').width-20,height:Dimensions.get('window').height*1/3,alignItems:'center',justifyContent:'center',marginLeft:10,marginRight:10,marginBottom:10,marginTop:10}}
//                                   initialRegion={{  
//                                   latitude: latitude,
//                                   longitude: longitude,
//                                   latitudeDelta: 0.0922,
//                                   longitudeDelta: 0.0421,
//                                   }} 

//                                   onPress = {()=> {Linking.openURL('http://maps.google.com/maps?daddr='+latitude+','+longitude)
//                                   .catch(err => console.error('An error occurred opening map link', err));}}
//                             > 
//                               <MapView.Marker
//                                   coordinate={{
//                                   latitude: latitude,
//                                   longitude: longitude, 
//                                   latitudeDelta: 0.0922,
//                                   longitudeDelta: 0.0421,
//                                   }}
//                                   title={commonName}
//                                   description={transactionType}
//                                 />  
                                
//                             </MapView>    
//                          </View>  
//                        </Card>
                 
//                   <Card style = {{marginTop : 20,marginBottom:20}}>
//                     <Bar   
//                      style = {{backgroundColor: colors.main}}
//                        titleStyle={{ color: 'white',fontSize:20 }} 
//                      iconStyle = {{color:'white',marginLeft:20}}        
//                      title='Contact the Poster'
//                      collapsible={true}
//                      showOnStart={true}
//                      iconCollapsed='chevron-right'
//                      iconOpened='chevron-down'
//                     >
//                     <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>    
//                       <View style = {{flexDirection:'row',width:Dimensions.get('window').width-20,marginBottom:20}}>
//                         <View style  = {{flex:1,justifyContent:'center',alignItems:'center'}}>  
//                            <TouchableOpacity style = {{justifyContent:'center',alignItems:'center'}}
                     
//                               >
//                                <Thumbnail circular source={{uri:userphoto_uri}} />
//                                <Text style = {{fontSize:16, color:colors.second}}>{username}</Text>
//                           </TouchableOpacity> 
//                         </View>

//                         <View style = {{flex:1, marginLeft:20}}>   
//                          <TouchableOpacity 
//                            style = {styles.ContactButtonStyle} 
//                             onPress={() => Communications.phonecall(userphone, true)}
//                          >
//                            <Icon name='md-call' style = {styles.ContactIcon} />
//                             <Text style = {styles.ContactButtonText}  >{'Call'}</Text>      
//                          </TouchableOpacity> 

//                          <TouchableOpacity  
//                           style = {styles.ContactButtonStyle}
//                           onPress={() => 
//                           {
//                           console.log(useremail);     
//                            Linking.openURL(`mailto:${useremail}?subject=Plantmatch (new match)&body=Hey I am interested in your ${commonName} Plant lisitng on Plantmatch`)
//                           // Communications.email(useremail, null, null, 'Plantmatch (new match)', `Hey I am interested in your ${commonName} Plant lisitng on Plantmatch`)
//                           }
//                           }  
//                          >            
//                            <Icon name='md-mail' style = {styles.ContactIcon} />
//                             <Text style = {styles.ContactButtonText}  >{'Email'}</Text>
//                          </TouchableOpacity>
  
//                          <TouchableOpacity  style = {styles.ContactButtonStyle}
//                             onPress={() => Communications.text(userphone, `Hey I am interested in your ${commonName} Plant lisitng on Plantmatch`)}  
//                          > 
//                            <Icon name='md-chatboxes' style = {styles.ContactIcon} /> 
//                             <Text style = {styles.ContactButtonText}  >{'SMS'}</Text> 
//                          </TouchableOpacity>
//                        </View>
//                     </View>
//                    <View style = {{flexDirection:'row',width:Dimensions.get('window').width*2/3  ,marginTop:10,marginBottom:20,alignItems:'center',justifyContent:'space-around'}}> 
//                     <TouchableOpacity
//                        style = {{...styles.SocialMediaButton,backgroundColor:'#3b5998'}}
//                         onPress= {()=> {Linking.openURL('https://www.facebook.com/Plantmatch-162022027728416/')
//                                   .catch(err => console.error('An error occurred opening facebook link', err));}}> 
//                        <Icon name = 'logo-facebook' style = {styles.SocialMediaIcon}/>
//                     </TouchableOpacity>

//                      <TouchableOpacity
//                        style = {{...styles.SocialMediaButton,backgroundColor:'#c32aa3'}}
//                            onPress= {()=> {Linking.openURL('http://instagram.com/plantmatch')
//                                   .catch(err => console.error('An error occurred opening instagram link', err));}}> 
//                        <Icon name = 'logo-instagram' style = {styles.SocialMediaIcon}/>
//                     </TouchableOpacity>

//                      <TouchableOpacity
//                        style = {{...styles.SocialMediaButton,backgroundColor:'#1da1f2'}}
//                         onPress= {()=> {Linking.openURL('https://twitter.com/Adopt_a_Pot')
//                                   .catch(err => console.error('An error occurred opening twitter link', err));}}>   
//                        <Icon name = 'logo-twitter' style = {styles.SocialMediaIcon}/>
//                     </TouchableOpacity>

//                       <TouchableOpacity
//                        style = {{...styles.SocialMediaButton,backgroundColor:'#A8A8A8'}}
//                       onPress= {()=> {Linking.openURL('https://www.plantmatch.co/')
//                                   .catch(err => console.error('An error occurred opening website link', err));}}>   
//                        <Icon name = 'ios-globe-outline' style = {styles.SocialMediaIcon}/>
//                     </TouchableOpacity>
//                         </View>
//                       </View>                        
//                        </Bar>
//                   </Card>
//             </View>
//             </ScrollView>
     
//       </View>

//         );
//     }     
// }

// const styles ={
//   wrapper: {
     
//   },
//     SocialMediaButton : { 
//        borderRadius:2,   
//        justifyContent: 'center',   
//        alignItems:'center',
//        width : 40,
//        height : 30,
//        marginLeft:20,
//     },
//     SocialMediaText : {
//             marginLeft:5,
//             color:'white'

//     },
//      SocialMediaIcon : {  
//             color:'white'

//     },
//   SwiperWrapper : {
//        marginBottom:30,
//       flex:1,

//     //   borderWidth : 1,
//     //   borderRadius : 2,
//     //   borderColor : '#ddd',  
//     //   shadowColor : '#000',
//     //   shadowOffset : {width : 0 , height : 2},
//     //   shadowOpacity : 0.1,
//     //   shadowRadius : 2,
//     //   elevation : 1,
//   },
//    slide: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'transparent'
//   },  
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold',
//   }, image: {
//     width:undefined, 
//     flex: 1,
//     justifyContent:'flex-end'
//   }, CardFooter : {
//         flex:1,
//         width:undefined,
//         height:Dimensions.get('window').height*1/9, 
//         backgroundColor : '#EFF5EC',
//         borderWidth: 1,
//         borderColor : 'gray',
//         flexDirection : 'row',
//         // shadowColor : '#000',
//         // shadowOffset : {width : 0 , height : 2},
//         // shadowOpacity : 0.1,
//         // shadowRadius : 2,
//         // elevation : 1,
//   }, ContactButtonStyle :{
//     flexDirection:'row',
//     alignItems:'center',
//     justifyContent:'space-around',
//     borderColor:colors.inputBlueBorder,
//     borderWidth:1,
//     borderRadius:10,
//     width:Dimensions.get('window').width*0.3,
//     marginTop:10         
//     },
//   ContactIcon :{
//     color:colors.inputBlueBorder
//   },
//   ContactButtonText : {
//     color:'gray'
//   }
// }


// const mapStateToProps = state => {
//        return  {swiperImageIndex : state.default.PlantDetailsPage.swiperImageIndex        
//     };
// };

// export default connect (mapStateToProps,{setIndexOfSwiperImage})(PPlantDetails);    