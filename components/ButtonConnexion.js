import { TouchableOpacity,View,Text } from "react-native";
import { globalStyle } from "../styles/AppStyles";

export default function ButtonConnexion(){
    
    return(

    <TouchableOpacity>
        <View
        style={globalStyle.buttonConnexion}
        >
            <Text
            style={globalStyle.textConnexion}
            >Connexion</Text>
        </View>
    </TouchableOpacity>

    );

}