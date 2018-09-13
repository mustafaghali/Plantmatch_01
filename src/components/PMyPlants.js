import React, { Component } from 'react';
import {Text,
        View,
        StatusBar,
        FlatList,
        TouchableOpacity,
        Dimensions,
        StyleSheet} from 'react-native';
import { Header, 
        Tab, 
        Tabs,
        TabHeading,
        Icon,
        Text as NText} from 'native-base';
import PlantMatchHeader from './PlantMatchHeader';
import PDrawer from './PDrawer';
import {Actions, DefaultRenderer} from 'react-native-router-flux';
// import {plants} from '../sampleData';
import PMiniPlantCard from './PMiniPlantCard';
import PCustomPageHeader from './PCustomPageHeader';
import {colors} from '../themes/style1';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';


class PMyPlants extends Component {
    constructor(){
         super();
          this.state = {
          isReady: false, 
          activeFab : false,
          plants: []
         };
    }

    componentWillMount ()
    {
        this.setState({ plants:(this.props.plants.filter(plant => plant.userId == this.props.id)).map(plant => {return {...plant,key:(plant.id).toString()}})  })
    }

    render(){
         
           
        return (
            <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
                <PCustomPageHeader header = "My Plants" />    
                <PDrawer/>

                       <Tabs initialPage={0}
                        tabBarUnderlineStyle = {{backgroundColor:'#d69113'}}
                        style = {{backgroundColor:'transparent'}}
                        >
                        
                         <Tab 
                         heading = {    
                             <TabHeading style = {{backgroundColor:colors.main,justifyContent:'center',alignItems:'center'}}>
                                 <Icon name="ios-keypad"  style = {{color:'white',fontSize:20}} />
 
                                 <Text  style = {{color:'white',fontSize:16,marginLeft:5}}>{'My Listings'+' ('+this.state.plants.length+')'}</Text>
                            </TabHeading>
                             }
                         >
                         <LinearGradient colors={colors.mainGradient}  style = {{flex:1}}>
                            <FlatList
                             style = {{height:Dimensions.get('window').height*4/5}}
                             data={this.state.plants}
                             renderItem={({item}) =>         <TouchableOpacity 
                                    onPress = {()=>{ Actions.details({Plant:item});}} 
                                   >
                                    <PMiniPlantCard Plant = {item} />
                                    </TouchableOpacity>}
                           />  
                             <TouchableOpacity  style = {styles.AddButton}
                               onPress = {()=> {Actions.PAddNewPlantForm();}}
                             >
                                <Icon style = {styles.SocialIconStyle} name='md-add'/>
                            </TouchableOpacity> 
                        </LinearGradient>
                         </Tab>
                          
                         <Tab  heading = { 
                             <TabHeading style = {{backgroundColor:colors.main,justifyContent:'center',alignItems:'center'}}>
                                 <Icon name="md-heart" style = {{color:'white',fontSize:20}} />
                                 <Text  style = {{color:'white',fontSize:16,marginLeft:5}} >{'My Wishlist'+' ('+'0'+')'}</Text>
                            </TabHeading>
                             }
                             >
                             <LinearGradient colors={colors.mainGradient}  style = {{flex:1}}>

                              </LinearGradient>

                         </Tab>

                       </Tabs>
            </View>
        );
    }
}

const styles = StyleSheet.create({
     AddButton : {
       alignSelf : 'flex-end',
       justifyContent: 'center',
       backgroundColor : colors.main,
       width : 50,
       height : 50,
       borderRadius : 25,
       marginRight:10,
       marginBottom:5,
      //  shadowColor : '#000',
      //    shadowOffset : {width : 0 , height : 2},
      //    shadowOpacity : 0.1,
      //    shadowRadius : 2,
         elevation : 1,
    },
    SocialIconStyle : {
      color:'white',
     alignSelf: 'center'
    },

}) 

const mapStateToProps = state => {
    const {plants} = state.default.MainPageState
    const CurrentUser = state.default.CurrentUserInfo

     const {id} = state.default.CurrentUserInfo
    
    
    return  {plants,id};
  };

export default connect(mapStateToProps,{})(PMyPlants); 