import  {LOGIN_USER,USER_PROFILE_INFO_UPDATE,LOGIN_PAGE_UPDATE,LOGIN_PAGE_RESET} from '../actions/types';


const INITIAL_STATE = {
    email:'',
    password:'',
    errorMessage:'',
    loading:false,
    validEmail:true,
    validPassword:false,
}

export default  (state = INITIAL_STATE,action)=> {
    switch(action.type)
    {
        case LOGIN_PAGE_UPDATE:
              return {...state,[action.payload.prop] : action.payload.value};
        case LOGIN_USER:
              return {...state, loading:true, errorMessage : ''};
        case LOGIN_PAGE_RESET:
              return INITIAL_STATE;
        default:
             return state;
    }
};