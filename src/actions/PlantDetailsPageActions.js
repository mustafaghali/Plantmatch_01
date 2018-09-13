import {SET_INDEX_OF_SWIPER_IMAGE} from './types';


export const setIndexOfSwiperImage =  (index) => {
    return {
             type : SET_INDEX_OF_SWIPER_IMAGE,
             payload: index 
           };
} ;
