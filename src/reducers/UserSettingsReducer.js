import  {USER_PROFILE_INFO_UPDATE} from '../actions/types';
import {userModel} from '../data/DataModels';

const INITIAL_STATE = JSON.parse(JSON.stringify(userModel));

export default  (state = INITIAL_STATE,action)=> {

    switch(action.type)
    {
        case USER_PROFILE_INFO_UPDATE:
              return {...state,[action.payload.prop] : action.payload.value};
        default:
             return state;
    }

};