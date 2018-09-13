// import React, {Component} from 'react';
// import {Text,TouchableWithoutFeedback,View,LayoutAnimation} from 'react-native'; 
// import {connect} from 'react-redux';
// import CardSection from './CardSection';
// import * as actions from '../actions';


// class ListItem extends Component{
 
//     componentWillUpdate(){
//        // console.log('we are here');
//         LayoutAnimation.spring();
//     }

//     renderDiscription (){
//         // console.log(this.props.library.id);
//         // console.log (this.props.selectedLibraryId);
//         if (this.props.expanded) 
//             return (
//                 <CardSection>
//                  <Text style = {{flex:1}}>
//                     {this.props.library.description}
//                   </Text>
//                 </CardSection>
//             );
//     }
//     render(){

//         const {id,title } = this.props.library;

//        // console.log(this.props);
//         return (
//             <TouchableWithoutFeedback onPress = {()=> {
                
//                 this.props.selectLibrary(id)
//                // console.log(this.props.selectedLibraryId);
//                 }}>
//                 <View> 
//                      <CardSection >
//                          <Text style = {styles.titleStyle}>{this.props.library.title}</Text>
//                       </CardSection >
//                       {this.renderDiscription()}
//               </View>
//             </TouchableWithoutFeedback>
//             )
//     }
// }


// const styles = {
//     titleStyle :{
//         fontSize: 18,
//         paddingLeft:15
//     }

// };

// const mapStateToProps = (state,ownProps) =>{
//     const expanded = state.default.selectedLibraryId === ownProps.library.id ;
//       return {expanded};
// };

// export default connect (mapStateToProps,actions) (ListItem);