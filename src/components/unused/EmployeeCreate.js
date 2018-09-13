// import React,{Component} from 'react';
// import Card from './Card';
// import CardSection from './CardSection';
// import Input from './Input';
// import Button from './Button';
// import {connect} from 'react-redux';
// import {employeeUpdate,employeeCreate} from '../actions';
// import {Picker,Text} from 'react-native';





// class EmployeeCreate extends Component {
//     onButtonPress(){
//        const {name,phone,shift} = this.props;
//        this.props.employeeCreate({name,phone,shift: shift || 'Monday'});

//     }


//     render (){
//         return (
//             <Card>
//                 <CardSection>
//                    <Input
//                     label = "Name"
//                     placeholder = "Mustafa"
//                     value = {this.props.name}
//                     onChangeText = {text => this.props.employeeUpdate({prop : 'name' , value : text}) }
//                    />
//                 </CardSection>

//                  <CardSection>
//                  <Input
//                     label = "phone"
//                     placeholder = "091245678"
//                     value = {this.props.phone}
//                     onChangeText = {text => this.props.employeeUpdate({prop : 'phone' , value : text}) }

//                    />
//                 </CardSection>

//                  <CardSection style = {{flexDirection:'column'}}>
//                      <Text style = {styles.pickerTextStyle}>
//                          Shift
//                          </Text>
//                 <Picker 
//                   style = {{flex:1}}
//                   selectedValue = {this.props.shift}
//                   onValueChange = {value => this.props.employeeUpdate({prop : 'shift' , value}) }
//                 >
//                     <Picker.Item label = "Monday" value = "Monday"/>
//                     <Picker.Item label = "Sunday" value = "Sunday"/>
//                     <Picker.Item label = "Tuesday" value = "Tuesday"/>
//                     <Picker.Item label = "Wedensday" value = "Wedensday"/>
//                     <Picker.Item label = "Thursday" value = "Thursday"/>
//                     <Picker.Item label = "Friday" value = "Friday"/>
//                     <Picker.Item label = "Saturday" value = "Saturday"/>
//                     </Picker>
//                 </CardSection>

//                  <CardSection>
//                   <Button
//                   onPress = {this.onButtonPress.bind(this)}>
//                       create
//                       </Button>
//                 </CardSection>
//              </Card>
//         );
//     };
// }


// const styles = {
//     pickerTextStyle : {
//         fontSize : 18,
//         paddingLeft : 20
//     }
// }

// const mapStateToProps = (state)=>{
//    const {name,phone,shift} = state.default.employeeForm ;
//    return {name,phone,shift};
// }

// export default connect (mapStateToProps,{employeeUpdate,employeeCreate})(EmployeeCreate);