import {PLANT_ADD_FORM_UPDATE,
        PLANT_ADD_FORM_RESET,
        ADD_NEW_PLANT} from './types';
import {Actions} from 'react-native-router-flux';
import {timeoutFilter} from '../APIs/Filters';
import API from '../APIs';
import {
    ToastAndroid
   } from 'react-native';

const constructPlantPost = (plant,timestamp) =>
{
   
    return {
  
         common_name: plant.commonName,
         latin_name: plant.latinName,
         species_name: plant.speciesName,
         image1: (plant.image1Uri==null)?null:'1.'+plant.userId+'.'+timestamp+'.'+(plant.image1Type).substring(plant.image1Type.lastIndexOf("/")+1),
         image2:(plant.image2Uri==null)?null:'2.'+plant.userId+'.'+timestamp+'.'+(plant.image2Type).substring(plant.image2Type.lastIndexOf("/")+1),
         image3:(plant.image3Uri==null)?null:'3.'+plant.userId+'.'+timestamp+'.'+(plant.image3Type).substring(plant.image3Type.lastIndexOf("/")+1),
         image4 :(plant.image4Uri==null)?null:'4.'+plant.userId+'.'+timestamp+'.'+(plant.image4Type).substring(plant.image4Type.lastIndexOf("/")+1),
         same_user_location :(plant.same_user_location?1:0), 
         country:plant.country,
         city:plant.city,
         state : plant.state,
         latitude :plant.latitude,
         longitude :plant.longitude,
         postal_code :plant.postalCode,
         full_address :plant.formattedAddress,
         price : plant.price,
         transaction_type :plant.transactionType,
         age:plant.age,
         size : plant.size,
         quantity : plant.quantity,
         posted_by : plant.userId,
         discription :plant.description, 
         created :plant.created,
         modified:plant.modified 
    }

}

export const PlantAddFormUpdate = ({prop, value}) => {
   return (
      {
          type : PLANT_ADD_FORM_UPDATE,
          payload : {prop, value}
      }
   );
}


export const PlantAddFormUpdateAsy = (dispatch,{prop, value}) => {  
    dispatch(
        {
            type : PLANT_ADD_FORM_UPDATE,
            payload : {prop, value}
        });
}




export const AddNewPlant = (plant) =>{
    // console.log('add new plant clicked');
    return (dispatch)=>{
        dispatch ({type : ADD_NEW_PLANT} ); // starts the spinner loading ...
        PlantAddFormUpdateAsy(dispatch,{prop:'uploadingPhotos',value:true});
        timestamp = + new Date();
        Plant = constructPlantPost(plant,timestamp)
        
        
        API.post('plants/Postplant',Plant)
          .then(function (response) {
              if(response.status=201)
              {
                  //successufly added the plant 
                  // then upload the photos
                  var formData = new FormData();
                  images = [
                      {uri:plant.image1Uri,type:plant.image1Type},
                      {uri:plant.image2Uri,type:plant.image2Type},
                      {uri:plant.image3Uri,type:plant.image3Type},
                      {uri:plant.image4Uri,type:plant.image4Type}
                    ];
                  plantId = response.data.id;
                  for (i=0;i<images.length;i++)
                  {
                      if (images[i].uri != null)
                      {
                            formData.append(
                         // console.log(  
                             'image'+[i], {
                            uri: images[i].uri, // your file path string
                            name: (i+1)+'.'+plant.userId+'.'+timestamp+'.'+(images[i].type).substring(images[i].type.lastIndexOf("/")+1),
                            type: images[i].type
                            }
                        )
                      }

                  }
                    
                  //console.log('uploading files');

                  let config = {
                    onUploadProgress: progressEvent => {
                      let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
                      // do whatever you like with the percentage complete
                       PlantAddFormUpdateAsy(dispatch,{prop:'uploadPercent',value:percentCompleted});
                      // maybe dispatch an action that will update a progress bar or something
                    }
                  }

                  PlantAddFormUpdateAsy(dispatch,{prop:'uploadPercent',value:0});

                  API.post('/Images/UploadPlantImages',formData,config)
                 .then(function (response) {
                    if(response.status=201)
                    {
                            PlantAddFormUpdateAsy(dispatch,{prop:'uploadingPhotos',value:false});
                            ToastAndroid.show('Plant has been added succeffuly',
                             ToastAndroid.SHORT,
                             ToastAndroid.CENTER);
                             Actions.pop();
                             PlantAddformResetAsyn(dispatch);
                    }
                       })
                     .catch(function (error) {
                         console.log(error);
                          ToastAndroid.show('couldn\'t add the plant please check your connection or try again later!',
                          ToastAndroid.SHORT,
                          ToastAndroid.CENTER);
                         PlantAddFormUpdateAsy(dispatch,{prop:'uploadingPhotos',value:false});

                     })
              }
            
          })
          .catch(function (error) {
            console.log(error);
            PlantAddFormUpdateAsy(dispatch,{prop:'uploadingPhotos',value:false});
            ToastAndroid.show('couldn\'t add the plant please check your connection or try again later',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER);
            //UpdateLoginPageAsy(dispatch,{prop:'errorMessage',value:'please check your connection or try again later !'})
           // UpdateLoginPageAsy(dispatch,{prop:'loading',value:false})
          })

      
    }
}

export const PlantAddformReset = () =>
{
   return (
      {
          type : PLANT_ADD_FORM_RESET,
      });
}

export const PlantAddformResetAsyn = (dispatch) =>
{
    dispatch(
        {
            type : PLANT_ADD_FORM_RESET,

        });
   
      
}


