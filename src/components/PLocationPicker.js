import React, { Component } from 'react';
import { Text, 
  View, 
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  Dimensions,
  StatusBar
 } from 'react-native';
import MapView from 'react-native-maps';
import Modal from "react-native-modal";
import Geocoder from 'react-native-geocoding';

export default class PLocationPicker extends Component {
    state = {
    MarkermapRegion: { 
      latitude: 37.78825, 
      longitude: -122.4324, 
      latitudeDelta: 0.0922, 
      longitudeDelta: 0.0421 },
      rawLocation :[]
  };




   locationChanged = (location) => {
    region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.05,
    },
    this.setState({CurrentLocation:location, CurrentmapRegion:region})
  }



  componentDidMount() {
    Geocoder.init('AIzaSyAXm723cmDs7hOc1t0G0PCCKYpu2Xi6TwI'); 
    
    // this.watchId = navigator.geolocation.watchPosition(
    //   (position) => {
    //     this.setState({MarkermapRegion:{ latitude: position.coords.latitude,longitude: position.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 } });   
    //   },
    //   (error) => console.log(error),
    //   { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    // );

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({MarkermapRegion:{ latitude: position.coords.latitude,longitude: position.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 } });   
      },
      (error) => console.log(error),  
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  _handleMapRegionChange = MarkermapRegion => {

    this.setState({ MarkermapRegion });
    Geocoder.from(this.state.MarkermapRegion.latitude,this.state.MarkermapRegion.longitude).then(json => {
                                  var formattedAddress = json.results[0].formatted_address;
	                              	this.setState({formatted_address:formattedAddress,rawLocation:json.results[0].address_components});
	                              	}) 
		                              .catch(error => console.warn(error));     
  };

  render() {
    return (
           <Modal
               animationIn = 'slideInUp'
               onBackButtonPress = {this.props.toggle}
               onBackdropPress = {this.props.toggle}
               isVisible = {this.props.isVisible}
           >
      <View style = {{flex:1}}>
        <MapView.Animated
          style={{flex:1,
         
          
        }} 
            showsUserLocation={true}
             showsMyLocationButton={true}
            showsMyLocationButton = {true}
            region={this.state.MarkermapRegion}
            onRegionChangeComplete={this._handleMapRegionChange}    
            scrollEnabled={Platform.OS === 'android' ? true : false}     
            
        />
        <View pointerEvents="none" style={{ top: 0, left: 0, right: 0, bottom: 0, height:Dimensions.get('window').height*0.1 ,position: 'absolute',alignItems:'center',justifyContent:'center',backgroundColor:'rgba(144,189,133,0.2)'}}>    
         <Text style = {{fontSize:20,color:'gray',alignSelf:'center',textAlign:'center'}}>{this.state.formatted_address}</Text> 
        </View>

        <View pointerEvents="none" style={{ top: 0, left: 0, right: 0, bottom: 0,position: 'absolute',alignItems:'center',justifyContent:'center'}}>       
          <Image style={styles.marker} source={require('../../Images/marker.png')} />    
        </View>

       <TouchableOpacity  style = {styles.ApplyButton}
                                onPress={()=>{
                                   var x,country=null,state=null,city=null,postalCode=null ;
                                  for (x of this.state.rawLocation)
                                  {
                                    if (x.types[0] == "country")
                                     country =  x.short_name;
                                    if (x.types[0] == "administrative_area_level_1")
                                     state =  x.short_name;
                                    if (x.types[0] =="locality")
                                     city = x.long_name;
                                    if (x.types[0] =="administrative_area_level_2" && city == null )
                                      city = x.long_name;
                                    if (x.types[0] =="postal_code")
                                      postalCode = x.long_name; 
                                  };
                                  
                                  //console.log(country,state,city,postalCode);
                                  this.props.setAddress(this.state.MarkermapRegion.latitude,
                                                        this.state.MarkermapRegion.longitude,
                                                        this.state.formatted_address,
                                                        country,
                                                        state,
                                                        city,
                                                        postalCode);
                                  this.props.toggle()}}  >
                                    <Text style = {styles.ApplyButtonText}> {'Confirm Plant Location'} </Text>    
                          </TouchableOpacity>

        </View>
    </Modal>
    );
  }
}


// 0 - street_number
// 1 - "route"
// 2 - "neighborhood"
// 3 - "locality"
// 4 - "administrative_area_level_2"
// 5 - "administrative_area_level_1"
// 6 - "country",
// 7 - "postal_code"
// 8 - "postal_code_suffix"
// 9 -  "formatted_address"
// 10 - "geometry"
// 11 -  "location": {"lat":"lng":}
// 12 - "location_type"
// 13 - "viewport"
// 14 - "place_id"
// 15 -  "types"
      
  
// {
//     position: {lat, lng},
//     formattedAddress: String, // the full address
//     feature: String | null, // ex Yosemite Park, Eiffel Tower
//     streetNumber: String | null,
//     streetName: String | null,
//     postalCode: String | null,
//     locality: String | null, // city name
//     country: String,
//     countryCode: String
//     adminArea: String | null
//     subAdminArea: String | null,
//     subLocality: String | null
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,  
    backgroundColor: '#ecf0f1',
  },
   marker: {
    height: 48,
    width: 48
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },  ApplyButton : {
      
       backgroundColor : 'white',
       width : undefined,
       height : 50,
       alignItems : 'center',
       justifyContent : 'center',
       borderColor : '#257D6E',
       borderWidth: 4,
      //  shadowColor : '#000',
      //    shadowOffset : {width : 0 , height : 2},
      //    shadowOpacity : 0.1,
      //    shadowRadius : 2,
         elevation : 1,
    },ApplyButtonText :{
       fontSize : 20,
        color:'#257D6E',
        alignSelf: 'center'
    }
});

