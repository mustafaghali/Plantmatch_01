import React, { Component } from 'react';
import {Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions} from 'react-native';
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import {changeDrawerVisiblity} from '../actions';
import { Icon} from 'native-base';
import {connect} from 'react-redux';



class PlantMatchHeader extends Component {

    render(){
        
        return (
           <View style = { styles.HeaderStyle } >
                        <View style = {{flex:1, justifyContent:'flex-start'}}>
                         <TouchableOpacity 
                          onPress = {()=> this.props.changeDrawerVisiblity(!this.props.drawerVisbility)}
                         >
                            <Icon name="menu" style={{color: 'white' ,marginLeft : 5}}/>
                         </TouchableOpacity>

                         </View>

                        <View>
                        <Text  style = {{alignSelf: 'center',justifyContent:'center',color: 'white', fontSize: 25 }}>{"Plantmatch"}</Text> 
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
       backgroundColor:'#90BD85',
    //    borderColor : '#90BD85',
    //    borderWidth: 4,
       width :Dimensions.get('window').width ,
       height : Dimensions.get('window').width*0.13,
      }

});

const mapStateToProps = state => {
       return  {
        drawerVisbility : state.default.MainPageState.drawerVisbility
    };
};


export default connect (mapStateToProps,
    {changeDrawerVisiblity}
)(PlantMatchHeader);  


