import { View, Text, StyleSheet } from "react-native";
import { useContext } from 'react';
import { AuthContext } from '../store/auth-context';
import Button from '../Components/ui/Button';

export default function WelcomeScreen() {
    const authCtx = useContext(AuthContext);

    return(
      <View style={styles.rootContainer}>
        <Text style={styles.title}>
          Welcome!
        </Text>
        <Text style={styles.message}>
          You authenticated successfully!
        </Text>
        <Button onPress={authCtx.logout}>
          Logout
        </Button>
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
    color: 'white',
  },
  message: {
    fontSize: 16,
    marginBottom: 24,
    color: 'white',
    textAlign: 'center',
  }
})