import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {Image,
        ImageBackground,
        StyleSheet,
        View,
        Dimensions,
        Text,
        TouchableOpacity} from 'react-native';
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
import LinearGradient from 'react-native-linear-gradient';
import PCard from './PCard';
import {colors} from '../themes/style1';
import {getProcessedLink} from '../helpers';

class PMiniPlantCard extends Component{

    
    constructor(props) {
    super(props);
    this.state = {
    };
  }

        renderTransactionThumbnail(transactionType){
            if(transactionType == 'swapping')
                {
                    return  <Thumbnail small style = {{ borderColor : 'gray',borderWidth: 0}} 
                                                          source =  {require('../../Images/money1.png')}/>
                }
                else if(transactionType == 'adoption')
                return  <Thumbnail small style = {{ borderColor : 'gray',borderWidth: 0}} 
                                                          source =  {require('../../Images/adoption.png')}/>
                }

        //  renderPlantSizeBadge(size)
        //  {
            
        //      const {BadgeTextStyle} = styles;
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

       const {commonName,speciesName,country,city,price,transactionType,size,quantity,views,likes,image1Uri} = this.props.Plant;

             return (
                      <PCard>
                                      {/* <LinearGradient colors={['#F6F9F5','#BBD2C5']} style={{flex:1,alignItems:'center',justifyContent:'space-around'}}> */}

                           <LinearGradient colors={[colors.softWhite,colors.softWhite]}  style = {{flex:1,justifyContent:'space-between'}}>
 
                           <View style = {{flex:1,margin:5}}>
                            <View style = {{justifyContent:'space-between',flexDirection:'row',marginBottom:3}}>
                              <Thumbnail square source={{uri:getProcessedLink(image1Uri)}} />
                            <View style = {{flex:1,justifyContent:'center'}}>    
                                     <Text style = {{fontSize:16,color:'gray'}}>  {commonName}  </Text>
                                     <Text style = {{fontSize:12,color:'gray'}}>  {speciesName}  </Text>
                            </View>

                               <View>
                                     
                                

                                   <View style = {{flex:1,flexDirection:'row',marginTop:3,alignItems:'center',justifyContent:'center'}}> 
                                      
                                        {this.renderTransactionThumbnail(transactionType)}   
                                      
                                      <TouchableOpacity style = {{backgroundColor:'#F3F3F3',
                                        shadowOffset : {width : 0 , height : 2},
                                        shadowOpacity : 0.1,
                                        shadowRadius : 2,
                                        elevation:1,
                                        marginLeft:5
                                      }}>

                                           <Icon active style = {{marginBottom:5,marginTop:5,marginRight:10,marginLeft:10}}name="ios-create" />
                                      </TouchableOpacity>


                                     <TouchableOpacity style = {{backgroundColor:'#D32323',
                                        shadowOffset : {width : 0 , height : 2},
                                        shadowOpacity : 0.1,
                                        shadowRadius : 2,
                                        elevation:1,
                                         marginLeft:5
                                      }}>

                                           <Icon active style = {{marginBottom:5,marginTop:5,marginRight:10,marginLeft:10,color:'white'}} name="ios-trash" />
                                      </TouchableOpacity>


                                      
                            </View>
                                </View>
                        
                            </View>
                            
                       <View  style = {{borderBottomWidth:1,borderColor:'gray'}}/> 
                       <View style = {styles.CardFooterOutline}>

                        <View style = {{flexDirection : 'row',justifyContent:'space-between'}}>
                           <View style = {{flexDirection:'row',alignItems: 'center',justifyContent:'center',marginLeft:5}} >
                              <Icon active name="ios-thumbs-up-outline" style ={{color:'#0C6656',fontSize:24}} /> 
                              <Text style = {{marginLeft:5,color:'gray',fontSize:12}}>{likes +' Likes'}</Text>          
                           </View>
                         
                           <View  style = {{flexDirection:'row',alignItems: 'center'}} >
                             <Icon active name="ios-eye-outline" style ={{color:'#0C6656',fontSize:24}}/>
                             <Text style = {{marginLeft:5,color:'gray',fontSize:12}}>{views + ' Views'}</Text>
                           </View>

                        <View  style = {{flexDirection:'row',alignItems: 'center',marginRight:5}} >
                            <Icon active name="md-time" style ={{color:'#0C6656',fontSize:18}}/>  
                            <Text style = {{fontSize:12,marginLeft:5,color:'gray'}}>{'11h ago'}</Text>
                          </View>
                        </View>
                        </View>
                        </View>
                        </LinearGradient> 
         
                    
                        
                      </PCard>
            );
    }
};
  

const styles = StyleSheet.create({
     BodyImage : {
      flex:1,
      width:undefined, 
       alignItems: 'flex-end'   
    },
    CardFooter : { 
        width:Dimensions.get('window').width-20, 
        marginTop:5,
        backgroundColor : '#EFF5EC',
        borderWidth: 1,
        borderColor : 'gray',
        justifyContent:'space-around' 
        // shadowColor : '#000',
        // shadowOffset : {width : 0 , height : 2},
        // shadowOpacity : 0.1,
        // shadowRadius : 2,
        // elevation : 1,
    
    }, CardFooterOutline : { 
        width:Dimensions.get('window').width-20, 
        marginTop:5,
        // backgroundColor : '#EFF5EC',
        // borderWidth: 1,
        borderColor : 'gray',
        justifyContent:'space-around' 
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
        
});

 const sizeBadgeStyle = {
        backgroundColor: '#EDAF3C', 
        width: Dimensions.get('window').width*1/6, 
        height: Dimensions.get('window').height*1/20,
        alignItems:'center',
        justifyContent:'center'}
        
export default PMiniPlantCard;