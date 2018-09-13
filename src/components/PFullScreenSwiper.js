import React, { Component } from 'react';
import {Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    StatusBar} from 'react-native';  
import {Actions} from 'react-native-router-flux';
import PSwiper from './PSwiper';
import {setIndexOfSwiperImage} from '../actions';
import {Icon} from 'native-base';


class PFullScreenSwiper extends Component {

    constructor(){
         super();
    }    
     
 
   renderSwiperImages(){
      return this.props.ImagesUrls.map((url,index)=><View key = {index} style={styles.slide}> 
            <ImageBackground resizeMode='contain' style={styles.image} source= {{uri : url}} > 
             <TouchableOpacity onPress = {()=> {Actions.pop();}}>
               <View style= {{borderWidth:0,borderColor:'#d69113',width:40,height:40,alignItems:'center',justifyContent:'center'}}> 
                <Icon name = {'md-close'} style = {{fontSize:30, fontWeight: 'bold',color:'#d69113'}}/>
               </View>
            </TouchableOpacity>
            </ImageBackground>
          </View>)
   }
            
    render(){
     return (  
         <View style = {{flex:1}}>
                  <PSwiper>
                      { this.renderSwiperImages()}
                </PSwiper> 
          </View>
        );
    }     
}


const styles = StyleSheet.create({
  wrapper: {
     
  },
  SwiperWrapper : {
       marginBottom:30,
      flex:1,
    //   borderWidth : 1,
    //   borderRadius : 2,
    //   borderColor : '#ddd',
    //   shadowColor : '#000',
    //   shadowOffset : {width : 0 , height : 2},
    //   shadowOpacity : 0.1,
    //   shadowRadius : 2,
    //   elevation : 1,
  },   slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black'
  },  image: {
    width:undefined, 
    flex: 1
  }
})



export default PFullScreenSwiper;   