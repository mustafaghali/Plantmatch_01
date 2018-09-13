// import React,{Component} from 'react';
// import {ScrollView} from 'react-native';
// import axios from 'axios';
// import AlbumDetails from './AlbumDetails'

// // const AlbumList = () => {
// //     return (

// //         <View>
// //             <Text>Album List!!!</Text>
// //         </View>
// //     );
// // };

// class AlbumList extends Component{
  
//     state = {albums : [] };


//     componentWillMount (){
//            axios.get('https://jsonplaceholder.typicode.com/users')
//            .then(respone => this.setState({albums : respone.data}));
//     }

//       renderAlbums(){
//          // return <Text>Hey</Text>
//            return this.state.albums.map(album => 
//            <AlbumDetails key = {album.id} Album = {album} />


        
//         );
//       }


//     render(){

//        // console.log(this.state);
//          return (
//         <ScrollView>
//          {this.renderAlbums()}
//         </ScrollView>
//     ); 
//     };
// };

// export default AlbumList;