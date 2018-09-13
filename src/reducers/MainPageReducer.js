import  {CHANGE_MODAL_VISIBILITY,
        CHANGE_DRAWER_VISIBILITY,
        PLANTS_FETCH_SUCCESS,
        PLANTS_FETCH_FAILURE,
        FETCH_PLANTS,
        MAIN_PAGE_UPDATE} from '../actions/types';

const INITIAL_STATE = { 
        visible : false,
        drawerVisbility : false,
        loadingPlants: false,
        plants : []
   };


export default (state = INITIAL_STATE  ,action) => {
   switch(action.type){
   case FETCH_PLANTS : 
        return {...state,loadingPlants:true}
   case PLANTS_FETCH_SUCCESS:
        return {...state,loadingPlants:false,plants:action.payload}
   case PLANTS_FETCH_FAILURE:
        return {...state,loadingPlants:false}
   case MAIN_PAGE_UPDATE:
        return {...state,[action.payload.prop] : action.payload.value};
   case CHANGE_MODAL_VISIBILITY:
        return {...state, visible: action.payload}; 
   case CHANGE_DRAWER_VISIBILITY:
        return {...state, drawerVisbility: action.payload}; 
   default: 
           return state;

   }

};