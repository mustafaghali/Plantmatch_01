import {APP_STATE_UPDATE} from './types';

export const UpdateAppState = ({prop, value}) => {  
    //console.log('bababababa')   
    return (
      {
          type : APP_STATE_UPDATE,
          payload : {prop, value}
      }
   );
}

export const UpdateAppStateAsy = (dispatch,{prop, value}) => {  
    //console.log('bababababa')   
   dispatch(
      {
          type : APP_STATE_UPDATE,
          payload : {prop, value}
      });
}


export const ResetAppState = () =>{
    return (
     {
         type : APP_STATE_UPDATE
     }
    );
} 


