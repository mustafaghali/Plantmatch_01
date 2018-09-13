import {LOGIN_USER,LOGIN_PAGE_UPDATE,LOGIN_PAGE_RESET} from './types';
import {Actions} from 'react-native-router-flux';
import {UpdateCurrentUserInfoAsyn} from './CurrentUserActions';
import _ from 'lodash';
import {UserA as User}  from '../sampleData';
import { google, facebook, twitter, tumblr } from 'react-native-simple-auth';
import {ProvidersSecerts} from '../APIs/webAPIConfig';
import {timeoutFilter} from '../APIs/Filters';
import API from '../APIs';
import {signUpUserAsy} from './SignUpActions';
import {getPictureLink} from '../helpers';

export const getLoginUserInfo = (dispatch,user,token) => {
    _.each(user,(value,prop) => {
        UpdateCurrentUserInfoAsyn(dispatch,{prop,value})         
    });
    UpdateCurrentUserInfoAsyn(dispatch,{prop:'access_token',value:token})  
}



export const loginUser = (email,password) => {
     return (dispatch)=>{

        dispatch ({type : LOGIN_USER} );

        API.post('users/Login', {
            email: email,
            password: password
        })
        .then(function (response) {
            console.log(response);
           if(response.data.message=='done')
              {
                  //Authentication success
                  //console.log(response.data.user.id);
                 getLoginUserInfo(dispatch,response.data.user,response.data.token);
                 // Reset Login Page 
                 //Actions.pop();
                 Actions.Main();
                 ResetLoginPageAsy(dispatch);

              }
            else if(response.data.messageCode=='100')
            {
                // user has already linked his facebook account
                UpdateLoginPageAsy(dispatch,{prop:'errorMessage',value:'this email already has been linked with facebook account\n please login using facebook account!'})
            }
            else if(response.data.messageCode=='101')
            {
                // user has already linked his google account
                UpdateLoginPageAsy(dispatch,{prop:'errorMessage',value:'this email already has been linked with google account\n please login using google account!'})
            }
            else if(response.data.messageCode=='102')
            {
                // wrong password
                UpdateLoginPageAsy(dispatch,{prop:'errorMessage',value:'wrong password !'})
            }
          //  else if (response.headers.cone)
            else 
            {
                UpdateLoginPageAsy(dispatch,{prop:'errorMessage',value:'authentication error please check your connection or try again later'})

            }
              UpdateLoginPageAsy(dispatch,{prop:'loading',value:false})
          })
          .catch(function (error) {
            console.log(error.response);
            if (error.response) {
               if(error.response.status=='404')
               UpdateLoginPageAsy(dispatch,{prop:'errorMessage',value:'the email or password you entered is incorrect!'})
              }
            else 
            {
                UpdateLoginPageAsy(dispatch,{prop:'errorMessage',value:'authentication error please check your connection or try again later !'})
            }
            UpdateLoginPageAsy(dispatch,{prop:'loading',value:false})
          });
      
     };
};

export const loginUserWithFacebook = () => {
    return (dispatch)=>{
       facebook(ProvidersSecerts.facebook)
       .then((info) => {
           if(info.user.email != null)
           { 
            dispatch ({type : LOGIN_USER} ); // starts the spinner loading ...

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
                  }
                  else if (response.data.message=='done')
                  {
                      //Authenticated successuflly
                     getLoginUserInfo(dispatch,response.data.user,response.data.token);
                     Actions.Main();
                     ResetLoginPageAsy(dispatch);
                  }
                  UpdateLoginPageAsy(dispatch,{prop:'loading',value:false})
              })
              .catch(function (error) {
                console.log(error.response);
                UpdateLoginPageAsy(dispatch,{prop:'errorMessage',value:'authentication error please check your connection or try again later !'})
                UpdateLoginPageAsy(dispatch,{prop:'loading',value:false})
              })
              //UpdateLoginPageAsy(dispatch,{prop:'loading',value:false}) // stop spinner loading
            }
            else
            {
              UpdateLoginPageAsy(dispatch,{prop:'errorMessage',value:'authentication error please check your connection or try again later !!'})
              UpdateLoginPageAsy(dispatch,{prop:'loading',value:false})
            }
        })
        .catch((error) => {
         console.log(error.description);
          UpdateLoginPageAsy(dispatch,{prop:'errorMessage',value:'authentication error please check your connection or try again later !!'})
          UpdateLoginPageAsy(dispatch,{prop:'loading',value:false})
       });
    };
};


export const loginUserWithGoogle = () => {
    return (dispatch)=>{
       dispatch ({type : LOGIN_USER} ); // starts the spinner loading ...

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
                  }
                  else if (response.data.message=='done')
                  {
                      //Authenticated successuflly
                     getLoginUserInfo(dispatch,response.data.user,response.data.token);
                     Actions.Main();
                     ResetLoginPageAsy(dispatch);
                  }
                  UpdateLoginPageAsy(dispatch,{prop:'loading',value:false})
              })
              .catch(function (error) {
                console.log(error.response);
                UpdateLoginPageAsy(dispatch,{prop:'errorMessage',value:'authentication error please check your connection or try again later !'})
                UpdateLoginPageAsy(dispatch,{prop:'loading',value:false})
              })
            }
            else
            {
              UpdateLoginPageAsy(dispatch,{prop:'errorMessage',value:'authentication error please check your connection or try again later !!'})
              UpdateLoginPageAsy(dispatch,{prop:'loading',value:false})
            }
        })
        .catch((error) => {
         console.log(error.description);
          UpdateLoginPageAsy(dispatch,{prop:'errorMessage',value:'authentication error please check your connection or try again later !!'})
         UpdateLoginPageAsy(dispatch,{prop:'loading',value:false})
       });
    };
};


export const UpdateLoginPage = ({prop, value}) => {  
    return (
      {
          type : LOGIN_PAGE_UPDATE,
          payload : {prop, value}
      }
   );
}

export const UpdateLoginPageAsy = (dispatch,{prop, value}) => {  
    dispatch(
        {
            type : LOGIN_PAGE_UPDATE,
            payload : {prop, value}
        });
}


export const ResetLoginPageAsy = (dispatch) => {  
    dispatch(
        {
            type : LOGIN_PAGE_RESET,
        });
}

