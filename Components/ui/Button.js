import { Pressable, View, Text, StyleSheet } from "react-native"
import { Colors } from "../../constants/styles"



export default function Button ({children, onPress}){
 return  (

    <Pressable style={({pressed})=>[styles.button, pressed && styles.pressed]} onPress={onPress}> 
     

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
      borderRadius: 6,
      paddingVertical: 6,
      paddingHorizontal: 12,
      backgroundColor: Colors.primary500,
      elevation: 2,
      shadowColor: 'black',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },
    pressed: {
      opacity: 0.7,
    },
    buttonText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold'
    },
  });