// import _ from 'lodash';
// import React , {Component} from 'react';
// import {ListView} from 'react-native';
// import {connect } from 'react-redux';
// import {employeesFetch} from '../actions'; 
// import ListItem from './ListItem1';

// class EmployeeList extends Component {
// componentWillMount(){
//     this.props.employeesFetch();
//      this.createDateSource(this.props);
// };

// componentWillReceiveProps (nextProps){
      
//      this.createDateSource(nextProps);

// };

// createDateSource({employees}){
//       const ds = new ListView.DataSource({
//         rowHasChanged : (r1,r2) => r1 !== r2
//     });

//     this.dataSource = ds.cloneWithRows (employees);
// };

// renderRow(employee){
//     return <ListItem employee = {employee} />;
// }

//     render(){
//         console.log(this.props.employees);
//         return(
//                <ListView 
//                  enableEmptySections
//                  dataSource = {this.dataSource}
//                  renderRow = {this.renderRow}
               
//                />
//         );
//     }
// }

// const mapStateToProps = state => {
//         const employees = _.map(state.default.employees,(val,uid) => {
//         return {...val,uid};
//      });
     
//      return { employees:employees};

// };


// export default connect(mapStateToProps,{employeesFetch})(EmployeeList);