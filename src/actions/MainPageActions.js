import {CHANGE_MODAL_VISIBILITY,
        CHANGE_DRAWER_VISIBILITY,
        PLANTS_FETCH_SUCCESS,
        PLANTS_FETCH_FAILURE,
        FETCH_PLANTS} from './types';
import {timeoutFilter} from '../APIs/Filters';
import API from '../APIs';

export const changeModalVisiblity =  (visible) => {
    return {
             type : CHANGE_MODAL_VISIBILITY,
             payload: visible 
           };
} ;

export const changeDrawerVisiblity =  (visible) => {
    return {
             type : CHANGE_DRAWER_VISIBILITY,
             payload: visible 
           };
} ;

export const fetchPlants = ()=>{
      
  return (dispatch)=>{
    dispatch({type: FETCH_PLANTS});    
          API.get('/plants/getplants')
                .then(function (plants) {
                  dispatch({type: PLANTS_FETCH_SUCCESS,payload:plants.data});
                  })
               .catch(function (error) {
                 console.log(error);
                 dispatch({type: PLANTS_FETCH_FAILURE});
                });
        }
}
