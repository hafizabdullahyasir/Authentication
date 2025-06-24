import { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import FlatButton from '../ui/FlatButton'
import AuthForm from './AuthForm'
import { Colors } from '../../constants/styles'
import { useNavigation } from '@react-navigation/native'

export default function AuthContent({isLogin, onAuthenticate}) {
    const navigation = useNavigation();
    const [credentials, setCredentials] = useState({
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
    })

    const [credentialsAreValid, setCredentialsAreValid] = useState({
        email: true,
        confirmEmail: true,
        password: true,
        confirmPassword: true,
    })

    function switchAuthModeHandler() {
        if( isLogin){
           navigation.replace('Signup');
        }else{
            navigation.replace('Login');
        }               
    }

    function submitHandler(credentials) {
        let { email, confirmEmail, password, confirmPassword } = credentials;

        email = email.trim();
        password = password.trim();

        const emailIsValid = email.includes('@');
        const passwordIsValid = password.length > 6;
        const emailsAreEqual = email === confirmEmail;
        const passwordsAreEqual = password === confirmPassword;

        if (!emailIsValid || !passwordIsValid || (!isLogin && !emailsAreEqual) || (!isLogin && !passwordsAreEqual)) {
            Alert.alert('Invalid input', 'Please check your entered credentials.');
            setCredentialsAreValid({
                email: emailIsValid,
                confirmEmail: emailsAreEqual,
                password: passwordIsValid,
                confirmPassword: passwordsAreEqual,
            })
            return;
        }
        if (onAuthenticate) {
            onAuthenticate({ email, password });
        }
    }



    return (
        <View style={styles.authContent}>
            <AuthForm
                isLogin={isLogin}
                onSubmit={submitHandler}
                credentialsAreValid={credentialsAreValid}
            />
            <View style={styles.buttons}>
                <FlatButton
                    onPress={switchAuthModeHandler}
                    style={styles.flatButton}
                >
                    {isLogin ? 'Create a new account' : 'Log in instead'}
                </FlatButton>

            </View>



        </View>

    )
}
const styles = StyleSheet.create({
    authContent: {
        marginTop: 64,
        marginHorizontal: 32,
        padding: 16,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.35,
        shadowRadius: 4,
    },
    buttons: {
        marginTop: 8,
    },
});