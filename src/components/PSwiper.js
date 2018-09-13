import React, { Component } from 'react';
import {Text,
        View,
        StyleSheet} from 'react-native';  
import {Icon} from 'native-base';
import Swiper from 'react-native-swiper';
import {connect} from 'react-redux';
import {setIndexOfSwiperImage} from '../actions';
import {colors} from '../themes/style1';


class PSwiper extends Component {

    render(){
        
        return (
            <Swiper
                dotColor = '#0C6656'
                activeDotColor = '#d69113'
                dot = {<View style = {styles.dotStyle}/>}
                activeDot = {<View style = {styles.activeDotStyle}/>}
                autoplayTimeout = {7}
                showsButtons={true}
                autoplay = {false}
                loop
                nextButton={<Icon name = {'ios-arrow-dropright-outline'} style = {styles.buttonText}/>} 
                prevButton={<Icon  name = {'ios-arrow-dropleft-outline'} style = {styles.buttonText}/>}
                onIndexChanged = {(index) => 
                {
                    this.props.setIndexOfSwiperImage(index);
                } 
                } 
            > 
                { this.props.children}
           
            </Swiper> 
        );
    }
}

const styles = StyleSheet.create({
   dotStyle:{
       backgroundColor:'#90BD85', 
       width: 12, 
       height: 12,
       borderRadius: 6, 
       marginLeft: 5, 
       marginRight: 5, 
       marginTop: 5, 
       marginBottom: 5,
       borderWidth : 1.5,
       borderRadius : 6,
       borderColor : '#ddd',
    },
    activeDotStyle : {
        backgroundColor: colors.orange, 
       width: 12, 
       height: 12,
       borderRadius: 6, 
       marginLeft: 5, 
       marginRight: 5, 
       marginTop: 5, 
       marginBottom: 5,
       borderWidth : 1.5,
       borderRadius : 6,
        borderColor : '#ddd'
    },buttonText:{
        fontSize:50,
        color: '#d69113'
    }

})


const mapStateToProps = state => {
       return  {swiperImageIndex : state.default.PlantDetailsPage.swiperImageIndex        
    };
};


export default connect (mapStateToProps,
    {setIndexOfSwiperImage}
)(PSwiper); 