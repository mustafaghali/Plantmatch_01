import axios from 'axios';
import {apiConfigs} from './webAPIConfig';
import store from '../reducers/configureStore';


store.subscribe(Tokenlistener);

//configurations 

const API = axios.create()
API.defaults.baseURL = apiConfigs.apiUrl;
//API.defaults.headers.post['Content=Type'] = 'application/json';
//API.defaults.timeout = 500;

function Tokenlistener() {
    let token = store.getState().default.CurrentUserInfo.access_token;
    API.defaults.headers.common['Authorization'] = token  ;
  }
  

export  default API;
