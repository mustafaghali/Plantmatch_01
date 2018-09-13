import {apiConfigs} from '../APIs/webAPIConfig'



export const isValidEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    return(reg.test(text) === true);
}

export const isValidUserName = (text) => {
    let reg = /^(?=[a-zA-Z0-9\s_.]{6,30}$)[A-Za-z0-9]+(?:[\s_.][A-Za-z0-9]+)*$/i;
    return(reg.test(text) === true);
}

export const isStrongPassword = (text) =>{
    var reg = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    //let reg = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})$/i
    return(reg.test(text)===true);
}


export const getPictureLink = (provider,user) => {
    switch (provider) {
      case 'google':
        return user.picture;
      case 'facebook':
        return `https://graph.facebook.com/${user.id}/picture?type=large`
      case 'twitter':
        return this.props.info.profile_image_url_https;
      case 'instagram':
        return this.props.info.data.profile_picture;
      case 'tumblr':
        return `https://api.tumblr.com/v2/blog/${this.props.info.name}.tumblr.com/avatar/96`;
      case 'linkedin':
        const profileUrl = `https://api.linkedin.com/v1/people/~:(picture-url)?oauth2_access_token=${this.props.info.token}&format=json`
        fetch(profileUrl)
          .then(response => response.json())
          .then(responseJson => {
            this.setState({ picture: responseJson.pictureUrl });
          });
        return '';
    }
  }



export const getProcessedLink = (uri,dir='plant') =>
{
  if (dir=='plant')
       {
         return (uri.startsWith('http')?uri:apiConfigs.apiUrl+'images/getPlantImage?uri='+uri); 
       }
  //else (dir=='')

  
}