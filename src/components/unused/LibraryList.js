// import React,{Component} from 'react'; 
// import {connect} from 'react-redux';
// import {ListView} from 'react-native';
// import ListItem from './ListItem';


// class LibraryList extends Component {

//     componentWillMount(){
//         const ds = new ListView.DataSource({
//          rowHasChanged : (r1,r2) => r1 !== r2
//         });
//       //console.log(this.props.libraries);

//         this.dataSource = ds.cloneWithRows (this.props.libraries);
//     }

//     renderRow(library){
//          return <ListItem  library = {library}  />
//     }

//     render(){
//         return (
//             <ListView 
//             dataSource = {this.dataSource}
//             renderRow = {this.renderRow}
//             /> 
//         );
//     }
// }

// const mapStateToProps = state => {
//       return {libraries :state.default.libraries}; 
//       //console.log(state.default.libraries);
// };


// export default connect(mapStateToProps) (LibraryList) ;