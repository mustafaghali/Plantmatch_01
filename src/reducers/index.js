import {combineReducers} from 'redux';
import SelectionReducer from './SelectionReducer';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';
import MainPageReducer from './MainPageReducer';
import PlantDetailsPageReducer from './PlantDetailsPageReducer';
import PlantAddFormReducer from './PlantAddFormReducer';
import UserSettingsReducer from './UserSettingsReducer';
import CurrentUserReducer from './CurrentUserReducer';
import LoginFormReducer from './LoginReducer';
import SignUpReducer from './SignUpReducer';
import AppStateReducer from './AppStateReducer';


export default combineReducers (
    {
        MainPageState : MainPageReducer,
        selectedLibraryId : SelectionReducer,
        auth: AuthReducer,
        employeeForm : EmployeeFormReducer,
        employees : EmployeeReducer,
        PlantDetailsPage : PlantDetailsPageReducer,
        PlantAddFrom : PlantAddFormReducer,
        UserSettings : UserSettingsReducer,
        CurrentUserInfo : CurrentUserReducer,
        LoginForm : LoginFormReducer,
        SignUpForm: SignUpReducer,
        AppState : AppStateReducer
    }
);