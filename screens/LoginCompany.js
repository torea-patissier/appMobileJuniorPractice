import { StyleSheet, Text, View, Button, Pressable, TextInput } from 'react-native';
import { globalStyle } from '../styles/AppStyles';
import ButtonConnexion from '../components/ButtonConnexion';
// import React, {useEffect} from 'react';


export default function LoginCompany({ navigation }) {
  
    return (
    <View
    style = {globalStyle.contentConnexion}
    >
      <TextInput
        style={globalStyle.input}
        placeholder='Entrez votre e-mail'
        />
      <TextInput
        style={globalStyle.input}
        placeholder='Entrez votre mot de passse'
      />      
      <ButtonConnexion/>
      <Button
      title='Je suis un Junior'
      onPress = {() => navigation.navigate('LoginStudent')}
      />

    </View>
    );
}
