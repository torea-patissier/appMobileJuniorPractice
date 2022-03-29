import { Text, View, Button, TextInput } from 'react-native';
import { globalStyle } from '../styles/AppStyles';
import ButtonConnexion  from '../components/ButtonConnexion';


export default function LoginStudent ({navigation}) {

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
        title='Je suis une entreprise'
        onPress={()=>navigation.navigate('LoginCompany')}
        />
      </View>
    );
    
}

