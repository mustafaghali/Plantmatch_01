import React, { Component } from 'react';
import {Text,
        View,
        TextInput,
        Dimensions,
        ScrollView,
        StatusBar,
        TouchableOpacity,
        CheckBox,
        Picker,
        Image
       } from 'react-native';
import {Icon,
    Card,
    List,
    ListItem,
    Form,
    Picker as NPicker} from 'native-base';
// import {ImagePicker} from 'expo'; 
import  {PlantAddFormUpdate,PlantAddformReset} from '../actions';
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import {connect} from 'react-redux';
import PlantMatchHeader from './PlantMatchHeader';
import ModalSelector from 'react-native-modal-selector';
import {quantityOptions,transactionTypeOptions,sizeOptions} from '../data/AppData';
import PLocationPicker from './PLocationPicker';
import Modal from "react-native-modal";
import PCustomPageHeader from './PCustomPageHeader';
import PImagePickerModal from './PImagePickerModal';
import {colors} from '../themes/style1';
import ImagePicker from 'react-native-image-picker';





class PAddNewPlantForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
       LocationPickerVisible : false,
       imageindex:1,
       ImagePickerModalVisible : false,
       latitude:null,
       longitude:null,
    };
  }
     onQuantityChanged (value) {
         this.setState({
          Quantity: value
         });
      }

   
      ImagePickerOptions =  {
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
                this.props.PlantAddFormUpdate({prop : 'image'+this.state.imageindex+'Uri' , value :response.uri})

            // this.props.UserInfoUpdate({prop:"photoUri",value:response.uri})
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
                this.props.PlantAddFormUpdate({prop : 'image'+this.state.imageindex+'Uri' , value :response.uri})
        }
      });

      //   let pickerResult = await ImagePicker.launchImageLibraryAsync({
      //     exif: true,
      //     allowsEditing: false,
      //     quality: 1,
      //     base64: true
      //   })
      //  this.props.PlantAddFormUpdate({prop : 'image'+this.state.imageindex+'Uri' , value :pickerResult.uri})
     }

  
     removePhoto = () =>{
        this.props.PlantAddFormUpdate({prop : 'image'+this.state.imageindex+'Uri' , value :null})

      }   

   renderImagePlaceHolderContainer(index)
  {
    return (
     <View style = {{width:((index==1)?Dimensions.get('window').width*0.5:Dimensions.get('window').width*0.25), 
                   height:((index==1)?Dimensions.get('window').width*0.4:Dimensions.get('window').width*0.3),      
                   backgroundColor:'#E6EBF2',
                   alignItems:'center',
                   justifyContent:'center',
                   borderStyle : 'dotted',
                   borderWidth:5,
                   borderRadius: 20,
                   borderColor:'#B7C5DA'}}>
                    <TouchableOpacity  
                     style = {{flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                     }}
                       onPress={() => {
                       this.setState({imageindex : index});
                       this.setImagePickerModalVisible(!this.state.ImagePickerModalVisible);
                      }}
                   > 
                      {this.renderImagePlaceHolder(index)}   
                     </TouchableOpacity>

                 
       </View>
    )
  }

  renderImagePlaceHolder(index)
  {
     if(index == 1)
      uri = this.props.image1Uri
     else if (index == 2)
      uri = this.props.image2Uri
      else if (index == 3)
      uri = this.props.image3Uri
      else if (index == 4)
      uri = this.props.image4Uri            
      if (uri == null ) 
    return (
              <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}> 
              <Text style = {{color:'#B7C5DA'}}>{index +'+'}</Text>  
              <Text style = {{color:'#B7C5DA'}}>{((index==1)?'main photo':'')}</Text>  
                     <View>
                       <Icon  name = 'md-photos' style = {{fontSize:50,color:'#B7C5DA'}}/>   
                       <Text> </Text>
                  </View>
              </View>
    );

    else 
      {
      return (
     
        <Image style={{width:((index==1)?(Dimensions.get('window').width*0.5)-10:(Dimensions.get('window').width*0.25)-10), 
                   height:((index==1)?(Dimensions.get('window').width*0.4)-10:(Dimensions.get('window').width*0.3)-10),borderRadius:15 }} source = {{uri:uri}}>  
        </Image> 
      )  
      }


  }
    
   
   toggleLocationPickerVisibility()
   {
     this.setState({LocationPickerVisible:!this.state.LocationPickerVisible})
   }

  toggleImagePickerModal ()  {
       this.setImagePickerModalVisible(!this.state.ImagePickerModalVisible);
                  };

    setImagePickerModalVisible(visible) {
    this.setState({ImagePickerModalVisible: visible});   
    }

    setAddress (latitude,longitude,formatted_Address) {
     this.props.PlantAddFormUpdate({prop : 'formattedAddress' , value :formatted_Address})
     this.props.PlantAddFormUpdate({prop : 'latitude' , value :latitude})
     this.props.PlantAddFormUpdate({prop : 'longitude' , value : longitude})
    // this.setState({latitude,longitude,formatted_Address});
    }
    render(){
    

        return (
            <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
             <PCustomPageHeader header = "Add new Plant Listing"/>
             <ScrollView style = {{flex:1}} >
              <PImagePickerModal 
               isVisible =  {this.state.ImagePickerModalVisible} 
               toggle = {this.toggleImagePickerModal.bind(this)}
               choosePhoto = {this.choosePhoto.bind(this)}
               takePhoto = {this.takePhoto.bind(this)} 
               removePhoto = {this.removePhoto.bind(this)}  
              />

                <View style = {{flex:1,
                width:Dimensions.get('window').width, 
                height:Dimensions.get('window').height*1/2,
                backgroundColor:'#FFF',
                alignItems:'center',
                justifyContent:'space-around',
                backgroundColor:'#E6EBF2'}}>

                  <Text style = {{color:'gray',fontSize:18}}>{'choose plant photos'}</Text>  
                <View style = {{flex:1,marginTop:10, width: Dimensions.get('window').width,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                     {this.renderImagePlaceHolderContainer(1)} 
                </View>
                
                <View style = {{flex:1,width: Dimensions.get('window').width,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                        {this.renderImagePlaceHolderContainer(2)}  
                       {this.renderImagePlaceHolderContainer(3)} 
                       {this.renderImagePlaceHolderContainer(4)}   
                </View>    
                
                </View>

                <View style = {{flex:1,width:undefined, height:Dimensions.get('window').height*1.4}} >
                     <Card style = {{flex:1,backgroundColor:'white'}}> 
                        <View style = {{flex:1,backgroundColor:'white'}}>
                        <View style = {{flex:1,margin:20}}>
                            <ListItem itemDivider  style = {{justifyContent:'space-between', backgroundColor:colors.listItemHeader}}>
                              
                              <View style = {{flexDirection:'row'}}>
                              <Text style = {{marginLeft: 10 , fontSize:14}}>{'Common Name '}</Text>
                               <Text style = {{color:'red'}}>{'*'}</Text>
                              </View>

                              <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <CheckBox
                                  value={this.props.unknownCommonName}
                                  onValueChange={() =>  
                                  {
                                    this.props.PlantAddFormUpdate({prop : 'unknownCommonName' , value : !this.props.unknownCommonName})
                                    this.props.PlantAddFormUpdate({prop : 'commonName' , value : ''})}
                                  }
                                 />
                                <Text> {'unknown'}</Text> 
                              </View>
                             
                              </ListItem >

                              <TextInput
                               editable = {!this.props.unknownCommonName}
                               maxLength = {40}
                               placeholder =  {''}
                               autoCorrect = {false}
                               style = {styles.inputStyle}
                               onChangeText =  {text => this.props.PlantAddFormUpdate({prop : 'commonName' , value : text}) }
                               value = {this.props.commonName}
                             />
                     
                             <ListItem itemDivider  style = {{justifyContent:'space-between',marginTop:10, backgroundColor:colors.listItemHeader}}>                               
                              <View style = {{flexDirection:'row'}}>
                              <Text style = {{marginLeft: 10 , fontSize:14}}>{'Latin Name '}</Text>
                               <Text style = {{color:'red'}}>{'*'}</Text>
                              </View>
                              <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <CheckBox
                                  value={this.props.unknownLatinName}
                                  onValueChange={() =>  
                                      {
                                        this.props.PlantAddFormUpdate({prop : 'latinName' , value : ''})
                                        this.props.PlantAddFormUpdate({prop : 'unknownLatinName' , value : !this.props.unknownLatinName})
                                      }
                                    }
                                 />
                                <Text> {'unknown'}</Text> 
                              </View>
                            </ListItem>
                           


                              <TextInput
                              editable = {!this.props.unknownLatinName}
                               maxLength = {40}
                               placeholder =  {''}     
                               autoCorrect = {false}
                               style = {styles.inputStyle}
                               onChangeText =  {text => this.props.PlantAddFormUpdate({prop : 'latinName' , value : text}) }
                               value = {this.props.latinName}
                             />

                              <ListItem itemDivider  style = {{justifyContent:'space-between',marginTop:10, backgroundColor:colors.listItemHeader}}>                               
                              <View style = {{flexDirection:'row'}}>
                              <Text style = {{marginLeft: 10 , fontSize:14}}>{'species Name '}</Text>
                               <Text style = {{color:'red'}}>{'*'}</Text>
                              </View>

                              <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <CheckBox
                                  value={this.props.unknownSpeciesName}
                                  onValueChange={() => 
                                   {
                                      this.props.PlantAddFormUpdate({prop : 'speciesName' , value : ''})
                                      this.props.PlantAddFormUpdate({prop : 'unknownSpeciesName' , value : !this.props.unknownSpeciesName})}
                                   }
                                 />
                                <Text> {'unknown'}</Text>  
                              </View>
                            </ListItem>
                           


                              <TextInput 
                               editable = {!this.props.unknownSpeciesName}       
                               maxLength = {40}
                      
                               autoCorrect = {false}
                               style = {styles.inputStyle}
                               onChangeText =  {text => this.props.PlantAddFormUpdate({prop : 'speciesName' , value : text}) }
                               value = {this.props.speciesName}
                             />
                             
                            <View style = {styles.OptionsView}>
                              <View style = {{flexDirection:'row',marginLeft:10,width:Dimensions.get('window').width *0.4}}>
                              <Text style = {{fontSize:14 }}>{'select transaction type'}</Text>
                              <Text style = {{color:'red',marginLeft:5}}>{'*'}</Text>
                              </View>
                                {/* optionTextStyle = {{color:'#0C6656'}} */}
                               <ModalSelector
                                 data={transactionTypeOptions}
                                 style = {{marginLeft:10}}
                                 initValue="Adoption"    
                                 accessible={true}     
                                 scrollViewAccessibilityLabel={'Scrollable options'}
                                 cancelButtonAccessibilityLabel={'Cancel'}
                                 onChange={(option)=>{ this.props.PlantAddFormUpdate({prop : 'transactionType' , value : option.label })}}>
                                 <View style= {styles.DropdownInnerView} >
                                  <Icon style = {{fontSize:20,color:colors.second}} name = 'ios-arrow-dropdown'/> 
                                  <Text
                                     style = {{fontSize:16,marginLeft:3,color:colors.second}} 
                                  >
                                    {this.props.transactionType}    
                                  </Text>   
                                 </View>

                               </ModalSelector>
                              </View>


                      <View style = {styles.OptionsView}>
                              <View style = {{flexDirection:'row',marginLeft:10,width:Dimensions.get('window').width *0.4}}>
                              <Text style = {{fontSize:14}}>{'select a quantity'}</Text>
                              <Text style = {{color:'red',marginLeft:5}}>{'*'}</Text>
                              </View>
                               <ModalSelector
                                 data={quantityOptions}
                                 style = {{marginLeft:10}} 
                                 initValue="1"
                                 accessible={true}
                                 scrollViewAccessibilityLabel={'Scrollable options'}
                                 cancelButtonAccessibilityLabel={'Cancel'}
                                 onChange={(option)=>{ this.props.PlantAddFormUpdate({prop : 'quantity' , value : option.label })}}>
                                 <View style= {styles.DropdownInnerView} >
                                  <Icon style = {{fontSize:20,color:colors.second}} name = 'ios-arrow-dropdown'/> 
                                  <Text
                                     style = {{fontSize:16,marginLeft:3,color:colors.second}} 
                                  >
                                    {this.props.quantity}  
                                  </Text>
                                 </View>

                               </ModalSelector>
                              </View>

                            <View style = {styles.OptionsView}>
                              <View style = {{flexDirection:'row',marginLeft:10,width:Dimensions.get('window').width *0.4}}>
                              <Text style = {{fontSize:14}}>{'select size'}</Text>
                              <Text style = {{color:'red',marginLeft:5}}>{'*'}</Text>
                              </View>
                               <ModalSelector
                                 data={sizeOptions}
                                 style = {{marginLeft:10}} 
                                 initValue="1 gallon"
                                 accessible={true}
                                 scrollViewAccessibilityLabel={'Scrollable options'}
                                 cancelButtonAccessibilityLabel={'Cancel'}
                                 onChange={(option)=>{ this.props.PlantAddFormUpdate({prop : 'size' , value : option.label })}}>
                                 <View style= {styles.DropdownInnerView} >
                                  <Icon style = {{fontSize:20,color:colors.second}} name = 'ios-arrow-dropdown'/> 
                                  <Text
                                     style = {{fontSize:16,marginLeft:3,color:colors.second}} 
                                  >
                                    {this.props.size} 
                                  </Text>
                                 </View>

                               </ModalSelector>
                              </View> 

                              <View style = {{...styles.OptionsView,flexDirection:'column',height:undefined}} >   
                                <View style = {{flexDirection:'row',width:Dimensions.get('window').width - 44,backgroundColor:colors.listItemHeader,justifyContent:'center',alignItems:'center'}}>
                                <View style = {{flex:1,alignItems:'center', flexDirection:'row'}}>
                                <Icon name = {'md-locate'} style = {{fontSize:14,marginLeft:5, fontWeight: 'bold',color:'#d69113'}}/>   
                                 <Text style = {{marginLeft:5}}>{'Plant Location'}</Text>
                                  <Text style = {{color:'red',marginLeft:5}}>{'*'}</Text>
 
                              </View> 
                            </View>    
                             
                               <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <CheckBox
                                   value={this.props.same_user_location}   
                                  onValueChange={(value) => 
                                   {   
                                      this.props.PlantAddFormUpdate({prop : 'same_user_location' , value :!this.props.same_user_location})
                                      this.props.PlantAddFormUpdate({prop : 'formattedAddress' , value : ((value==true)?this.props.CurrentUserInfo.fullAddress:'')})
                                      this.props.PlantAddFormUpdate({prop : 'latitude' , value : ((value==true)?this.props.CurrentUserInfo.latitude:0)})
                                      this.props.PlantAddFormUpdate({prop : 'longitude' , value : ((value==true)?this.props.CurrentUserInfo.longitude:0)})
                                  }
                                  }/>
                                <Text> {'same as my location'}</Text> 
                              </View> 

                            
                              <TouchableOpacity  
                               style = {{
                                 flexDirection:'row',
                                 height:30 ,
                               borderColor:colors.inputBlueBorder,
                               borderWidth:1,
                               borderRadius:5,
                               alignItems:'center',
                               justifyContent:'center',
                               marginBottom:10,
                               backgroundColor:'white'}}
                               onPress = {()=>{
                                 this.setState({LocationPickerVisible:!this.state.LocationPickerVisible})
                                 this.props.PlantAddFormUpdate({prop : 'same_user_location' , value :false})
                                 this.props.PlantAddFormUpdate({prop : 'formattedAddress' , value :''})
                                 this.props.PlantAddFormUpdate({prop : 'latitude' , value :0})
                                 this.props.PlantAddFormUpdate({prop : 'longitude' , value :0})

                                 }}
                              >
                                   <Icon name  = "ios-create" style = {{marginLeft:10, color:'#0C6656'}}/> 
                                  <Text style={{color:colors.second}}>{' set new plant location on the map '}</Text>      
                              </TouchableOpacity>

                              <TextInput 
                               editable = {false}   
                               multiline 
                               maxLength = {40}
                               autoCorrect = {false}
                               style = {{...styles.inputStyle,
                               width:styles.inputStyle.width-20,
                               height:styles.inputStyle.height*1.5,
                               marginBottom:20,marginTop:10,}}
                               value = {this.props.formattedAddress}
                             />
                               

                                <PLocationPicker 
                                  isVisible = {this.state.LocationPickerVisible}
                                  toggle =  {this.toggleLocationPickerVisibility.bind(this)}
                                  setAddress = {this.setAddress.bind(this)}
                                />    

                                      
                              </View>

                            <TouchableOpacity  style = {styles.SubmitButton}
                                onPress={()=> {
                                  this.props.PlantAddformReset();
                                  Actions.PMyPlants();
                                  }}  >
                                    <Text style = {styles.SubmitButtonText}> {'Submit'} </Text>   
                              </TouchableOpacity>
                        </View>


                        </View >
                     </Card> 
                </View>
             </ScrollView>
             </View>
        );
    }
}
//underlineColorAndroid = '#FFF'
//secureTextEntry = {props.isPassword}

const styles = {
     inputStyle: {
         color : 'gray',
         paddingRight: 5,
         paddingLeft: 20,
         marginTop:5,
         fontSize: 18,
         lineHeight: 23,
         width:Dimensions.get('window').width - 40 ,
         height : 50, 
         borderRadius : 20,
         borderWidth:1,
         borderColor:colors.inputBlueBorder,
         backgroundColor:'white'
     },
     OptionsView : {
        
        flexDirection:'row',
        alignItems: 'center',
         marginTop:10,
         width:Dimensions.get('window').width - 40 ,       
         height : 50, 
         borderRadius : 2,
         borderWidth:0,
         borderColor:'gray',
         backgroundColor:colors.listItemHeader
     },
    DropdownInnerView : {
      borderWidth:1,
      borderRadius:5,
      width:120, 
      borderColor:colors.inputBlueBorder, 
      padding:10, 
      height:40,
      alignItems:'center',
      backgroundColor:'white',
      justifyContent:'space-around',   
      flexDirection:'row'
    }
    ,
       AddButton : {
       justifyContent: 'center',
       alignItems:'center',
       backgroundColor : '#0C6656',
       width : 50,
       height : 50,
       borderRadius : 25,
         elevation : 1,
    },  SubmitButton : {
       backgroundColor : 'white',
       marginTop:10,
       width:Dimensions.get('window').width - 40 ,       
       height : 50, 
       alignItems : 'center',
       justifyContent : 'center',
       borderColor : '#257D6E',
       borderWidth: 4,

         elevation : 1,
    },
      SubmitButtonText :{
       fontSize : 20,
        color:'#257D6E',
        alignSelf: 'center'
    }
      
  }
    


const mapStateToProps = (state)=>{
   const { commonName,
    latinName,
    speciesName,
    quantity,
    size,
    latitude,
    longitude,
    unknownCommonName,  
    unknownLatinName,
    unknownSpeciesName,
    formattedAddress,
    transactionType,
    image1Uri,
    image2Uri,
    image3Uri,
    image4Uri,
    same_user_location,

  } = state.default.PlantAddFrom ;

   const CurrentUserInfo  = state.default.CurrentUserInfo;

   return { commonName,
    latinName,
    speciesName,
    quantity,
    size,
    latitude,
    longitude,
    unknownCommonName,
    unknownLatinName,
    unknownSpeciesName,
    formattedAddress,
    transactionType,
    image1Uri,
    image2Uri,
    image3Uri,
    image4Uri,
    same_user_location,
    CurrentUserInfo
  };
}
 
export default connect (mapStateToProps,{PlantAddFormUpdate,PlantAddformReset})(PAddNewPlantForm);