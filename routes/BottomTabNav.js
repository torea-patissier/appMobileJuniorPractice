import { createBottomTabNavigator } from 'react-navigation-tabs';
import Stack from './StackNavigation';
import Selected from '../screens/Selected';
import LoginCompany from '../screens/LoginCompany';
import LoginStudent from '../screens/LoginStudent';
import { MaterialIcons } from '@expo/vector-icons';

//Je configure mes routes pour la TabNav
const RouteConfigs = {
    Home:{
        screen : Stack,
        navigationOptions : {
            tabBarIcon: ({tintColor}) => <MaterialIcons name="home" size={24} color={tintColor}/>
            /**
             * https://icons.expo.fyi/MaterialIcons/home
             */
        }
    },
    Selected:{
        screen : Selected,
        navigationOptions : {
            tabBarIcon: ({tintColor}) => <MaterialIcons name="notifications" size={24} color={tintColor}/>
        }
    },
    Company:{
        screen : LoginCompany,
        navigationOptions : {
            tabBarIcon: ({tintColor}) => <MaterialIcons name="assignment-ind" size={24} color={tintColor}/>
        }
    },
    Student:{
        screen : LoginStudent,
        navigationOptions : {
            tabBarIcon: ({tintColor}) => <MaterialIcons name="person" size={24} color={tintColor}/>
        }
    }
}

//Je customize les routes de la TabNav
const TabNavigatorConfig = {

    tabBarOptions: {
        activeTintColor: '#0070FF',
        labelStyle: {
          fontSize: 12,
        },
    },      
}

/**
 * https://reactnavigation.org/docs/4.x/bottom-tab-navigator
 */

const BottomTabNav = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);
export default BottomTabNav;

/**
 * Ordre de la navigation de haut en bas dans l'ordre de la pile
 * App.js
 * Drawer
 * TabNav
 * StackNav
*/