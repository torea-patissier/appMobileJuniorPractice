import { createAppContainer } from 'react-navigation';
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

const Stack = createStackNavigator(screens)

export default createAppContainer(Stack)