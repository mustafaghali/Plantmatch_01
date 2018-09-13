// import React,{Component} from 'React';
// import Card from './Card';
// import {emailChanged,passwordChanged,loginUser} from '../actions';
// import {connect} from 'react-redux';

// import {Text} from 'react-native';
// import Input from './Input';

// import CardSection from './CardSection';
// import Button from './Button';
// //import firebase from 'firebase';
// import Spinner from './Spinner';

// class LoginForm extends Component {

//     // state = {email : '', password: '',error:'',loading:false};

//     renderButton (){
//         if (this.props.loading )
//             return  <Spinner size = 'large' />
            
//         return  (  <Button
//                    onPress = {this.onButtonPress.bind(this)}
//                    >
//                        Login
//                    </Button>
//                 );
//     }

//     onEmailChange(text){
//          this.props.emailChanged(text);
//     }
     
//     onPasswordChange (password){
//          this.props.passwordChanged(password);

//     }


//     onButtonPress(){
//        const {email, password} = this.props;
//        this.props.loginUser(email,password);

//     }
    


//     render(){
//         return(
//             <Card>
//                  <CardSection>
//                      <Input 
//                      label = 'email'
//                      placeholder = 'mustafa@must.com'
//                      onChangeText = {this.onEmailChange.bind(this)}
//                      value = {this.props.email}
//                      />
//                   </CardSection>


//                   <CardSection>
//                      <Input 
//                        isPassword
//                        label = 'password'
//                         placeholder = 'password'
//                         onChangeText = {this.onPasswordChange.bind(this)}
//                          value = {this.props.password}

//                      />
//                   </CardSection>
//                     <Text style={styles.errorTextStyle}>
//                        {this.props.error}
//                     </Text>

//                   <CardSection>
//                       {this.renderButton()}
//                   </CardSection>
            
                
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

// const mapStateToProps = state => {
//        return  {email : state.default.auth.email
//                ,password : state.default.auth.password
//                ,error : state.default.auth.error
//                ,loading : state.default.auth.loading
//     };
// };


// export default connect (mapStateToProps,
//     {emailChanged,passwordChanged,loginUser}
// )(LoginForm);  