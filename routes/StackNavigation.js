import { createStackNavigator } from 'react-navigation-stack';
import LoginCompany from '../screens/LoginCompany';
import LoginStudent from '../screens/LoginStudent';
import Home from '../screens/Home';

const screens = {

    Home : 
    {
    screen : Home,
        navigationOptions : {
            title: 'Accueil',
        }
    },

    LoginCompany :
    {
    screen : LoginCompany,
        navigationOptions : {
            title: 'Connexion Entreprise',
        }
    },

    LoginStudent :
    {
    screen : LoginStudent,
        navigationOptions : {
            title: 'Connexion Etudiant',
        }
    },

}

const Stack = createStackNavigator(screens);
export default Stack;

/**
 * Ordre de la navigation de haut en bas dans l'ordre de la pile
 * App.js
 * Drawer
 * TabNav
 * StackNav
*/