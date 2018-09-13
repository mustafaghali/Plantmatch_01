import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {Image,
        ImageBackground,
        stylesheet,
        View,
        Dimensions,
        Text} from 'react-native';
import {Container, 
    Thumbnail,
    Content,
    Card,
    CardItem,
    Left,
    Right,
    Body,
    Button,
    Badge,
     Icon,
    ListItem,
    Footer,
    FooterTab} from 'native-base';
import StarRating from 'react-native-star-rating';
import {colors} from '../themes/style1';
import {screen} from '../AppConfigs';
import PCard from './PCard';
import {apiConfigs} from '../APIs/webAPIConfig'
import {getProcessedLink} from '../helpers';

class PlantCard extends Component{

    
    constructor(props) {
    super(props);
    this.state = {
        isReady:true
    };
  }


 

        renderTransactionThumbnail(transactionType){
            if(transactionType == 'swapping')
                {
                    return  <Thumbnail small style = {{ borderColor : 'gray',borderWidth: 1}} 
                                                          source =  {require('../../Images/money1.png')}/>
                }
                else if(transactionType == 'adoption')
                return  <Thumbnail small style = {{ borderColor : 'gray',borderWidth: 1}} 
                                                          source =  {require('../../Images/adoption.png')}/>
                }

        //  renderPlantSizeBadge(size)
        //  {
            
        //      const {BadgeTextStyle} = this.styles;
        //      if(size == 'Small')
        //             return  ( <View style = {sizeBadgeStyle}>
        //                        <Text style = {BadgeTextStyle}>{'S'}</Text>
        //             </View>);                                                
        //     else if(size == 'Medium')
        //              return (  <View style = {{...sizeBadgeStyle,backgroundColor:'#51A925'}}>
        //                        <Text style = {BadgeTextStyle}>{'M'}</Text>
        //              </View> );
        //     else if(size == 'Large')
        //             return  ( <View style = {{...sizeBadgeStyle,backgroundColor:'#2E91A3'}}> 
        //                        <Text style = {BadgeTextStyle}>{'L'}</Text>
        //             </View> );
        //     else if(size == 'XtraLarge')
        //             return  ( <View style = {{...sizeBadgeStyle,backgroundColor:'#B21F45'}}>
        //                        <Text style = {BadgeTextStyle}>{'XL'}</Text>
        //             </View> );
        //         }

    render(){

       const {commonName,speciesName,country,city,transactionType,size,quantity,views,likes,image1Uri} = this.props.Plant; 
       const CardDimensions = {width:screen.width*0.8,height:screen.height*0.65}
    if (!this.state.isReady) {  
           return <View />;
      }
             return (
                      <View style = {{
                        borderWidth : 1,
                        borderRadius : 40,
                        borderColor : '#ddd',
                       // borderBottomWidth : 0,
                        shadowColor : '#000',
                        shadowOffset : {width : 0 , height : 2},
                        shadowOpacity : 0.1,
                        shadowRadius : 2,
                        elevation : 1,
                        backgroundColor:'#F6F9F5',
                        width:CardDimensions.width,
                        height:CardDimensions.height
                           } }>    
                           <View style = {{flex:1,justifyContent:'space-around',margin:8}}>  

                            <View style = {{height:CardDimensions.height*0.15,justifyContent:'space-between',flexDirection:'row'}}>
                            
                            <View style = {{flex:3.5,justifyContent:'space-around'}}> 
                                     <Text style = {{fontSize:28,fontFamily:'CloudCalligraphy',color:'gray'}}>  {commonName}  </Text> 
                                     <Text style = {{fontSize:20,fontFamily:'CloudCalligraphy',color:'gray'}}>  {speciesName}  </Text>
                            </View>    

                            <View style = {{flex:1,justifyContent:'space-around'}}>
                                <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>   
                                     {this.renderTransactionThumbnail(transactionType)}
                                     {/* <Text style = {{color : 'gray', fontSize : 20}}>{' for ' + transactionType }</Text>  */}
                                </View>   
                                <View style = {{flexDirection : 'row',justifyContent:'center',alignItems:'center'}}> 
                                    <Icon name = 'md-pin' style = {{color : 'gray', fontSize:18 }}  />
                                    <Text style = {{color : 'gray', fontSize : 12,marginLeft:3}}>{city}{', '}{country}</Text>
                                </View>
                            </View>
                            </View>
                            
                       

                      
                           <View style = {{flex:1, marginTop:3,marginBottom:5}}>
                                 <Image resizeMode='stretch' style={this.styles.BodyImage} source = {{uri:getProcessedLink(image1Uri,'plant')}}
                                   borderRadius ={3}    
                                />  
                               
                           </View>
                           
                        <View style = {{borderColor:'gray',borderBottomWidth:1}} />

                       <View style = {{...this.styles.CardFooterOutlined,   height:CardDimensions.height*0.11}}>     

                        <View style = {{flexDirection : 'row',justifyContent:'space-between'}}>
                           <View style = {{flexDirection:'row',alignItems: 'center',justifyContent:'center',marginLeft:5}} >   
                              <Icon active name="ios-thumbs-up-outline" style ={{color:'#0C6656',fontSize:20}} /> 
                              <Text style = {{marginLeft:5,color:'gray'}}>{likes +' Likes'}</Text>          
                           </View>
                         
                           <View  style = {{flexDirection:'row',alignItems: 'center'}} >
                             <Icon active name="ios-eye-outline" style ={{color:'#0C6656',fontSize:26}}/>
                             <Text style = {{marginLeft:5,color:'gray'}}>{views + ' Views'}</Text>
                           </View>

                            <View  style = {{flexDirection:'row',alignItems: 'center',marginRight:5}} >
                            <Icon active name="md-time" style ={{color:'#0C6656',fontSize:20}}/>
                            <Text style = {{fontSize:14,marginLeft:5,color:'gray'}}>{'11h ago'}</Text>
                          </View>
                        </View>

                        <View style = {{flexDirection : 'row',justifyContent:'space-between'}}>
                         
                          
                          <View  style = {{flexDirection:'row',alignItems: 'center',marginLeft:5}} > 
                            <Icon active name="ios-archive-outline" style ={{color:'#0C6656',fontSize:20}}/>
                            <Text style = {{fontSize:14,marginLeft:5,color:'gray'}}>{quantity+' pieces'}</Text>
                          </View>

                          <View  style = {{flexDirection:'row',alignItems: 'center',marginRight:5}} > 
                            <Icon active name="md-code" style ={{color:'#0C6656',fontSize:20}}/>
                            <Text style = {{fontSize:14,marginLeft:5,color:'gray'}}>{size}</Text>       
                          </View>

                        </View>

                        </View>
                        </View> 

                      </View>
            );
    }

    styles = {
        BodyImage : {
         flex:1,
         width:undefined, 
          alignItems: 'flex-end',
          //borderRadius:5,  
       },
       CardFooter : { 
            marginLeft : 5,
            marginRight : 5,
           height:Dimensions.get('window').height*1/9, 
           backgroundColor : '#EFF5EC',
           borderWidth: 1,
           borderColor : 'gray',
           justifyContent:'space-around' 
           // shadowColor : '#000',
           // shadowOffset : {width : 0 , height : 2},
           // shadowOpacity : 0.1,
           // shadowRadius : 2,
           // elevation : 1,
       
       }, CardFooterOutlined : { 
           marginLeft : 5,
           marginRight : 5, 
           // backgroundColor : '#EFF5EC',
           //borderWidth: 1,
           borderColor : colors.inputBlueBorder,
           justifyContent:'space-around',
           //borderRadius:20        
           // shadowColor : '#000',
           // shadowOffset : {width : 0 , height : 2},
           // shadowOpacity : 0.1,
           // shadowRadius : 2,
           // elevation : 1,
       
       },sizeBadgeStyle : {
           backgroundColor: '#EDAF3C', 
           width: Dimensions.get('window').width*1/6, 
           height: Dimensions.get('window').height*1/20,
           alignItems:'center',
           justifyContent:'center'}
       ,BadgeTextStyle : {
           color : '#E6F0E4',
           fontSize:30,
           shadowColor : '#000',
           shadowOffset : {width : 0 , height : 2},
           shadowOpacity : 0.1,
           shadowRadius : 2,
           elevation : 1}
           
   };
};


//  const styles = {
//      BodyImage : {
//       flex:1,
//       width:undefined, 
//        alignItems: 'flex-end',
//        borderRadius:5,  
//     },
//     CardFooter : { 
//          marginLeft : 5,
//          marginRight : 5,
//         height:Dimensions.get('window').height*1/9, 
//         backgroundColor : '#EFF5EC',
//         borderWidth: 1,
//         borderColor : 'gray',
//         justifyContent:'space-around' 
//         // shadowColor : '#000',
//         // shadowOffset : {width : 0 , height : 2},
//         // shadowOpacity : 0.1,
//         // shadowRadius : 2,
//         // elevation : 1,
    
//     }, CardFooterOutlined : { 
//         marginLeft : 5,
//         marginRight : 5, 
//         height:Dimensions.get('window').height*1/9,  
//         // backgroundColor : '#EFF5EC',
//         //borderWidth: 1,
//         borderColor : colors.inputBlueBorder,
//         justifyContent:'space-around',
//         //borderRadius:20        
//         // shadowColor : '#000',
//         // shadowOffset : {width : 0 , height : 2},
//         // shadowOpacity : 0.1,
//         // shadowRadius : 2,
//         // elevation : 1,
    
//     },sizeBadgeStyle : {
//         backgroundColor: '#EDAF3C', 
//         width: Dimensions.get('window').width*1/6, 
//         height: Dimensions.get('window').height*1/20,
//         alignItems:'center',
//         justifyContent:'center'}
//     ,BadgeTextStyle : {
//         color : '#E6F0E4',
//         fontSize:30,
//         shadowColor : '#000',
//         shadowOffset : {width : 0 , height : 2},
//         shadowOpacity : 0.1,
//         shadowRadius : 2,
//         elevation : 1}
        
// };

 const sizeBadgeStyle = {
        backgroundColor: '#EDAF3C', 
        width: Dimensions.get('window').width*1/6, 
        height: Dimensions.get('window').height*1/20,
        alignItems:'center',
        justifyContent:'center'}
        
export default PlantCard;