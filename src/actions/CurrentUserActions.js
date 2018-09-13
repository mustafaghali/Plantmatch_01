import {UPDATE_CURRENT_USER_INFO,RESET_CURRENT_USER_INFO} from './types';

export const UpdateCurrentUserInfo = ({prop, value}) => {  
    //console.log('bababababa')   
    return (
      {
          type : UPDATE_CURRENT_USER_INFO,
          payload : {prop, value}
      }
   );
}

export const UpdateCurrentUserInfoAsyn = (dispatch,{prop, value}) => {  
    //console.log('bababababa')   
   dispatch(
      {
          type : UPDATE_CURRENT_USER_INFO,
          payload : {prop, value}
      });
}

export const ResetCurrentUserInfo = () =>{
    return (
     {
         type : RESET_CURRENT_USER_INFO
     }
    );
} 


