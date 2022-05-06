import { StyleSheet } from "react-native"

export const globalStyle = StyleSheet.create({

    //CONNEXION
    input: {
      margin: 12,
      borderWidth: 1,
      padding: 25,
      borderRadius:5,

    },

    buttonConnexion: {
      backgroundColor:'white',
      padding:15,
      marginHorizontal:55,
      borderRadius:5,
      alignItems:'center',
      marginBottom: 10,
    },

    textConnexion: {
      fontSize:20,
      color:'black',
    },
    
    contentConnexion: {
      justifyContent:'center',
      flex:1,
      marginBottom:30,
    },
    // CONNEXION

    //ACCUEIL
    homeStyle: {
      flex:1,
      justifyContent:'center',
    },
    
    backgroundHome:{
      backgroundColor:'#0070FF',
      flex:1,
      justifyContent:'center',
    },
    
    textHome: {
      fontSize:25,
      textAlign:'center',
      marginBottom:20,
      color:'white',
      fontWeight: 'bold',
    },
    //ACCUEIL

  });

