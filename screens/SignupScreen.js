import AuthContent from '../Components/Auth/AuthContent';
import { createUser } from '../util/auth';
import { useState, useContext } from 'react';
import LoadingOverlay from '../Components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

export default function SignupScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const authCtx = useContext(AuthContext);

    async function signupHandler({ email, password }) {
        console.log('🎯 signupHandler called with:', email, password);
        setIsAuthenticating(true);
        try{
            console.log('⏳ Calling createUser...');
            const token = await createUser(email, password);
            console.log('✅ Signup success, token:', token);
            authCtx.authenticate(token);
            Alert.alert('Success!', 'Account created successfully!');
        }catch(error){
            console.log('❌ Signup failed:', error.message);
            Alert.alert('Authentication Failed', 'Could not create user, please try again later');
        } finally {
            setIsAuthenticating(false);
        }
    }

    if (isAuthenticating) {
        return <LoadingOverlay message="Creating user..." />;
    }

    return (
        <AuthContent onAuthenticate={signupHandler} />
    )
}