import { StyleSheet, Text, View, Button, Pressable, TextInput } from 'react-native';
import { globalStyle } from '../styles/AppStyles';

// import React, {useEffect} from 'react';


export default function Home({ navigation }) {
  
    return (
    <View
    style={globalStyle.homeStyle}
    >
      <Text
      style={ globalStyle.textHome }
      >Bienvenue sur Junior !
      </Text>
      <Button
      title="Se connecter en tant qu'étudiant"
      // onPress={navigation.navigate('LoginStudent')}
      onPress = {() => navigation.navigate('LoginStudent')}
      />

      <Button
      title="Se connecter en tant qu'entreprise"
      // onPress={navigation.navigate('LoginStudent')}
      onPress = {() => navigation.navigate('LoginCompany')}
      />

    </View>
    );
}

Home.navigationOptions = ({navigation}) => {
  console.log(navigation);

  return{
    
  }

}