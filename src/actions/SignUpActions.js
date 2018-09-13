import {SIGNUP_USER,
    SIGNUP_PAGE_UPDATE,
    SIGNUP_PAGE_RESET,
    SIGNUP_PAGE_RESET_VALIDATORS} from './types';
import {timeoutFilter} from '../APIs/Filters';
import API from '../APIs';
 import {getLoginUserInfo} from './LoginActions';
import {Actions} from 'react-native-router-flux';
import {UpdateCurrentUserInfoAsyn} from './CurrentUserActions';
import { google, facebook, twitter, tumblr } from 'react-native-simple-auth';
import {ProvidersSecerts} from '../APIs/webAPIConfig';
import {getPictureLink} from '../helpers';

export const signUpUser = (user) => {
    return (dispatch)=>{

        dispatch ({type : SIGNUP_USER} );


       API.post('users/signup',user)
        .then(function (response) {
           
            if(response.data.message=='done')
            {
                //Authentication success
                getLoginUserInfo(dispatch,response.data.user,response.data.token);
               SignUpPageResetAsy(dispatch);
               Actions.Main();
            }
            else if(response.data.messageCode=='106')
            { 
                // user name taken
                UpdateSignUpPageAsy(dispatch,{prop:'errorMessage',value:'This username is already taken'})
                UpdateSignUpPageAsy(dispatch,{prop :"validUserName" , value : false})

            }
            else if (response.data.messageCode=='105')
            { 
                // user with this email already exists
                UpdateSignUpPageAsy(dispatch,{prop:'errorMessage',value:'user with this email already exists'})
                UpdateSignUpPageAsy(dispatch,{prop :"validEmail" , value : false})

            }
            else if (response.data.messageCode=='101')
            { 
                // user has linked his google account
                UpdateSignUpPageAsy(dispatch,{prop:'errorMessage',value:'user with this email already exists please sign in using your google account'})
                UpdateSignUpPageAsy(dispatch,{prop :"validEmail" , value : false})

            }
             else if (response.data.messageCode=='100')
            {
                // user has linked his facebook account
                UpdateSignUpPageAsy(dispatch,{prop:'errorMessage',value:'user with this email already exists please sign in using your facebook account'})
                UpdateSignUpPageAsy(dispatch,{prop :"validEmail" , value : false})
            }
            else 
            { 
                UpdateSignUpPageAsy(dispatch,{prop:'errorMessage',value:'authentication error please check your connection or try again later'})
            }
            UpdateSignUpPageAsy(dispatch,{prop:'loading',value:false})

        })
        .catch(function (error) {
            console.log(error.response);
            UpdateSignUpPageAsy(dispatch,{prop:'errorMessage',value:'authentication error please check your connection or try again later !'})
            UpdateSignUpPageAsy(dispatch,{prop:'loading',value:false})
        })

    }
};



export const signUpUserAsy = (dispatch,user) => {

        dispatch ({type : SIGNUP_USER} );


       API.post('users/signup',user)
        .then(function (response) {
           
            if(response.data.message=='done')
            {
                //Authentication success
                getLoginUserInfo(dispatch,response.data.user,response.data.token);
               SignUpPageResetAsy(dispatch);
               Actions.Main();
            }
            else if(response.data.messageCode=='106')
            { 
                // user name taken
                UpdateSignUpPageAsy(dispatch,{prop:'errorMessage',value:'This username is already taken'})
                UpdateSignUpPageAsy(dispatch,{prop :"validUserName" , value : false})

            }
            else if (response.data.messageCode=='105')
            { 
                // user with this email already exists
                UpdateSignUpPageAsy(dispatch,{prop:'errorMessage',value:'user with this email already exists'})
                UpdateSignUpPageAsy(dispatch,{prop :"validEmail" , value : false})

            }
            else if (response.data.messageCode=='101')
            { 
                // user has linked his google account
                UpdateSignUpPageAsy(dispatch,{prop:'errorMessage',value:'user with this email already exists please sign in using your google account'})
                UpdateSignUpPageAsy(dispatch,{prop :"validEmail" , value : false})

            }
             else if (response.data.messageCode=='100')
            {
                // user has linked his facebook account
                UpdateSignUpPageAsy(dispatch,{prop:'errorMessage',value:'user with this email already exists please sign in using your facebook account'})
                UpdateSignUpPageAsy(dispatch,{prop :"validEmail" , value : false})
            }
            else 
            { 
                UpdateSignUpPageAsy(dispatch,{prop:'errorMessage',value:'authentication error please check your connection or try again later'})
            }

        })
        .catch(function (error) {
            console.log(error.response);
            UpdateSignUpPageAsy(dispatch,{prop:'errorMessage',value:'authentication error please check your connection or try again later !'})
        })
};

export const signUpUserWithFacebook = () => {
    return (dispatch)=>{
       dispatch ({type : SIGNUP_USER} ); // starts the spinner loading ...
       
       facebook(ProvidersSecerts.facebook)
       .then((info) => {
           if(info.user.email != null)
           { 
               
            timeoutFilter(API.post('users/Login', {
                email: info.user.email,
                socialLogin : 'facebook',
                socialID: info.user.id
               }))
              .then(function (response) {
               
                  if(response.data.messageCode=='103')
                  {
                      // create new account
                      signUpUserAsy(dispatch,{email:info.user.email,
                        username:info.user.name,
                        facebookID:info.user.id,
                        imageUrl:getPictureLink('facebook',info.user)})
                        UpdateSignUpPageAsy(dispatch,{prop:'loading',value:false})
                  }
                  else if (response.data.message=='done')
                  {
                      //Authenticated successuflly
                     getLoginUserInfo(dispatch,response.data.user,response.data.token);
                     Actions.Main();
                     UpdateSignUpPageAsy(dispatch,{prop:'loading',value:false})
                  }
              })
              .catch(function (error) {
                console.log(error.response);
                UpdateSignUpPageAsy(dispatch,{prop:'errorMessage',value:'authentication error please check your connection or try again later !'})
                UpdateSignUpPageAsy(dispatch,{prop:'loading',value:false})
              })
              //UpdateLoginPageAsy(dispatch,{prop:'loading',value:false}) // stop spinner loading
            }
            else
            {
                UpdateSignUpPageAsy(dispatch,{prop:'errorMessage',value:'authentication error please check your connection or try again later !!'})
                UpdateSignUpPageAsy(dispatch,{prop:'loading',value:false})
            }
        })
        .catch((error) => {
         console.log(error.description);
         UpdateSignUpPageAsy(dispatch,{prop:'errorMessage',value:'authentication error please check your connection or try again later !!'})
         UpdateSignUpPageAsy(dispatch,{prop:'loading',value:false})
       });
    };
};


export const signUpUserWithGoogle = () => {
    return (dispatch)=>{
       dispatch ({type : SIGNUP_USER} ); // starts the spinner loading ...

       google(ProvidersSecerts.google)
       .then((info) => {
           if(info.user.email != null)
           { 
            // user  confirmed
            timeoutFilter(API.post('users/Login', {
                email: info.user.email,
                socialLogin : 'google',
                socialID: info.user.id
               }))
              .then(function (response) {
                  if(response.data.messageCode=='103')
                  {
                      // create new account
                      signUpUserAsy(dispatch,{email:info.user.email,
                        username:info.user.name,
                        facebookID:info.user.id,
                        imageUrl:getPictureLink('google',info.user)})
                        UpdateSignUpPageAsy(dispatch,{prop:'loading',value:false})

                  }
                  else if (response.data.message=='done')
                  {
                      //Authenticated successuflly
                     getLoginUserInfo(dispatch,response.data.user,response.data.token);
                     Actions.Main({onBack: () => Actions.popTo('PLogin') });
                     UpdateSignUpPageAsy(dispatch,{prop:'loading',value:false})
                  }
              })
              .catch(function (error) {
                console.log(error.response);
                UpdateSignUpPageAsy(dispatch,{prop:'errorMessage',value:'authentication error please check your connection or try again later !'})
                UpdateSignUpPageAsy(dispatch,{prop:'loading',value:false})
              })
            }
            else
            {
                UpdateSignUpPageAsy(dispatch,{prop:'errorMessage',value:'authentication error please check your connection or try again later !!'})
                UpdateSignUpPageAsy(dispatch,{prop:'loading',value:false})
            }
        })
        .catch((error) => {
         console.log(error.description);
         UpdateSignUpPageAsy(dispatch,{prop:'errorMessage',value:'authentication error please check your connection or try again later !!'})
         UpdateSignUpPageAsy(dispatch,{prop:'loading',value:false})
       });
    };
};

export const UpdateSignUpPage = ({prop, value}) => {  
    return (
      {
          type : SIGNUP_PAGE_UPDATE,
          payload : {prop, value}
      }
   );
}

export const UpdateSignUpPageAsy = (dispatch,{prop, value}) => {  
    dispatch(
        {
            type : SIGNUP_PAGE_UPDATE,
            payload : {prop, value}
        });
}


export const SignUpPageReset = () =>{  
    return ({type : SIGNUP_PAGE_RESET}
   );
}

export const SignUpPageResetAsy = (dispatch) =>{  
    dispatch ({type : SIGNUP_PAGE_RESET}
   );
}

export const SignUpPageResetValidators = () =>{  
    return ({type : SIGNUP_PAGE_RESET_VALIDATORS}
   );
}

export const SignUpPageResetValidatorsAsy = (dispatch) =>{  
    dispatch(
        {type : SIGNUP_PAGE_RESET_VALIDATORS}
   );
}




