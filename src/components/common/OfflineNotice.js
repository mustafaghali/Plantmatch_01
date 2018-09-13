
import React, { PureComponent } from 'react';
import { View, Text, NetInfo, Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');
import  {UpdateAppState} from '../../actions'; 
import {connect} from 'react-redux';


function MiniOfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection !</Text>
    </View>
  );
}


class OfflineNotice extends PureComponent {
  render() {
      if (!this.props.isConnectedToInternet)
      return <MiniOfflineSign />;
      else 
      return null;
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: 'rgb(181,36,36)',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    //top: 30
  },
  offlineText: { 
    color: '#fff'
  }
});



const mapStateToProps = (state)=>{
    const {isConnectedToInternet} = state.default.AppState ;
 
    return {isConnectedToInternet};
 }
 export default connect (mapStateToProps,{UpdateAppState})(OfflineNotice);
