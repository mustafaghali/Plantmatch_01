import {SIGNUP_USER,
    SIGNUP_PAGE_UPDATE,
    SIGNUP_PAGE_RESET,
    SIGNUP_PAGE_RESET_VALIDATORS} from '../actions/types';


const INITIAL_STATE = {
    email:'',
    password:'',
    confirmPassword:'',
    userName:'',
    errorMessage:'',
    validEmail:true,
    validPassword:true,
    passwordsMatch:true,
    validUserName:true,
    loading:false
}

export default  (state = INITIAL_STATE,action)=> {
    switch(action.type)
    {
        case SIGNUP_PAGE_UPDATE:
              return {...state,[action.payload.prop] : action.payload.value};
        case SIGNUP_USER:
            return {...state, loading:true, errorMessage : ''};
        case SIGNUP_PAGE_RESET :
              return INITIAL_STATE;
        case SIGNUP_PAGE_RESET_VALIDATORS:
             return {...state,validEmail:true,validPassword:true,passwordsMatch:true,validUserName:true,};
        default:
             return state;
    }
};