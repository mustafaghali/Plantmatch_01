// import React from 'react';
// import {Text,View,Image,Linking} from 'react-native';
// import Card from './Card';
// import CardSection from './CardSection';
// import Button from './Button'


// const AlbumDetails = ({Album}) => {

//     return (

//     <Card>
//         <CardSection>
//         <View style = {styles.ImageContainerStyle}>
//          <Image  style  = {styles.ImageStyle}  source = {{uri : 'https://tlgo.files.wordpress.com/2014/09/10387872_1393925204161462_991538798_a.jpg'}}/>
//         </View>
//         <View style = { styles.HeaderContentStyle}>
//           <Text style = {styles.HeaderFontStyle}>  {Album.name} </Text>
//           <Text>  {Album.company.catchPhrase}</Text>
//          </View>
//       </CardSection>
      
//       <CardSection> 
//           <Image 
//           source = {{uri : 'https://static.stereogum.com/uploads/2013/09/Coldplay-608x450.jpg'}} 
//           style = {styles.CentralImageStyle} />
//       </CardSection>


//       <CardSection>
//           <Button onPress = {() => Linking.openURL('https://jsonplaceholder.typicode.com/users')} >
//               Buy Now
//           </Button>
//       </CardSection>
//     </Card>
//         );
// };

// const styles = {
//     HeaderContentStyle : {
//         flexDirection : "column",
//         justifyContent : "space-around"
//     },
//     HeaderFontStyle : {
//         fontSize : 18
//     },
//     ImageStyle : {
//         height : 50, 
//         width : 50 
//     },
//     ImageContainerStyle : {
//         justifyContent : 'center',
//         alignItems : 'center'

//     },
//     CentralImageStyle : {
//         height  : 300,
//         flex: 1,
//         width : null
//     },
//     CentralImageContainerStyle : {
//         justifyContent : 'center',
//         alignItems : 'center'

//     }
// };

// export default AlbumDetails;