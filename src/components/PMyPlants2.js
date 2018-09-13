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
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';



const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
  };




class PMyPlants extends Component {
    state = {
        isReady: false, 
        activeFab : false,
        plants: [],
        index: 0,
        routes: [
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
        ],
       };

     FirstRoute = () => <View style = {{flex:1}}>
   <FlatList
  style = {{height:Dimensions.get('window').height*4/5}}
  data={this.state.plants}
  renderItem={({item}) =>         <TouchableOpacity 
         onPress = {()=>{ Actions.details({Plant:item});}} 
        >
         <PMiniPlantCard Plant = {item} />
         </TouchableOpacity>}
/>  
<Text> papa </Text>
  <TouchableOpacity  style = {styles.AddButton}
    onPress = {()=> {Actions.PAddNewPlantForm();}}
  >
     <Icon style = {styles.SocialIconStyle} name='md-add'/>
 </TouchableOpacity> 
</View>;



 SecondRoute = () => <Text> papa ja </Text>;

    _handleIndexChange = index => this.setState({ index });
   
    _renderScene = SceneMap({
        first: this.FirstRoute,
        second: this.SecondRoute,
      });

      _renderHeader = props => <TabBar {...props} />;


      
    componentWillMount ()
    {
        this.setState({ plants:(this.props.plants.filter(plant => plant.userId == this.props.id)).map(plant => {return {...plant,key:(plant.id).toString()}})  })
    }

    data = [1,2,3]
    render(){
         
           
        return (
            <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
                <PCustomPageHeader header = "My Plants" />    
                <PDrawer/>

                           <TabViewAnimated
                                           navigationState={this.state}
                                           renderScene={this._renderScene}
                                           renderHeader={this._renderHeader}
                                           onIndexChange={this._handleIndexChange}
                                           initialLayout={initialLayout}
                            />
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