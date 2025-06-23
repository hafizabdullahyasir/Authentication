import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";





export default function FlatButton ({children, onPress}){
    return (
   <Pressable onPress={onPress} style={({pressed})=> [styles.button, pressed && styles.pressed]}> 



     <View>
  <Text style={styles.buttonText}>
    {children}
  </Text>
     </View>



   </Pressable>




    )
}

const styles = StyleSheet.create({
    button: {
      paddingVertical: 6,
      paddingHorizontal: 12,
    },
    pressed: {
      opacity: 0.7,
    },
    buttonText: {
      textAlign: 'center',
      color: Colors.primary100,
    },
  });