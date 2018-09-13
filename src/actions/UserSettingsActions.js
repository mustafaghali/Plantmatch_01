import {USER_PROFILE_INFO_UPDATE,
    SUBMIT_USER_INFO_UPDATE} from './types';
import {Actions} from 'react-native-router-flux';

export const UserInfoUpdate = ({prop, value}) => {
   return (
      {
          type : USER_PROFILE_INFO_UPDATE,
          payload : {prop, value}
      }
   );
}

export const SubmitUserInfoUpdate = (currentUser,userInfoForm) => {
        

    return (dispatch) => {
        // start implementing the user update
        dispatch ({type : SUBMIT_USER_INFO_UPDATE} );

        // check if the profile data has been changed or not 
        if (    userInfoForm.username != currentUser.username ||
                userInfoForm.phone != currentUser.phone ||
                userInfoForm.bio != currentUser.bio ||
                userInfoForm.latitude != currentUser.latitude ||
                userInfoForm.longitude != currentUser.longitude ||
                userInfoForm.facebook_page != currentUser.facebook_page ||
                userInfoForm.instagram_page != currentUser.instagram_page ||
                userInfoForm.twitter_page != currentUser.twitter_page ||
                userInfoForm.website_link != currentUser.website_link ||
                userInfoForm.photo_url != currentUser.photo_url 
            )
            
            {
             console.log('something did changed');     
        }
    }

}
