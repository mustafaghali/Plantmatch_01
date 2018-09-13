import  {UPDATE_CURRENT_USER_INFO,RESET_CURRENT_USER_INFO} from '../actions/types';
import {userModel} from '../data/DataModels';

const INITIAL_STATE = JSON.parse(JSON.stringify(userModel));

export default  (state = INITIAL_STATE,action)=> {

    switch(action.type)
    {
         case UPDATE_CURRENT_USER_INFO:
         {
              return {...state,[action.payload.prop] : action.payload.value};
         }
              case RESET_CURRENT_USER_INFO :
              return INITIAL_STATE;
         default:
             return state;
    }

};