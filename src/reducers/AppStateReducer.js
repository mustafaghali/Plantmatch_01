import  {APP_STATE_UPDATE} from '../actions/types';


const INITIAL_STATE = {
   isConnectedToInternet:false
}

export default  (state = INITIAL_STATE,action)=> {
    switch(action.type)
    {
        case APP_STATE_UPDATE:
              return {...state,[action.payload.prop] : action.payload.value};
        default:
             return state;
    }
};