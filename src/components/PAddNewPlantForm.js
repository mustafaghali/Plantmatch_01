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
        Image,
        ToastAndroid
       } from 'react-native';
import {Icon,
    Card,
    List,
    ListItem,
    Form,
    Picker as NPicker} from 'native-base';
// import {ImagePicker} from 'expo'; 
import  {PlantAddFormUpdate,
  PlantAddformReset,
  uploadPhotos,
  AddNewPlant} from '../actions';
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import {connect} from 'react-redux';
import PlantMatchHeader from './PlantMatchHeader';
import ModalSelector from 'react-native-modal-selector';
import {quantityOptions,transactionTypeOptions,sizeOptions} from '../data/AppData';
import PLocationPicker from './PLocationPicker';
import PCustomPageHeader from './PCustomPageHeader';
import PImagePickerModal from './PImagePickerModal';
import {colors} from '../themes/style1';
import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import {screen} from '../AppConfigs';
import ImageResizer from 'react-native-image-resizer';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Modal from "react-native-modal";
import Spinner from './common/Spinner';




class PAddNewPlantForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
       LocationPickerVisible : false,
       imageindex:1,
       ImagePickerModalVisible : false,
       latitude:null,
       longitude:null,
       choosenImageUri:null,
       choosenImageType:null

    };
  }


  componentWillMount()
  {
    this.props.PlantAddFormUpdate({prop : 'userId' , value :this.props.CurrentUserInfo.id})
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
        },
        quality : 1,
      };


      takePhoto = async () => {
        this.props.PlantAddFormUpdate({prop : 'settingPhoto' , value :true})

        this.setState({choosenImageUri:null});

        await ImagePicker.launchCamera(this.ImagePickerOptions, (response) => { 
        
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
            this.setState({choosenImageType:response.type});
            this.props.PlantAddFormUpdate({prop : 'image'+this.state.imageindex+'Type' , value :this.state.choosenImageType});
            
            var extension = ((response.type).substring(response.type.lastIndexOf("/")+1)).toUpperCase();

            if (response.fileSize > 1000000) // > 1mb
      {
        ImageResizer.createResizedImage(response.uri, 600, 600*response.height/response.width, 'JPEG', 100)
        .then((response) => {
          this.setState({choosenImageUri:response.uri});
          this.props.PlantAddFormUpdate({prop : 'image'+this.state.imageindex+'Uri' , value :this.state.choosenImageUri})
          this.props.PlantAddFormUpdate({prop : 'settingPhoto' , value :false})
          return
        }).catch((err) => {
          console.log(err);
          ToastAndroid.show('image couldn\'t be loaded', ToastAndroid.SHORT);
          this.props.PlantAddFormUpdate({prop : 'settingPhoto' , value :false})
          return;
          // Oops, something went wrong. Check that the filename is correct and
          // inspect err to get more details.
        });
      }
      else
      {
       // console.log('resized   '+response);
       this.setState({choosenImageUri:response.uri});
       this.props.PlantAddFormUpdate({prop : 'image'+this.state.imageindex+'Uri' , value :this.state.choosenImageUri})
       this.props.PlantAddFormUpdate({prop : 'settingPhoto' , value :false})
      }
      return;
      //   if(response.uri == this.props.image1Uri ||response.uri == this.props.image2Uri ||
      //   response.uri == this.props.image3Uri ||response.uri == this.props.image4Uri  )
      // {
      //   ToastAndroid.show('please choose a different image !', ToastAndroid.SHORT);
      //   return
      // }
           }
           this.props.PlantAddFormUpdate({prop : 'settingPhoto' , value :false})

        });
      }
  
    choosePhoto = async () => {
      
      this.props.PlantAddFormUpdate({prop : 'settingPhoto' , value :true})

      this.setState({choosenImageUri:null});
      //this.toggleImagePickerModal();

      await ImagePicker.launchImageLibrary(this.ImagePickerOptions, (response) => {
       
       // console.log(response);
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
               this.setState({choosenImageType:response.type});
               this.props.PlantAddFormUpdate({prop : 'image'+this.state.imageindex+'Type' , value :this.state.choosenImageType})
               
               var extension = ((response.type).substring(response.type.lastIndexOf("/")+1)).toUpperCase();

              if (response.fileSize > 1000000) // > 1mb
              {
               // console.log(extension);
                ImageResizer.createResizedImage(response.uri, 600, 600*response.height/response.width, extension, 100)
                .then((response) => {
                  //console.log(response.uri)
                     this.setState({choosenImageUri:response.uri});
                     this.props.PlantAddFormUpdate({prop : 'image'+this.state.imageindex+'Uri' , value :this.state.choosenImageUri})
                     this.props.PlantAddFormUpdate({prop : 'settingPhoto' , value :false})

                    })
                .catch((err) => {
                    console.log(err);
                    ToastAndroid.show('image couldn\'t be loaded', ToastAndroid.SHORT);
                    this.props.PlantAddFormUpdate({prop : 'settingPhoto' , value :false})
                    return;
                     // Oops, something went wrong. Check that the filename is correct and
                     // inspect err to get more details.
                 });
               }
               else
               {
                  //console.log(response.type)
                 this.setState({choosenImageUri:response.uri});
                 this.props.PlantAddFormUpdate({prop : 'image'+this.state.imageindex+'Uri' , value :this.state.choosenImageUri})
                 this.props.PlantAddFormUpdate({prop : 'settingPhoto' , value :false})

              }
                // if(response.uri == this.props.image1Uri ||response.uri == this.props.image2Uri ||
                //   response.uri == this.props.image3Uri ||response.uri == this.props.image4Uri  )
                // {
                //   ToastAndroid.show('please choose a different image !', ToastAndroid.SHORT);
                // }
            return;
        }
        this.props.PlantAddFormUpdate({prop : 'settingPhoto' , value :false})

      });
     }

  
     removePhoto = () =>{
        for(i =this.state.imageindex;i<4;i++)
        {
          this.props.PlantAddFormUpdate({prop : 'image'+i+'Uri' , value :this.props['image'+(i+1)+'Uri']})
          this.props.PlantAddFormUpdate({prop : 'image'+i+'Type' , value :this.props['image'+(i+1)+'Type']})

        }
        this.props.PlantAddFormUpdate({prop : 'image4Uri' , value :null})
        this.props.PlantAddFormUpdate({prop : 'image4Uri' , value :null})

      }   

   renderImagePlaceHolderContainer(index)
  {
    return (

     <View style = {{width:((index==1)?Dimensions.get('window').width*0.5:Dimensions.get('window').width*0.25), 
                   height:((index==1)?Dimensions.get('window').width*0.4:Dimensions.get('window').width*0.3),      
                   backgroundColor:'rgba(230,235,242,0.5)',
                   alignItems:'center',
                   justifyContent:'center',
                   borderStyle : 'dotted',
                   borderWidth:1,
                   borderRadius: 20,
                   borderColor:'#B7C5DA'}}>
                    <TouchableOpacity  
                     style = {{flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                     }}
                       onPress={() => {
                         if(index!=1 && this.props.image1Uri == null )
                         {
                          ToastAndroid.showWithGravityAndOffset(
                            'please pick a main photo first',
                            ToastAndroid.LONG,
                            ToastAndroid.BOTTOM,
                            25,
                            50
                          );
                          return;
                         }
                         else if((index==3 && this.props.image2Uri == null)
                                ||(index==4 && 
                                  (this.props.image2Uri == null || this.props.image3Uri== null)
                              ))
                         {
                          ToastAndroid.showWithGravityAndOffset(
                            'choose photos in order ',
                            ToastAndroid.SHORT,
                            ToastAndroid.CENTER,
                            25,
                            50);
                            return;
                         }
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
      
    if(this.props.settingPhoto == true && this.state.imageindex ==index)
    {
      return <Spinner/>
       ;
    }
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
     
        <Image style={{width:((index==1)?(Dimensions.get('window').width*0.5)-2:(Dimensions.get('window').width*0.25)-2), 
                       height:((index==1)?(Dimensions.get('window').width*0.4)-2:(Dimensions.get('window').width*0.3)-2),
                       borderRadius:19 }} source = {{uri:uri}}>  
        </Image> 
      )  
      }


  }
    
   
   toggleLocationPickerVisibility()
   {
     this.setState({LocationPickerVisible:!this.state.LocationPickerVisible})
   }

  toggleImagePickerModal = ()=>  {
       this.setImagePickerModalVisible(!this.state.ImagePickerModalVisible);
                  };

    setImagePickerModalVisible(visible) {
    this.setState({ImagePickerModalVisible: visible});   
    }

    setAddress (latitude,longitude,formatted_Address,country,state,city,postalCode) {
     this.props.PlantAddFormUpdate({prop : 'formattedAddress' , value :formatted_Address})
     this.props.PlantAddFormUpdate({prop : 'latitude' , value :latitude})
     this.props.PlantAddFormUpdate({prop : 'longitude' , value : longitude})
     this.props.PlantAddFormUpdate({prop : 'country' , value : country})
     this.props.PlantAddFormUpdate({prop : 'state' , value : state})
     this.props.PlantAddFormUpdate({prop : 'city' , value : city})
     this.props.PlantAddFormUpdate({prop : 'postalCode' , value : postalCode})
    // this.setState({latitude,longitude,formatted_Address});
    }


    addNewPlant ()
    {
       if (this.props.image1Uri == null || this.props.image1Uri.length == 0 )
       {
        ToastAndroid.show('please choose one plant photo at least', ToastAndroid.SHORT);
        return 
       }
       if(this.props.unknownCommonName == false)
      {
        if (this.props.commonName.length == 0){
        ToastAndroid.show('please enter a valid common name', ToastAndroid.SHORT);
        return }

      }
       if ( this.props.unknownLatinName == false )
      {
        if (this.props.latinName.length == 0){
        ToastAndroid.show('please enter a valid latin name', ToastAndroid.SHORT);
        return }
      }
       if ( this.props.unknownSpeciesName == false )
      {
        if (this.props.speciesName.length == 0){
        ToastAndroid.show('please enter a valid species name', ToastAndroid.SHORT);
        return }
      }
      else if (this.props.transactionType == null)
      {
        
        ToastAndroid.show('please choose a transaction type', ToastAndroid.SHORT);
        return 
      }
      else if (this.props.size == null)
      {
        ToastAndroid.show('please choose a the plant size', ToastAndroid.SHORT);
        return 
      }
      else if (this.props.quantity == null)
      {
        ToastAndroid.show('please choose a quantity', ToastAndroid.SHORT);
        return 
      } 
      else if (this.props.formattedAddress == null || this.props.formattedAddress.length == 0)
      {
        ToastAndroid.show('please enter plant location', ToastAndroid.SHORT);
      }
      else 
      {
        this.props.AddNewPlant(this.props.newPlant);
          // this.props.uploadPhotos(this.props.image1Uri);
          // this.props.PlantAddformReset();
          // Actions.PMyPlants();
      }
    }


    render(){
    

        return (
            <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
             <PCustomPageHeader header = "Add new Plant Listing"/>
             
             <Modal
               animationIn = 'zoomIn' 
               isVisible = {this.props.uploadingPhotos} 
               //onBackButtonPress = {this.props.toggle}
               //onBackdropPress = {this.props.toggle}
              >
               <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
                  <AnimatedCircularProgress
                    size={200}
                     width={7}
                     fill={this.props.uploadPercent}
                     tintColor= {colors.main}
                     backgroundColor="#1d2d01">
                        {
                          (fill) => (
                           <Text style={{fontSize:40,fontFamily:'feather',fontStyle:'italic',fontWeight:'100',color:colors.main}}>
                             { this.props.uploadPercent + '%' }
                           </Text>
                         )
                        }
                  </AnimatedCircularProgress>
                  <Text style={{marginTop:20,fontSize:20,fontStyle:'italic',fontWeight:'100',color:colors.main}}>
                             uploading images please wait...
                           </Text>
                  </View>
              </Modal>




             {/* {this.props.uploadingPhotos?

             <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
               <AnimatedCircularProgress
                 size={200}
                  width={3}
                  fill={this.props.uploadPercent}
                  tintColor="#00e0ff"
                   backgroundColor="#3d5875">
                   {
                    (fill) => (
                        <Text >
                            { this.props.uploadPercent }
                        </Text>
                        )
                  }
              </AnimatedCircularProgress>
              </View>
              : */}
             <ScrollView style = {{flex:1}} >
              <PImagePickerModal 
               isVisible =  {this.state.ImagePickerModalVisible} 
               toggle = {this.toggleImagePickerModal.bind(this)}
               choosePhoto = {this.choosePhoto.bind(this)}
               takePhoto = {this.takePhoto.bind(this)} 
               removePhoto = {this.removePhoto.bind(this)}  
              />

                <LinearGradient 
                colors={[colors.softWhite,colors.softWhite]}      
                style = {{flex:1,
                width:Dimensions.get('window').width, 
                height:Dimensions.get('window').height*1/2,
                backgroundColor:'#FFF',
                alignItems:'center',
                justifyContent:'space-around',
                }}>

                  {/* <Text style = {{color:'gray',fontSize:18}}>{'choose plant photos'}</Text>   */}
                <View style = {{flex:1,marginTop:10, width: Dimensions.get('window').width,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                     {this.renderImagePlaceHolderContainer(1)} 
                </View>
                
                <View style = {{flex:1,width: Dimensions.get('window').width,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                        {this.renderImagePlaceHolderContainer(2)}  
                       {this.renderImagePlaceHolderContainer(3)} 
                       {this.renderImagePlaceHolderContainer(4)}   
                </View>    
                
                </LinearGradient>

                <View style = {{flex:1,width:undefined}} >
                     <Card style = {{flex:1,backgroundColor:'white'}}> 
                        <LinearGradient  colors={colors.mainGradient} style = {{flex:1}}>
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
                                    this.props.PlantAddFormUpdate({prop : 'commonName' , value : null})}
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
                                        this.props.PlantAddFormUpdate({prop : 'latinName' , value : null})
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
                                      this.props.PlantAddFormUpdate({prop : 'speciesName' , value : null})
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
                             
                            <View style = {[styles.OptionsView,{justifyContent:'center'}]}>
                              <View style = {{flexDirection:'row',marginLeft:10,width:Dimensions.get('window').width *0.4,justifyContent:'center'}}>
                              <Text style = {{fontSize:14 }}>{'select transaction type'}</Text>
                              <Text style = {{color:'red',marginLeft:5}}>{'*'}</Text>
                              </View>
                                {/* optionTextStyle = {{color:'#0C6656'}} */}
                               <ModalSelector
                                 data={transactionTypeOptions}
                                 style = {{marginLeft:10}}
                                 initValue=""    
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


                            <View style = {[styles.OptionsView,{justifyContent:'center'}]}>
                              <View style = {{flexDirection:'row',marginLeft:10,width:Dimensions.get('window').width *0.4,justifyContent:'center'}}>
                              <Text style = {{fontSize:14}}>{'select a quantity'}</Text>
                              <Text style = {{color:'red',marginLeft:5}}>{'*'}</Text>
                              </View>
                               <ModalSelector
                                 data={quantityOptions}
                                 style = {{marginLeft:10}} 
                                 initValue=""
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

                            <View style = {[styles.OptionsView,{justifyContent:'center'}]}>
                              <View style = {{flexDirection:'row',marginLeft:10,width:Dimensions.get('window').width *0.4,justifyContent:'center'}}>
                              <Text style = {{fontSize:14}}>{'select size'}</Text>
                              <Text style = {{color:'red',marginLeft:5}}>{'*'}</Text>
                              </View>
                               <ModalSelector
                                 data={sizeOptions}
                                 style = {{marginLeft:10}} 
                                 initValue=""
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
                                {/* <Icon name = {'md-locate'} style = {{fontSize:14,marginLeft:5, fontWeight: 'bold',color:'#d69113'}}/>    */}
                                 <Text style = {{marginLeft:30}}>{'Plant Location'}</Text>
                                  <Text style = {{color:'red',marginLeft:5}}>{'*'}</Text>
 
                              </View> 
                            </View>    
                             
                               <TouchableOpacity 
                                disabled = {this.props.CurrentUserInfo.fullAddress != null}
                                onPress = {()=>{ ToastAndroid.show('please set your profile location first', ToastAndroid.SHORT);}}
                                style = {{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <CheckBox
                                   disabled = {this.props.CurrentUserInfo.fullAddress == null}
                                   value={this.props.same_user_location}   
                                  onValueChange={(value) => 
                                   {   
                                      this.props.PlantAddFormUpdate({prop : 'same_user_location' , value :!this.props.same_user_location})
                                      if(value == true )
                                      {
                                        this.setAddress(this.props.CurrentUserInfo.latitude,
                                          this.props.CurrentUserInfo.longitude,
                                          this.props.CurrentUserInfo.fullAddress,
                                          this.props.CurrentUserInfo.country,
                                          this.props.CurrentUserInfo.state,
                                          this.props.CurrentUserInfo.city,
                                          this.props.CurrentUserInfo.postalCode
                                        )
                                      }
                                      else{
                                        this.setAddress(0,0,'','','','','');
                                      }
                                  }
                                  }/>
                                <Text> {'same as my profile location'}</Text> 
                              </TouchableOpacity> 

                             <View style = {{flexDirection:'row',alignItems:'center',height:screen.height*1/10}}>
                              <Text style = {{marginRight:10}}> OR </Text>
                              <TouchableOpacity  
                               style = {{
                                 flexDirection:'row',
                                 height:30 ,
                               borderColor:colors.gray,
                               borderWidth:1,
                               borderRadius:5,
                               alignItems:'center',
                               justifyContent:'center',
                               marginBottom:10,
                               backgroundColor:colors.transparent}}
                               onPress = {()=>{
                                 this.setState({LocationPickerVisible:!this.state.LocationPickerVisible})
                                 this.props.PlantAddFormUpdate({prop : 'same_user_location' , value :false})
                                 this.props.PlantAddFormUpdate({prop : 'formattedAddress' , value :''})
                                 this.props.PlantAddFormUpdate({prop : 'latitude' , value :0})
                                 this.props.PlantAddFormUpdate({prop : 'longitude' , value :0})

                                 }}
                              >
                                   <Icon name  = "pin" style = {{marginLeft:10, color:colors.second,fontSize:16}}/> 
                                  <Text style={{}}>{' set new plant location on the map '}</Text>      
                              </TouchableOpacity>
                              </View>

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
                                onPress={this.addNewPlant.bind(this)}  >
                                    <Text style = {styles.SubmitButtonText}> {'Submit'} </Text>   
                              </TouchableOpacity>
                        </View>


                        </LinearGradient >
                     </Card> 
                </View>
             </ScrollView>
          {/* } */}
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
         backgroundColor: 'rgba(255,255,255,0.7)'
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
    uploadingPhotos,
    addingPlant,
    settingPhoto,
    uploadPercent
  } = state.default.PlantAddFrom ;
 
   const newPlant = state.default.PlantAddFrom;

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
    uploadingPhotos,
    addingPlant,
    settingPhoto,
    uploadPercent,
    CurrentUserInfo,
    newPlant
  };
}
 
export default connect (mapStateToProps,{PlantAddFormUpdate,PlantAddformReset,uploadPhotos,AddNewPlant})(PAddNewPlantForm);