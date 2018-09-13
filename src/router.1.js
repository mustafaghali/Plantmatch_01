import React from 'react';
import { StackNavigator } from 'react-navigation';
//import {PMain,PUserSettings,PAbout,PPlantDetails} from './components';
 import PLogin from './components/PLogin';
 import PMain from './components/PMain';
 import PUserSettings from './components/PUserSettings';
 import PAbout from './components/PAbout';
 import PPlantDetails from './components/PPlantDetails';

const Router = StackNavigator({
               PLogin: { screen: PLogin },
               PMain: { screen: PMain },
               PPlantDetails: { screen: PPlantDetails },
               PUserSettings: { screen: PUserSettings },
               PAbout: { screen: PAbout }
              },
              { 
                headerMode: 'screen',
                navigationOptions:{ 
                     header:null
                   }
              }
            );

export default Router;