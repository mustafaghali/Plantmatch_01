import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
import Slider from '@ptomasroos/react-native-multi-slider';

// class CustomMarker extends React.Component {
//   render() {
//     return (
//       <Image
//         style={styles.image}
//         source={this.props.pressed ? require('../../Images/Leaf.png') : require('../../Images/3.jpg')}
//         resizeMode='contain'
//       /> 
//     );
//   }
// }

class PSlider extends Component {

state = {
    sliderOneChanging: false,
    sliderOneValue: [5],
    multiSliderValue: [100, 300],
  };




  multiSliderValuesChange = (values) => {
    this.setState({
      multiSliderValue: values,
    });
  }
    render(){
        
        return (
           <Slider
                  values={[this.state.multiSliderValue[0], this.state.multiSliderValue[1]]}
                  sliderLength={Dimensions.get('window').width -Dimensions.get('window').width*1/5}
                  
                   onValuesChange={this.multiSliderValuesChange}
                    min={0}
                    max={500}
                    step={20}
                    allowOverlap
                    snapped
                    selectedStyle ={{backgroundColor: '#d69113'}}
                    unselectedStyle = {{backgroundColor: '#ede8e1'}}
                    trackStyle = {{ borderRadius: 7,backgroundColor: 'red', height: 3.5 }}
                    onValuesChangeStart={this.sliderOneValuesChangeStart}
                    onValuesChangeFinish={this.sliderOneValuesChangeFinish}
                    markerStyle = {{ height:15, width: 15}}

                          />
                    //         trackStyle = {{ borderRadius: 7,backgroundColor: 'red', height: 4 }}
                    // touchDimensions = {{ height: 30, width: 30, borderRadius: 15, slipDisplacement: 30 }}
                    // markerStyle = {{ height:15, width: 15, backgroundColor:'#d69113'}}
                          //   optionsArray = {['0$','50$']}
//                            onValuesChangeStart  = {()=> console.log('started moving')}
//                            onValuesChange = {()=> console.log('values are changing')}
//                            onValuesChangeFinish =  {()=> console.log('finished moving')}
//                            sliderLength = {280}
                          
//                            containerStyle = {{height:30}}
//                            trackStyle = {{ borderRadius: 7, height: 3.5 }}
                          
                           
//                            markerStyle = {{ height:30, width: 30, borderRadius: 15, backgroundColor:'#E8E8E8', borderWidth: 0.5, borderColor: 'grey'}}
//                            pressedMarkerStyle	 = {{backgroundColor:'#D3D3D3'}}
 // markerStyle = {{ height:20, width: 20, borderRadius: 10, backgroundColor:'gold', borderWidth: 0.5, borderColor: 'grey'}}

        );
    }
}



const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40
  }
});
export default PSlider; 