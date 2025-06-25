import { View, Text, StyleSheet } from "react-native";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../store/auth-context';
import Button from '../Components/ui/Button';
import axios from 'axios';

export default function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    if (!token) return;

    setIsLoading(true);

    axios
      .get('https://react-native-course-c4193-default-rtdb.firebaseio.com/message.json?auth=' + token)
      .then((response) => {
        const message = response.data?.message || 'No message found';
        setFetchedMessage(message);
      })
      .catch((error) => {
        console.error('Error fetching message:', error);
        setFetchedMessage('❌ Failed to load message');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.message}>You authenticated successfully!</Text>
      <Text style={styles.message}>
        {isLoading ? 'Loading...' : fetchedMessage}
      </Text>
      <Button onPress={authCtx.logout}>Logout</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
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
  },
});
