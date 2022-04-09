import { createBottomTabNavigator } from 'react-navigation-tabs';
import Stack from './StackNavigation';
import Selected from '../screens/Selected';
import LoginCompany from '../screens/LoginCompany';
import LoginStudent from '../screens/LoginStudent';
const RouteConfigs = {
    Home : 
    {
        screen : Stack,
    },
    Selected : 
    {
        screen : Selected,
    },
    Entreprise:
    {
        screen : LoginCompany,
    },
    Etudiant:
    {
        screen : LoginStudent
    }
}

const BottomTabNav = createBottomTabNavigator(RouteConfigs);
export default BottomTabNav;