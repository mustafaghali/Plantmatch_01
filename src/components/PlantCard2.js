// import React, {Component} from 'react';
// import {Actions} from 'react-native-router-flux';
// import {Image,
//         ImageBackground,
//         StyleSheet,
//         View,
//         Dimensions,
//         Text} from 'react-native';
// import {Container, 
//     Thumbnail,
//     Content,
//     Card,
//     CardItem,
//     Left,
//     Right,
//     Body,
//     Button,
//     Badge,
//      Icon,
//     ListItem,
//     Footer,
//     FooterTab} from 'native-base';
// import StarRating from 'react-native-star-rating';
// import {colors} from '../themes/style1';

// class PlantCard extends Component{

    
//     constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//         renderTransactionThumbnail(transactionType){
//             if(transactionType == 'Swapping')
//                 {
//                     return  <Thumbnail small style = {{ borderColor : 'gray',borderWidth: 1}} 
//                                                           source =  {require('../../Images/money1.png')}/>
//                 }
//                 else if(transactionType == 'Adoption')
//                 return  <Thumbnail small style = {{ borderColor : 'gray',borderWidth: 1}} 
//                                                           source =  {require('../../Images/adoption.png')}/>
//                 }

//          renderPlantSizeBadge(size)
//          {
            
//              const {BadgeTextStyle} = styles;
//              if(size == 'Small')
//                     return  ( <View style = {sizeBadgeStyle}>
//                                <Text style = {BadgeTextStyle}>{'S'}</Text>
//                     </View>);                                                
//             else if(size == 'Medium')
//                      return (  <View style = {{...sizeBadgeStyle,backgroundColor:'#51A925'}}>
//                                <Text style = {BadgeTextStyle}>{'M'}</Text>
//                      </View> );
//             else if(size == 'Large')
//                     return  ( <View style = {{...sizeBadgeStyle,backgroundColor:'#2E91A3'}}> 
//                                <Text style = {BadgeTextStyle}>{'L'}</Text>
//                     </View> );
//             else if(size == 'XtraLarge')
//                     return  ( <View style = {{...sizeBadgeStyle,backgroundColor:'#B21F45'}}>
//                                <Text style = {BadgeTextStyle}>{'XL'}</Text>
//                     </View> );
//                 }

//     render(){

//        const {commonName,speciesName,country,city,price,transactionType,size,quantity,views,likes,imageUrl} = this.props.Plant;

//              return (
//                       <Card style = {{borderRadius:40}}>    
//                            <View style = {{flex:1,justifyContent:'space-around',margin:10}}>  

//                             <View style = {{justifyContent:'space-between',flexDirection:'row'}}>
                            
//                             <View style = {{flex:3.5,justifyContent:'space-around'}}> 
//                                      <Text style = {{fontSize:20,color:'gray'}}>  {commonName}  </Text>
//                                      <Text style = {{fontSize:14,color:'gray'}}>  {speciesName}  </Text>
//                             </View>    

//                             <View style = {{flex:1,justifyContent:'space-between'}}>
//                                 <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>   
//                                      {this.renderTransactionThumbnail(transactionType)}
//                                      {/* <Text style = {{color : 'gray', fontSize : 20}}>{' for ' + transactionType }</Text>  */}
//                                 </View>   
//                                 <View style = {{flexDirection : 'row',justifyContent:'center',alignItems:'center'}}> 
//                                     <Icon name = 'md-pin' style = {{color : 'gray', fontSize:18 }}  />
//                                     <Text style = {{color : 'gray', fontSize : 12,marginLeft:3}}>{city}{', '}{country}</Text>
//                                 </View>
//                             </View>
//                             </View>
                            
                       

                      
//                            <View style = {{height:Dimensions.get('window').height*2/5, marginLeft : 5,marginRight : 5}}>
//                                  <ImageBackground resizeMode='stretch' style={styles.BodyImage} source = {{uri:imageUrl}}
//                                    borderRadius ={5}    

//                                  >  
//                                </ImageBackground> 
//                            </View>
                           
//                        <View style = {styles.CardFooterOutlined}>     

//                         <View style = {{flexDirection : 'row',justifyContent:'space-between'}}>
//                            <View style = {{flexDirection:'row',alignItems: 'center',justifyContent:'center',marginLeft:5}} >   
//                               <Icon active name="md-thumbs-up" style ={{color:'#0C6656'}} /> 
//                               <Text style = {{marginLeft:5,color:'gray'}}>{likes +' Likes'}</Text>          
//                            </View>
                         
//                            <View  style = {{flexDirection:'row',alignItems: 'center'}} >
//                              <Icon active name="md-eye" style ={{color:'#0C6656'}}/>
//                              <Text style = {{marginLeft:5,color:'gray'}}>{views + ' Views'}</Text>
//                            </View>

//                             <View  style = {{flexDirection:'row',alignItems: 'center',marginRight:5}} >
//                             <Icon active name="md-clock" style ={{color:'#0C6656'}}/>
//                             <Text style = {{fontSize:14,marginLeft:5,color:'gray'}}>{'11h ago'}</Text>
//                           </View>
//                         </View>

//                         <View style = {{flexDirection : 'row',justifyContent:'space-between'}}>
                         
                          
//                           <View  style = {{flexDirection:'row',alignItems: 'center',marginLeft:5}} > 
//                             <Icon active name="ios-archive" style ={{color:'#0C6656'}}/>
//                             <Text style = {{fontSize:14,marginLeft:5,color:'gray'}}>{quantity+' pieces available'}</Text>
//                           </View>

//                           <View  style = {{flexDirection:'row',alignItems: 'center',marginRight:5}} > 
//                             <Icon active name="md-code" style ={{color:'#0C6656'}}/>
//                             <Text style = {{fontSize:14,marginLeft:5,color:'gray'}}>{size}</Text>       
//                           </View>

//                         </View>

//                         </View>
//                         </View> 
         
                    
                        
//                       </Card>
//             );
//     }
// };


// const styles = StyleSheet.create({
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
        
// });

//  const sizeBadgeStyle = {
//         backgroundColor: '#EDAF3C', 
//         width: Dimensions.get('window').width*1/6, 
//         height: Dimensions.get('window').height*1/20,
//         alignItems:'center',
//         justifyContent:'center'}
        
// export default PlantCard;