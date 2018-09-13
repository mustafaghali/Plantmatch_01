import React, { Component } from 'react';
import {Text,
    View,
    Dimensions,
    TouchableOpacity,
    StyleSheet
    } from 'react-native';
import {colors} from '../themes/style1';

import {Icon} from 'native-base';
import Modal from "react-native-modal";
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

class PImagePickerModal extends Component {  
     
  state = {
      option:1,
      isDismissed:false
    };
  

    executeOption = ()=>
    {
      if(this.state.isDismissed)
         return;
      if(this.state.option == 1)
       {
        this.props.choosePhoto()
       }
       else if (this.state.option ==2)
       {
        this.props.takePhoto();
       }
       else 
       this.props.removePhoto();

    }
    render(){
        
        return (
            <Modal
               animationIn = 'zoomIn' 
               animationOut = 'zoomOut' 
               isVisible = {this.props.isVisible} 
               onBackButtonPress = {()=>{
                this.setState({isDismissed:true});
                this.props.toggle()
                }}
               onBackdropPress = {()=>{
                this.setState({isDismissed:true});
                this.props.toggle()
                }}

               onModalHide = {()=>{this.executeOption()}}
            >
                                     {/* //<LinearGradient colors={colors.mainGradient}  style = {{flex:1}}> */}

                <LinearGradient  colors={[colors.white,colors.white]}
                style={{width:Dimensions.get('window').width - 40,   
                height:Dimensions.get('window').height*1/4,
               // backgroundColor:'white',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-around',   
                borderRadius:20
                }}>
                 
                  <View style = {{ flex:1,alignItems:'center'}}>
                     <TouchableOpacity
                       style = {{...styles.AddButton,backgroundColor:'transparent'}}//'#7C05B3'
                        onPress={() => {  
                          this.setState({option:1});
                          this.setState({isDismissed:false});
                         this.props.toggle();   
                       }}> 
                       <Icon name = 'ios-images' style = {{color:'gray'}}/>
                     </TouchableOpacity>
                     <Text style = {{marginTop:3}}> {'Gallery'} </Text>
                  </View>

                  <View style = {{flex:1,alignItems:'center'}}>  
                    <TouchableOpacity
                      style = {{...styles.AddButton,backgroundColor: 'transparent' }}//'#037E0E'
                        onPress={() => { 
                          this.setState({option:2});
                          this.setState({isDismissed:false});
                         this.props.toggle();   
                        
                       }}>
                        <Icon name = 'md-camera' style = {{color:'gray'}} />
                     </TouchableOpacity>
                    <Text style = {{marginTop:3}}> {'Camera'} </Text>
                  </View>

                  <View style = {{flex:1,alignItems:'center'}}>   
                   <TouchableOpacity
                    style = {{...styles.AddButton,backgroundColor:'transparent'}}    //#A31A3F
                        onPress={() => {
                          this.setState({option:3});
                          this.setState({isDismissed:false});
                         this.props.toggle();   
                       }}>
                        <Icon name = 'ios-trash' style = {{color:'gray'}} />     
                     </TouchableOpacity>
                    <Text style = {{marginTop:3}}> {'Remove Photo'} </Text>
                  </View>   
    
                </LinearGradient>
              </Modal>
        );
    }
}

const styles = {
     AddButton : {
       justifyContent: 'center',
       alignItems:'center',
       backgroundColor : '#0C6656',
       width : 50,
       height : 50,
       borderRadius : 25,
      //  shadowColor : '#000',
      //    shadowOffset : {width : 0 , height : 2},
      //    shadowOpacity : 0.1,
      //    shadowRadius : 2,
         elevation : 1,
    }
  }
    




export default PImagePickerModal;   