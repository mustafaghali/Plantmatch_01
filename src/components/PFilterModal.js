import React, { Component } from 'react';
import {View,
        StyleSheet,
        TouchableOpacity,
        Dimensions,
        CheckBox,
        ScrollView } from 'react-native';
import {changeModalVisiblity} from '../actions';
import Modal from "react-native-modal";
import {connect} from 'react-redux';
import {Card,
        CardItem,
        Button,
        Text,
        List,
        ListItem} from 'native-base';
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import { SegmentedControls } from 'react-native-radio-buttons';
import PSlider from './PPriceSlider';



class PFilterModal extends Component {


   constructor() {
         super();
         this.state = {
         isReady: false,
         selectedSortBy : 'Date'

         };
   }


   SortOptions = [ 'Date','Popularity','Distance']

   setSelectedOption(selectedOption){
    this.setState({
      selectedOption
    });
  }
 

  render (){


     return (

               <Modal
               animationIn = 'slideInUp'
               isVisible = {this.props.visible}
               onBackButtonPress ={() => {
                     this.props.changeModalVisiblity(!this.props.visible);
                  }}
                onBackdropPress ={() => {
                     this.props.changeModalVisiblity(!this.props.visible);
                  }}
                  	 >
                 <ScrollView style={{marginTop: '15%',marginBottom:"15%"}}>
                   <View style={{flex: 1,backgroundColor:'#F1F5F3'}}>
                     <List>
                      <ListItem>
                        <Text style = {{fontSize : 24, color : 'green'}}>{"Filter Search Results"}</Text>
                      </ListItem>

                      <ListItem >
                        <View style = {{flex:1,flexDirection:'row'}}>
                       <Text style = {{fontSize : 16, color : 'black',alignSelf:'flex-start'}}>{"Sort By"}</Text>
                       </View>
                      </ListItem>
                       <ListItem>
                         <View style = {{flex:1,height:'20%',alignItems:'center'}}>
                         <SegmentedControls
                           tint={'#257D6E'}
                           selectedTint= {'white'}
                           backTint= {'#ede8e1'}
                           options={ this.SortOptions }
                           onSelection={ this.setSelectedOption.bind(this) }
                           selectedOption={ this.state.selectedOption }
 
                           optionContainerStyle={{flex: 1}}

                        />
                        </View>
                        </ListItem>
                         
                        <ListItem >
                          <View style = {{flex:1,flexDirection:'row'}}>
                            <Text style = {{fontSize : 16, color : 'black',alignSelf:'flex-start'}}>{"Price"}</Text>
                          </View>
                       </ListItem>

                         <ListItem>
                           <View style = {{ flex:1,alignItems : 'center',marginLeft:10}}>
                          <PSlider />
                          </View>
                        </ListItem>
                       

                   
                       <ListItem >
                        <View style = {{flex:1,flexDirection:'row',alignItems:'center'}}>
                         <Text style = {{fontSize : 16, color : 'black',alignSelf:'flex-start'}}>{"Transaction type "}</Text>
                        <View style={{ flex:1,flexDirection: 'row',justifyContent:'space-between',marginLeft:10}}>
                               <View style={styles.CheckBoxContainer}>
                                <CheckBox
                               //   value={this.state.checked}
                                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                                 />
                                <Text > {'Swap'}</Text>
                              </View>
                               <View style={styles.CheckBoxContainer}>
                                <CheckBox
                                 // value={this.state.checked}
                                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                                 />
                                <Text > {'Adopt'}</Text>
                              </View>
                            </View>  
                       </View>
                      </ListItem>

                        

                         {/* <ListItem >
                            <View style = {{flex:1,flexDirection:'row'}}>
                                <Text style = {{fontSize : 16, color : 'black',alignSelf:'flex-start'}}>{"Size"}</Text>
                             </View>
                          </ListItem>  */}




                        {/* <ListItem style = {{flexDirection:'column'}}>
                           <View style={{ flex:1,flexDirection: 'row',justifyContent:'space-between'}}>
                              <View style={styles.CheckBoxContainer}>
                                <CheckBox
                                  //value={this.state.checked}
                                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                                 />
                                <Text > {'1 pint'}</Text>
                              </View>
                               <View  style={styles.CheckBoxContainer}>
                                <CheckBox
                                  //value={this.state.checked}
                                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                                 />
                                <Text > {'1 quart'}</Text>
                              </View>
                               <View  style={styles.CheckBoxContainer}> 
                                <CheckBox
                                 // value={this.state.checked}
                                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                                 />
                                <Text > {'2 quarts'}</Text>
                              </View>
                              <View  style={styles.CheckBoxContainer}>
                                <CheckBox
                                 // value={this.state.checked}
                                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                                 />
                                <Text > {'3 quarts'}</Text>
                              </View>
                            </View>

                             <View style={{ flex:1,flexDirection: 'row',justifyContent:'space-between'}}>
                              <View  style={styles.CheckBoxContainer}>
                                <CheckBox
                                 // value={this.state.checked}
                                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                                 />
                                <Text > {'1 gallon'}</Text>
                              </View>
                               <View  style={styles.CheckBoxContainer}>
                                <CheckBox
                                //  value={this.state.checked}
                                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                                 />
                                <Text > {'1.5 gallons'}</Text>
                              </View>
                               <View  style={styles.CheckBoxContainer}>
                                <CheckBox
                                //  value={this.state.checked}
                                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                                 />
                                <Text > {'2 gallons'}</Text>
                              </View>
                              
                            </View>

                            <View style={{ flex:1,flexDirection: 'row',justifyContent:'space-between'}}>
                              <View style={styles.CheckBoxContainer}>
                                <CheckBox
                                 // value={this.state.checked}
                                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                                 />
                                <Text > {'3 gallons'}</Text>
                              </View>
                              <View  style={styles.CheckBoxContainer}>
                                <CheckBox
                                 // value={this.state.checked}
                                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                                 />
                                <Text > {'4 gallons'}</Text>
                              </View>
                               <View  style={styles.CheckBoxContainer}>
                                <CheckBox
                                 // value={this.state.checked}  
                                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                                 />
                                <Text > {'5 gallons'}</Text>
                              </View>
                            </View>
                          
                        </ListItem> */}

                       <ListItem>
                         <View style = {{flex:1}}>
                          <TouchableOpacity  style = {styles.ApplyButton}
                                onPress={()=>{this.props.changeModalVisiblity(!this.props.visible) }}  >
                                    <Text style = {styles.ApplyButtonText}> {'Apply'} </Text>
                          </TouchableOpacity>
                          </View>
                       </ListItem>
                       </List>
                   </View>
                   </ScrollView>
               </Modal>
     )

 }
}


const mapStateToProps = state => {
       return  {visible : state.default.MainPageState.visible
    };
};


const styles = StyleSheet.create({
  CheckBoxContainer:{ flexDirection: 'row',
  alignItems:'center',
  justifyContent:'center' 
},
    ApplyButton : {
       flex: 1,
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

export default connect (mapStateToProps,
    {changeModalVisiblity}
)(PFilterModal);