import React, { Component } from 'react';
import {Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions} from 'react-native';
import { Icon} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {colors} from '../themes/style1';

class PCustomPageHeader extends Component {

    render(){
        
        return (
             <View style = { styles.HeaderStyle } >
                        <View style = {{flex:1, justifyContent:'flex-start'}}>    
                         <TouchableOpacity 
                          onPress = {()=> {Actions.pop();}}
                         >

                         <Icon name="md-arrow-back" style={{color: 'white' ,marginLeft : 5}}/>
                         </TouchableOpacity>

                         </View>

                        <View>
                        <Text  style = {{alignSelf: 'center',justifyContent:'center',color: 'white', fontSize: 25 }}>{this.props.header}</Text> 
                        </View>


                        <View style = {{flex:1}}>

                        </View>

          </View>
        );
    }
}


const styles = StyleSheet.create({
 HeaderStyle : {
       alignItems : 'center',
       flexDirection : 'row',
    //    borderColor : '#90BD85',
    //    borderWidth: 4,
       width :Dimensions.get('window').width ,
       height  :Dimensions.get('window').width*0.13,
       backgroundColor: colors.main
      }

});

export default PCustomPageHeader; 