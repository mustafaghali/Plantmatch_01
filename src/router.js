import React from 'react';
import {Scene, Router,Stack,Actions} from 'react-native-router-flux';
//import {PMain,PUserSettings,PAbout,PPlantDetails} from './components';
import PLogin from './components/PLogin';
import PSignUp from './components/PSignUp';
import PMain from './components/PMain';
import PUserSettings from './components/PUserSettings';
import PAbout from './components/PAbout';
import PPlantDetails from './components/PPlantDetails';
import PFullScreenSwiper from './components/PFullScreenSwiper';
import PMyPlants from './components/PMyPlants';
import PAddNewPlantForm from './components/PAddNewPlantForm';
import PSendNotes from './components/PSendNotes';
import PTermsAndConditions from './components/PTermsAndConditions';

const RouterComponent = () => {

    return (
      <Router style = {{marginTop : 20}}>

         <Stack key = 'root' hideNavBar = {true}
          >

              <Scene 
              key  = 'PLogin'
              component = {PLogin}
              renderBackButton={()=>{}}
              title = 'Please Login'
              titleStyle = {{alignSelf : 'center' }}
             // type={ActionConst.RESET}
              initial
              />  

              
              <Scene 
              key  = 'PSignUp'
              component = {PSignUp}
              title = 'Please Login'
              onBack={()=>{console.log('hhhhhhhhhhhe')}}

              titleStyle = {{alignSelf : 'center' }}
              /> 

              <Scene 
               key  = 'PAbout2'
               component = {PAbout}
              /> 

              <Scene 
               key  = 'PTermsAndConditions2'
               component = {PTermsAndConditions}
              /> 

            < Stack  key = 'Main' hideNavBar = {true} 
            >
            <Scene 
              key  = 'PMain'
               hideNavBar = {true}
              component = {PMain}
              title = 'Plant Match'
              titleStyle = {{alignSelf : 'center',fontFamily :'Roboto', color:'#339933' }}
              /> 
             
             <Scene 
               direction='leftToRight' 
               key  = 'PFullScreenSwiper'
               component = {PFullScreenSwiper}
              /> 

              <Stack key = 'details' hideNavBar = {true} >
                 <Scene  
                  key  = 'PPlantDetails'
                  component = {PPlantDetails}
                  initial
                  />

                
              </Stack>

              <Stack key = 'PMyPlants' hideNavBar = {true} >
               <Scene 
                 key  = 'PMyPlants'
                 component = {PMyPlants}
                 initial
                /> 

                <Scene 
                 key  = 'PAddNewPlantForm'
                 component = {PAddNewPlantForm}
                /> 
                
              </Stack>

              <Scene 
               key  = 'PUserSettings'
               component = {PUserSettings}
              /> 

             <Stack key = 'PAbout' hideNavBar = {true} >
              <Scene 
               key  = 'PAbout'
               component = {PAbout}
              /> 
              <Scene 
               key  = 'PTermsAndConditions'
               component = {PTermsAndConditions}
              /> 
             </Stack>

              <Scene 
               key  = 'PSendNotes'
               component = {PSendNotes}
              /> 
      
              



            </ Stack>


            




            {/* <Stack key = 'main'>
               <Scene 
                 onRight = {()=> Actions.employeeCreate()}
                 rightTitle = 'Add'
                key  = 'employeeList'
                component = {EmployeeList}
                titleStyle = {{alignSelf : 'center' }}
                title = 'Employees'
                initial
              />

               <Scene 
                key  = 'employeeCreate'
                component = {EmployeeCreate}
                titleStyle = {{alignSelf : 'center' }}
                title = 'Create employee'
              />
             </Stack> */}
       
          </Stack>
          </Router>

    );
};


export default RouterComponent;