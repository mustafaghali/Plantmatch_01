import React, { Component } from 'react';
import {View,
       StyleSheet,
       ImageBackground,
       Image,
       TouchableOpacity
  } from 'react-native';

import {Thumbnail,
        Icon} from 'native-base';
import {changeDrawerVisiblity} from '../actions';
import Modal from "react-native-modal";
import {connect} from 'react-redux';
import {Card,CardItem,Button,Text,ListItem} from 'native-base';
//import { StackNavigator } from 'react-navigation';
import {Actions, DefaultRenderer} from 'react-native-router-flux';






class PDrawerModal extends Component {
  

   constructor() {
         super();
         this.state = {
         isReady: true
         };
   }

 
//    async componentWillMount() {
//         //  await Expo.Font.loadAsync({
//         //  Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
//         // });
//       this.setState({ isReady: true });
// }

  render (){
       if (!this.state.isReady) {
          return <View />;
      }
     return (
//supportedOrientations = 'landscape-left'
               <Modal  style = {{margin:0}}
               animationIn = 'slideInLeft'
               animationOut = 'slideOutLeft'
               animationInTiming  = {300}
                animationOutTiming  = {200}
               onDismiss = {()=> this.props.changeDrawerVisiblity(!this.props.visible)}
               isVisible = {this.props.visible}
               onBackButtonPress ={() => {
                     this.props.changeDrawerVisiblity(!this.props.visible);
                  }}	 
                 onBackdropPress ={() => {
                     this.props.changeDrawerVisiblity(!this.props.visible);
                  }}	  
                  
                  >
                  
                   <View style={{flex: 1 ,height :undefined ,width:'80%',backgroundColor:'#F1F5F3'}}>
                   
                    <View style = {{ height:'30%'}}>  
                       <ImageBackground
                          resizeMode='stretch'
                          source={require('../../Images/plantsdrawer3.jpg')}
                          style={{flex:1,width:undefined,justifyContent:'flex-end'}}
                        
                       >
                       <View style = {{flexDirection:'row',alignItems:'flex-end',marginBottom:10,justifyContent:'space-around'}}> 
                       <Thumbnail large style = {{ borderColor : 'gray',borderWidth: 1.5,marginLeft:10}} 
                                                          source =  {{uri:this.props.photo_url}}/> 
                      <View style = {{alignItems:'center'}}>
                      <Text style = {{fontSize:14,color:'gray'}}>
                          {this.props.username}
                          </Text>

                       <Text style = {{fontSize:14,color:'gray'}}>
                           {this.props.email}
                           </Text>
                        </View>
                      
                      </View> 
                       </ImageBackground>  
                      </View>

                      <View >                    
                       <ListItem>
                           <TouchableOpacity style = {{flex:1}}
                            onPress ={() => {
                                this.props.changeDrawerVisiblity(!this.props.visible);
                                Actions.PMain();   
                              }}	  >
                           <View style = {{flexDirection:'row'}}>
                           <Icon style= {styles.Iconstyle} name='ios-home'/>
                           <Text style = {styles.ListItemfontStyle}> {'Plants Search'}</Text>
                           </View>
                           </TouchableOpacity>
                       </ListItem>

                        <ListItem>
                           <TouchableOpacity style = {{flex:1}}
                            onPress ={() => {
                                this.props.changeDrawerVisiblity(!this.props.visible);
                                 Actions.PMyPlants();
                              }}
                           >
                           <View style = {{flexDirection:'row'}}>
                           <Icon style= {styles.Iconstyle} name='ios-basket'/>
                           <Text style = {styles.ListItemfontStyle}> {'My Plants'}</Text>  
                           </View>
                           </TouchableOpacity>
                       </ListItem>


                      


                       <ListItem>
                           <TouchableOpacity style = {{flex:1}}
                            onPress ={() => {
                                this.props.changeDrawerVisiblity(!this.props.visible);
                                Actions.PUserSettings();
                              }}	
                           >
                           <View style = {{flexDirection:'row'}}>
                           <Icon style= {styles.Iconstyle} name='md-settings'/>
                           <Text style = {styles.ListItemfontStyle}> {'Profile Settings'}</Text>
                           </View>
                           </TouchableOpacity>
                       </ListItem>



                       <ListItem>
                           <TouchableOpacity style = {{flex:1}}
                            onPress ={() => {
                                this.props.changeDrawerVisiblity(!this.props.visible);
                                 Actions.PAbout();
                              }}
                           >
                           <View style = {{flexDirection:'row'}}>
                           <Icon style= {styles.Iconstyle} name='ios-flower'/> 
                           <Text style = {styles.ListItemfontStyle}> {'About Plantmatch'}</Text>
                           </View>
                           </TouchableOpacity>
                       </ListItem>
                       <ListItem>
                          <TouchableOpacity style = {{flex:1}}
                            onPress ={() => {
                                this.props.changeDrawerVisiblity(!this.props.visible);
                                 Actions.PSendNotes();
                              }}
                           >
                           <View style = {{flexDirection:'row'}}>
                           <Icon style= {styles.Iconstyle} name='md-mail-open'/>
                           <Text style = {styles.ListItemfontStyle}> {'Send your notes'}</Text>
                           </View> 
                           </TouchableOpacity>  
                       </ListItem>
                       <ListItem>
                          <TouchableOpacity style = {{flex:1}}
                            onPress ={() => {
                                this.props.changeDrawerVisiblity(!this.props.visible);
                                  Actions.popTo("PLogin");
                              }}
                           >
                           <View style = {{flexDirection:'row'}}>
                           <Icon style= {styles.Iconstyle} name='md-log-out'/>
                           <Text style = {styles.ListItemfontStyle}> {'Logout'}</Text>
                           </View>
                           </TouchableOpacity>    
                       </ListItem>

                       </View>
                   </View>
               </Modal>
     )

 }
} 


const mapStateToProps = state => {
    const {email,username,photo_url} = state.default.CurrentUserInfo;
    const visible = state.default.MainPageState.drawerVisbility;
       return  {visible,email,username,photo_url};
};


const styles = StyleSheet.create({
    separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },Iconstyle :{
      color : '#90BD85'
    },
  ListItemfontStyle:{
         fontSize:14,
         color:'gray',
         marginLeft:20
  }
});

export default connect (mapStateToProps,
    {changeDrawerVisiblity}
)(PDrawerModal);  