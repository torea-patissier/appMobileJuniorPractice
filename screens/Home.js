import { StyleSheet, Text, View, Button, Pressable, TextInput, TouchableOpacity } from 'react-native';
import { globalStyle } from '../styles/AppStyles';

// import React, {useEffect} from 'react';


export default function Home({ navigation }) {
  
    return (
    <View
    style={globalStyle.backgroundHome}
    >
      <Text
      style={ globalStyle.textHome }
      >Bienvenue sur Junior !
      </Text>

      <TouchableOpacity
      onPress = {() => navigation.navigate('LoginStudent')}
      >
        <View
        style={globalStyle.buttonConnexion}
        >
        <Text 
        style={globalStyle.textConnexion}>
          Je suis un étudiant</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
      onPress = {() => navigation.navigate('LoginCompany')}
      >
        <View
        style={globalStyle.buttonConnexion}
        >
        <Text 
        style={globalStyle.textConnexion}>
          Je suis une entreprise</Text>
        </View>
      </TouchableOpacity>
    </View>
    );
}

Home.navigationOptions = ({navigation}) => {
  // console.log(navigation);
  const axios = require('axios');

//   axios.get('https://api.torea-patissier.students-laplateforme.io/api/cities').then(resp => {

//     console.log(resp.data.id);
// });

  axios.get('https://api.torea-patissier.students-laplateforme.io/api/cities')
    .then(rep => {
      // en cas de réussite de la requête
      console.log(rep.data);
    })

}