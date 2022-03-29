import { StyleSheet } from "react-native"

export const globalStyle = StyleSheet.create({

    //CONNEXION
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 25,
      borderRadius:5,
    },

    buttonConnexion: {
      backgroundColor:'skyblue',
      padding:20,
      marginHorizontal:55,
      borderRadius:5,
      alignItems:'center',
    },

    textConnexion: {
      fontSize:20,
      color:'white',
    },
    
    contentConnexion: {
      justifyContent:'center',
      flex:1,
      marginBottom:70,
    },
    // CONNEXION

    //ACCUEIL
    homeStyle: {
      flex:1,
      justifyContent:'center',
    },
    
    textHome: {
      fontSize:25,
      textAlign:'center',
      marginBottom:20,
    },
    //ACCUEIL

  });

