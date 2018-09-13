// import React,{Component} from 'React';
// import {Text} from 'react-native';
// import Input from './Input';
// import Card from './Card';
// import CardSection from './CardSection';
// import Button from './Button';
// //import firebase from 'firebase';
// import Spinner from './Spinner';

// class LoginForm extends Component {

//     state = {email : '', password: '',error:'',loading:false};

//     renderButton (){
//         if (this.state.loading )
//             return  <Spinner size = 'small' />
            
//         return  ( <Button onPress = {this.onButtonPress.bind(this)}>
//                         log in
//                   </Button>
//                 );
//     }

//     onLoginSuccess (){
//           this.setState({
//               email:'',
//               password: '',
//               loading:false,
//               error:''
//             });

//     }

//     onLoginFail (){
//          this.setState({
//               loading:false,
//               error:'Authentication failed'
//             });
//     }


//     onButtonPress (){
//         const {email, password } = this.state;

//         this.setState({error: '',loading: true});

//        firebase.auth().signInWithEmailAndPassword(email, password)
//        .then(this.onLoginSuccess.bind(this))
//        .catch(()=>{
//            firebase.auth().createUserWithEmailAndPassword(email,password)
//            .then(this.onLoginSuccess.bind(this))
//            .catch(this.onLoginFail.bind(this));
//        });
//     }

//     render(){
//         return(
//             <Card>
//                 <CardSection>
                   
//                     <Input 
//                     label = 'Email'
//                     placeholder = 'alghali@plantmatch.com'
//                      value = {this.state.email }
//                      onChangeText = {email => this.setState({email})}
//                      />
//                 </CardSection>

//                 <CardSection>
//                      <Input 
//                           label = 'Password'
//                           placeholder = 'password'
//                           isPassword = {true}
//                           value = {this.state.password }
//                            onChangeText = {password => this.setState({password})}
//                      />
//                 </CardSection>

//                 <Text style = {styles.errorTextStyle}>
//                     {this.state.error}
//                 </Text>
//                 <CardSection>
//                   {this.renderButton ()}
//                 </CardSection>
                
//             </Card>
//         );
//     }
// }


// const styles = {
//     errorTextStyle: {
//         fontSize:20,
//         color: 'red',
//         alignSelf: 'center'
//     }
// }
// export default LoginForm;