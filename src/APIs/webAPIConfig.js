
export const ProvidersSecerts = {
    google:{
    appId: '302440561108-7b68mif7jagj1d6omvb37qu5lcrhc3nr.apps.googleusercontent.com',
    callback: 'com.plantmatch:/oauth2redirect'
  },
  facebook:{
    appId: '1750986901633690',
    callback: 'fb1750986901633690://authorize',
    // scope: 'user_friends', // you can override the default scope here
    // fields: ['email', 'first_name', 'last_name'], // you can override the default fields here
  }
}


export const apiConfigs = {
  serverIP : 'http://13.68.142.136',
  apiUrl : 'http://13.68.142.136/plantmatchapi/api/',
  defaultTimout:10000
}
 