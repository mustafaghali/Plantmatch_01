import  {SET_INDEX_OF_SWIPER_IMAGE} from '../actions/types';

const INITIAL_STATE = { swiperImageIndex:0};


export default (state = INITIAL_STATE  ,action) => {
   switch(action.type){
   case (SET_INDEX_OF_SWIPER_IMAGE):
   {
        return {...state, swiperImageIndex: action.payload};
   } 
   default: 
   {
              
           return state;
   }
   }

};

