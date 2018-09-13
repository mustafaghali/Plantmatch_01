import React, { Component } from 'react'
import Search from 'react-native-search-box';
import {Header,
  Container,
  Title,
  Button,
  Icon,
  Left,
  Right, 
  Body,
  DeckSwiper} from 'native-base';
import {Slider,
  Modal,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ListView,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
ImageBackground,
BackHandler} from 'react-native';
import PFilterModal from './PFilterModal';
import PlantCard from './PlantCard';
import {changeModalVisiblity,
        changeDrawerVisiblity,
        fetchPlants} from '../actions';
import {connect} from 'react-redux';
import SwipeCards from 'react-native-swipe-cards';
import PDrawer from './PDrawer';
import {plants} from '../sampleData';
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import PlantMatchHeader from './PlantMatchHeader';
import {colors} from '../themes/style1';
import Spinner from './common/Spinner';
import {screen} from '../AppConfigs'; 
import LinearGradient from 'react-native-linear-gradient';




class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>{'No more plants'}</Text>
      </View>
    )
  }
}


class PMain extends Component {


       constructor() {
         super();
         this.state = {
           sample: plants,
           expanded: false,
           ready : false,
           backgroundOption :1,
           backgroundGradient :colors.mainGradient
         };
   }

  
   componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid()) // Listen for the hardware back button on Android to be pressed
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid()) // Remove listener
  }

  backAndroid () {
   // console.log('abeeeeeeeeeeeet'); // Return to previous screen
    return true // Needed so BackHandler knows that you are overriding the default action and that it should not close the app
  }
  


 componentWillMount(){
   const   Gradinets =  [
    ['#c21500' , '#ffc500'],
    ['#13547a' , '#80d0c7'],
    ['#c21500' , '#ffc500'],
    ['#1D976C','#93F9B9'],
    ['#1D2B64','#F8CDDA'],
    ['#003973','#E5E5BE'],
    ['#77A1D3','#79CBCA','#E684AE'],
    ['#cc2b5e','#753a88'],
    ['#BBD2C5','#536976'],
  ]

     this.setState({backgroundOption:Math.floor((Math.random() * 2) + 1)});
    // this.setState({backgroundGradient:Gradinets[Math.floor((Math.random() * 8) + 0)]})
       this.props.fetchPlants();
    this.setState({ isReady: true });
};

// componentWillReceiveProps (nextProps){
      
//     //  this.createDateSource( ["1","2"]);
//     //  [{name: 1},{name : 2},{name : 3}]
//     //[{"first":{name: 1}},{"second" : {name : 2}},{"third" : {name : 3}}]

// };


//  createDateSource({Plants}){
//       const ds = new ListView.DataSource({
//         rowHasChanged : (r1,r2) => r1 !== r2
//     });
//     this.dataSource = ds.cloneWithRows (this.state.sample);     
// };

// renderRow(Plant){
//    return <PlantCard Plant = {Plant}/>;
// }

  handleYup (Plant) { 
    Actions.details({Plant});
  }
  handleNope (Plant) {
  //  console.log(`Nope for ${Plant.name}`)    
  }
  handleMaybe (Plant) {
    console.log(`Maybe for ${Plant.name}`)
  }

  renderCardsContainer (){
    option = this.state.backgroundOption;
    console.log('option == '+option)
    if (option==1)
     return <ImageBackground   
                          resizeMode='stretch'
                          source={require('../../Images/gradient1.jpg')}        
                          style={{flex:1,width:undefined}}
                       >
                {this.renderCardsorDetailedCard()}     
                </ImageBackground>
     else return 
     <ImageBackground
                          resizeMode='stretch'
                          source={require('../../Images/gradient1.jpg')}         
                          style={{flex:1,width:undefined,justifyContent:'flex-end'}}
                       >
                {this.renderCardsorDetailedCard()}     
                </ImageBackground>
  }






               //  handleNope={this.handleNope} 

    render (){
        if (!this.state.isReady) {  
           return <View />;
      }
          
     return (
         <View style = {{flex:1,
         backgroundColor:colors.white 
         }}>
       
          <PlantMatchHeader /> 

           <Search
            placeholder = "search plants" 
            backgroundColor = '#90BD85'
            placeholderColor = '#339933' 
          />

          <TouchableOpacity style = { styles.FilterResults } onPress={()=>this.props.changeModalVisiblity(!this.props.visible)}>
                        <Icon name="md-options" style={{color: '#90BD85'}}/>
                        <Text style = {{color: '#465343',paddingLeft : 25, fontSize:16}}>{"Filter Results"}</Text>
          </TouchableOpacity>
         
         
            <PFilterModal/> 
           <PDrawer/>
            <View style = {{flex:1}}> 
            <LinearGradient 
            colors={ this.state.backgroundGradient } style={{flex:1,alignItems:'center',justifyContent:'space-around'}}>
          
               {/* <ImageBackground   '#13547a' , '#80d0c7'
                          resizeMode='stretch'
                          source={require('../../Images/gradient1.jpg')}        
                          style={{flex:1,width:undefined,justifyContent:'flex-end'}}
              > */}
                      {this.props.loadingPlants?<Spinner/>:
                        <SwipeCards  
                           cards={this.props.plants}
                         
                           renderCard={(item) => 
                             <View  style = {{width:screen.width, height:screen.height,justifyContent:'center',alignItems:'center'}} 
                                 //onPress = {()=>{ Actions.details({Plant:item});}} 
                                 >   
                                   <PlantCard   Plant = {item} containerWidth = {screen.width} containerHeight = {screen.height}/>
                                   </View>
                           } 
                           loop={true}
                           renderNoMoreCards={() => <NoMoreCards />}
                           yupText ={'interested! '}
                           handleYup={this.handleYup}
                           handleNope={this.handleNope}  
                           handleMaybe={this.handleMaybe}
                           hasMaybeAction = {false}
                          />  } 
                {/* </ImageBackground> */}
                </LinearGradient>
           </View>

           </View>


);

    }
}



const styles = StyleSheet.create({
     FilterImage : {
      flex:1,
      height: undefined,
       width: undefined
    }
   ,FilterButton : {
       alignSelf : 'center',
       width : 20,
       height : 20
    },
      FilterResults : {
       alignSelf : 'center',
      
       justifyContent: 'center',
       alignItems : 'center',
       flexDirection : 'row',
       borderColor : '#90BD85',
       backgroundColor:'white',
       borderWidth: 4,
       width :Dimensions.get('window').width ,
       height : Dimensions.get('window').height * 1/15
    }
});
 
const mapStateToProps = state => {
  const {visible,drawerVisbility,loadingPlants,plants} = state.default.MainPageState
       return  {visible,drawerVisbility,loadingPlants,plants};
};


export default connect (mapStateToProps,
    {changeModalVisiblity,
      changeDrawerVisiblity,
      fetchPlants})(PMain);  