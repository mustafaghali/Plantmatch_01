import  {PLANT_ADD_FORM_UPDATE,
      PLANT_ADD_FORM_RESET,
      ADD_NEW_PLANT} from '../actions/types';
import {plantAddForm} from '../data/DataModels';

const INITIAL_STATE = JSON.parse(JSON.stringify(plantAddForm)); 


export default  (state = INITIAL_STATE,action)=> {

    switch(action.type)
    {
        case PLANT_ADD_FORM_UPDATE:
              return {...state,[action.payload.prop] : action.payload.value};
        case PLANT_ADD_FORM_RESET: 
              return INITIAL_STATE;
        default:
             return state;
    }

};