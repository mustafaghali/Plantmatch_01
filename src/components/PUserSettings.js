import React, { Component } from 'react';
import {Text,
        View,
    StatusBar,
    ScrollView,
    Dimensions,
    ImageBackground,
    Image,
    TextInput,
TouchableOpacity} from 'react-native';
import {Card,
        Icon,
        Thumbnail} from 'native-base';
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import PCustomPageHeader from './PCustomPageHeader';
import {UserA as User}  from '../sampleData';
import StarRating from 'react-native-star-rating';
import PImagePickerModal from './PImagePickerModal';
// import {ImagePicker, Permissions} from 'expo';
import  {UserInfoUpdate,SubmitUserInfoUpdate} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';
import Modal from "react-native-modal";
import PLocationPicker from './PLocationPicker';
import ImagePicker from 'react-native-image-picker';
import {screen} from '../AppConfigs'; 
import {colors} from '../themes/style1';




class PUserSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
    ImagePickerModalVisible : false,
    websiteLinkModalVisible : false,
    LocationPickerVisible : false,
    websiteLinkText : 'enter the page or profile name',
    selectedWebsite : 'Website'
    };
  }

   componentWillMount(){

      //  await get_user_data
     // console.log(this.props.CurrentUser);
        _.each(this.props.CurrentUser,(value,prop) => {
            this.props.UserInfoUpdate({prop,value})
        });
    //    this.setState({ ProfilePhotoUri : User.photo_uri });
    //    this.setState({ isReady: true });
};
     setAddress (latitude,longitude,full_address) {
     this.props.UserInfoUpdate({prop : 'full_address' , value :full_address})
     this.props.UserInfoUpdate({prop : 'latitude' , value :latitude})
     this.props.UserInfoUpdate({prop : 'longitude' , value : longitude})
    // this.setState({latitude,longitude,formatted_Address});
    }


      
    ImagePickerOptions = {
    title: 'Select Avatar',
    customButtons: [
      {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };

    takePhoto = async () => {
       await ImagePicker.launchCamera(this.ImagePickerOptions, (response) => { 
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {
               this.props.UserInfoUpdate({prop:"photo_url",value:response.uri})
            }
          });
      }   

    

    choosePhoto = async () => {  
      
         await ImagePicker.launchImageLibrary(this.ImagePickerOptions, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            }
            else {
               this.props.UserInfoUpdate({prop:"photo_url",value:response.uri})
            }
          });

        }


     removePhoto = () =>{
         this.props.UserInfoUpdate({prop:"photo_url",value:null})
      }

    toggleImagePickerModal ()  {
      this.setState({ImagePickerModalVisible: !this.state.ImagePickerModalVisible});
                  };

    togglewebsiteLinkModal () {
      this.setState({websiteLinkModalVisible: !this.state.websiteLinkModalVisible});
    }

    toggleLocationPickerVisibility()
   {
     this.setState({LocationPickerVisible:!this.state.LocationPickerVisible})
   }

    renderLinkModalContent() {
        var website = this.state.selectedWebsite;
        var propName = website.toLowerCase()+(website =='Website'?'_link':'_page');
        var iconName = 'ios-globe-outline', colorCode = '#A8A8A8';

        if(website == 'Facebook')
            {
                iconName = 'logo-facebook'
                colorCode = '#3b5998'
            }
        else if (website == 'Twitter')
            {
                iconName = 'logo-twitter'
                colorCode = '#1da1f2'
            }
        else if (website == 'Instagram')
            {
                iconName = 'logo-instagram'
                colorCode = '#c32aa3'
            }

        return (
               <View
               style = {{
                          width:Dimensions.get('window').width - 40,
                          height:180,
                          justifyContent:'center',
                          borderRadius:5,
                          backgroundColor:colorCode
                          }}>
                 <View style = {{flexDirection :'row',  marginLeft:20,marginTop:10,alignItems:'center'}}>
                  <Icon name = {iconName} style = {styles.SocialMediaIconLink}/>
                  <Text style ={{...styles.SocialMediaIconLink,marginLeft:10,fontSize:28}}>{website + ((website == "Website")?'':' page')}</Text>
                </View>
                   <TextInput
                     maxLength = {40}
                     placeholder = {(website == "Website")?'enter the website page':' enter the page or profile name'}  
                     autoCorrect = {false}
                     style = {styles.LinkModalinputStyle}
                     value = {this.props[propName]}
                     onChangeText =  {text => this.props.UserInfoUpdate({prop : propName , value : text}) }
                    />
                 <View style = {{flexDirection :'row',  marginLeft:20, marginRight:20, marginTop:10,justifyContent:'space-between'}}>
                 <TouchableOpacity
                   style = {styles.LinkModalButtonStyle}
                   onPress = {()=>{this.togglewebsiteLinkModal();}}
                   >
                  
                  <Text> confirm </Text>
                 </TouchableOpacity>

                  <TouchableOpacity
                   style = {styles.LinkModalButtonStyle}
                   onPress = {()=>{
                    this.props.UserInfoUpdate({prop :propName ,value : this.props.CurrentUser[propName]});
                     this.togglewebsiteLinkModal();
                    }}

                  >
                  <Text> cancel </Text>
                 </TouchableOpacity>

                 </View>

                </View>
        );
    }


     submitChanges = function() {  
      this.props.SubmitUserInfoUpdate(this.props.CurrentUser,this.props.UserInfoForm); 
      Actions.refresh();
    }                            

    render(){

        return (
                    <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}> 
                     <PCustomPageHeader header = "Settings"/>
                    <ScrollView style = {{flex:1}}>

                       <PImagePickerModal
                             isVisible =  {this.state.ImagePickerModalVisible}
                             toggle = {this.toggleImagePickerModal.bind(this)}
                             choosePhoto = {this.choosePhoto.bind(this)}
                             takePhoto = {this.takePhoto.bind(this)}
                             removePhoto = {this.removePhoto.bind(this)}
                            />


                      <Modal
                         animationIn = 'zoomIn'
                         animationOut = 'zoomOut'
                         isVisible = {this.state.websiteLinkModalVisible}
                         onBackButtonPress = {()=>{this.togglewebsiteLinkModal()}}
                         onBackdropPress = {()=>{this.togglewebsiteLinkModal()}}
                      >
                            {this.renderLinkModalContent()}
                    </Modal>


                      <View style = {{height:350,width:Dimensions.get('window').width - 10}}>
                        <Card style= {{flex:1}}>
                            <View style = {{flex:4,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
                             <View style = {{width:Dimensions.get('window').width*0.5,
                              height:Dimensions.get('window').width*0.5,

                              borderRadius:Dimensions.get('window').width*0.5*0.5
                              }}>
                            <ImageBackground
                             style = {{ borderColor : 'gray',
                             borderWidth: 0,
                             width:Dimensions.get('window').width*0.5,
                             height:Dimensions.get('window').width*0.5,
                             borderRadius: Dimensions.get('window').width*0.5,
                             alignItems:'center',
                             justifyContent:'flex-end'
                             }}
                             borderRadius ={ Dimensions.get('window').width*0.5}
                             source = {{uri:this.props.photo_url}}
                             >
                             <TouchableOpacity
                               onPress = {()=>{this.toggleImagePickerModal()}}
                            >
                               <Icon name = "md-camera" style = {{marginBottom:10,color:'#DFE3E6',fontSize:50}}/>
                             </TouchableOpacity>

                             </ImageBackground>


                              </View>
                              <Text style = {{fontSize:20,fontWeight:'bold'}}>{this.props.username}</Text>
                              <Text style = {{fontSize:14,fontWeight:'100'}}>{(this.props.city||'')+', '+(this.props.country||'')}</Text>

                            </View>

                            <View style = {{flex:1,justifyContent:'space-around',flexDirection:'row',borderColor:'gray',borderWidth:0}}>

                                 <View style = {{flex:1,alignItems:'center',justifyContent:'center'}} >
                                     <Icon active name="md-thumbs-up" style ={{color:'#0C6656'}}/>
                                     <Text style = {{color:'gray'}}>{this.props.totalNoLikes+' Listings likes'}</Text>
                                </View>



                                <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
                                     <StarRating
                                     starSize = {20}
                                     disabled={true}
                                     emptyStar={'ios-star-outline'} 
                                     fullStar={'ios-star'}
                                     halfStar={'ios-star-half'}
                                     iconSet={'Ionicons'}
                                     maxStars={5}
                                     rating={this.props.rating}
                                     selectedStar={(rating) => this.onStarRatingPress(rating)} 
                                     fullStarColor={'#E08E1E'}
                                     />
                                     <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:5}}>
                                       <Text style = {{color:'gray'}}>{}</Text>
                                       <Text style = {{color:'gray'}}>{this.props.no_of_ratings==0?'no rating yet':'customers ratings'}</Text>
                                    </View>
                                </View>


                                 <View style = {{flex:1,alignItems:'center',justifyContent:'center'}} >
                                     <Icon active name="md-eye" style ={{color:'#0C6656'}}/>
                                     <Text style = {{color:'gray'}}>{this.props.totalNoViews+' Listings views'}</Text>
                                </View>
                            </View>

                        </Card>
                      </View>

                      <View style = {{height:600,width:Dimensions.get('window').width - 10}} >
                        <Card style = {{flex:1}} >
                            <View style = {{flexDirection:'row',alignItems:'center'}}>
                                <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style = {{fontSize:14,color:'gray'}}>{'Name '}</Text>
                                </View>
                                 <TextInput
                    
                                  maxLength = {40}
                                  placeholder =  {''}
                                  autoCorrect = {false}
                                  style = {styles.inputStyle}
                                  value = {this.props.username}
                                  onChangeText =  {text => this.props.UserInfoUpdate({prop : 'username' , value : text}) }
                                />
                            </View>

                            <View style = {{flexDirection:'row',alignItems:'center'}}>
                                <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style = {{fontSize:14,color:'gray'}}>{'Email '}</Text>
                                </View>
                                 <TextInput
                                  maxLength = {40}
                                  placeholder =  {''}
                                  autoCorrect = {false}
                                  style = {styles.inputStyle}
                                  value = {this.props.email}
                                  onChangeText =  {text => this.props.UserInfoUpdate({prop : 'email' , value : text}) }
                                />

                            </View>


                              <View style = {{flexDirection:'row',alignItems:'center'}}>
                                <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style = {{fontSize:14,color:'gray'}}>{'Phone'}</Text>
                                </View>
                                 <TextInput
                                  maxLength = {40}
                                  placeholder =  {''}
                                  autoCorrect = {false}
                                  style = {styles.inputStyle}
                                  value = {this.props.phone}
                                  onChangeText =  {text => this.props.UserInfoUpdate({prop : 'phone' , value : text}) }
                                />

                            </View>


                            <View style = {{flexDirection:'row',alignItems:'center'}}>
                                <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style = {{fontSize:14,color:'gray'}}>{'Bio'}</Text>
                                </View>
                                 <TextInput
                                  maxLength = {100}
                                  multiline
                                  placeholder =  {''}
                                  autoCorrect = {false}
                                  style = {{...styles.inputStyle,height:200}}
                                  value = {this.props.bio}
                                  onChangeText =  {text => this.props.UserInfoUpdate({prop : 'bio' , value : text}) }
                                />
                            </View>


                             <View style = {{flexDirection:'row',alignItems:'center'}}>
                                <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style = {{fontSize:14,color:'gray'}}>{'Location'}</Text>
                                </View>
                                <View style = {styles.inputViewStyle}>
                                    <Text multiline style = {{flex:1,color:'gray', margin:10,justifyContent:'center',alignItems:'center',textAlign:'center'}}>{this.props.full_address}</Text>
                                    <View style = {{marginTop:5,marginRight:5}}>
                                       <TouchableOpacity style = {{flex:2,alignItems:'center',justifyContent:'center',borderRadius:20}}
                                         onPress = {()=> {this.toggleLocationPickerVisibility();}}
                                       >
                                         <Icon name  = "ios-create" style = {{color:'#0C6656'}}/>
                                           <PLocationPicker
                                                isVisible = {this.state.LocationPickerVisible}
                                                toggle =  {this.toggleLocationPickerVisibility.bind(this)}
                                                setAddress = {this.setAddress.bind(this)}
                                            />
                                       </TouchableOpacity>
                                       <View style = {{flex:1}}/>
                                    </View>
                                </View>
                            </View>



                  <View style = {{width:Dimensions.get('window').width,height:40,flexDirection:'row',marginTop:10,justifyContent:'space-around'}}>

                     <TouchableOpacity
                       style = {{...styles.SocialMediaButton,backgroundColor:'#3b5998'}}
                        onPress={() => {
                            this.setState({selectedWebsite:'Facebook'})
                            this.togglewebsiteLinkModal();
                        }}>
                       <Icon name = 'logo-facebook' style = {styles.SocialMediaIcon}/>
                       <Text style = {styles.SocialMediaText}> {'Facebook page'} </Text>
                     </TouchableOpacity>

                     <TouchableOpacity
                       style = {{...styles.SocialMediaButton,backgroundColor:'#c32aa3'}}
                         onPress={() => {
                            this.setState({selectedWebsite:'Instagram'})
                            this.togglewebsiteLinkModal();
                        }}
                        >

                       <Icon name = 'logo-instagram' style = {styles.SocialMediaIcon}/>
                       <Text style = {styles.SocialMediaText}> {'Instagram Page'} </Text>

                     </TouchableOpacity>

                  </View>

                  <View style = {{width:Dimensions.get('window').width,height:40,flexDirection:'row',justifyContent:'space-around'}}>

                     <TouchableOpacity
                       style = {{...styles.SocialMediaButton,backgroundColor:'#1da1f2'}}
                         onPress={() => {
                            this.setState({selectedWebsite:'Twitter'})
                            this.togglewebsiteLinkModal();
                        }}
                        >
                       <Icon name = 'logo-twitter' style = {styles.SocialMediaIcon}/>
                        <Text style = {styles.SocialMediaText}> {'Twitter Page'} </Text>
                     </TouchableOpacity>

                     <TouchableOpacity
                       style = {{...styles.SocialMediaButton,backgroundColor:'#A8A8A8'}}
                         onPress={() => {
                            this.setState({selectedWebsite:'Website'})
                            this.togglewebsiteLinkModal();
                        }}
                        >
                       <Icon name = 'ios-globe-outline' style = {styles.SocialMediaIcon}/>
                        <Text style = {styles.SocialMediaText}> {'Website'} </Text>
                     </TouchableOpacity>

                 </View>

                 <View style = {{ width:Dimensions.get('window').width - 10 ,
                       height : 60, alignItems:'center' }}>
                  <TouchableOpacity  style = {styles.SubmitButton}
                                onPress={ this.submitChanges.bind(this) }  >
                                    <Text style = {styles.SubmitButtonText}> {'save settings'} </Text>
                  </TouchableOpacity>
                </View>


              </Card>
            </View>
          </ScrollView>

         </View>
        );
    }
}


const styles = {
     inputStyle: {
         flex:4,
         paddingRight: 5,
         paddingLeft: 20,
         marginRight:5,
         marginTop:5,
         fontSize: 14,
         lineHeight: 23,
         width:undefined,
         height : 40,
         borderRadius : 20,
         borderWidth:1,
         borderColor:'#9CC8E1',
         color:'gray',
         backgroundColor:'white',
         textAlign : 'center' 

     },
         LinkModalinputStyle: {
         marginTop:8,
         paddingRight: 5,
         paddingLeft: 20,
         marginRight:5,
         marginLeft:5,
         fontSize: 16,
         lineHeight: 23,
         width:undefined,
         height : 50,
         borderRadius : 5,
         borderWidth:1,
         borderColor:'black',
         color:'gray',
         backgroundColor:'white'
     },
     LinkModalButtonStyle : {
        width:screen.width * 1/4,
        height : 50,
        backgroundColor:'white',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.white
     },
      inputViewStyle :
      {
         marginRight:5,
         marginTop:5,
        flexDirection:'row',
         flex:4,
         width:undefined,
         height : 80,
         borderRadius : 20,
         borderWidth:1,
         borderColor:'#9CC8E1',

      },

     SocialMediaButton : {
        flexDirection:'row',
       justifyContent: 'center',
       alignItems:'center',
       backgroundColor : '#0C6656',
       width : Dimensions.get('window').width*0.4,
       height : 30,
       borderRadius : 10,
      //  shadowColor : '#000',
      //    shadowOffset : {width : 0 , height : 2},
      //    shadowOpacity : 0.1,
      //    shadowRadius : 2,
         elevation : 1,
    },
        SocialMediaText : {
            marginLeft:5,
            color:'white'

        },
        SocialMediaIcon : {
            color:'white'

        },
         SocialMediaIconLink : {
            color:'white',
            fontSize:34,
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


const mapStateToProps = (state)=>{
    const {username,photo_url,email,phone,bio,full_address,
           facebook_page,instagram_page, twitter_page,website_link,
           latitude,longitude,city,country,totalNoLikes,rating,no_of_ratings,totalNoViews} = state.default.UserSettings;
    const CurrentUser = state.default.CurrentUserInfo;
    const UserInfoForm = state.default.UserSettings ;
   return {username,photo_url,email,phone,bio,full_address,
            facebook_page,instagram_page, twitter_page,website_link,
            latitude,longitude,city,country,totalNoLikes,rating,
            no_of_ratings,totalNoViews,
            CurrentUser,
            UserInfoForm
          } ;
}

export default connect (mapStateToProps,{UserInfoUpdate,SubmitUserInfoUpdate})(PUserSettings);