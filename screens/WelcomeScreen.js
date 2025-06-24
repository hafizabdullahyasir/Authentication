import { View, Text, StyleSheet } from "react-native";


export default function WelcomeScreen() {


    return(
      <View>
     <Text>
        Wellcome
     </Text>
     <Text>
        You Authenticated successfully
     </Text>
      </View>


    )

}

const styles = StyleSheet.create({
 rootContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,



 },
title:{
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 8,


},





})